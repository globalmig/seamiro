'use client';
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { PRODUCT } from "@/data/product";
import Link from "next/link";

export interface SlideHandle {
  next: () => void;
  prev: () => void;
}

const MenuSlide = forwardRef<SlideHandle>((_, ref) => {
  const sliderRef = useRef<Slider>(null);
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(()=> {
    const width = window.innerWidth;

    setSettings ({
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: "ease-out",
      pauseOnHover: false,
      slidesToShow:
        width < 576 ? 1 :
        width < 992 ? 3 :
        width < 1200 ? 3 : 4,
      slidesToScroll: 1,
      centerMode: width < 576,
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 4 },
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 576,
          settings: { slidesToShow: 1 },
        },
      ],
    });
  },[])

  useImperativeHandle(ref, () => ({
    next: () => sliderRef.current?.slickNext(),
    prev: () => sliderRef.current?.slickPrev(),
  }));

  if (!settings) return null;
  
  return (
    <Slider ref={sliderRef} {...settings} className="menu-slider">
      {PRODUCT.map((p) =>
        <div key={p.id} className="menu-slider-item">
          <Link href={`/product/${p.id}`}>
            <div>
              <Image src={p.menuImg} alt={p.title} width={300} height={300} />
            </div>
            <div>
              <p>{p.title}</p>
            </div>
          </Link>
        </div>
      )}

    </Slider>
  );
})

MenuSlide.displayName = 'MenuSlide';
export default MenuSlide;