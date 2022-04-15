import Image from 'next/image'
import React from 'react'
import style from './footer.module.scss'
export default function Footer() {
    return (
        <div className={style.footer} >

                <div className={style.btn_dark }>همین حالا بخرید</div>
                <div className={style.btn_light }>
                    <Image src='/images/Vector1.svg' width={20} height={20} />
                </div>

        </div>
    )
}
