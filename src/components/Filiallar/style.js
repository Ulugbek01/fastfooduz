import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  padding: 0 40px;

  .warning-info {
    color: #ffc107;
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(141, 155, 168, 0.35895);
  margin: 20px 0;

  .nav-title {
    text-transform: uppercase;
    font-size: 14px;
    border-left: 1px solid rgba(141, 155, 168, 0.35895);
    padding-left: 12px;
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
