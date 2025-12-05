"use client";
import { CATEGORY_MAP } from "@/data/category";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

interface IMenuProps {
    openSitemap: boolean,
    openMenu: boolean,
    setOpenSitemap: Dispatch<SetStateAction<boolean>>
    setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export default function Menu({ openSitemap, openMenu, setOpenSitemap, setOpenMenu }: IMenuProps) {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    return (
        <>
        <nav className={openMenu || openSitemap ? "nav-open" : ""}>
            <div className="display-flex">
                <h3>{openSitemap ? "사이트맵" : "메뉴"}</h3>
                <div onClick={() => { setOpenSitemap(false); setOpenMenu(false) }}>
                    <Image src="/icons/close.png" alt="닫기 버튼" width={30} height={30} />
                </div>
            </div>
            <ul>
                {Object.entries(CATEGORY_MAP).map(([key, c]) => (
                    <li key={key}>
                        <div className="display-flex" onClick={() => setOpenSubMenu(openSubMenu === key ? null : key)}>
                            {c.categories && c.categories.length > 0 ? (
                                <>
                                    <p>{c.title}</p>
                                    <div className="mo">
                                        <Image
                                            src="/icons/nav_sub.png"
                                            alt="서브메뉴 열기"
                                            width={22}
                                            height={12}
                                        />
                                    </div>
                                </>
                            ) : (
                                <Link href={`/${key}`} onClick={() => {
                                    setOpenSitemap(false);
                                    setOpenMenu(false);
                                }
                                }>{c.title}</Link>
                            )}
                        </div>
                        {c.categories && (
                            <ul className={`submenu ${openSubMenu === key ? "sub-open" : ""}`}>
                                {c.categories.map((sub) => (
                                    <li key={sub.url}>
                                        <Link href={`/${key}/${sub.url}`} onClick={() => {
                                            setOpenSitemap(false); setOpenSubMenu(null); setOpenMenu(false);
                                        }
                                        }>{sub.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
        <div className="black-bg" style={{display: openSitemap ? "block" : "none"}}></div>
        </>
    )
}