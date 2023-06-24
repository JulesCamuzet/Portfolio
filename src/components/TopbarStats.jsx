import { styled } from "styled-components";

const TopbarStats = () => {
  const stats = [
    {
      value: 42,
      label: "LEVEL",
    },
    {
      value: 1234,
      label: "COINS",
    },
  ];

  const TopbarStats = styled.div`
    display: flex;
    align-items: end;
    gap: 50px;
  `;

  const Value = styled.span`
    color: #7DFF68;
    font-family: Big-Shoulders-Display;
    font-size: 40px;
    margin-right: 5px;
  `;

  const Label = styled.span`
    color: lightgray;
    font-family: Big-Shoulders-Display;
    font-size: 25px;
  `;

  return (
    <TopbarStats>
      {stats.map((stat, index) => {
        return (
          <span>
            <Value>{stat.value}</Value>
            <Label>{stat.label}</Label>
          </span>
        );
      })}
    </TopbarStats>
  );
};

export default TopbarStats;
