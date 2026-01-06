'use client';
import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";

export default function MainSlide() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
  };

  if (!settings) return null; // 초기 SSR 시 렌더링 막기

  return (
    <div className="main">
      <div className="main-title">
        <div>
          <Image src="/icons/logo.png" alt="로고" width={317} height={202} />
        </div>
        <h1>“자연 그대로 언제나 변함없이”</h1>
      </div>
      <Slider ref={sliderRef} {...settings} className="main-slider">
        <div className="slider-item">
          <div className="pc"><Image src="/images/banner_1.jpg" alt="image" width={1366} height={1025} /></div>
          <div className="mo"><Image src="/images/banner_1_mo.jpg" alt="image" width={360} height={500} /></div>
        </div>
        <div className="slider-item">
          <div className="pc"><Image src="/images/banner_2.jpg" alt="image" width={1366} height={1025} /></div>
          <div className="mo"><Image src="/images/banner_2_mo.jpg" alt="image" width={360} height={500} /></div>
        </div>
        {/* <div className="slider-item">
          <div className="pc"><Image src="/images/banner_2.jpg" alt="image" width={1366} height={1025} /></div>
          <div className="mo"><Image src="/images/banner_2_mo.jpg" alt="image" width={360} height={500} /></div>
        </div> */}
      </Slider>
    </div>
  );
}