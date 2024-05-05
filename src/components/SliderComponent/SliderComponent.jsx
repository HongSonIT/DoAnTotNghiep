import {Image} from 'antd'
import React from "react";
import { WrapperSliderStyle } from './StyleSlider';

const SliderComponent = ({arrImage}) =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed : 1500
    };
    return (
        <div>
            <WrapperSliderStyle {...settings}>
                {
                    arrImage.map((image) => {
                        return(
                            <Image key={image} src={image} alt="Slider" preview={false} width="100%" height="400px"/>
                        )
                    })
                }
            </WrapperSliderStyle>
        </div>
    )
}

export default SliderComponent