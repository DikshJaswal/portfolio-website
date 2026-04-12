'use client';

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 3)),
    });

    setLenis(lenisInstance);

    const raf = (time: number) => {
      lenisInstance.raf(time);
    };

    function updateScroll(time: number) {
      lenisInstance?.raf(time);
      requestAnimationFrame(updateScroll);
    }

    requestAnimationFrame(updateScroll);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return <>{children}</>;
};
