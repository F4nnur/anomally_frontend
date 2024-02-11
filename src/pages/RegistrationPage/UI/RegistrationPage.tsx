import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cls from './RegistrationPage.module.scss';
import Form from '../../../shared/UI/Form/Form';
import { getRegistrationPassword } from '../../../features/Registration/model/selectors/getPassword/getPassword';
import { getRegistrationUsername } from '../../../features/Registration/model/selectors/getUsername/getUsername';
import { registrationActions } from '../../../features/Registration/model/slice/registrationSlce';
import { registrationWithUsername } from '../../../features/Registration/model/services/registrationWithUsername';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';

const RegistrationPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const password = useSelector(getRegistrationPassword);
    const username = useSelector(getRegistrationUsername);
    const [secondPassword, setSecondPassword] = useState('');

    const handleUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(registrationActions.setUsername(e.target.value));
    }, [dispatch]);

    const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(registrationActions.setPassword(e.target.value));
    }, [dispatch]);
    const handleSecondPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondPassword(e.target.value);
    };
    const handleClick = useCallback(async () => {
        if (password === secondPassword) {
            const result = await dispatch(registrationWithUsername({ username, password }));
            if (result.meta.requestStatus === 'fulfilled') {
                navigate('/login');
            }
        }
    }, [dispatch, username, password, navigate, secondPassword]);

    return (
        <div className={cls.RegistrationPage}>
            <Form title="Регистрация" buttonTitle="Зарегистрироваться" onButtonClick={handleClick}>
                <div className={cls.registrationForm__username}>
                    <p>Логин</p>
                    <input
                        className={cls.registrationForm__input}
                        type="text"
                        onChange={(e) => handleUsername(e)}
                    />
                </div>
                <div className={cls.registrationForm__password}>
                    <p>Пароль</p>
                    <input
                        className={cls.registrationForm__input}
                        type="password"
                        onChange={(e) => handlePassword(e)}
                    />
                </div>
                <div className={cls.registrationForm__password}>
                    <p>Повторите пароль </p>
                    <input
                        className={cls.registrationForm__input}
                        type="password"
                        onChange={(e) => handleSecondPassword(e)}
                    />
                </div>
            </Form>
        </div>
    );
};

export default RegistrationPage;
