import { memo, ReactNode } from 'react';
import { AdditionalClasses, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type buttonVariant = 'primary' | 'default';

interface ButtonProps {
    className?: string;
    variant?: buttonVariant;
    children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const { className, children, variant = 'primary' } = props;

    const additionalClasses: AdditionalClasses = [
        className,
        cls[variant],
    ]

    return (
        <button type='button' className={classNames(cls.Button, {}, additionalClasses)}>
            {children}
        </button>
    );
});
