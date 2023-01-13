import { useEffect, useState } from "react";

const useScrollPosotion = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePositoin = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePositoin);

    updatePositoin();

    return () => window.removeEventListener("scroll", updatePositoin);
  }, []);

  return scrollPosition;
};

export default useScrollPosotion;
