import React, { createContext, useEffect, useState } from "react";
import FeedModal from "./FeedModal.js";
import FeedPhotos from "./FeedPhotos.js";
import PropTypes from "prop-types";
import Head from "../Helper/Head.js";

export const ModalContext = createContext();

const Feed = ({ user, title }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1, 2]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    console.log('wait', wait)
    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
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
        {title && <Head title={title} />}
        {modalPhoto && <FeedModal />}

        {pages.map((page) => (
          <FeedPhotos
            key={page}
            page={page}
            setInfinite={setInfinite}
            user={user}
          />
        ))}
      </ModalContext.Provider>
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
