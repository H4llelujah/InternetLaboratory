import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Info.module.scss'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Text } from '@/shared/ui/Text/Text'
import { AppImage } from '@/shared/ui/AppImage/AppImage'
import infoPic from '@/shared/assets/images/InfoPicture.png'
import infoPicBg from '@/shared/assets/images/InfoPictureBg.png'

interface InfoProps {
    className?: string
}

export const Info = memo((props: InfoProps) => {
    const { className } = props

    return (
        <div className={classNames(cls.Info, {}, [className, 'wrapper'])}>
            <HStack gap="32">
                <VStack gap="16">
                    <Text title="Круто, ты дошел до третьего блока" size="m" />
                    <VStack gap='32'>
                        <Text
                            size="m"
                            text="63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽."
                            variant="grey"
                        />
                        <Text
                            size="m"
                            text="Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах."
                            variant="grey"
                        />
                    </VStack>
                </VStack>
                <div className={cls.imgBlock}>
                    <AppImage src={infoPic} className={cls.picture} />
                    <AppImage src={infoPicBg} className={cls.pictureBg} />
                </div>
            </HStack>
        </div>
    )
})
