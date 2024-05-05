import { Col, Image, Row } from "antd";
import React from "react";
import phong from '../../assets/image/Phong1.jpg'
import { WrapperNameRoom, WrapperPriceRoom, WrapperRoom } from "./StyleRoom";
import { StarFilled } from '@ant-design/icons'
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const RoomDetailComponent = () =>{
    return (
        <div>
            <Row style={{backgroundColor:'#fff', padding:'18px'}}>
                <Col span={10}>
                    <Image src={phong} alt="Phong" height={400}/>
                </Col>
                <Col style={{padding:'80px'}} span={14}>
                    <WrapperNameRoom>
                        Phòng Giường Đôi - View Hướng Biển
                    </WrapperNameRoom>
                    <div>
                        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}}/>
                        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}}/>
                        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}}/>
                        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}}/>
                        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}}/>
                        <span> | 1000+ lượt đánh giá</span>
                        <WrapperRoom>3 - 5 người ở</WrapperRoom>
                        <WrapperRoom>Tình Trạng : Còn Trống</WrapperRoom>
                        <WrapperPriceRoom>
                            400.000/đêm
                        </WrapperPriceRoom>
                        <ButtonComponent size="large" text="Thêm vào Phòng Của Tôi" style={{
                            backgroundColor:'#d9d5d5' , width : '240px' , height : '38px' ,
                            borderRadius : '4px'}} 
                        />
                    </div>
                </Col>
            </Row> 
        </div>
    )
}

export default RoomDetailComponent

