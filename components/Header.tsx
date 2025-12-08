"use client";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Sitemap";
import { useState } from "react";
import { CATEGORY_MAP } from "@/data/category";

export default function Header() {

    const [openSitemap, setOpenSitemap] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<string | null>(null);

    return (
        <>
            <header>
                <div>
                    <div>
                        <ul className="pc-flex">
                            <li><Link href="/">홈</Link></li>
                            <li onClick={() => { setOpenSitemap(true); setOpenMenu(false); }}>사이트맵</li>
                            <li><Link href="/company/address">오시는 길</Link></li>
                        </ul>
                    </div>
                    <div className="display-flex">
                        <div>
                            <Link href='/'>
                                <Image src="/icons/logo.png" alt="홈으로" width={317} height={202} />
                            </Link>
                        </div>
                        <Menu openSitemap={openSitemap}
                            setOpenSitemap={setOpenSitemap}
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                        />
                        <div className="mo" onClick={() => setOpenMenu(true)}>
                            <Image src="/icons/nav.png" alt="메뉴열기" width={35} height={29} />
                        </div>
                        <ul className="pc-flex">
                            {Object.entries(CATEGORY_MAP).map(([key, c]) => {
                                return (
                                    <li key={key} onMouseEnter={() => setIsHover(key)}>
                                        <p>{c.title}</p>
                                        {c.categories && (
                                            <ul className={`${isHover === key ? 'nav-hover' : 'nav-hover-out'}`} onMouseLeave={() => setIsHover(null)}>
                                                {c.categories.map((sub) => (
                                                    <li key={sub.url}>
                                                        <Link href={`/${key}/${sub.url}`} onClick={() => {
                                                            setOpenSitemap(false); setIsHover(null)
                                                        }
                                                        }>{sub.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </header>
            <div className="white-bg" style={{display: openMenu ? "block" : "none"}}></div>
        </>
    )
}