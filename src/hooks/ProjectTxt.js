// 프로젝트 아이템 애니메이션 로직
const handleMouseEnter = (setVisible) => {
    setVisible(true); // 마우스가 요소에 들어오면 visible 상태로 변경
  };
  
  const handleMouseLeave = (setVisible) => {
    setVisible(false); // 마우스가 요소를 벗어나면 애니메이션 되돌리기
  };
  
  // 스크롤에 따른 애니메이션 실행
  const handleScrollEvent = () => {
    const target = document.querySelector(".projectTxt");
    const rect = target.getBoundingClientRect();
  
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      target.classList.add("visible"); // 애니메이션 실행
    } else {
      target.classList.remove("visible"); // 애니메이션 되돌리기
    }
  };
  
  window.addEventListener("scroll", handleScrollEvent);
  
  export { handleMouseEnter, handleMouseLeave, handleScrollEvent };
  