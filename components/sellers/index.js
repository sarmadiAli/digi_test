import Image from 'next/image'
import React from 'react'
import style from './sellers.module.scss'
export default function Sellers() {
    return (
        <div className={style.seller_list}>
            <div><p>فروشندگان این محصول</p></div>
            {[1, 2, 3, 4].map(ele => ((
                <div className={style.seller_item}>

                    <div className={style.seller_item_main}>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <Image src="/images/Vector1.svg" width={15} height={15} />
                                <p style={{ marginRight: '5px' }}> کفش شیک</p>
                            </div>
                            <div style={{ display: 'flex', }}>
                                <Image src="/images/Vector3.svg" width={15} height={15} />

                                <p style={{ fontSize: '12px', marginRight: '5px' }} >6 ماه ضمانت</p></div>
                        </div>
                        <div><p>849,000 تومان</p></div>
                        <div style={{ display: 'flex', }}>
                            <p style={{ marginLeft: '5px' }}>4.3</p>
                            <Image src='/images/Vector.svg' width={20} height={20} />
                        </div>
                        <div className={style.btn_dark}>همین حالا بخرید</div>
                    </div>

                </div>
            )))}

        </div>
    )
}
