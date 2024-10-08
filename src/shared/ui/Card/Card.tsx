import { HTMLAttributes, ReactNode } from 'react';
import {
    AdditionalClasses,
    classNames,
} from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardPadding = '0' | '8' | '16' | '24';


interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    max?: boolean;
    fullHeight?: boolean;
    padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        max,
        fullHeight,
        padding = '8',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    const additionalClasses: AdditionalClasses = [
        className,
        cls[paddingClass],
    ];

    return (
        <div
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                    [cls.fullHeight]: fullHeight,
                },
                additionalClasses,
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};
