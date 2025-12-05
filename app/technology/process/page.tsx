import CategoryBanner from "@/components/CategoryBanner";
import Image from "next/image";

export default function ProcessPage() {
    return (
        <>
            <CategoryBanner />
            <article className="process">
                <div>
                    <section>
                        <p>해외 프로세스</p>
                        <div className="display-flex-flow">
                            <section>
                                <div>
                                    <Image src="/icons/process_1.png" alt="1. 재료 손질" width={409} height={338} />
                                </div>
                                <div>
                                    <h3>01. 재료 손질</h3>
                                    <p>절임무 6차례 선별, 탈피, 탈영, 세척</p>
                                </div>
                            </section>
                            <div className="pc">
                                <Image src="/icons/process_next.png" alt="다음" width={37} height={19} />
                            </div>
                            <section>
                                <div>
                                    <Image src="/icons/process_2.png" alt="2. 제단" width={493} height={239} />
                                </div>
                                <div>
                                    <h3>02. 제단</h3>
                                    <p>당사 제품에 맞게 제단 (김밥, 깍둑)</p>
                                </div>
                            </section>
                            <div className="pc">
                                <Image src="/icons/process_next.png" alt="다음" width={37} height={19} />
                            </div>
                            <section>
                                <div>
                                    <Image src="/icons/process_3.png" alt="3. 국내 수입" width={493} height={229} />
                                </div>
                                <div>
                                    <h3>03. 국내 수입</h3>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section>
                        <p>국내 프로세스</p>
                        <div className="display-flex-flow">
                            <section>
                                <div>
                                    <Image src="/icons/process_4.png" alt="4. 세척, 맛내기" width={393} height={348} />
                                </div>
                                <div>
                                    <h3>04. 세척·맛내기</h3>
                                    <p>세척 후 1차 맛내기</p>
                                </div>
                            </section>
                            <div className="pc">
                                <Image src="/icons/process_next.png" alt="다음" width={37} height={19} />
                            </div>
                            <section>
                                <div>
                                    <Image src="/icons/process_5.png" alt="5. 포장" width={492} height={236} />
                                </div>
                                <div>
                                    <h3>05. 포장</h3>
                                    <p>완제품 선별, 포장</p>
                                </div>
                            </section>
                            <div className="pc">
                                <Image src="/icons/process_next.png" alt="다음" width={37} height={19} />
                            </div>
                            <section>
                                <div>
                                    <Image src="/icons/process_6.png" alt="6. 출고" width={485} height={274} />
                                </div>
                                <div>
                                    <h3>06. 출고</h3>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </article>
        </>
    )
}