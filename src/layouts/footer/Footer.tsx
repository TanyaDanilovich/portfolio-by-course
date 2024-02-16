import { Container } from "../../components/styled/Container";
import styled from "styled-components";
import React from "react";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Icon } from "../../components/Icon";
import { socialNetworksData } from "./socialLinksData";
import socialNetworkSprite from "../../assets/svg/socialNetworkSprite.svg";
import { Menu } from "../../components/Menu";
import { theme } from "../../styles/Theme.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid>
          <Menu />
          <FooterContacts>
            <p>hello@gmail.com</p>
            <p>Minsk</p>
            <p>+375(29)8-223-322</p>
            <ul>
              <FlexWrapper direction={"row"} gap={"1rem"}>
                {socialNetworksData.map((link) => (
                  <SocialLink title={link.icon.iconId} key={link.id}>
                    <a>
                      <Icon
                        sprite={socialNetworkSprite}
                        width={"22"}
                        height={"22"}
                        id={link.icon.iconId}
                        fill={"rgba(255,255,255,0.3)"}
                      />
                    </a>
                  </SocialLink>
                ))}
              </FlexWrapper>
            </ul>
          </FooterContacts>

          <Copiryting>
            © 2023 Tatsiana Danilovich, All Rights Reserved.
          </Copiryting>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

type StyledFooterProps = {};
const StyledFooter = styled.footer<StyledFooterProps>`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};
  padding: 2rem;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 180%;
  font-weight: 400;

  nav {
    width: calc(50% - 1rem);
    height: 100%;
  }

  svg:hover {
    fill: ${theme.colors.accent_2};
  }
`;

type FooterContactsProps = {};
const FooterContacts = styled.div<FooterContactsProps>`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};
  width: calc(50% - 1rem);

  ul {
    padding-top: 1rem;
  }
`;

type SocialLinkProps = {};
const SocialLink = styled.li<SocialLinkProps>`
  cursor: pointer;
`;

type CopirytingProps = {};
const Copiryting = styled.small<CopirytingProps>`
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: smaller;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
