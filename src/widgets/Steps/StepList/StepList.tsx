import { memo } from 'react'
import { StepItem } from '../StepItem/StepItem'
import Truck from '@/shared/assets/icons/delivery-truck.svg'
import Bags from '@/shared/assets/icons/money-bags.svg'
import Clock from '@/shared/assets/icons/waiting.svg'
import Secure from '@/shared/assets/icons/secure.svg'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'

interface StepListProps {
    className?: string
}

export const StepList = memo((props: StepListProps) => {
    const { className } = props
    return (
        <HStack gap="32" wrap="wrap">
            <StepItem
                Svg={Clock}
                title="Прочитай задание внимательно"
                text="Думаю у тебя не займет это больше двух-трех минут"
            />
            <StepItem
                Svg={Truck}
                title="Изучи весь макет заранее"
                text="Подумай как это будет работать на разных разрешениях и при скролле"
            />
            <StepItem
                Svg={Secure}
                title="Сделай хорошо"
                text="Чтобы мы могли тебе доверить подобные задачи в будущем"
            />
            <StepItem
                Svg={Bags}
                title="Получи предложение"
                text="Ну тут все просто, не я придумал правила, но думаю так и будет)))"
            />
        </HStack>
    )
})
