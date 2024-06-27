import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 80%;
`;

export const ModalContent = styled.div`
  margin: 3rem 0;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;

  & > input[type="date"],
  & > select {
    margin-left: 10px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;
