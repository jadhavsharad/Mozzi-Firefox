// locomotiveScroll.ts
'use client'
import { useEffect } from 'react';
import locomotiveModule from 'locomotive-scroll';

const useLocomotiveScroll = () => {
  useEffect(() => {
    let scroll: import('locomotive-scroll');
    import('locomotive-scroll').then((locomotiveModule) => {
      scroll = new locomotiveModule.default();
    });

    // Cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return null; // You can return anything here, or even leave it empty
};

export default useLocomotiveScroll;
