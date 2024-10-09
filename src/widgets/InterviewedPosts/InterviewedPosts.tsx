import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './InterviewedPosts.module.scss'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { Text } from '@/shared/ui/Text/Text'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'

interface InterviewedPostsProps {
    className?: string
}

export const InterviewedPosts = memo((props: InterviewedPostsProps) => {
    const { className } = props

    return (
        <div className={classNames(cls.InterviewedPosts, {}, [className])}>
            <div className="wrapper">
                <HStack gap="32" wrap="wrap">
                    <VStack className={cls.block} gap="16">
                        <Text
                            size="l"
                            text="Опрошенных пользовались микрокредитами"
                            bold
                        />
                        <Text
                            size="m"
                            text="Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах"
                        />
                    </VStack>
                    <VStack className={cls.block} gap="16">
                        <Text
                            size="l"
                            text="Опрошенных пользовались микрокредитами"
                            bold
                        />
                        <Text
                            size="m"
                            text="Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах"
                        />
                    </VStack>
                    <VStack className={cls.block} gap="16">
                        <Text
                            size="l"
                            text="Опрошенных пользовались микрокредитами"
                            bold
                        />
                        <Text
                            size="m"
                            text="Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах"
                        />
                    </VStack>
                    <VStack className={cls.block} gap="16">
                        <Text
                            size="l"
                            text="Опрошенных пользовались микрокредитами"
                            bold
                        />
                        <Text
                            size="m"
                            text="Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах"
                        />
                    </VStack>
                </HStack>
            </div>
        </div>
    )
})
