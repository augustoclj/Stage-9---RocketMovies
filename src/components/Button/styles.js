import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 500;
  font-family: 'Roboto Slab', serif;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  &:disabled{
    opacity: 0.5;
  }
`;
