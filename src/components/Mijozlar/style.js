import styled, { css } from "styled-components";

const display_flex = css`
  display: flex;
  align-items: center;
`;

/* Navbar styles */
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #fff;
  margin: 20px 0;
  box-shadow: 0px 3px 6px rgba(141, 155, 168, 0.35895);
  padding-left: 40px;

  .nav-title {
    font-size: 14px;
    text-transform: uppercase;
    flex: 1;
    border-left: 1px solid;
    border-color: rgba(141, 155, 168, 0.4);
    padding-left: 12px;
  }

  .nav-title:nth-child(4) {
    padding-right: 40px;
  }

  .nav-title:first-child {
    border-left: none;
  }
`;

NavbarContainer.Product = styled.h3``;
NavbarContainer.Categoriy = styled.h3``;
NavbarContainer.Price = styled.h3``;
NavbarContainer.Additional = styled.h3``;
NavbarContainer.Action = styled.h3``;

/* Main Section styles */
export const MainContainer = styled.div`
  width: 100%;
`;

export const CustomerItemWrapper = styled.div`
  ${display_flex};
  height: 60px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  margin: 0 40px 8px;
  padding-left: 16px;

  &:hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }

  & > div {
    flex: 1;
  }

  .icon-wrapper {
    ${display_flex};
    justify-content: center;
  }

  .status {
    color: #20d472;
  }
`;

export const IconWrapper = styled.div`
  ${display_flex};
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 50%;
  border: 4px solid #edeff3;
  cursor: pointer;
  margin-right: 10px;
`;

export const ButtonItem = styled.div`
  height: 40px;
  border: 1px solid rgba(141, 155, 168, 0.289527);
  border-radius: 6px;
  margin: 0 40px 24px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
`;
