
import React from 'react'
import Link from 'next/link'
import style from './header.module.scss'
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
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

                            <Link href='/'>
                                <a className={router.pathname == "/" ? "active" : ""}>
                                    صفحه اصلی
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/products'>
                                <a className={router.pathname == "/products" ? "active" : ""}>
                                  محصولات
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/services'>
                                <a className={router.pathname == "/services" ? "active" : ""}>
                                   خدمات
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/blog'>
                                <a className={router.pathname == "/blog" ? "active" : ""}>
                                   وبلاگ
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about-us'>
                                <a className={router.pathname == "/about-us" ? "active" : ""}>
                                    درباره من
                                </a></Link>
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
