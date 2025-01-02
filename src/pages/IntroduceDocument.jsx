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
                <h2 className="text-xl font-bold text-gray-800 mb-4">1. 개발자로서의 성장과정</h2>
                <p className="text-black mb-4">
                    “코드 한 줄이 큰 결과를 가져온다.”
                    <br /><br />
                    저는 개발을 하며 늘 갖고 있는 철학이 있습니다. 코드 한 줄을 적어도 많은 생각을 하자는 의미입니다.
                    평상시에 개발자들의 이야기를 찾아보던 중, if 문 한 줄을 넣지 않아 수많은 개인정보를 유출하게 된 사건이 있었습니다. 
                    예외 처리를 생각하지 못하고 작성했다가, 사용자들의 정보를 유출하게 만든 것입니다.
                    협업 프로젝트인 Go Together / 같이 가요 라는 여행 커뮤니티 프로젝트를 진행할 때, 예외 처리에 대한 중요성을 알게 되었습니다.
                </p>
                <SyntaxHighlighter language="javascript" style={prism}>
                    {Code}
                </SyntaxHighlighter>
                <p className="text-black mt-4">
                    이메일 인증을 받지 않았는데 가입하는 경우, 사용자 토큰을 받지 않았지만, 카카오 회원가입을 시도하는 경우, 가입을 하지 않았지만, 주 페이지에 접근하는 경우 등등
                    이러한 코드 한 줄로 인해 예상할 수 없는 경우들을 모두 생각하고 적용해 안전한 웹 서비스를 만들었습니다. 물론 코드 한 줄 안 적었다고 운영이 안 되는 건 아니겠지만 예외 처리 코드 한 줄로 인해서 더 효율적이고 질 좋은 프로젝트가 완성되었다고 생각됩니다.
                    <br />
                    저 또한 코드 한 줄이 되었으면 좋겠습니다.
                    저로 인해서 도움이 될 수 있다면 결정적인 한 줄의 코드가 되고 싶습니다.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold text-black mb-2">2. 가치와 목표</h2>
                <p className="text-black">
                    “전자공학 엔지니어에서 프론트엔드 개발자까지의 여정”
                    <br /><br />
                    하나의 결과를 가지고 여러 방법을 찾는 것이 좋아 전자공학과를 전공했습니다. 아두이노라는 소프트웨어와 하드웨어를 접목한 과목에 흥미가 있었으며, 간단한 코딩이지만 상상하고 있던 동작을 코딩을 통해 원하는 작품을 실현해 낼 수 있다는 것이 좋았습니다.
                    하지만, 전자공학의 미래는 반도체와 디스플레이에 갇혀있었고, 진정 원하고 있던 길인가 고민하고 있었습니다. 
                    졸업 후 방향을 모색하던 중, 개발자인 친형을 보며 또 다른 길이 보였습니다.
                    상상하던 것을 현실로 그려낼 수 있는, 협업으로 인해 하나의 작품을 도출해 낼 수 있는 프론트엔드 개발자를 꿈꾸게 되었습니다.
                    그렇게 저는 프론트엔드에 진심으로 매료되었고, 6개월 동안 집중적으로 개발 과정을 수강했습니다. HTML/CSS, JavaScript, 프레임워크 등의 기초부터 실무까지 배웠으며, 쿠팡을 비롯해, 유명한 웹사이트 모방과 다양한 수강 과제를 통해 실력을 쌓아갔습니다. 코딩을 배우는 과정에서, 더 나은 방향을 찾아가는 매력도 찾게 되었습니다. NewsAPI를 활용한 뉴스 Viewer를 만드는 토이프로젝트에서 일일이 페이지를 넘기고 클릭하는 Pagination 보다, 탐색 위주로 사용되는 Intersection Observer API를 도입해 무한 스크롤을 구현하여 사용자가 더욱 편한 환경을 구성하도록 하였으며, 같은 프로젝트지만 더 나은 방향, 편한 방향을 찾아가는 고민을 하며 결과물을 도출했을 때 나오는 성취감에서 더욱 큰 매력을 얻게 되었습니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-black mb-2">3. 추가적인 강점</h2>
                <p className="text-black">
                    "가장 열정을 가지고 임했던 프로젝트"
                    <br /><br />
                    프론트엔드 팀 리드로서, "같이 가요"라는 여행 동행자 매칭 서비스 개발에 참여했습니다. 주요 기술로는 React, Tailwind CSS, Recoil, React-Query를 활용했으며, 특히 전역 상태 관리를 위해 Recoil을 도입하고 React-Query로 데이터 페칭을 최적화해 약 30% 효율을 높였습니다. 또한 예외 처리를 위해 Protect Route 기능과 If 문으로 비로그인 사용자의 페이지 접근을 차단하는 역할을 맡았으며, Access Token이 없는 사용자는 접근할 수 없도록 조건문을 사용하여 안전한 웹 서비스를 설계했습니다. 백엔드와 협업으로 Git Flow를 사용하고 CI/CD를 통해 협업을 진행하였으며, 백엔드 회의에 직접 참여하여, ERD와 효율적인 API 설계, 및 CORS 와 pre-Flight에 관한 문제들을 해결했습니다.
                    <br /><br />
                    또한, 백엔드 API 개발 중 공백을 채우기 위해 MSW로 목 데이터 Test와 JWT 인증을 위한 시스템을 마련해 놓았으며, MSW 사용 중 req, res, ctx 응답을 즉각적으로 확인하지 못해, 데이터 통신 오류가 있었으나, HttpResponse를 활용해 명확한 응답을 제공받고 토큰과 목 데이터를 받아올 수 있도록 해결할 수 있었습니다. 이러한 경험을 통해, 협업에 대한 경험을 쌓을 수 있었고 기술적 문제를 해결하는 능력을 키울 수 있었습니다. 특히, 다양한 상황에서의 예외 처리와 보안 측면에서의 철저한 접근 제어는 사용자의 신뢰성을 보장하며, 서비스의 전반적인 안정성을 높이는 데 기여했습니다.
                    <br /><br />
                    앞으로도 지속적인 학습과 실무 경험을 통해 더 나은 사용자 경험을 제공하고, 혁신적인 프론트엔드 솔루션을 개발하는 데에 기여하고자 합니다. 저의 열정과 노력이 팀과 프로젝트에 긍정적인 영향을 미칠 것이라 확신합니다.
                </p>
            </section>
        </div>
    );
}

export default IntroduceDocument;
