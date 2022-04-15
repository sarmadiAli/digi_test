import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from 'next/image';
export default function RecommendedProducts() {
    return (
        <div style={{marginTop:'15px'}}>
            <p>محصولات پیشنهادی</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}

                dir="rtl"
                navigation={true}
                modules={[Navigation]}
                className="mySwiper_recommendedProducts"
                breakpoints={{
                    390: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },

                }}
            >
                <SwiperSlide>
                    <div className='card'>
                        <div className='card-image'>
                            <Image src={'/images/re_pro/sh_5.png'} width={250} height={250} />
                        </div>
                        <div className='card-content'>
                            <div className='card-content-top'>
                                <p style={{ fontSize: '14px' }}>کفش اسپرت مردانه کد 1170</p>
                            </div>
                            <div className='card-content-bottom'>
                                <p style={{ fontSize: '12px' }}> 1،120،000 تومان</p>
                                <p style={{ fontSize: '12px', textDecoration: 'line-through', color: '#c4c4c4' }}>2،120،000 تومان</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div className='card-image'>
                            <Image src={'/images/re_pro/sh_1.png'} width={250} height={250} />
                        </div>
                        <div className='card-content'>
                            <div className='card-content-top'>
                                <p style={{ fontSize: '14px' }}>کفش اسپرت مردانه کد 1170</p>
                            </div>
                            <div className='card-content-bottom'>
                                <p style={{ fontSize: '12px' }}> 1،120،000 تومان</p>
                                <p style={{ fontSize: '12px', textDecoration: 'line-through', color: '#c4c4c4' }}>2،120،000 تومان</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div className='card-image'>
                            <Image src={'/images/re_pro/sh_2.png'} width={250} height={250} />
                        </div>
                        <div className='card-content'>
                            <div className='card-content-top'>
                                <p style={{ fontSize: '14px' }}>کفش اسپرت مردانه کد 1170</p>
                            </div>
                            <div className='card-content-bottom'>
                                <p style={{ fontSize: '12px' }}> 1،120،000 تومان</p>
                                <p style={{ fontSize: '12px', textDecoration: 'line-through', color: '#c4c4c4' }}>2،120،000 تومان</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div className='card-image'>
                            <Image src={'/images/re_pro/sh_3.png'} width={250} height={250} />
                        </div>
                        <div className='card-content'>
                            <div className='card-content-top'>
                                <p style={{ fontSize: '14px' }}>کفش اسپرت مردانه کد 1170</p>
                            </div>
                            <div className='card-content-bottom'>
                                <p style={{ fontSize: '12px' }}> 1،120،000 تومان</p>
                                <p style={{ fontSize: '12px', textDecoration: 'line-through', color: '#c4c4c4' }}>2،120،000 تومان</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div className='card-image'>
                            <Image src={'/images/re_pro/sh_4.png'} width={250} height={250} />
                        </div>
                        <div className='card-content'>
                            <div className='card-content-top'>
                                <p style={{ fontSize: '14px' }}>کفش اسپرت مردانه کد 1170</p>
                            </div>
                            <div className='card-content-bottom'>
                                <p style={{ fontSize: '12px' }}> 1،120،000 تومان</p>
                                <p style={{ fontSize: '12px', textDecoration: 'line-through', color: '#c4c4c4' }}>2،120،000 تومان</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div className='card-image'>
                            <Image src={'/images/re_pro/sh_2.png'} width={250} height={250} />
                        </div>
                        <div className='card-content'>
                            <div className='card-content-top'>
                                <p style={{ fontSize: '14px' }}>کفش اسپرت مردانه کد 1170</p>
                            </div>
                            <div className='card-content-bottom'>
                                <p style={{ fontSize: '12px' }}> 1،120،000 تومان</p>
                                <p style={{ fontSize: '12px', textDecoration: 'line-through', color: '#c4c4c4' }}>2،120،000 تومان</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
