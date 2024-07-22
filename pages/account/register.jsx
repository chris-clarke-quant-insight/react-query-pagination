import { useRouter } from 'next/router';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

import { Link } from '../../components';

import { userService, alertService } from '../../services';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import FullLayout from '../../components/FullLayout';
import { TeamIcon } from '../../components/icons';

export default Register;

function Register() {
    const router = useRouter();

    // // form validation rules 
    // const validationSchema = Yup.object().shape({
    //     firstName: Yup.string()
    //         .required('First Name is required'),
    //     lastName: Yup.string()
    //         .required('Last Name is required'),
    //     username: Yup.string()
    //         .required('Username is required'),
    //     password: Yup.string()
    //         .required('Password is required')
    //         .min(6, 'Password must be at least 6 characters')
    // });
    // const formOptions = { resolver: yupResolver(validationSchema) };

    // // get functions to build form with useForm() hook
    // const { register, handleSubmit, formState } = useForm(formOptions);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleChangeFirstName(ev) {
        setFirstName(ev.target.value);
    }
    function handleChangeLastName(ev) {
        setLastName(ev.target.value);
    }
    function handleChangeUsername(ev) {
        setUsername(ev.target.value);
    }
    function handleChangePassword(ev) {
        setPassword(ev.target.value);
    }
    
    const defaultValues = {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    };
    const errors = {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    };
    const [isSubmitting, setIsSubmitting] = useState(false);
    function handleSubmit() {
        setIsSubmitting(true);
        console.log(firstName, lastName, username, password);
        onSubmit({ firstName, lastName, username, password });
    }
    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                setIsSubmitting(false);

                router.push('login');
            })
            .catch(alertService.error);
    }

    return (
        <FullLayout title={<div className="ab ls uh avj"><TeamIcon /><h1>Register</h1></div>} location="team">
            <div className="card">
                <h4 className="card-header">Register</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input defaultValue={defaultValues.firstName} onChange={handleChangeFirstName} name="firstName" type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input defaultValue={defaultValues.lastName} onChange={handleChangeLastName} name="lastName" type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input defaultValue={defaultValues.username} onChange={handleChangeUsername} name="username" type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input defaultValue={defaultValues.password} onChange={handleChangePassword} name="password" type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <Button variant='primary' disabled={isSubmitting} className="btn btn-primary">
                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Register
                        </Button>
                        <Link href="/account/login" className="btn btn-link">Cancel</Link>
                    </form>
                </div>
            </div>
        </FullLayout>
    );
}