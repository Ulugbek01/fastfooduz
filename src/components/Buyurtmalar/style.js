import styled, { css } from "styled-components";

const display_flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
`;

export const CardsContainer = styled.div`
  padding: 0 40px;
`;

export const CardContainer = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  margin-top: 12px;
  & > div {
    flex: 1;
    border-right: 2px solid #edeff3;
    padding: 20px 30px;
  }

  & > div:last-child {
    border-right: none;
  }

  &:hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
`;

const ButtonStyles = css`
  ${display_flex};
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  border: 5px solid #edeff3;
  cursor: pointer;
`;

export const CloseButtonWrapper = styled.div`
  ${ButtonStyles};
  right: -20px;
  top: 20px;
`;

export const CheckButtonWrapper = styled.div`
  ${ButtonStyles};
  right: -20px;
  bottom: 20px;
`;

CardContainer.Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .order-number {
    ${display_flex};

    .order-id {
      ${display_flex};
      justify-content: center;
      width: 90px;
      height: 36px;
      background-color: #20d472;
      border-radius: 18px;
      cursor: pointer;
      color: #fff;
    }

    .icon-wrapper {
      ${display_flex};
      justify-content: center;
      width: 36px;
      height: 36px;
      background-color: #edeff3;
      border-radius: 18px;
      margin-left: 16px;
      cursor: pointer;
    }
  }

  .clock-wrapper {
    ${display_flex};

    .clock {
      margin-right: 16px;
    }
  }
`;
CardContainer.User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .user-info {
    display: flex;

    .user-name {
      font-size: 18px;
      font-weight: 600;
      margin-left: 16px;
    }
  }

  .phone-info {
    display: flex;

    .phone-number {
      margin-left: 16px;
    }
  }
`;

CardContainer.Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .price-wrapper {
    ${display_flex};
    justify-content: space-between;

    .left-wrapper {
      ${display_flex};

      .icon {
        margin-right: 12px;
      }
    }

    .circle {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 8px;
      background-color: #14e5e4;
    }
  }

  .truck-wrapper {
    ${display_flex};

    .icon {
      margin-right: 12px;
    }
  }

  .title {
    font-size: 12px;
    color: #8d9ba8;
  }

  .total-value {
    letter-spacing: 0.8;
    font-weight: 600;
  }
`;
CardContainer.Location = styled.div`
  position: relative;
  .title {
    font-size: 12px;
    color: #8d9ba8;
  }

  .operator-info {
    margin-bottom: 10px;
  }

  .name,
  .filial,
  .location {
    font-size: 16px;
    font-weight: 600;
  }
`;

/* Header styles */
export const HeaderContainer = styled.div`
  ${display_flex};
`;

export const AddProductWrapper = styled.div`
  ${display_flex};
  height: 80px;
  background-color: #fff;
  padding: 0 20px;
  border-left: 2px solid #e5e5e5;
  border-right: 2px solid #e5e5e5;

  .title {
    font-weight: 600;
    font-size: 14px;
  }
`;

export const IconWrapper = styled.div`
  ${display_flex};
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #20d472;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 14px;
`;

export const FilterContainer = styled.div`
  ${display_flex};
  height: 80px;
  background-color: #fff;
  padding: 0 24px;
`;

FilterContainer.ItemWrapper = styled.div`
  ${display_flex};
  background-color: #edeff3;
  padding: 6px;
  border-radius: 24px;
`;

FilterContainer.Item = styled.div`
  text-align: center;
  line-height: 36px;
  width: 162px;
  height: 36px;
  background-color: ${({ isActive }) => (isActive ? "#fff" : "#EDEFF3")};
  box-shadow: ${({ isActive }) =>
    isActive ? "0px 2px 2px rgba(174, 176, 181, 0.314986)" : "none"};
  border-radius: 18px;
  cursor: pointer;
  font-size: 14px;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.5")};
`;

export const FilterContainerRight = styled.div`
  ${display_flex};
  justify-content: center;
  flex: 1;
  height: 80px;
  background-color: #fff;
  border-left: 2px solid #e5e5e5;
`;

export const FilterButtonContainer = styled.div`
  ${display_flex};
  justify-content: space-around;
  width: 100px;
  height: 48px;
  background-color: #edeff3;
  border-radius: 24px;
`;

export const FilterButtonWrapper = styled.div`
  ${display_flex};
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
  background-color: ${({ isActive }) => isActive && "#fff"};
  .v-icons {
    display: flex;
  }
`;

/* Column Cards */

export const CardContainerV = styled.div`
  display: flex;
  padding: 0 40px;
`;

CardContainerV.Column = styled.div`
  flex: 1;
`;

CardContainerV.Column.Card = styled.div`
  padding: 18px 16px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  margin: 8px 14px 0 0;
  &:hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }

  /* header styles */
  .card-header {
    ${display_flex};
    justify-content: space-between;
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);
    padding-bottom: 18px;
  }

  .card-header__number {
    display: flex;
    align-items: center;
    color: #fff;

    .number-container {
      width: 60px;
      height: 30px;
      background: #20d472;
      border-radius: 18px;
      ${display_flex};
      justify-content: center;
      font-size: 14px;
      margin-right: 10px;
    }

    .icon-container {
      width: 30px;
      height: 30px;
      background-color: #edeff3;
      border-radius: 18px;
      ${display_flex};
      justify-content: center;

      .icon {
        width: 12px;
        height: 15px;
      }
    }
  }

  .card-header__date {
    ${display_flex};

    .clock {
      margin-right: 10px;
    }
  }

  /* user info styles */
  .user-info {
    padding-top: 18px;
    .user {
      display: flex;
    }

    .user-contact_info {
      margin-left: 18px;
    }

    .name {
      font-weight: 600;
    }

    .phone {
      text-decoration: none;
      color: #2d3a45;
      opacity: 0.7;
      font-size: 14px;
    }
  }

  /* total value styles */
  .total-value {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);
    padding: 18px 0;

    .circle {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #14e5e4;
      margin-right: 10px;
    }

    .total {
      font-weight: 700;
    }

    .total_title {
      font-size: 12px;
      opacity: 0.7;
    }
  }

  /* operator info styles */
  .operator-info {
    ${display_flex};
    justify-content: space-between;
    padding-top: 18px;

    .title {
      font-size: 14px;
      opacity: 0.6;
    }

    .name {
      font-weight: 600;
    }
  }

  .icon-wrapper {
    ${display_flex};
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #fff;
    border: 5px solid #edeff3;
    cursor: pointer;
  }

  /* branch info styles */
  .branch-info {
    ${display_flex};
    justify-content: space-between;
    margin-top: 10px;

    .title {
      font-size: 12px;
      opacity: 0.6;
    }

    .name,
    .location {
      font-weight: 600;
    }
  }
`;
