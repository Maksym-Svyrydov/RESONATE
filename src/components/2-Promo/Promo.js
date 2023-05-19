import React from 'react';
import {
  Section,
  Title,
  Item,
  TitleItem,
  TitleText,
  Subtitle,
  List,
  Button,
} from './Promo.styled';

const Promo = () => {
  return (
    <Section>
      <Title>Marketing agency that knows</Title>
      <Subtitle>what’s next.</Subtitle>
      <List>
        <Item>
          <TitleItem>Result driven</TitleItem>
          <TitleText>
            We convert your goals into results. Our competence allows us to
            predict the system of the next steps of your employees and direct
            all goals towards the growth of the company
          </TitleText>
        </Item>
        <Item>
          <TitleItem>Wide range of tools</TitleItem>
          <TitleText>
            The needs of your business dictate the tools that we will use based
            on the stages at which you have a drawdown
          </TitleText>
        </Item>
        <Item>
          <TitleItem>Support 24/7</TitleItem>
          <TitleText>
            We are proud to be a Ukranian marketing agency serving premiere
            clientèle worldwide. We provide outstanding customer support within
            24 hours to all inquiries. Always!
          </TitleText>
        </Item>
      </List>
      <Button type="button">Check Our Offer</Button>
    </Section>
  );
};

export default Promo;
