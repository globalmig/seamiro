import CategoryBanner from "@/components/CategoryBanner";
import Image from "next/image";

export default function BusinessPage() {
  return (
    <>
      <CategoryBanner />
      <article className="business1">
        <div>
          <div>
            <div>
              <Image src="/icons/logo.png" alt="김밥 단무지 제조 전문 세미로" width={317} height={202} />
            </div>
            <p>
              세미로는 순우리 말 뜻처럼 <span>“자연 그대로 언제나 변함없이”</span> 엄선된 원재료를 사용하여 건강한 식품을 제조합니다. 6차례의 세척, 선별, 공정을 거친 철저한 위생관리로 소비자의 건강과 안전을 최우선으로 생각하는 기업입니다. 자연의 건강함을 그대로 담은 세미로의 식품으로 전세계에 K-FOOD의 우수함을 전하고자합니다.
            </p>
          </div>
          <div>
            <Image className="pc" src="/images/orgamization_pc.png" alt="조직도" width={1646} height={287} />
            <Image className="mo" src="/images/orgamization_mo.png" alt="조직도" width={508} height={580} />
          </div>
        </div>
      </article>
      <article className="business2">
        <div>
          <div className="title">
            <h2>세미로의 노하우가 담긴 조미액으로 만든 새콤달콤한 단무지</h2>
            <p>신선한 원료로 2차 조미하여, 세미로만의 특별한 조미액에 절단한 무를 담가 아삭하고 새콤 달콤하며 깔끔한 맛의 단무지를 만듭니다.</p>
          </div>
          <div className="display-flex-flow">
            <div>
              <Image src="/images/김밥단무지.png" alt="김밥 단무지" width={712} height={540} />
            </div>
            <div>
              <Image src="/images/깍둑단무지.png" alt="깍둑 단무지" width={712} height={540} />
            </div>
          </div>
        </div>
      </article>
    </>
  )
}