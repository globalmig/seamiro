'use client'
import MainSlide from "@/components/MainSlide";
import MenuSlide, { SlideHandle } from "@/components/MenuSlide";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {

  const slideRef = useRef<SlideHandle>(null);

  return (
    <>
      <MainSlide/>
      <article className="home">
        <div>
          <div>
            <h2>세미로 대표 메뉴</h2>
          </div>
          <div>
            <MenuSlide ref={slideRef}/>
            <div className="display-flex slide-arrow" style={{ gap: "10px", marginTop: "10px" }}>
                <button onClick={() => slideRef.current?.prev()} className='arrow-prev'>
                  <Image src="/icons/prev.png" alt="이전" width={16} height={30} />
                </button>
                <button onClick={() => slideRef.current?.next()} className='arrow-next'>
                  <Image src="/icons/next.png" alt="다음" width={16} height={30} />
                </button>
              </div>
          </div>
          <div className="display-flex-flow">
            <div className="display-flex">
              <div>
                <Image src="/icons/haccp.png" alt="haccp 인증" width={360} height={363} />
              </div>
              <div>
                <h3>서울 안전 인증 관리 기준<br />HACCP으로 더욱 안전하게 만듭니다.</h3>
                <p>세미로는 소비자에게 안전하고 맛있는 먹거리 제공을 위해 항상 최선을 다해 노력하겠습니다.</p>
              </div>
            </div>
            <div>
              <h3>세미로 고객센터</h3>
              <div className="display-left">
                <div>
                  <Image src="/icons/tel.png" alt="세미로 문의: 032-812-2268" width={202} height={202} />
                </div>
                <ul>
                  <li><span>1공장 파주.</span> 031-942-2268</li>
                  <li><span>2공장 인천.</span> 032-812-2268</li>
                </ul>
              </div>
              <ul>
                  <li>팩스. 032-812-2267</li>
                  <li>주소. 인천광역시 남동구 남동서로 83번길 70</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
