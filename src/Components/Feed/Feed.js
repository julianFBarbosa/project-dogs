import React, { createContext, useEffect, useState } from "react";
import FeedModal from "./FeedModal.js";
import FeedPhotos from "./FeedPhotos.js";

export const ModalContext = createContext();

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1, 2]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    const infiniteScroll = () => {
      if (!infinite) return;

      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

      if (scroll > height * 0.75 && !wait) {
        setPages((pages) => [...pages, pages.length + 1]);
        wait = true;

        setTimeout(() => {
          wait = false;
        }, 500);
      }
    };

    window.addEventListener("scroll", infiniteScroll);
    window.addEventListener("wheel", infiniteScroll);

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <ModalContext.Provider value={{ modalPhoto, setModalPhoto }}>
        {modalPhoto && <FeedModal />}
        {pages.map((page) => (
          <FeedPhotos key={page} page={page} setInfinite={setInfinite} />
        ))}
      </ModalContext.Provider>
    </div>
  );
};

export default Feed;
