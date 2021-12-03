import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  padding: 0 40px;

  .warning-info {
    color: #ffc107;
  }

  .loading-btn {
    background-color: #20d472;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    color: #fff;
    cursor: pointer;
    min-height: 3rem;
    padding: 0 20px;
    margin: 30px auto;
    transition: all 250ms;
  }

  .loading-btn:active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }

  .loading-wrapper {
    text-align: center;
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(141, 155, 168, 0.35895);
  margin: 20px 0;
  padding: 0px 40px;

  .nav-title {
    text-transform: uppercase;
    font-size: 14px;
    border-left: 1px solid rgba(141, 155, 168, 0.35895);
    padding-left: 12px;
    flex: 1;
  }

  .nav-title:first-child {
    border-left: none;
  }
`;

export const BranchItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  margin-bottom: 8px;
  padding-left: 18px;

  &:hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }

  .branch-item__info {
    flex: 1;
  }

  .icons-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
`;
