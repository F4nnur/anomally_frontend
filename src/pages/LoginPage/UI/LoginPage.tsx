import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cls from './LoginPage.module.scss';
import Form from '../../../shared/UI/Form/Form';
import { getLoginUsername } from '../../../features/AuthByUsername/model/selectors/getLoginUsername';
import { getLoginPassword } from '../../../features/AuthByUsername/model/selectors/getLoginPassword';
import { loginActions } from '../../../features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from '../../../features/AuthByUsername/model/services/loginByUsername';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';

const LoginPage = () => {
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(e.target.value));
    }, [dispatch]);

    const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value));
    }, [dispatch]);

    const handleLogin = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/');
        }
    }, [dispatch, username, password, navigate]);

    return (
        <div className={cls.loginPage}>
            <Form title="Вход" buttonTitle="Войти" onButtonClick={handleLogin}>
                <div className={cls.loginForm__username}>
                    <p>Логин</p>
                    <input
                        className={cls.loginForm__input}
                        type="text"
                        onChange={(e) => handleUsername(e)}
                    />
                </div>
                <div className={cls.loginForm__password}>
                    <p>Пароль</p>
                    <input
                        className={cls.loginForm__input}
                        type="password"
                        onChange={(e) => handlePassword(e)}
                    />
                </div>
            </Form>
        </div>
    );
};

export default LoginPage;
