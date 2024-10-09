import { memo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './FeedbackForm.module.scss'
import { Text } from '@/shared/ui/Text/Text'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { Input } from '@/shared/ui/Input/Input'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'

interface FeedbackFormProps {
    className?: string
}

export const FeedbackForm = memo((props: FeedbackFormProps) => {
    const { className } = props

    const [name, setName] = useState('')

    const [number, setNumber] = useState()

    const [checked, setChecked] = useState()

    return (
        <form
            className={classNames(cls.FeedbackForm, {}, [className, 'wrapper'])}
        >
            <VStack max justify='center' className={cls.formContent}>
                <Text size="h2" title="Отправь форму" />
                <HStack max gap='32'>
                    <Input  label="Имя" />
                    <Input label="Телефон" />
                </HStack>
                <HStack>
                    <Checkbox text="Согласен, отказываюсь" />
                </HStack>
            </VStack>
        </form>
    )
})
