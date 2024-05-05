import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import { WrapperProduct } from "./styleProductPage";

const TypeProductPage = () => {
    return (
        <div style={{padding:'0 120px' , paddingTop:'30px' , backgroundColor:'#f5fafe'}}>
            <WrapperProduct>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </WrapperProduct>
        </div>
    )
}

export default TypeProductPage