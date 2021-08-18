import { useEffect, useState } from "react";

const useMedia = media => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const listener = () => {
      setMatch(window.matchMedia(media).matches);
    };
    listener();
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [media]);

  return match;
};

export default useMedia;
