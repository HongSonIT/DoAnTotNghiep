import React from 'react'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import {SearchOutlined} from '@ant-design/icons'

const ButtonInputSearch = (props) => {
    const {size , placeholder , text} = props
    return (    
        <div style={{display:'flex'}}>
            <InputComponent size={size} placeholder = {placeholder}  />
            <ButtonComponent
                size={size} 
                text = {text}
                style={{backgroundColor:'#d9d5d5'}}
                icon={<SearchOutlined/>}
            />
        </div>
    )
}

export default ButtonInputSearch