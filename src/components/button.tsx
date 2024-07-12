import clsx from "clsx";
import { TouchableOpacity, Text, TextProps, TouchableOpacityProps } from "react-native";

type Variants = "primary" | "secondary"

type ButtonProps = TouchableOpacityProps & {
    variant?: Variants,
    isLoading?: boolean
}


function Button({
    variant = "primary",
    children,
    isLoading,
    ...rest
}: ButtonProps){
    return (
        <TouchableOpacity
        className={clsx(
            "w-full h-11 flex-row items-center justify-center rounded-lg gap-2",
            {
                "bg-lime-300": variant === "primary",
                "bg-lime-800":variant === "secondary"
            }
        )}
        activeOpacity={0.7}
        disabled={isLoading}
        {...rest}
        >
            {children}
        </TouchableOpacity>
    )
}

function Title({children}: TextProps){
    return (
        <Text>{children}</Text>
    )
}

Button.Title = Title

export {Button}

