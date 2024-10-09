import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Checkbox.module.scss'
import { Text } from '../Text/Text'

interface CheckboxProps {
    className?: string
    text: string
}

export const Checkbox = memo((props: CheckboxProps) => {
    const { className, text } = props
    return (
        <div className={classNames(cls.Checkbox, {}, [className])}>
            <label className={cls.label}>
                <input className={cls.input} type="checkbox" />
                <Text size="m" text={text} />
            </label>
        </div>
    )
})
