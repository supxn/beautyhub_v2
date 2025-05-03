import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) { // если нет якоря
      window.scrollTo({ top: 0, behavior: 'auto' }); // можно behavior: 'smooth' для плавности
    }
  }, [pathname, hash]);
};

export default useScrollToTop;
