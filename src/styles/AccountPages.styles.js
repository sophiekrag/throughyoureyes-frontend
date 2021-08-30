import { css } from "styled-components";

const BackgroudImage = css`
  width: 65%;
  max-width: 800px;
  height: 60vh;
  margin-left: 15%;
  position: absolute;
  z-index: 0;
  float: left;
`;

const WrapContainer = css`
  width: 90%;
  position: relative;
  z-index: 1;
`;

const PageHeader = css`
  text-align: center;
  font-size: 1.1rem;
  background: white;
  color: ${({ theme }) => theme.color.mainGrey};
  width: 30%;
  padding: 50px;
  float: right;
  margin-bottom: 200px;
  margin-right: 40px;
  box-shadow: 1px 1px 20px 0px;
  position: relative;
  z-index: 1;
`;

const ContainerMain = css`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;
`

const LinkStyle = css`
  color: ${({ theme }) => theme.color.mainGrey};
  font-size: 1.3rem;
  display: flex;
  align-items: flex-end;
`;

export {BackgroudImage, WrapContainer, PageHeader, ContainerMain, LinkStyle}