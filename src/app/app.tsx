import { CardSlider } from "@/features/CardSlider/CardSlider";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { Info } from "@/widgets/Info/Info";
import { Intro } from "@/widgets/Intro/Intro";
import { Steps } from "@/widgets/Steps/Steps/Steps";

export const App = () => {
    return (
        <VStack max gap="80">
            <Intro />
            <Steps />
            <Info />
            <CardSlider />
        </VStack>
    );
};
