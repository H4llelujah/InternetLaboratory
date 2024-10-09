import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CloseIcon from '@/shared/assets/icons/close-icon.svg';
import cls from './Accordion.module.scss';
import { Icon } from '../Icon/Icon';

interface AccordionProps {
    className?: string;
    title: string;
    text: string;
}

export const Accordion = memo((props: AccordionProps) => {
    const { className, title, text } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className={classNames(cls.Accordion, {[cls.Open]: isOpen}, [className])}>
            <button className={cls.button} onClick={onOpen}><p className={cls.buttonText}>{title}</p><Icon className={cls.Icon} width={24} height={24} Svg={CloseIcon}/></button>
            <p className={cls.text}>{text}</p>
        </div>
    );
});
