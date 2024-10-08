import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { AppLogo } from "@/shared/ui/AppLogo/AppLogo";
import { Text } from "@/shared/ui/Text/Text";
import { Navbar } from "../Navbar/Navbar";
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;
    return (
        <HStack justify="between" className={classNames(cls.Header, {}, [className])}>
            <HStack gap="8">
                <AppLogo />
                <Text variant="white" title="testLab" size="h5" />
            </HStack>
            <Navbar />
        </HStack>
    );
});
