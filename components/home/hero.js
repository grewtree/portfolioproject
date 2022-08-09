import Animation_magnifying from "./animation3"
import Animation_circle from "./animation_circle";
import Link from "next/link";

export default function Hero() {
    return (
    <>
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-gray-900">당신은 데이터와 이야기의 힘을 믿으시나요?
                <br/>
                </h1>
                <p className="mb-8 leading-relaxed">가치를 피가 살았으며, 풀이 인생을 기관과 힘차게 열락의 이것이다. 아니더면, 듣기만 풀이 피다. 옷을 가슴에 오직 인간의 그들의 있는 인간이 없는 황금시대다. 속잎나고, 보이는 오직 것이다. 그들에게 맺어, 웅대한 끓는 이상 때에, 불어 유소년에게서 두기 피다. 스며들어 없는 생명을 우리 현저하게 보내는 우는 너의 불러 사막이다.</p>
                <div className="flex justify-center">

                    <Link href ="/projects">
                    <a
                        className="btn-project">프로젝트 보러가기</a>
                    </Link>
                </div>
            </div>

            <div className="lg:max-w-lg lg:w-full">
                
                <Animation_circle/>

            </div>
    </>
    );

}