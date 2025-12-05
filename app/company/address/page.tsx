import CategoryBanner from "@/components/CategoryBanner";
import Image from "next/image";

export default function AddressPage() {
    return (
        <>
        <CategoryBanner/>
        <article className="address">
            <div>
                {/*<div className="display-left">
                    <h3>세미로 오시는 길</h3>
                    <Image src="/icons/leaf.png" alt="나뭇잎이미지" width={52} height={32} />
                </div>*/}
                <div>
                    <Image src="/icons/logo.png" alt="로고" width={317} height={202} />
                </div>
                <section>
                    <section>
                        <p>1공장 파주</p>
                        <ul>
                            <li><span>주소</span> 경기도 파주시 상지석길 340-1</li>
                            <li><span>전화</span> 031-942-2268</li>
                            <li><span>메일</span> semiro168@naver.com</li>
                        </ul>
                    </section>
                    <div className="display-flex">
                        <div>
                            <Image src="/icons/location.png" alt="오시는 길 아이콘" width={18} height={26} />
                        </div>
                        <p>설문IC주유소→ 세미로(2분거리)를 검색하시고 찾아오시면 넓은 길로 들어올 수 있습니다.</p>
                    </div>
                    <div>
                        <Image src="/images/address_파주.png" alt="오시는 길 지도" width={1400} height={814} />
                    </div>
                </section>
                <section>
                    <section>
                        <p>2공장 인천</p>
                        <ul>
                            <li><span>주소</span> 인천광역시 남동구 남동서로 83번길 70</li>
                            <li><span>전화</span> 032-812-2268</li>
                            <li><span>팩스</span> 032-812-2267</li>
                        </ul>
                    </section>
                    <div>
                        <Image src="/images/address_인천.png" alt="오시는 길 지도" width={1400} height={814} />
                    </div>
                </section>
            </div>
        </article>
        </>
    )
}