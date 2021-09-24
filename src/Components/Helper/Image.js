import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Image = ({ alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  
  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <Wrapper.figure>
      {!loaded && <Wrapper.skeleton />}
      <Wrapper.image
        opacity={loaded ? 1 : 0}
        onLoad={handleLoad}
        alt={alt}
        {...props}
      />
    </Wrapper.figure>
  );
};

const skeleton = keyframes`
  from {
    background-position: 0px;
  }
  from {
    background-position: -200%;
  }
`;

const Wrapper = {
  figure: styled.div`
    display: grid;
    grid-area: 1/1;
  `,
  image: styled.img`
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: ${({ opacity }) => (opacity ? opacity : 0)};
  `,
  skeleton: styled.div`
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(to right, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: ${skeleton} 2s infinite linear;
  `,
};

export default Image;
