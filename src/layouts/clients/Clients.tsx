import styled from "styled-components";
import { SectionTitle } from "../../components/styled/SectionTitle";
import React from "react";
import { SectionText } from "../../components/styled/SectionText";
import { clientsData } from "./clientsData";
import { Client } from "./Client";
import { Container } from "../../components/styled/Container";
import { FlexWrapper } from "../../components/styled/FlexWrapper";

export const Clients = () => {
  return (
    <StyledClients>
      <Container>
        <SectionTitle>My clients</SectionTitle>
        <SectionText>
          Read the testimonials submitted by my clients and partners. You can
          fully trust their opinions on my solutions.
        </SectionText>
        <FlexWrapper>
          {clientsData.map((client) => (
            <Client
              key={client.id}
              id={client.id}
              name={client.name}
              text={client.text}
              imageUrl={client.imageUrl}
            />
          ))}
        </FlexWrapper>
      </Container>
    </StyledClients>
  );
};

type StyledClientsProps = {
  // height?: string
  // width?: string
};
const StyledClients = styled.div<StyledClientsProps>`
  padding: 100px 0;
overflow:hidden;
`;
