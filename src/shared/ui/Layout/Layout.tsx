import { FC } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #2d2d2d;
  align-items: center;
`;

interface Props {
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export { Layout };
