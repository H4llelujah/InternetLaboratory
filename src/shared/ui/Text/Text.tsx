import { memo } from 'react'
import {
    AdditionalClasses,
    classNames,
} from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'

type TextSize = 's' | 'h5' | 'm' | 'h2' | 'l'

type textAlign = 'left' | 'center' | 'right'

type TextVariant = 'black' | 'grey' | 'white'

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h5' | 'h6'

interface TextProps {
    className?: string
    text?: string
    title?: string
    variant?: TextVariant
    size?: TextSize
    align?: textAlign
    bold?: boolean
}

const mapSizeToHeaderTag: Record<string, HeaderTagType> = {
    s: 'h6',
    h5: 'h5',
    m: 'h3',
    h2: 'h2',
    l: 'h1',
}

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    h5: cls.size_h5,
    m: cls.size_m,
    h2: cls.size_h2,
    l: cls.size_l,
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = 'black',
        size = 'm',
        align = 'left',
        bold,
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]
    const sizeClass = mapSizeToClass[size]

    const AdditionalClasses: AdditionalClasses = [
        cls[variant],
        cls[align],
        cls[size],
        sizeClass,
        className,
    ]

    return (
        <div
            className={classNames(
                cls.Text,
                { [cls.bold]: bold },
                AdditionalClasses
            )}
        >
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
