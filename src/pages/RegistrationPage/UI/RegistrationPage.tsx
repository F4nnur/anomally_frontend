import React from 'react';
import cls from './RegistrationPage.module.scss';
import Form from '../../../shared/UI/Form/Form';

const RegistrationPage = () => (
    <div className={cls.RegistrationPage}>
        <Form title="Регистрация" buttonTitle="Зарегистрироваться">
            <div className={cls.registrationForm__username}>
                <p>Логин</p>
                <input className={cls.registrationForm__input} type="text" />
            </div>
            <div className={cls.registrationForm__password}>
                <p>Пароль</p>
                <input className={cls.registrationForm__input} type="text" />
            </div>
            <div className={cls.registrationForm__password}>
                <p>Повторите пароль </p>
                <input className={cls.registrationForm__input} type="text" />
            </div>
        </Form>
    </div>
);

export default RegistrationPage;
