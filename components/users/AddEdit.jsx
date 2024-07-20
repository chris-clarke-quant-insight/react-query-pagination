import { useRouter } from 'next/router';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

import { Link } from '../Link';
import { userService, alertService } from '../../services';
import { useState } from 'react';

export { AddEdit };

function AddEdit(props) {
    const user = props?.user;
    const isAddMode = !user;
    const router = useRouter();
    
    // form validation rules 
    // const validationSchema = Yup.object().shape({
    //     firstName: Yup.string()
    //         .required('First Name is required'),
    //     lastName: Yup.string()
    //         .required('Last Name is required'),
    //     username: Yup.string()
    //         .required('Username is required'),
    //     password: Yup.string()
    //         .transform(x => x === '' ? undefined : x)
    //         .concat(isAddMode ? Yup.string().required('Password is required') : null)
    //         .min(6, 'Password must be at least 6 characters')
    // });
    // const formOptions = { resolver: yupResolver(validationSchema) };
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeFirstName(ev) {
        setFirstName(ev.target.value)
    };
    function handleChangeLastName(ev) {
        setLastName(ev.target.value)
    };
    function handleChangeUsername(ev) {
        setUsername(ev.target.value)
    };
    function handleChangePassword(ev) {
        setPassword(ev.target.value)
    };
    function reset(values) {
        setFirstName(values.firstName);
        setLastName(values.lastName);
        setUsername(values.username);
        setPassword(values.password);
    };
    const formOptions = {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    };

    // set default form values if in edit mode
    if (!isAddMode) {
        formOptions.defaultValues = props.user;
    }

    // get functions to build form with useForm() hook
    // const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const [isSubmitting, setSubmitting] = useState(false);
    const errors = { firstName: false, lastName: false, username: false, password: false };
    function handleSubmit(ev){
        setSubmitting(!isSubmitting);
        console.log(ev);

        onSubmit({ firstName, lastName, username, password });
    }

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(user.id, data);
    }

    function createUser(data) {
        return userService.register(data)
            .then(() => {
                alertService.success('User added', { keepAfterRouteChange: true });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return userService.update(id, data)
            .then(() => {
                alertService.success('User updated', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col">
                    <label>First Name</label>
                    <input onChange={handleChangeFirstName} name="firstName" type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.firstName?.message}</div>
                </div>
                <div className="form-group col">
                    <label>Last Name</label>
                    <input onChange={handleChangeLastName} name="lastName" type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.lastName?.message}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label>Username</label>
                    <input onChange={handleChangeUsername} name="username" type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                <div className="form-group col">
                    <label>
                        Password
                        {!isAddMode && <em className="ml-1">(Leave blank to keep the same password)</em>}
                    </label>
                    <input onChange={handleChangePassword} name="password" type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary mr-2">
                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={isSubmitting} className="btn btn-secondary">Reset</button>
                <Link href="/users" className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}