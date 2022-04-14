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
            <div className={style.footer_box} style={{marginTop:'25px'}}>
              <div  className={style.score_box} >
              <span style={{color:'#9C9C9C' , fontSize:'12px' , marginLeft:'5px'}}>(1250)</span>
                <span>  <Image src='/images/Vector.svg' width={15} height={15} /></span>
                <span>  <Image src='/images/Vector.svg' width={15} height={15} /></span>
                <span>  <Image src='/images/Vector.svg' width={15} height={15} /></span>
                <span>  <Image src='/images/Vector.svg' width={15} height={15} /></span>
                <span>  <Image src='/images/Vector.svg' width={15} height={15} /></span>
              </div>
              <div className={style.share_box} > 
                <span style={{marginLeft:'10px'}}><Image src='/images/heart.svg'  width={20} height={20}/></span>
                <span><Image src='/images/share-2.svg' width={20} height={20} /></span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.detail_left}>
          <Detail />
        </div>
      </div>
      <div className={style.line} style={{width:'100%' , marginTop:'20px'}}></div>

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
        <Image src='/images/sh2.jpg' layout='fill' objectFit='contain' />
        {/* <Image src='/images/sh1.png' layout='fill'objectFit='contain' /> */}


      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>
  )

}

function Detail() {
  return (
    <div style={{
      width: '90%',
    }} >
      <div>
        <p>کفش اسپرت مردانه کد۱۱۵۶</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <span>895,000 تومان</span>
        <span style={{ display: 'flex' }}>
          <div style={{ textDecoration: 'line-through', color: '#C4C4C4', fontSize: '12px' }}  >1,260,000</div>
          <div className={style.badge}>20%</div>
        </span>
      </div>
      <div className={style.btn_group} style={{ justifyContent: 'space-between', marginTop: '25px' }} >
        <div className={style.btn_dark}> همین حالا بخرید</div>
        <div className={style.btn_light}> افزودن به سید خرید</div>
      </div>
      <div className={style.line}></div>

      <div style={{ marginTop: '10px' }}>
        <div><p>مشخصات</p></div>
        <div className={style.detail_texts}>
          <ul >
            <li>کفی:قابل تعویض، قابلیت ارتجاعی</li>
            <li>نحوه بسته شدن کفش:بندی</li>
            <li>ویژگی‌های زیره:قابلیت ارتجاعی، کاهش فشار وارده</li>
          </ul>
        </div>
      </div>
      <div className={style.line}></div>
      <div style={{ marginTop: '10px' }}>
        <div><p>انتخاب سایز</p></div>
        <div className={style.btn_group} style={{ marginTop: '5px' }} >
          <div className={style.btn} >38</div>
          <div className={style.btn}> 55</div>
          <div className={style.btn}>40</div>
        </div>
      </div>
      <div className={style.line}></div>
      <div style={{ marginTop: '10px' }}>
        <div><p>انتخاب رنگ</p></div>
        <div className={style.btn_group} style={{ marginTop: '5px' }} >
          <div className={style.btn} style={{ background: '#9C9C9C' }} ></div>
          <div className={style.btn} style={{ background: '#6380E7' }} ></div>
          <div className={style.btn} style={{ background: '#FFB27A' }} ></div>
          <div className={style.btn} style={{ background: '#FFFFFF' }} ></div>
          <div className={style.btn} style={{ background: '#1D1D1D' }} ></div>
        </div>
      </div>
    </div>
  )
}