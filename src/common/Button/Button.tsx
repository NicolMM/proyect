import React, { CSSProperties } from 'react'
import Style from './Button.module.css'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: any;
    // Otros props que desees incluir, por ejemplo:
    className?: string;
    type: "primary" | "secundary" | "third" | "fourth" | "reserved"
    style?: CSSProperties;
    size: "small" | "medium" | "large" | "xlarge" | "x-small";
    isSelected?: boolean
    variant?: "type1" | "type2",
    [x: string]: any;

}

const Button: React.FC<ButtonProps> = (props) => {
    const { children, onClick, type, size, isSelected, variant, ...otherProps } = props;

    return (
        <button
            className={`
        ${Style.container}  
        ${Style[type]}
        ${Style[size]}
        ${isSelected && Style.isSelected}
        ${isSelected && variant ? Style[variant + '_' + "isSelected"] : null}
      
        }`

            }
            onClick={onClick} {...otherProps} >
            {children}
        </button>
    )
}

export default Button