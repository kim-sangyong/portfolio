import { useRef } from "react";
import React from "react";
import {Helmet} from "react-helmet-async";
import styles from "../assets/styles/MainPage.module.scss";
import MainImg from "../assets/images/MainImg.png";
import MyPhoto from "../assets/images/MyPhoto.jpg";
import useObserver from "../hooks/observer.js";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";
import Tablet from "../assets/images/TabletIpad.png";
import Mac from "../assets/images/Mac.png";
import Imac from "../assets/images/Imac.png";

function MainPage () {
    const titleRef = useRef(null);

    const isVisible = useObserver(titleRef, { threshold: 0.5 });
    

    return(
        <>
            <Helmet>
                <title>김상용 | 웹 퍼블리셔 포트폴리오</title>
                    <meta name="description" content="안녕하세요 신입 웹 퍼블리셔 김상용입니다. 저의 포트폴리오에 오신 걸 환영합니다." />
                    <meta name="keywords" content="포트폴리오, 퍼블리셔, 웹 개발자, 엡 퍼블리셔, HTML, CSS, SCSS, 자바스크립트, 
                            리액트, 프론트엔드 개발자" />

                    {/* Open Graph tags SNS 메타태그*/}
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="나의 포트폴리오 - 웹 퍼블리셔" />
                    <meta property="og:description" content="웹 표준, 웹 접근성, SEO를 최적화를 하여 만든 저의 포트폴리오입니다.
                                    저의 기술과 작업을 확인해보세요!" />
                    {/* <meta property="og:image" content="https://yourwebsite.com/your-image.jpg" />
                    <meta property="og:url" content="https://yourwebsite.com" /> */}

                    {/* Twitter Card tags 트위터 메타태그*/}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="나의 포트폴리오 - 웹 퍼블리셔" />
                    <meta name="twitter:description" content="저의 기술과 작업을 확인하고 함께 협업할 기회를 가지세요!" />
                    {/* <meta name="twitter:image" content="https://yourwebsite.com/your-image.jpg" /> */}
            </Helmet> 
            {/* 메인 섹션 */}
            <section className={styles.mainSection}>
                <div className={styles.con}>
                    <h2 
                        ref={titleRef}
                        className={`${styles.mainTitle} ${isVisible ? styles.animate : ""}`}
                    >
                        안녕하세요.<br />   
                        신입 웹 퍼블리셔<br />
                        <span className={styles.mainSpan}>김상용입니다.</span>
                    </h2>
                        <img src={MainImg} alt="" className={styles.mainImg}/>
                </div>
            </section>
            {/* AboutMe 섹션 */}
            <section className={styles.aboutSection} id="aboutMe">
                <div className={styles.aboutBox}>
                    <h2 className={styles.aboutTitle}>About Me</h2>
                    <div className={styles.aboutFlex}>
                        <div className={styles.imgBox}>
                            <img src={MyPhoto} alt="" className={styles.myPhoto}/>
                        </div>
                        <div className={styles.aboutTxtBox}>
                            <h3 className={styles.txtTitle}>김상용</h3>
                            <p className={styles.aboutP}>안녕하세요! 신입 퍼블리셔 김상용입니다.</p>
                            <p className={styles.aboutP}>웹 퍼블리셔로서 웹 표준과 웹 접근성을 철저히 준수하여
                                모든 사용자가 편리하고 효율적으로 웹 페이지를 이용할 수 있도록 최적화된 웹사이트를 구축합니다.</p>
                            <p className={styles.aboutP}>HTML, CSS를 활용해 구조적이고 의미 있는 마크업을 작성하며
                                화면 리더 등 다양한 사용자가 접근할 수 있도록 설계합니다.
                            </p>
                        </div>
                    </div>
                </div>
              {/* 스터디 박스 */}
              <div className={styles.studyCon}>
                <div className={styles.eduCon}>
                    <h3 className={styles.eduTitle}>EDUCATION</h3>
                    <p className={styles.eduP}>2024-03 ~ 2024-09 핀테크 서비스를 위한 풀스택 과정 수료</p>
                    <p className={styles.eduP}>2024-06 웹 디자인 마스터과정 Figma (21.5 hours)</p>
                    <p className={styles.eduP}>2024-12 유데미 Adobe Photoshop Essentials Training Course (11.5 hours)</p>
                </div>
                <div className={styles.licenseCon}>
                    <h3 className={styles.licenseTitle}>License</h3>
                    <p className={styles.licenseP}>리눅스 마스터 2급</p>
                    <p className={styles.licenseP}>자동차 운전면허증 2종 보통</p>
                    <p className={styles.licenseP}>칵테일 아티스트 경영사 2급</p>
                    <p className={styles.licenseP}>카페 바리스타 2급</p>
                </div>
              </div>
            </section>
            {/* 스킬 섹션 */}
            <section className={styles.skillCon} id="skill">
            <h3 className={styles.skillTitle}>Skill</h3>
                <div className={styles.flexBox}>
                    <div className={styles.iconBox}>
                        <ul className={styles.iconItem}>
                            <li style={{ color: '#e44d26' }}><FaHtml5 className={styles.htmlIcon} alt="HTML 5"/></li>
                            <li style={{ color: '#2666dd' }}><IoLogoCss3 className={styles.cssIcon} alt="CSS 3 "/></li>
                            <li style={{ color: '#f13b35' }}><FaSass className={styles.sassIcon} alt="SASS"/></li>
                            <li style={{ color: '#007ACC' }}><VscVscode className={styles.vsIcon} alt="VisualStudioCode"/></li>
                            <li style={{ color: '#61DAFB' }}><FaReact className={styles.reactIcon} alt="React"/></li>
                            <li style={{ color: '#F7DF1E' }}><FaJs className={styles.jsIcon} alt="JavaScript"/></li>
                            <li style={{ color: '#254155' }}><SiAdobephotoshop className={styles.photoIcon} alt="PhotoShop"/></li>
                            <li style={{ color: '#F24E1E' }}><BiLogoFigma className={styles.figmaIcon} alt="Figma"/></li>
                        </ul>
                    </div>
                </div>
                        {/* dl 섹션 */}
                    <dl className={styles.dlCon}>
                        <dt>✔</dt>
                        <dd>HTML5의 구조를 이해하며 웹 표준, 웹접근성을 고려하여 구축합니다.</dd>
                        <dd>SCSS를 사용하여 유지보수 가능한 스타일시트를 작성하고, 변수등을 활용한 효율적인 스타일링 경험이 있습니다.</dd>
                        <dd>VS Code를 사용하여 Git 연동, 라이브 서버를 통해 실시간 미리보기를 이용한 효율적인 개발을 했습니다.</dd>
                        <dd>React를 통해 컴포넌트를 기능별로 분리하고 
                            가독성과 재사용성을 높이며 유지보수를 용이하게 만들었습니다.</dd>
                        <dd>누끼따기 등 간단한 포토샵 활용이 가능합니다.</dd>
                        <dd>레이아웃을 구축하고 간단한 디자인이 가능합니다.</dd>
                    </dl>
            </section>
            {/* 프로젝트 섹션 */}
            <section className={styles.projectCon} id="project">
                <h3 className={styles.projectTitle}>Project</h3>
                <ul className={styles.projectBox}>
  
                    <li className={styles.rowBox}>
                        <img src={Tablet} alt="루나카사 프로젝트 이미지" className={styles.projectImg}/>
                            <div className={styles.projectTxt}>
                                <h3>루나카사-LUNACASA 개인 프로젝트</h3>
                                <p>루나카사는 직접 구상한 가구사이트이며
                                    HTML, SCSS,<br /> JavaScript, 라이브러리 등을
                                    사용하여 퍼블리싱<br /> 프로젝트를 진행했습니다.</p>
                                    <div className={styles.aBox}>
                                        <a href="https://kim-sangyong.github.io/lunacasa/" target="_blank" rel="noopener noreferrer" className={styles.buttonBox}>
                                        사이트 바로가기
                                        </a>
                                    </div>
                            </div>
                    </li>
                    <li className={styles.imacRowBox}>
                        <img src={Imac} alt="바로네 펫샵 프로젝트 이미지" className={styles.imacImg}/>
                            <div className={styles.imacProjectTxt}>
                                <h3>바로네 펫샵 개인 프로젝트</h3>
                                <p>강아지 분양이며 HTML, SCSS, JavaScrip를 사용하여 <br />
                                   다양한 화면 크기와 디바이스에 최적화된 반응형 사이트입니다. </p>
                                   <div className={styles.imacBox}>
                                        <a href="https://kim-sangyong.github.io/baronepetshop/" target="_blank" rel="noopener noreferrer" className={styles.imacButtonBox}>
                                        사이트 바로가기
                                        </a>
                                    </div>
                            </div>
                    </li>
                    <li className={styles.macRowBox}>
                        <img src={Mac} alt="조기요 프로젝트 이미지" className={styles.macImg}/>
                            <div className={styles.macProjectTxt}>
                                <h3>Jogiyo 팀 프로젝트</h3>
                                <p>요기요 배달 웹사이트를 재현한 팀 프로젝트로
                                    MVC 패턴,<br /> Oracle, MyBatis를 활용하여
                                    로그인, 회원가입,<br /> 아이디 및 비밀번호 찾기 기능을 구현했습니다. </p>
                            </div>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default MainPage;