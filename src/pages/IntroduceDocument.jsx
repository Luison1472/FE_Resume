import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function IntroduceDocument() {
    const Code =
        `if (response && response.email) {
    navigate('/member/KakaoSignUp', {
        state: { userInfo: response, code: code },
    });
} else if (response && response.accessToken) {
    localStorage.setItem('accessToken', response.accessToken);
    setKakaoUser(response);
    navigate('/');
}`;

    return (
        <div className="max-w-4xl text-left mx-auto p-6 bg-white rounded-lg shadow-md">
            <section className="mb-6">
                <p className="text-3xl text-black font-bold mb-4">자기소개서</p>
                <h2 className="text-xl font-bold text-gray-800 mb-4">1. 가치와 목표 </h2>
                <p className="text-black mb-4">
                    “코드 한 줄이 큰 결과를 가져온다.”
                    <br/><br />이것은 제가 개발하면서 항상 떠올리는 철학입니다. 단 한 줄의 코드라도 깊이 고민하고 신중하게 작성해야 한다는 의미입니다.<br />
                    실제 어떤 개발자의 예외 처리를 제대로 하지 않은 실수로 <strong>수많은 개인정보가 유출된 사건</strong>이 있었습니다.<br/>이 사건으로 저는 작은 실수가 얼마나 큰 문제를 초래할 수 있는지 깨달았습니다.
                    <br/>이 경험을 바탕으로, <strong>"Go Together / 같이 가요"</strong>라는 여행 커뮤니티 프로젝트에서 예외 처리의 중요성을 몸소 체험했습니다.
                </p>
                <SyntaxHighlighter language="javascript" style={prism}>
                    {Code}
                </SyntaxHighlighter>
                <p className="text-black">예를 들어,</p>
                <ul className="text-black list-none">
                    <li>- 이메일 인증을 받지 않은 사용자가 가입을 시도하는 경우</li>
                    <li>- 카카오 로그인 후, 토큰 없이 접근하는 경우</li>
                    <li>- 가입하지 않은 사용자가 메인 페이지에 접근하는 경우</li>
                </ul>
                <p className="text-black mt-4">
                   이러한 다양한 예외를 조건문 하나로 효과적으로 처리하며, 더 안전한 웹 서비스를 만들 수 있었습니다.
                    <br />
                    코드 한 줄이 프로젝트의 안정성을 결정짓듯, 저 역시 팀과 서비스에 꼭 필요한 개발자가 되고 싶습니다.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">2. 개발자로서의 성장과정</h2>
                <p className="text-black">
                    “전자공학 엔지니어에서 프론트엔드 개발자로”
                    <br /><br />
                    저는 전자공학을 전공했습니다. 다양한 방법을 고민하며 하나의 결과를 도출하는 과정이 즐거웠습니다.<br />
                    특히, <strong>아두이노 프로젝트</strong>에서 센서와 모터를 연결하고 코딩으로 생명을 불어넣어 동작시키는 과정이 인상적이었습니다. <br />
                    코딩에 흥미를 느낀 저는 반도체·디스플레이쪽으로 취직해 클린룸에서 하나의 공정을 반복하는 일과 <br/> 어려운 프로그래밍 사이에서 고민하고 있었습니다.<br />
                    개발자에 대해 더 알아보던 중, <strong>상상한 것을 현실로 구현하는 직업</strong>인 <strong>프론트엔드 개발자</strong>였습니다.<br/> <br />
                    그 후, <strong>6개월 동안 집중적으로 웹 개발을 공부</strong>하며,

                  
                </p>
                <ul className="text-black list-none mb-4">
                    <li>- HTML/CSS, JavaScript 기초</li>
                    <li>- React, 상태 관리 라이브러리 실무 적용</li>
                    <li>- 쿠팡, 뉴스 사이트 클론 코딩</li>
                </ul>
                <p className="text-black">
                    등을 통해 실력을 쌓아나갔습니다.
                    <br />
                    특히, <strong>NewsAPI를 활용한 뉴스 Viewer 프로젝트</strong>에서
                    <br />
                    기존의 페이지네이션 방식 대신 InterSection Observer API를 활용한 무한 스크롤을 적용하여 더 나은 사용자 경험을 제공할 수 있었습니다.
                    <br/><br/> 이처럼, 끊임없이 개선점을 찾고, 더 나은 방향을 고민하는 과정이 개발의 매력이라고 생각했습니다.
                </p>
                
            </section>

            <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">3. 추가적인 강점</h2>
            <p className="text-black">가장 열정을 쏟았던 프로젝트"</p>

            <p className="text-black mb-4 mt-4">
                프론트엔드 팀 리드로 <strong>"같이 가요"</strong> 프로젝트(여행 동행 매칭 서비스)를 진행하며, 
                <span className="font-semibold"> React, Tailwind CSS, Recoil, React-Query </span>
                등을 활용해 전반적인 UI/UX를 개선했습니다.
            </p>

            <p className="text-black mb-4">
                <span className="font-semibold">Recoil을 통한 전역 상태 관리</span>와 
                <span className="font-semibold"> React-Query로 데이터 페칭 최적화</span>를 진행하여 
                성능을 약 <strong>30% 향상</strong>시켰습니다.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">보안 강화를 위한 예외 처리</h3>
            <ul className="list-none list-inside text-black space-y-2">
                <li><span className="font-semibold">- Protect Route 기능</span>과 조건문을 활용한 비로그인 사용자 차단</li>
                <li><span className="font-semibold">- Access Token 유무 체크</span>를 통한 안전한 페이지 접근 제어</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">백엔드 협업</h3>
            <ul className="list-none list-inside text-black space-y-2">
                <li><span className="font-semibold">- Git Flow 전략</span>을 적용한 버전 관리</li>
                <li><span className="font-semibold">- ERD 설계 및 API 최적화</span> 논의</li>
                <li><span className="font-semibold">- CORS 및 pre-Flight 문제</span> 해결</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">MSW(Mock Service Worker) 활용</h3>
            <ul className="list-none list-inside text-black space-y-2">
                <li><span className="font-semibold">- req, res, ctx 응답을 즉각적으로 확인하기 어려운 문제</span>를 해결</li>
                <li><span className="font-semibold">- HttpResponse를 활용하여 명확한 응답 제공</span></li>
            </ul>

            <p className="text-black mt-6">
                이러한 경험을 통해 <span className="font-semibold">협업 역량</span>을 키웠고, <br/> 
                <span className="font-semibold">문제 해결 능력</span>을 향상시킬 수 있었습니다.
            </p>

            <p className="text-black mt-4">
                앞으로도 지속적인 학습과 경험을 통해, <span className="font-semibold">더 나은 사용자 경험</span>을 제공하는 
                프론트엔드 개발자가 되고 싶습니다.
            </p>
        </section>
        </div>
    );
}

export default IntroduceDocument;
