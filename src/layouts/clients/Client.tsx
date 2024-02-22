import styled from "styled-components";
import { ClientType } from "./Client.types.";
import { StyledImage } from "../../components/styled/StyledImage";
import { ImageContainer } from "../../components/styled/ImageContainer";
import { myTheme } from "../../styles/MyTheme.styled";

type props = ClientType;
export const Client = ({ text, name, imageUrl }: props) => {
  return (
    <StyledClient>
      <ClientName>{name}</ClientName>
      <ImageContainer
        width={"70px"}
        height={"70px"}
        radius={"50%"}
        background={myTheme.colors.accent_2}
        opacity={"0.5"}
      >
        {imageUrl && <StyledImage src={imageUrl} />}
      </ImageContainer>
      <ClientText>{text}</ClientText>
    </StyledClient>
  );
};

type StyledClientProps = {};
const StyledClient = styled.article<StyledClientProps>``;

type ClientTextProps = {};
const ClientText = styled.p<ClientTextProps>``;

type ClientNameProps = {};
const ClientName = styled.a<ClientNameProps>`
  cursor: pointer;
`;
