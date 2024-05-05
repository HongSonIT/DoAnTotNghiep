import { Input } from "antd";
import React from "react";

const InputLIO = (props) =>{
    const handleOnChangeInput = (e) =>{
        props.onChange(e.target.value)
    }
    return (
        <div>
            <Input placeholder={props.placeholder} value = {props.value} style={props.style} onChange={handleOnChangeInput}/>
        </div>
    )
}

export default InputLIO