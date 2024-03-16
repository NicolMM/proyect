// import Style from './Text.module.css'
// @import  './globals.css';


export interface TextProps {
    /**
     * Text content
     */
    children: React.ReactNode;
    /**
     * HTML Header Tags
     */
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "p2";
    /**
     * Text style
     */
    type?:


    | "typography-title_major"
    | "typography-title_minor"
    | "typography-subtitle_major"
    | "typography-title_text"
    | "typography-subtitle_minor"
    | "typography-price"
    | "typography-subtitle_accordion"
    | "typography-body_text"

    | "typography-title_accordion"







    ;
    /**
     * If it is required to add some more style.
     */
    className?: string;
    /**
     * Color of the text.
     */
    color?:
    | "text-skyBlue"
    | "text-green"
    | "text-red"
    | "text-gray"
    | "text-dark"
    | "primary1--100"
    | "primary1--75"
    | "primary2--100"
    | "secondary1--100"

    | "white"
    | "body"
    | "orange_50"
    | "gray"
    | "gray_40"
    | "secondary2--100"
    | "secondary1--75"
    | "primary1--50"
    | "icon-gray"
    | "text-green"



    // onClick?: () => void;
}

export const Text = ({
    children,
    type = "typography-body_text",
    variant,
    className,
    // onClick = () => { console.log('first') },
    color,
}: TextProps) => {
    switch (variant) {
        case "h1":
            return (
                <h1
                    className={`${type}${className ? " " + className : ""}${color ? " color_" + color : ""
                        }`}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                    className={`${type}${className ? " " + className : ""}${color ? " color_" + color : ""
                        }`}
                // onClick={onClick}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                    className={`${type}${className ? " " + className : ""}${color ? " color_" + color : ""
                        }`}
                // onClick={onClick}
                >
                    {children}
                </h3>
            );
        case "h4":
            return (
                <h4
                    className={`${type}${className ? " " + className : ""}${color ? " color_" + color : ""
                        }`}
                // onClick={onClick}
                >
                    {children}
                </h4>
            );
        case "h5":
            return (
                <h5
                    className={`${type}${className ? " " + className : ""}${color ? " color_" + color : ""
                        }`}
                // onClick={onClick}
                >
                    {children}
                </h5>
            );
        case "p":
            return (
                <p
                    className={`${type}${className ? " " + className : ""}${color ? " color_" + color : ""
                        }`}
                // onClick={onClick}
                >
                    {children}
                </p>
            );
        case "p2":
            return (
                <span style={{ fontSize: "1rem" }}
                    className={`${type}${className ? " " + className : ""}${color ? " color_" + color : ""
                        }`}
                // onClick={onClick}
                >
                    {children}
                </span>
            );
        default:
            return (
                <span
                    className={`${type}${className ? " " + className : ""}${color ? " color_" + color : ""
                        }`}
                // onClick={onClick}
                >
                    {children}
                </span>
            );
    }
};
