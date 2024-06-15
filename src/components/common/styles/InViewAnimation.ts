import styled from "styled-components";

export const Layout = styled.div`
  &.animation {
    animation-name: up;
    animation-duration: 1500ms;

    @keyframes up {
      from {
        opacity: 0;
        transform: translateY(7%);
      }
      to {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }
`;
