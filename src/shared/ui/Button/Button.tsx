import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className: string
    theme: ButtonTheme
}

export enum ButtonTheme {
    CLEAR = 'clear',
}

export const Button: FC<ButtonProps> = ( props ) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props
    return (
        <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    )
}