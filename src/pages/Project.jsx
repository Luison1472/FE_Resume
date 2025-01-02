import React from 'react';

function Project() {
    return (
        <section id="resume" className="py-12 text-left text-black">
            <div className="max-w-6xl mx-auto bg-white shadow-sm rounded-lg p-6 grid grid-cols-12 gap-8">
                {/* 보유 기술 */}
                <div className="col-span-4 text-left font-bold text-lg border-r pr-4">보유 기술</div>
                <div className="col-span-8 ml-32">
                    <h3 className="font-bold mb-2">Programming Languages</h3>
                    <p>JavaScript (ES6), HTML5, CSS3</p> 

                    <h3 className="font-bold mt-4 mb-2">Framework / <span className="text-sky-600">Library</span></h3>
                    <div>React.js, Nest.js, TailwindCSS, DaisyUI / <span className="text-sky-600">Recoil, React-Query</span></div>

                    <h3 className="font-bold mt-4 mb-2">Server</h3>
                    <p>AWS Lambda, AWS EC2, MongoDB, MySQL, Docker</p>

                    <h3 className="font-bold mt-4 mb-2">Tool</h3>
                    <p>Docker container, GitHub</p>

                    <h3 className="font-bold mt-4 mb-2">ETC</h3>
                    <p>Notion, Slack, Figma</p>
                </div>

                <div className="col-span-12 border-t-1 border border-gray-500 my-6"></div>

                {/* 프로젝트 경험 */}
          <div className="col-span-4 text-left font-bold text-lg border-r pr-4">
            <p className="mb-36 pb-5">진행중인 프로젝트</p>
            <p>진행한 프로젝트</p>
                </div>
                
                <div className="col-span-8 ml-32">
            <div className="align-middle mb-2">
              <span className="font-semibold mr-2">Auto_Crypto (오토 코인)</span>
              <span className="bg-sky-600 p-1 rounded-md text-white">팀 프로젝트</span>
            </div>
                    <p className="mb-2">기간: 2024.11 ~ ing</p>
                    <p>업비트 거래소와 연동한 자동 매도/매수 프로그램</p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>내용 작성하기</li>
                    </ul>
                    <p className="mt-2">주요 기술:<br/> React.js, JavaScript, MongoDB</p>
            <div className="border-t-2 border border-gray-600 my-6"></div>
            
            {/* 9C-Node-Monitoring */}
            <div className="align-middle mb-2">
              <span className="font-semibold mr-2">9C-Node-Monitoring (트랜잭션 관리 서버 대시보드)</span>
              <span className="bg-red-400 p-1 rounded-md text-white">인턴</span>
            </div>
                    <p className="mb-2">기간: 2024.11 ~ 2024.12</p>
                    <p>개요: 트랜잭션 관리 및 대시보드 기능을 포함한 백엔드 서비스 구축</p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>RPC Endpoints를 통해 트랜잭션 상태 확인 및 데이터 수집</li>
                        <li>AWS Lambda에서 EC2로 마이그레이션하여 성능 최적화</li>
                        <li>MySQL 데이터베이스 구조 및 쿼리 최적화</li>
                        <li>대시보드 UI 개선 및 트랜잭션 상태 시각화</li>
                    </ul>
                    <p className="mt-2">주요 기술:<br/> Nest.js, AWS Lambda/EC2, MySQL, Docker</p>
                    <div className="border-t-1 border border-gray-400 my-6"></div>

            {/* Go Together */}
            <div className="align-middle mb-2">
              <span className="font-semibold mr-2">Go Together (함께가요)</span>
              <span className="bg-sky-600 p-1 rounded-md text-white">팀 프로젝트</span>
            </div>
                    <p className="mb-2">기간: 2024.02 ~ 2024.03</p>
                    <p>개요: 함께 여행하고 싶은 사람들을 위한 커뮤니티 웹/앱</p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>프론트엔드 리드를 맡아 매일 데일리 스크럼 진행</li>
                        <li>MSW를 사용하여 Mock API 구성</li>
                        <li>JWT 인증 구현 및 토큰 갱신</li>
                        <li>백엔드와의 API 설계 및 협업</li>
                        <li>WebSocket과 Stomp.JS를 이용하여 채팅 서비스 구현</li>
                        <li>React-Query와 Recoil을 활용한 상태 관리</li>
                        <li>TailWindCSS 기반 반응형 UI 설계</li>
                    </ul>
                    <p className="mt-2">팀 구성: 프론트엔드 2명, 백엔드 3명</p>
                    <p className="mt-2">주요 기술:<br/> React, JavaScript, React-Query, Recoil, TailwindCSS, Stomp.JS</p>

                    <div className="border-t-1 border border-gray-400 my-6"></div>

            {/* Yori-Jori */}
            <div className="align-middle mb-2">
              <span className="font-semibold mr-2">Yori-Jori (요리조리)</span>
              <span className="bg-green-600 p-1 rounded-md text-white">개인 프로젝트</span>
            </div>
                    <p className="mb-2">기간: 2024.01 ~ 2024.02</p>
                    <p>개요: 요리 레시피를 공유하고 싶은 사람들을 위한 웹</p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Firebase를 사용해 RESTful API 연동</li>
                        <li>Context-API를 활용한 상태 관리</li>
                        <li>Pagination과 React-Router-Dom 동적 라우팅 설계</li>
                        <li>Styled-Components로 UI 구현 및 디자인</li>
                    </ul>
                    <p className="mt-2">주요 기술:<br/> React, Firebase, Context-API, Styled-Components</p>

                    
                </div>
            </div>
        </section>
    );
}

export default Project;
