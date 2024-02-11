import React from 'react';
import cls from './Form.module.scss';

interface FormProps {
    children?: React.ReactNode;
    title: string;
    buttonTitle: string;
    onButtonClick: () => void;
}
const Form = (props: FormProps) => {
    const {
        children, title, buttonTitle, onButtonClick,
    } = props;
    return (
        <div className={cls.Form}>
            <p>{title}</p>
            {children}
            <button
                type="submit"
                onClick={onButtonClick}
            >

                {buttonTitle}
            </button>
        </div>
    );
};

export default Form;
