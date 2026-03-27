import PropTypes from "prop-types";

function Button( { 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
 } ){


    return <button>{children}</button>
}

Button.propType = {
    checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!success)
            + Number(!!danger)

        if(count>1){
            return new Error(
                'Only one should be procided'
            )
        }
    }
};

export default Button;