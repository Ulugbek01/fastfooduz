import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  padding: 0 40px;

  .no-data {
    text-align: center;
    color: red;
  }

  .warning-info {
    margin-top: 80px;
  }

  .loading-btn {
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-size: 14px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    min-height: 3rem;
    padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
    margin-top: 50px;
  }

  .loading-btn:hover,
  .loading-btn:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  .loading-btn:hover {
    transform: translateY(-1px);
  }

  .loading-btn:active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(141, 155, 168, 0.35895);
  margin: 20px 0;

  h3 {
    text-transform: uppercase;
    font-size: 14px;
    border-left: 1px solid;
    border-color: rgba(141, 155, 168, 0.4);
    padding-left: 12px;
  }

  h3:first-child {
    border-left: none;
  }
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  margin-bottom: 8px;
  padding: 0 20px;

  &:hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }

  p {
    flex: 1;
  }

  .action-container {
    display: flex;
    justify-content: center;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #edeff3;
  cursor: pointer;

  &:first-child {
    margin-right: 24px;
  }
`;
