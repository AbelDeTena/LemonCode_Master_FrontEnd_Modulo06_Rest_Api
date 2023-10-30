import { css } from '@emotion/css';

export const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #E4E4E4 ;
  border-radius: 5px;
`;

export const Container = css`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #E4E4E4 ;
`;

export const Item = css`
  flex: 1;
  text-align: center;
`;

export const Alive = css`
  background-color: #7eff6e;
`;

export const Dead = css`
  background-color: #e84b44;
`;

export const unknown = css`
  background-color: #dad1d0;
`;

export const Female = css`
  background-color: #ff8dee; 
`;

export const Male = css`
  background-color: #38c0fc;  
`;

export const Genderless = css`
  background-color: #7A1EFF; 
`;
