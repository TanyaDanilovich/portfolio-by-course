import styled from "styled-components";
import { StyledSection } from "../../components/styled/StyledSection";
import { SectionMainTitle } from "../../components/styled/SectionMainTitle";
import React from "react";
import { SectionText } from "../../components/styled/SectionText";
import { clientsData } from "./clientsData";
import { Client } from "./Client";
import { SectionWrapper } from "../../components/styled/SectionWrapper";

export const Clients = () => {
  return (
    <StyledSection>
      <SectionWrapper>
        <SectionMainTitle>My clients</SectionMainTitle>
        <SectionText>
          Read the testimonials submitted by my clients and partners. You can
          fully trust their opinions on my solutions.
        </SectionText>
        <ClientContent>
          {clientsData.map((client) => (
            <Client
              id={client.id}
              name={client.name}
              text={client.text}
              imageUrl={client.imageUrl}
            />
          ))}
        </ClientContent>
      </SectionWrapper>
    </StyledSection>
  );
};

type ClientContentProps = {
  // height?: string
  // width?: string
};
const ClientContent = styled.div<ClientContentProps>``;