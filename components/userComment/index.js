import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from 'next/image';
export default function UserComment() {
    return (
        <div>
            <p style={{marginBottom:'10px'}}> نظرات کاربران</p>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}

            dir="rtl"
            navigation={true}
            modules={[Navigation]}
            className="mySwiper_UserComment"
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
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              
              }}
        >
            <SwiperSlide>
                <div className='card_comment'>
                    <div className='card_main' >
                        <div className='card_content '>
                            <p style={{ fontSize: '18px' , color:'#3C3C3C' }}>
                                ظاهرش که عالیه فقط باید دقت کنید که یک سایز کوچیکتر از سایزتون بخرید.
                            </p>
                        </div>
                        <div className="card_footer" style={{display:'flex'}}>
                            <div><p style={{ fontSize: '12px'  , color:'#C4C4C4'}}> 14 اسفند 1400 </p></div>
                            <div><Image src='/images/Vector2.svg' width={20} height={20} /></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className='card_comment'>
                    <div className='card_main' >
                        <div className='card_content '>
                            <p style={{ fontSize: '18px' , color:'#3C3C3C' }}>
                                ظاهرش که عالیه فقط باید دقت کنید که یک سایز کوچیکتر از سایزتون بخرید.
                            </p>
                        </div>
                        <div className="card_footer" style={{display:'flex'}}>
                            <div><p style={{ fontSize: '12px'  , color:'#C4C4C4'}}> 14 اسفند 1400 </p></div>
                            <div><Image src='/images/Vector2.svg' width={20} height={20} /></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className='card_comment'>
                    <div className='card_main' >
                        <div className='card_content '>
                            <p style={{ fontSize: '18px' , color:'#3C3C3C' }}>
                                ظاهرش که عالیه فقط باید دقت کنید که یک سایز کوچیکتر از سایزتون بخرید.
                            </p>
                        </div>
                        <div className="card_footer" style={{display:'flex'}}>
                            <div><p style={{ fontSize: '12px'  , color:'#C4C4C4'}}> 14 اسفند 1400 </p></div>
                            <div><Image src='/images/Vector2.svg' width={20} height={20} /></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className='card_comment'>
                    <div className='card_main' >
                        <div className='card_content '>
                            <p style={{ fontSize: '18px' , color:'#3C3C3C' }}>
                                ظاهرش که عالیه فقط باید دقت کنید که یک سایز کوچیکتر از سایزتون بخرید.
                            </p>
                        </div>
                        <div className="card_footer" style={{display:'flex'}}>
                            <div><p style={{ fontSize: '12px'  , color:'#C4C4C4'}}> 14 اسفند 1400 </p></div>
                            <div><Image src='/images/Vector2.svg' width={20} height={20} /></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className='card_comment'>
                    <div className='card_main' >
                        <div className='card_content '>
                            <p style={{ fontSize: '18px' , color:'#3C3C3C' }}>
                                ظاهرش که عالیه فقط باید دقت کنید که یک سایز کوچیکتر از سایزتون بخرید.
                            </p>
                        </div>
                        <div className="card_footer" style={{display:'flex'}}>
                            <div><p style={{ fontSize: '12px'  , color:'#C4C4C4'}}> 14 اسفند 1400 </p></div>
                            <div><Image src='/images/Vector2.svg' width={20} height={20} /></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className='card_comment'>
                    <div className='card_main' >
                        <div className='card_content '>
                            <p style={{ fontSize: '18px' , color:'#3C3C3C' }}>
                                ظاهرش که عالیه فقط باید دقت کنید که یک سایز کوچیکتر از سایزتون بخرید.
                            </p>
                        </div>
                        <div className="card_footer" style={{display:'flex'}}>
                            <div><p style={{ fontSize: '12px'  , color:'#C4C4C4'}}> 14 اسفند 1400 </p></div>
                            <div><Image src='/images/Vector2.svg' width={20} height={20} /></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>

    )
}
