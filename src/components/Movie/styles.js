import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  padding: 24px 120px;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  opacity: 0.05;
  border-radius: 10px;
  //padding: 22px;
  //padding: 24px 120px 24px 120px;

  > h2{
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    display: flex;
    margin-top: 24px;
    
  }
`;
