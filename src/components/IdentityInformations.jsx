import { styled } from "styled-components";

const IdentityInformations = () => {
  const Informations = [
    {
      label: "NAME",
      value: "JULES",
    },
    {
      label: "OCCUPATION",
      value: "FRONTEND DEVELOPER",
    },
    {
      label: "AGE",
      value: "20 YEARS OLD",
    },
  ];

  const IdentityInformations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
  `;

  const InformationLabel = styled.span`
    color: lightgrey;
    font-family: Iceland-Regular;
    font-size: 20px;
  `;

  const InformationValue = styled.span`
    color: #e84a4a;
    font-family: Big-Shoulders-Display;
    font-size: 35px;
  `;

  const Info = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <IdentityInformations>
      {Informations.map((info, index) => {
        return (
          <Info>
            <InformationLabel>{info.label}</InformationLabel>
            <InformationValue>{info.value}</InformationValue>
          </Info>
        );
      })}
    </IdentityInformations>
  );
};

export default IdentityInformations;
