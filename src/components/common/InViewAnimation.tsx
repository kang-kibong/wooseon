import { ReactNode, useRef } from "react";
import * as S from "./styles/InViewAnimation";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface InViewAnimationProps {
  children: ReactNode;
}

const InViewAnimation = ({
  children,
  ...props
}: InViewAnimationProps) => {
  const ref = useRef(null);
  const isInViewport = useIntersectionObserver(ref);

  return (
    <S.Layout
      ref={ref}
      className={`${isInViewport ? "animation" : ""}`}
      {...props}
    >
      {children}
    </S.Layout>
  );
};

export default InViewAnimation;
