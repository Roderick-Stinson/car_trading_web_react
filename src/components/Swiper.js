import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import "../css/swiper.css";

import SwiperCore, {
    Navigation, Thumbs
} from 'swiper/core';

SwiperCore.use([Navigation, Thumbs]);

const CarSwiperIndex = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                id="container"
                style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff'}}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                className="mySwiper2"
            >
                {images.map((item, index) => <SwiperSlide key={index}><img src={item} alt={'加载中'}/></SwiperSlide>)}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesVisibility={true}
                watchSlidesProgress={true}
                className="mySwiper"
            >
                {images.map((item, index) => <SwiperSlide key={index}><img src={item} alt={'加载中'}/></SwiperSlide>)}
            </Swiper>
        </>
    )
}

const CarSwiper = ({imagesSrc}) => {
    const [images] = useState(imagesSrc)

    if (images.length > 0) {
        return (
            <CarSwiperIndex images={images}/>
        )
    } else
        return (
            <></>
        )

}

export default CarSwiper