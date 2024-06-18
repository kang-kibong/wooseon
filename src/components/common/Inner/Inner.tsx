import { ReactNode } from "react";
import * as S from "./Inner.styled";

const Inner = ({ children, ...props }: { children: ReactNode }) => {
  return <S.Container {...props}>{children}</S.Container>;
};

export default Inner;
