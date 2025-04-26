import { useEffect, useState } from "react";

const breakPoint = 600;
const detectDevice = () => {
  return window.innerWidth <= breakPoint ? "MOBILE" : "DESKTOP";
};
const useWindowSize = () => {
  const [device, setDevice] = useState(() => detectDevice());

  useEffect(() => {
    const resize = () => {
      setDevice(detectDevice());
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  return device;
};

export default useWindowSize;
