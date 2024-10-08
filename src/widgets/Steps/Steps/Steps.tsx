import { memo } from 'react'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Text } from '@/shared/ui/Text/Text'
import { StepList } from '../StepList/StepList'

interface StepsProps {
    className?: string
}

export const Steps = memo((props: StepsProps) => {
    const { className } = props
    return (
        <VStack align='center' max className='wrapper'>
            <Text size="h2" title="Как это работает" />
            <StepList />
        </VStack>
    )
})
