import React from 'react';
// import { BsArrowRight } from 'react-icons/bs';

import {
  Section,
  Title,
  List,
  TextWrapper,
  Text,
  Customer,
  TextLink,
  LinkWrapper,
  Link,
  Icon,
} from './Cases.styled';
import myImage from '../../img/bg-zoo.png';
import styled from 'styled-components';

const Cases = () => {
  const Item = styled.li`
    padding-left: 30px;
    padding-top: 18px;
    background-repeat: no-repeat;
    background-color: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 54.17%
    );
    border: 1px solid #cbbe9c;
    background-image: url(${myImage});
  `;
  return (
    <Section>
      <Title>CASE STUDIES</Title>
      <List>
        <Item>
          <TextWrapper>
            <Text>Branding &</Text>
            <br />
            <Text>
              Website development <br />
            </Text>
            <Text>with </Text>
            <Customer>KHARKIV ZOO</Customer>
          </TextWrapper>
          <LinkWrapper>
            <TextLink>Show more</TextLink>
            <Link href="/">
              {/* <BsArrowRight /> */}
              <Icon viewBox="0 0 88 32">
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
              </Icon>
            </Link>
          </LinkWrapper>
        </Item>
        <Item>
          <TextWrapper>
            <Text>Branding &</Text>
            <br />
            <Text>
              Website development <br />
            </Text>
            <Text>with </Text>
            <Customer>KHARKIV ZOO</Customer>
          </TextWrapper>
          <LinkWrapper>
            <TextLink>Show more</TextLink>
            <Link href="/">
              {/* <BsArrowRight /> */}
              <Icon viewBox="0 0 88 32">
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
              </Icon>
            </Link>
          </LinkWrapper>
        </Item>
        <Item>
          <TextWrapper>
            <Text>Branding &</Text>
            <br />
            <Text>
              Website development <br />
            </Text>
            <Text>with </Text>
            <Customer>KHARKIV ZOO</Customer>
          </TextWrapper>
          <LinkWrapper>
            <TextLink>Show more</TextLink>
            <Link href="/">
              {/* <BsArrowRight /> */}
              <Icon viewBox="0 0 88 32">
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
              </Icon>
            </Link>
          </LinkWrapper>
        </Item>
        <Item>
          <TextWrapper>
            <Text>Branding &</Text>
            <br />
            <Text>
              Website development <br />
            </Text>
            <Text>with </Text>
            <Customer>KHARKIV ZOO</Customer>
          </TextWrapper>
          <LinkWrapper>
            <TextLink>Show more</TextLink>
            <Link href="/">
              {/* <BsArrowRight /> */}
              <Icon viewBox="0 0 88 32">
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
              </Icon>
            </Link>
          </LinkWrapper>
        </Item>
        <Item>
          <TextWrapper>
            <Text>Branding &</Text>
            <br />
            <Text>
              Website development <br />
            </Text>
            <Text>with </Text>
            <Customer>KHARKIV ZOO</Customer>
          </TextWrapper>
          <LinkWrapper>
            <TextLink>Show more</TextLink>
            <Link href="/">
              {/* <BsArrowRight /> */}
              <Icon viewBox="0 0 88 32">
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
              </Icon>
            </Link>
          </LinkWrapper>
        </Item>
      </List>
    </Section>
  );
};
export default Cases;
