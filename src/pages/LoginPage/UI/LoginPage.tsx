import React from 'react';
import cls from './LoginPage.module.scss';
import Form from '../../../shared/UI/Form/Form';

const LoginPage = () => (
    <div className={cls.loginPage}>
        <Form title="Вход" buttonTitle="Войти">
            <div className={cls.loginForm__username}>
                <p>Логин</p>
                <input className={cls.loginForm__input} type="text" />
            </div>
            <div className={cls.loginForm__password}>
                <p>Пароль</p>
                <input className={cls.loginForm__input} type="text" />
            </div>
        </Form>
    </div>
);

export default LoginPage;
