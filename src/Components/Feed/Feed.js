import React, { createContext, useState } from "react";
import FeedModal from "./FeedModal.js";
import FeedPhotos from "./FeedPhotos.js";

export const ModalContext = createContext();

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      <ModalContext.Provider value={{ modalPhoto, setModalPhoto }}>
        {modalPhoto && <FeedModal />}
        <FeedPhotos />
      </ModalContext.Provider>
    </div>
  );
};

export default Feed;
