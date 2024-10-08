import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { Text } from '@/shared/ui/Text/Text'
import cls from './ReviewCard.module.scss';

interface ReviewCardProps {
    className?: string
    AvatarSrc?: string
    name: string
    city: string
    review: string
}

export const ReviewCard = memo((props: ReviewCardProps) => {
    const { className, city, name, AvatarSrc, review } = props
    return (
        <Card padding='24' className={classNames(cls.ReviewCard, {}, [className])}>
            <VStack gap="16">
                <HStack gap="16">
                    <Avatar size={44} src={AvatarSrc} />
                    <VStack gap="4">
                        <Text title={name} size="s" />
                        <Text text={city} size="s" variant="grey" />
                    </VStack>
                </HStack>
                <Text size="s" text={review} />
            </VStack>
        </Card>
    )
})
