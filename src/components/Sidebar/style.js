import styled, { css } from "styled-components";

const display_flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  background-color: #fff;
  padding: 30px 24px 30px 0;

  .nav-item {
    ${display_flex}
    text-decoration: none;
    margin-bottom: 16px;
    color: #2d3a45;
    padding: 2px 0 2px 36px;
  }

  .active {
    color: #fff;
    background-color: #fcb600;
    border-radius: 0px 6px 6px 0px;
    div {
      background-color: #fcb600;
    }
  }

  .log-out {
    ${display_flex}
    text-decoration: none;
    color: #2d3a45;
    margin-top: 20px;
    padding: 2px 0 2px 36px;
  }
`;

export const IconWrapper = styled.div`
  ${display_flex}
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f6f6f6;
  border-radius: 6px;
  margin-right: 12px;
`;

export const LogoContainer = styled.div`
  ${display_flex}
  margin-bottom: 60px;
  padding-left: 24px;
`;

LogoContainer.ImgWrapper = styled.div`
  margin-right: 20px;
  .logo-img {
    width: 100%;
    border-radius: 50%;
  }
`;

LogoContainer.InfoWrapper = styled.div``;

export const LogoTitle = styled.h3``;

export const LogoDiscription = styled.p`
  font-size: 14px;
  opacity: 0.6;
`;
