import styled from "styled-components";

export const LoadingLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const SpinnerBox = styled.div`
  width: 8rem;
  height: 8rem;
  border: 0.7rem solid var(--color-gray);
  border-top: 0.7rem solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
