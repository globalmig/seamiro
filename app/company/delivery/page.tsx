import CategoryBanner from "@/components/CategoryBanner";
import Image from "next/image";

export default function DeliveryPage() {
    return (
        <>
            <CategoryBanner />
            <article className="delivery">
                <div>
                    <div>
                        <div className="title">
                            <h2>처음부터 끝까지 직접 관리하는 경쟁력</h2>
                        </div>
                        <div className="display-flex-flow">
                            <section>
                                <div>
                                    <Image src="/icons/delivery_1.png" alt="해외 반가공 공장 운영" width={110} height={110} />
                                </div>
                                <h3>해외 반가공 공장 운영</h3>
                                <p>기존의 단무지 회사와 달리 여러 공정을 단축할 수 있어 인건비와 물류비를 절감할 수 있습니다.</p>
                            </section>
                            <section>
                                <div>
                                    <Image src="/icons/delivery_2.png" alt="타사 대비 저렴한 비용" width={110} height={110} />
                                </div>
                                <h3>타사 대비 저렴한 비용</h3>
                                <p>해외 농민(信用社: 신용사)분들과 직접적인 거래를 통해 원재료를 타사에 비해 저렴하게 유통하고 있습니다.</p>
                            </section>
                            <section>
                                <div>
                                    <Image src="/icons/delivery_3.png" alt="최소 인원, 최대 생산량" width={110} height={110} />
                                </div>
                                <h3>최소 인원, 최대 생산량</h3>
                                <p>해외에서 제품을 반가공하고, 국내에서 세척 후 포장을 완료합니다. 2열 방식의 포장 설비 라인으로 최소한의 인원으로 하루 약 4,000박스~5,000박스(4개입)를 생산할 수 있습니다.</p>
                            </section>
                            <section>
                                <div>
                                    <Image src="/icons/delivery_4.png" alt="운송 차량 보유" width={110} height={110} />
                                </div>
                                <h3>운송 차량 보유</h3>
                                <p>배송업무에 있어 기업과 개인이 원하는 납기일과 리드타임을 지키는 데 최선을 다하고 있습니다.</p>
                            </section>
                        </div>
                    </div>
                    <div>
                        <div className="title">
                            <h2>주요 납품처</h2>
                            <p>세미로는 다양한 식자재 물류 센터 및 프랜차이즈에 납품하고 있습니다.</p>
                        </div>
                        <div className="display-flex-flow">
                            <section>
                                <div>
                                    <Image src="/icons/foodist_logo.png" alt="푸디스트 납품" width={329} height={151}/>
                                </div>
                                <div>
                                    <p>푸디스트</p>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <Image src="/icons/spc_logo.png" alt="SPC 납품" width={772} height={238}/>
                                </div>
                                <div>
                                    <p>SPC</p>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <Image src="/icons/cj_logo.png" alt="CJ 프레시원 납품" width={342} height={118}/>
                                </div>
                                <div>
                                    <p>CJ 프레시원</p>
                                </div>
                            </section>
                        </div>
                        <table className="mo">
                            <tbody>
                                <tr>
                                    <td>00단지</td>
                                    <td>00돈까스</td>
                                </tr>
                                <tr>
                                    <td>00쌀국수</td>
                                    <td>프랜차이즈 체인점</td>
                                </tr>
                                <tr>
                                    <td>식자재 물류 센터</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="pc">
                            <tbody>
                                <tr>
                                    <td>00단지</td>
                                    <td>00돈까스</td>
                                    <td>00쌀국수</td>
                                </tr>
                                <tr>
                                    <td>프랜차이즈 체인점</td>
                                    <td>식자재 물류 센터</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </article>
        </>
    )
}