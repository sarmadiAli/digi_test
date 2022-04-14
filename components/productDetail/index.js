import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import style from './productDetail.module.scss'
import Image from "next/image";
export default function ProductDetail() {
  return (
    <div className={style.detail}>
      <div className={style.detail_main}>
        <div className={style.detail_slider_right}>
          <div className={style.slider_list}>
            <ul>
              <li>
                <Image src='/images/sh_list_1.png' width={90} height={90} />
              </li>
              <li>
                <Image src='/images/sh_list_2.png' width={90} height={90} />
              </li>
              <li>
                <Image src='/images/sh_list_3.png' width={90} height={90} />
              </li>
              <li>
                <Image src='/images/sh_list_3.png' width={90} height={90} />
              </li>
            
            </ul>
          </div>
          <div className={style.slider_swiper}>
          <SwiperDetaile />
          </div>
        </div>
        <div className={style.detail_left}>
          ali
        </div>
      </div>
        
    </div>
  )
}

function SwiperDetaile() {
  return (
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src='/images/sh2.jpg'  layout='fill' objectFit='contain'/>
          {/* <Image src='/images/sh1.png' layout='fill'objectFit='contain' /> */}

    
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
  )

}