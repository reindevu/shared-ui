"use client";

import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Примерный порог для мобильных устройств
    };

    // Вызываем обработчик один раз, чтобы установить начальное значение
    handleResize();

    // Добавляем слушатель события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Убираем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
