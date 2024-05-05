import { Input } from "antd";
import React from "react";

const InputComponent = ({size , placeholder}) =>{
    return (
        <Input size={size} placeholder = {placeholder}  />
    )
}

export default InputComponent