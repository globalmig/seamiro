export const CATEGORY_MAP: { [key: string]: { title: string; categories?: {name: string, url: string, banner: string}[] } } = {
    company: {
        title: '회사소개',
        categories: [
            {name: "세미로 소개", url: "business", banner: ""},
            {name: "주요 납품처", url: "delivery", banner: ""},
            {name: "오시는 길", url: "address", banner: ""},
        ],
    },
    product: {
        title: '제품소개',
        categories: [
            {name: "김밥 단무지", url: "kimbap-pickled-radish", banner: ""},
            {name: "슬림 단무지", url: "slim-pickled-radish", banner: ""},
            {name: "반달 단무지", url: "half-pickled-radish", banner: ""},
            {name: "온달 단무지", url: "whole-pickled-radish", banner: ""},
            {name: "깍둑 단무지", url: "kakduk-pickled-radish", banner: ""},
            {name: "채 단무지", url: "pickled-radish", banner: ""},
            {name: "치킨무", url: "chicken-radish", banner: ""},
            {name: "쌈무 새콤한 맛", url: "sour-radish", banner: ""},
            {name: "쌈무 와사비 맛", url: "wasabi-radish", banner: ""},
            {name: "초절임 무", url: "pickled-vinegar", banner: ""},
            {name: "한입 단무지", url: "one-pickled-radish", banner: ""},
            {name: "두입 단무지", url: "two-pickled-radish", banner: ""},
        ],
    },
    technology: {
        title: '기술현황',
        categories: [
            {name: "생산시설 소개", url: "facility", banner: ""},
            {name: "생산 프로세스", url: "process", banner: ""},
        ],
    },
};