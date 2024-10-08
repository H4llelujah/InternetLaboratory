import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Intro.module.scss";
import IntroImg from '@/shared/assets/images/IntroImg.jpg';
import { Header } from "../Header/Header";
import { IntroSlogan } from "@/features/IntroSlogan/IntroSlogan";

interface IntroProps {
    className?: string;
}

export const Intro = memo((props: IntroProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Intro, {}, [className])}>
            <img className={cls.img} src={IntroImg} />
            <div className="wrapper">
                <Header />
                <IntroSlogan />
            </div>
        </div>
    );
});
