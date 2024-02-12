import { StyledSection } from "../../components/styled/StyledSection";
import { SectionWrapper } from "../../components/styled/SectionWrapper";
import styled from "styled-components";
import { StyledButton } from "../../components/styled/StyledButton";
import React from "react";
import { StyledFlexWrapper } from "../../components/styled/StyledFlexWrapper";
import { Icon } from "../../components/Icon";
import { socialNetworksData } from "./socialLinksData";
import socialNetworkSprite from "../../assets/svg/socialNetworkSprite.svg";
import { Menu } from "../../components/Menu";

export const Footer = () => {
  return (
    <StyledSection>
      <SectionWrapper>
        <div>
          <StyledButton>Here me</StyledButton>
          <p>hello@gmail.com</p>
          <p>Minsk</p>
          <p>+375(29)8-223-322</p>
        </div>
        <StyledFlexWrapper>
          <ol>
            <SocialLinksList>
              {socialNetworksData.map((link) => (
                <SocialLink title={link.icon.iconId}>
                  <Icon
                    key={link.id}
                    sprite={socialNetworkSprite}
                    width={"22px"}
                    height={"22px"}
                    id={link.icon.iconId}
                  />
                </SocialLink>
              ))}
            </SocialLinksList>
          </ol>
        </StyledFlexWrapper>
        <Menu />
        <Copiryting>
          © 2023 Tatsiana Danilovich, All Rights Reserved.
        </Copiryting>
      </SectionWrapper>
    </StyledSection>
  );
};

type SocialLinksListProps = {};
const SocialLinksList = styled.li<SocialLinksListProps>``;

type SocialLinkProps = {};
const SocialLink = styled.a<SocialLinkProps>`
  cursor: pointer;
`;

type CopirytingProps = {};
const Copiryting = styled.div<CopirytingProps>``;
