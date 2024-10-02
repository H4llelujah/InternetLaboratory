import { memo } from "react";
import {
    AdditionalClasses,
    classNames,
} from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

type TextSize = "s" | "m" | "l";

type textAlign = "left" | "center" | "right";

type TextVariant = "black" | "grey" | 'white';

type HeaderTagType = "h1" | "h3" | "h6";

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    variant?: TextVariant;
    size?: TextSize;
    align?: textAlign;
    bold?: boolean;
}

const mapSizeToHeaderTag: Record<string, HeaderTagType> = {
    s: "h6",
    m: "h3",
    l: "h1",
};

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = "black",
        size = "m",
        align = "left",
        bold,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const AdditionalClasses: AdditionalClasses = [
        cls[variant],
        cls[align],
        cls[size],
        sizeClass,
        className,
    ];

    return (
        <div
            className={classNames(
                cls.Text,
                { [cls.bold]: bold },
                AdditionalClasses
            )}
        >
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
