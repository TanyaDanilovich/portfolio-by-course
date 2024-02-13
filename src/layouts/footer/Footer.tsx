import { Section } from "../../components/styled/Section";
import { Container } from "../../components/styled/Container";
import styled from "styled-components";
import { StyledButton } from "../../components/styled/StyledButton";
import React from "react";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Icon } from "../../components/Icon";
import { socialNetworksData } from "./socialLinksData";
import socialNetworkSprite from "../../assets/svg/socialNetworkSprite.svg";
import { Menu } from "../../components/Menu";

export const Footer = () => {
  return (
    <Section>
      <Container>
        <div>
          <StyledButton>Here me</StyledButton>
          <p>hello@gmail.com</p>
          <p>Minsk</p>
          <p>+375(29)8-223-322</p>
        </div>
        <FlexWrapper>
          <SocialLinksList>
            {socialNetworksData.map((link) => (
              <SocialLink title={link.icon.iconId}>
                <a>
                  <Icon
                    key={link.id}
                    sprite={socialNetworkSprite}
                    width={"22px"}
                    height={"22px"}
                    id={link.icon.iconId}
                  />
                </a>
              </SocialLink>
            ))}
          </SocialLinksList>
        </FlexWrapper>
        <Menu />
        <Copiryting>
          © 2023 Tatsiana Danilovich, All Rights Reserved.
        </Copiryting>
      </Container>
    </Section>
  );
};

type SocialLinksListProps = {};
const SocialLinksList = styled.ul<SocialLinksListProps>``;

type SocialLinkProps = {};
const SocialLink = styled.li<SocialLinkProps>`
  cursor: pointer;
`;

type CopirytingProps = {};
const Copiryting = styled.div<CopirytingProps>``;
