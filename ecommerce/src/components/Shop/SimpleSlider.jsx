import { Swiper, SwiperSlide } from "swiper/react"
import React, { useState } from "react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import { FreeMode, Navigation, Thumbs } from "swiper"

export default function SimpleSlider({ listImg, listThumbs, sizeImg }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {listImg.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={item} alt="hehe" width={sizeImg} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {listImg.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={item} alt="hehe" width="80px" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
