import { memo } from 'react'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Text } from '@/shared/ui/Text/Text'
import cls from './StepItem.module.scss';

interface StepItemProps {
    className?: string
    title: string
    text: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const StepItem = memo((props: StepItemProps) => {
    const { className, Svg, text, title } = props
    return (
        <VStack className={cls.StepItem} gap="16">
            <Icon Svg={Svg} width={72} height={72} />
            <VStack gap="4">
                <Text size="s" title={title} />
                <Text variant='grey' size="s" text={text} />
            </VStack>
        </VStack>
    )
})
