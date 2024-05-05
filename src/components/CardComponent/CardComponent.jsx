import React from "react";
import { PriceProduct, StyleNameProduct, TextProduct, WrapperCardStyle } from "./styleProduct";
import {MoneyCollectOutlined} from '@ant-design/icons'
import Phong1 from '../../assets/image/Phong1.jpg'

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            style={{
                width: 240,
            }}
            bodyStyle={{
                padding: '10px'
            }}
            cover={<img alt="example" src={Phong1} />}
        >
            <StyleNameProduct>Phòng View Hướng Biển</StyleNameProduct>
            <TextProduct> 2 Giường ngủ</TextProduct>
            <TextProduct> 3-5 Người ở</TextProduct>
            <PriceProduct>
                <MoneyCollectOutlined /> 
                &nbsp; 400.000/Đêm
            </PriceProduct>
        </WrapperCardStyle>
    )
}

export default CardComponent