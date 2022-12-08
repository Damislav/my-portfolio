import styled from "styled-components";
export const BackgroundAnimationWrapper = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  right: ${(props) => props.right && 0};
  left: ${(props) => props.left && 0};
`;
