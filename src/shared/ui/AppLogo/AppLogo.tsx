import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.AppLogo, {}, [className])}>
            <div className={cls.leftCircle}></div>
            <div className={cls.rightCircle}></div>
        </div>
    );
});
