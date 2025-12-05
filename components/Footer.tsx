import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <Image src="/icons/logo_white.png" alt="로고" width={317} height={202} />
                </div>
                <div>
                    <ul className="display-flex-flow">
                        <li>상호명: 세미로</li>
                        <li>대표자: 양권학</li>
                        <li>주소: 인천광역시 남동구 남동서로 83번길 70</li>
                        <li>사업자등록증: 497-65-00727</li>
                        <li>대표전화: 032-812-2268</li>
                        <li>팩스: 032-812-2267</li>
                        <li>이메일: seamiro168@naver.com</li>
                    </ul>
                    <p>Copyright © 세미로 All Rights Reserved.</p>
                </div>
            </div>
            <div></div>
        </footer>
    )
}