import { InputHTMLAttributes, memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import SuccessIcon from "@/shared/assets/icons/successCircle.svg";
import ErrorIcon from "@/shared/assets/icons/errorCircle.svg";
import cls from "./Input.module.scss";
import { Icon } from "../Icon/Icon";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readOnly" | "size"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    label: string;
    success?: boolean;
    error?: boolean;
    errorMessage?: string;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, label, success, error, errorMessage } =
        props;

    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
        console.log(1);
    };

    const onBlur = () => {
        setIsFocused(false);
        console.log(2);
    };

    return (
        <div
            className={classNames(
                cls.InputWrapper,
                { [cls.Focused]: isFocused },
                [className]
            )}
            onFocus={onFocus}
            onBlur={onBlur}
        >
            <div className={classNames(cls.Label)}>{label}</div>
            <input
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.Input)}
            />
            {success && <Icon width={20} height={20} className={cls.SuccesIcon} Svg={SuccessIcon} />}
            {error && <Icon width={20} height={20} className={cls.ErrorIcon} Svg={ErrorIcon} />}
        </div>
    );
});
