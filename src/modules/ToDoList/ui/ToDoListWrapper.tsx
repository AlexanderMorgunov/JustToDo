import { FC } from "react";
import styled from "styled-components";

const StyledToDoListWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .list-wrapper {
    width: 100%;
    max-height: 60vh;
    overflow-y: auto;
    margin-bottom: 30px;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 20px;
    }
  }
`;

interface Props {
  children?: React.ReactNode;
}

const ToDoListWrapper: FC<Props> = ({ children }) => {
  return (
    <StyledToDoListWrapper>
      <div className="list-wrapper">
        <div className="list">{children}</div>
      </div>
    </StyledToDoListWrapper>
  );
};

export { ToDoListWrapper };
