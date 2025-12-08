"use client";
import { PRODUCT } from "@/data/product";
import { pathnameFilter } from "@/util/pathname";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function ProductLayout() {
    const pathname = usePathname();
    const category = pathnameFilter(pathname);
    const product = PRODUCT.find(p => p.id === category?.url);

    const moreProduct = useMemo(() => {
        if (!product) return [];

        const keywords = product.title.split(" ");

        const similar = PRODUCT.filter(item =>
            item.id !== product.id &&
            keywords.some(word => item.title.includes(word))
        );

        const rest = PRODUCT.filter(item =>
            item.id !== product.id &&
            !similar.some(s => s.id === item.id)
        );

        const shuffle = <T,>(arr: T[]): T[] =>
            [...arr].sort(() => Math.random() - 0.5);

        const randomRest = shuffle(rest);

        return [...similar, ...randomRest].slice(0, 4);
    }, [product]);

    return (
        <>
            <div className="special">
                <div>
                    <div className="title">
                        <h2>{product?.intro}</h2>
                    </div>
                    <div className="display-flex-flow">
                        {product?.special.map((p) =>
                            <section key={p.content}>
                                <div>
                                    <Image src={p.icon} alt={p.content} width={180} height={180} />
                                </div>
                                <p>{p.content}</p>
                            </section>
                        )}
                    </div>
                </div>
            </div>
            <article className="product">
                <div>
                    {/* <div className="display-left">
                        <h3>상품 상세 내용</h3>
                        <Image src="/icons/leaf.png" alt="나뭇잎이미지" width={52} height={32} />
                    </div> */}
                    <div>
                        <Image src="/icons/logo.png" alt="로고" width={317} height={202} />
                    </div>
                    <div className="display-flex-flow">
                        <div>
                            <Image src={product ? product.productImg : ""} alt={product ? product.title : ""} width={580} height={580} />
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>식품의 유형</td>
                                    <td>{product?.type}</td>
                                </tr>
                                <tr>
                                    <td>내용량</td>
                                    <td>{product?.content}</td>
                                </tr>
                                <tr>
                                    <td>주원료</td>
                                    <td>{product?.ingredient}</td>
                                </tr>
                                <tr>
                                    <td>소비기한</td>
                                    <td>{product?.date}</td>
                                </tr>
                                <tr>
                                    <td>용도</td>
                                    <td>{product?.use}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className="title">
                            <h2>다른 상품보기</h2>
                        </div>
                        <div className="display-flex-flow">
                            {moreProduct ? moreProduct?.map((p) =>
                                <section key={p.id}>
                                    <Link href={`/product/${p.id}`}>
                                        <div>
                                            <Image src={p.productImg} alt={p.title} width={250} height={250} />
                                        </div>
                                        <p>{p.title}</p>
                                    </Link>
                                </section>
                            ) : <p>상품을 불러오는 중입니다..</p>}
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}