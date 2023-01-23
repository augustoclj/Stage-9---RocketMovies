import styled from "styled-components";



export const Container = styled.div`
  width:100%;
  

  > header{
    
    width:100%;
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.PINK_100_005};

    display: flex;
    align-items: center;

    padding: 64px 144px;

    a{
      color: ${({ theme }) => theme.COLORS.PINK_100};

      svg{
        color: ${({ theme }) => theme.COLORS.PINK_100};
      }
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;
  
  input{
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div:nth-child(4), button{
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width:186px;
  height: 186px;
  > img{
    border-radius: 50%;
    width:186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK_100};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input{
      display: none;
    }

    svg{
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

`;