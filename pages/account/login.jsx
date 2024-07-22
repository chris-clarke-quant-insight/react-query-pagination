import { useRouter } from 'next/router';
import { useState } from 'react';
import { Link } from '../../components';
import FullLayout from '../../components/FullLayout';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
import { userService } from '../../services/user.service'
import { alertService } from '../../services'
import { TeamIcon } from '../../components/icons';

export default Login;

function Login() {
    const router = useRouter();

    // form validation rules 
    // const validationSchema = Yup.object().shape({
    //     username: Yup.string().required('Username is required'),
    //     password: Yup.string().required('Password is required')
    // });
    // const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    // const { register, handleSubmit, formState } = useForm(formOptions);
    const [formState, setFormState] = useState({ isSubmitting: false });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleChangeUsername(ev) {
        setUsername(ev.target.value);
    }
    function handleChangePassword(ev) {
        setPassword(ev.target.value);
    }
    function handleSubmit() {
        setFormState({ isSubmitting: !formState.isSubmitting });
        onSubmit({ username, password })
    }

    const errors = { username: false, password: false };

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
        <FullLayout title={<div className="ab ls uh avj"><TeamIcon /><h1>Login</h1></div>} location="team">
            <div className="card">
                <h4 className="card-header">Login</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" type="text" onChange={handleChangeUsername} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" onChange={handleChangePassword} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button>
                        <Link href="/account/register" className="btn btn-link">Register</Link>
                    </form>
                </div>
            </div>
        </FullLayout>
    );
}