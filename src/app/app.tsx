import { CardSlider } from '@/features/CardSlider/CardSlider'
import { FeedbackForm } from '@/features/FeedbackForm/ui/FeedbackForm/FeedbackForm'
import { InfoAccordion } from '@/features/InfoAccordion/InfoAccordion'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Info } from '@/widgets/Info/Info'
import { InterviewedPosts } from '@/widgets/InterviewedPosts/InterviewedPosts'
import { Intro } from '@/widgets/Intro/Intro'
import { Steps } from '@/widgets/Steps/Steps/Steps'

export const App = () => {
    return (
        <VStack max gap="80">
            <Intro />
            <Steps />
            <Info />
            <CardSlider />
            <InfoAccordion />
            <InterviewedPosts />
            <FeedbackForm />
        </VStack>
    )
}
