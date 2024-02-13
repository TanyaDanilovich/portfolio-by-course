import styled from "styled-components";
import { Section } from "../../components/styled/Section";
import { SectionTitle } from "../../components/styled/SectionTitle";
import React from "react";
import { SectionText } from "../../components/styled/SectionText";
import { clientsData } from "./clientsData";
import { Client } from "./Client";
import { Container } from "../../components/styled/Container";

export const Clients = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>My clients</SectionTitle>
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
      </Container>
    </Section>
  );
};

type ClientContentProps = {
  // height?: string
  // width?: string
};
const ClientContent = styled.div<ClientContentProps>``;
