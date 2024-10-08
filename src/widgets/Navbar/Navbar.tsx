import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Text } from '@/shared/ui/Text/Text';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    return (
        <HStack gap='24' className={classNames('', {}, [className])}>
            <Text variant='white' text='Как это работает' />
            <Text variant='white' text='3-й блок' />
            <Text variant='white' text='Вопросы и ответы' />
            <Text variant='white' text='Форма' />
        </HStack>
    );
});
