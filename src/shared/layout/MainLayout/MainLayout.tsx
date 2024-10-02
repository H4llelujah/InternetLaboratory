import { memo, ReactNode } from 'react';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    header: ReactNode;
    content: ReactNode;
    footer: ReactNode;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const {header, content, footer} = props;
    return (
        <div className={cls.MainLayout}>
            <header>{header}</header>
            <main>{content}</main>
            <footer>{footer}</footer>
        </div>
    );
});
