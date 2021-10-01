import React, { useState } from "react";
import * as styleImage from "./style/Image.js";

const Image = ({ alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  
  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <styleImage.figure>
      {!loaded && <styleImage.skeleton />}
      <styleImage.image
        opacity={loaded ? 1 : 0}
        onLoad={handleLoad}
        alt={alt}
        {...props}
      />
    </styleImage.figure>
  );
};


export default Image;
