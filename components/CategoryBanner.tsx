'use client';
import { pathnameFilter } from "@/util/pathname";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CategoryBanner() {

    const pathname = usePathname();
    const category = pathnameFilter(pathname);

    if (!category) {
        return <main></main>
    }

    return (
        <main>
            <div>
                {
                    category?.name !== "세미로 소개" ?
                        <h1>{category?.name}</h1> :
                        <div className="main-title">
                            <div>
                                <Image src="/icons/logo.png" alt="로고" width={317} height={202} />
                            </div>
                            <h3>“자연 그대로 언제나 변함없이”</h3>
                        </div>
                }
                <div>
                    <Image src={category?.banner} alt={category?.name} width={2560} height={700} />
                </div>
            </div>
        </main>
    )
}