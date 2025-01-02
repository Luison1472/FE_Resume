import React from 'react';

const Skill = () => {
    return (
        <section id="skill_box" className="py-12 text-left text-black">
            <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-6">
                <div className="border-b pb-6 mb-6">
                    <h2 className="text-3xl font-bold">Skill Set</h2>
                    <p className="text-base mt-2">
                        제가 보유한 기술 스택과 도구들입니다.<br /> 프로젝트에 따라 적절히 활용하며, 지속적으로 배우고 성장하는 데 집중하고 있습니다.
                    </p>
                </div>

                <div className="space-y-8 ">
                    {/* Frameworks */}
                    <div>
                        <h3 className="text-xl font-semibold border-b pb-2">Frameworks</h3>
                        <ul className="list-none mt-4">
                            <li>React.js</li>
                            <li>TailwindCSS</li>
                            <li>DaisyUI</li>
                        </ul>
                    </div>

                    {/* Languages */}
                    <div>
                        <h3 className="text-xl font-semibold border-b pb-2">Languages</h3>
                        <ul className="list-none mt-4">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>

                    {/* Libraries */}
                    <div>
                        <h3 className="text-xl font-semibold border-b pb-2">Libraries</h3>
                        <ul className="list-none mt-4">
                            <li>Recoil</li>
                            <li>React Query</li>
                        </ul>
                    </div>

                    {/* Design Tools */}
                    <div>
                        <h3 className="text-xl font-semibold border-b pb-2">Design Tools</h3>
                        <ul className="list-none mt-4">
                            <li>Figma</li>
                        </ul>
                    </div>

                    {/* Collaboration Tools */}
                    <div>
                        <h3 className="text-xl font-semibold border-b pb-2">Collaboration Tools</h3>
                        <ul className="list-none mt-4">
                            <li>Notion</li>
                            <li>Slack</li>
                        </ul>
                    </div>

                    {/* Backend Skills */}
                    <div>
                        <h3 className="text-xl font-semibold border-b pb-2"> * Back-End Skills</h3>
                        <ul className="list-none mt-4 ">
                            <li>Nest.js</li>
                            <li>AWS Lambda</li>
                            <li>AWS EC2 (Linux Server)</li>                            
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
