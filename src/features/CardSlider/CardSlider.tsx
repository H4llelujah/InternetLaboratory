import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import './CardSlider.scss'
import Slider from 'react-slick'
import { Settings } from 'react-slick'
import { ReviewCard } from '@/entities/Reviews/ReviewCard/ReviewCard'
import { Text } from '@/shared/ui/Text/Text'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'

interface CardSliderProps {
    className?: string
}

interface Reviews {
    name: string
    city: string
    review: string
}

const reviews: Reviews[] = [
    {
        city: 'Санкт-Петербург',
        name: 'Иван Иванов',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
        city: 'Самара',
        name: 'Артем Корнилов',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    },
    {
        city: 'Санкт-Петербург',
        name: 'Константинов Михаил Павлович',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
        city: 'Санкт-Петербург',
        name: 'Константинов Михаил Павлович',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
        city: 'Санкт-Петербург',
        name: 'Константинов Михаил Павлович',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
        city: 'Санкт-Петербург',
        name: 'Константинов Михаил Павлович',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
]

export const CardSlider = memo((props: CardSliderProps) => {
    const { className } = props

    let settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    }

    return (
        <div className={classNames('cardSlider', {}, [className])}>
            <div className='wrapper'>
                <Text
                    className="reviewText"
                    size="h2"
                    title="Отзывы"
                    align="center"
                />
                <Slider className="slider" {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className={''}>
                            <ReviewCard
                                city={review.city}
                                name={review.name}
                                review={review.review}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
})
