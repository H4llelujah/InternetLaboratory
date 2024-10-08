import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./IntroSlogan.module.scss";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";

interface IntroSloganProps {
    className?: string;
}

export const IntroSlogan = memo((props: IntroSloganProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.IntroSlogan, {}, [className])}>
            <VStack align="center">
                <Text
                    title="Говорят, никогда не поздно сменить профессию"
                    text="Сделай круто тестовое задание и у тебя получится"
                    align="center"
                    size="l"
                    variant="white"
                    className={cls.introText}
                />
                <Button variant="default">Проще простого!</Button>
            </VStack>
        </div>
    );
});
