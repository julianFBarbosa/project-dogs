import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import media from "styled-media-query";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.8);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const photo = styled.div`
  animation: ${fadeIn} 0.3s;
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: #fff;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  ${media.lessThan("64rem")`
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  `}
`;

export const image = styled.div`
  grid-row: 1/4;
  ${media.lessThan("64rem")`
    grid-row: 1;
  `}
`;

export const details = styled.div`
  padding: 2rem 2rem 0;
`;
export const author = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const views = styled.span`
  &:before {
    content: "";
    width: 16px;
    height: 10px;
    display: inline-block;
    margin-right: 0.5rem;
    background-image: url(${(props) => props.background});
  }
`;

export const link = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export const attributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const attribute = styled.li`
  margin-right: 2rem;

  &:before {
    content: "";
    display: inline-block;
    height: 20px;
    margin: 5px 0.5rem 0 0;
    position: relative;
    top: 3px;
    width: 2px;
    background: #000;
  }
`;
