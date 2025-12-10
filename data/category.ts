export const CATEGORY_MAP: { [key: string]: { title: string; categories?: { name: string, url: string, banner: string }[] } } = {
    company: {
        title: '회사소개',
        categories: [
            { name: "세미로 소개", url: "business", banner: "/images/banner_1.jpg" },
            { name: "주요 납품처", url: "delivery", banner: "/images/banner_delivery.jpg" },
            { name: "오시는 길", url: "address", banner: "/images/banner_address.jpg" },
        ],
    },
    product: {
        title: '제품소개',
        categories: [
            { name: "김밥 단무지", url: "kimbap-pickled-radish", banner: "/images/banner_product_김밥.jpg" },
            { name: "꼬마 김밥 단무지", url: "little-kimbap-pickled-radish", banner: "/images/banner_product_꼬마김밥.jpg" },
            { name: "슬림 단무지", url: "slim-pickled-radish", banner: "/images/banner_product_슬림.jpg" },
            { name: "반달 단무지", url: "half-pickled-radish", banner: "/images/banner_product_반달.jpg" },
            { name: "온달 단무지", url: "whole-pickled-radish", banner: "/images/banner_product_온달.jpg" },
            { name: "깍둑 단무지", url: "kakduk-pickled-radish", banner: "/images/banner_product_깍둑.jpg" },
            { name: "양식 단무지", url: "farmed-pickled-radish", banner: "/images/banner_product_양식.jpg" },
            { name: "채 단무지", url: "pickled-radish", banner: "/images/banner_product_채단무지.jpg" },
            { name: "치킨무", url: "chicken-radish", banner: "/images/banner_product_치킨무.jpg" },
            { name: "쌈무 새콤한 맛", url: "sour-radish", banner: "/images/banner_product_쌈무새콤.jpg" },
            { name: "쌈무 와사비 맛", url: "wasabi-radish", banner: "/images/banner_product_쌈무와사비.jpg" },
            { name: "초절임 무", url: "pickled-vinegar", banner: "/images/banner_product_초절임무.jpg" },
            { name: "한입 단무지", url: "one-pickled-radish", banner: "/images/banner_product_한입.jpg" },
            { name: "두입 단무지", url: "two-pickled-radish", banner: "/images/banner_product_두입.jpg" },
        ],
    },
    technology: {
        title: '기술현황',
        categories: [
            //{ name: "생산시설 소개", url: "facility", banner: "/images/banner_facility.jpg", mo_banner: "/images/banner_facility_mo.jpg" },
            { name: "생산 프로세스", url: "process", banner: "/images/banner_process.jpg" },
        ],
    },
};