import styled from 'styled-components';

export const Form = styled.form`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }
  }
`;
