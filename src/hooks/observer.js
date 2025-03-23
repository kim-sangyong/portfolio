import { useState, useEffect } from 'react';
// 이것도 애니메이션으로 구현가능함 굳이 js 필요없음 다시 생각해보자

function useObserver(ref, options) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);  // 요소가 화면에 들어왔을 때 상태 변경
          observer.disconnect();  // 한 번만 실행되게 옵저버 해제
        }
      },
      options // 옵션을 외부에서 받아서 커스터마이즈 할 수 있음
    );

    if (ref.current) {
      observer.observe(ref.current);  // 해당 요소를 옵저버로 관찰
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);  // 컴포넌트 언마운트 시 옵저버 해제
      }
    };
  }, [ref, options]);

  return isVisible;
}

export default useObserver;