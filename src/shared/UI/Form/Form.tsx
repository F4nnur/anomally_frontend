import React from 'react';
import cls from './Form.module.scss';

interface FormProps {
    children?: React.ReactNode;
    title: string;
    buttonTitle: string;
}
const Form = (props: FormProps) => {
    const { children, title, buttonTitle } = props;
    return (
        <div className={cls.Form}>
            <p>{title}</p>
            {children}
            <button type="submit">{buttonTitle}</button>
        </div>
    );
};

export default Form;
