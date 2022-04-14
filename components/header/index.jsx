
import React from 'react'
import Link from 'next/link'
import style from './header.module.scss'
import Image from 'next/image';

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.header_main}>
                <div>
                    {/* <FontAwesomeIcon icon={faMoon} /> */}
                    <Image width={36} height={36} src='/images/Subtract.svg' alt="Site Title" />

                </div>
                <div className={style.header_menu}>
                    <ul>
                        <li>
                            <Link href='/'>صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link href='/products'>محصولات</Link>
                        </li>
                        <li>
                            <Link href='/services'>خدمات</Link>
                        </li>
                        <li>
                            <Link href='/blog'>وبلاگ</Link>
                        </li>
                        <li>
                            <Link href='/about-us'>درباره ما</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Image width={24} height={24} src='/images/search.svg' alt="Site Title" />
                </div>

            </div>
        </div>
    )
}
