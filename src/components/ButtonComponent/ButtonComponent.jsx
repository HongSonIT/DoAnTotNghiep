import { Button } from "antd";
import React from "react";

const ButtonComponent = (props) => {
    return (
        <Button 

                disabled={props.disable}
                size={props.size} 
                icon={props.icon}
                style={{
                    ...props.style,
                    background : props.disable ? '#ccc' : props.style.background
                }
                }
                onClick={props.onClick}>
                    {props.text}
        </Button>
    )
}

export default ButtonComponent