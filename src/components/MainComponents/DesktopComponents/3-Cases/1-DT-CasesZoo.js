import React from 'react';

import arrow from '../../../../img/Cases/Arrow.svg';
import logoZoo from '../../../../img/Cases/zoo.svg';
import {
  Section,
  LogoSection,
  TitleWrapp,
  TextTitle,
  TextAccent,
  LogoWrapp,
  Logo,
  LogoText,
  ArrowWrapper,
  ArrowImg,
  InfoLayout,
  TextWrapper,
  DecriptionSection,
  CaseTitle,
  CaseList,
  CaseListTitle,
  CaseItem,
  GoalWrapper,
  GoalTitle,
  TimeLineLayout,
  TimeLayout,
  ProjectWrap,
  ProjectTitle,
  TimeList,
  TimeItem,
  TimeItemLast,
  ListLayout,
  ListLayoutItem,
  Frame,
  CircleList,
  Circle,
  CircleProcess,
} from './1-DT-CasesZoo.styled';

// import bgImg from '../../../../img/Cases/Zoo-Bg-Img.png';
const Zoo = () => {
  return (
    <Section>
      <LogoSection>
        <TitleWrapp>
          <TextTitle>Branding &</TextTitle>
          <TextTitle>Website development</TextTitle>
          <TextTitle>
            with
            <TextAccent>KHARKIV ZOO</TextAccent>
          </TextTitle>
          <LogoWrapp>
            <div>
              <Logo src={logoZoo} alt="Logo Zoo" />
            </div>
            <div>
              <LogoText>KHARKIV</LogoText>
              <LogoText>ZOO</LogoText>
            </div>
          </LogoWrapp>

          <div>
            <div>{/* <img src={bgImg} alt="Mankey in Zoo" /> */}</div>
          </div>
        </TitleWrapp>
      </LogoSection>

      <InfoLayout>
        <ArrowWrapper>
          <ArrowImg src={arrow} alt="Arrow" />
        </ArrowWrapper>

        <DecriptionSection>
          <TextWrapper>
            <CaseTitle>CASE STUDIES</CaseTitle>
            <CaseList>
              <CaseListTitle>Project team</CaseListTitle>
              <CaseItem>2 frontend developers</CaseItem>
              <CaseItem>1 backend developer</CaseItem>
              <CaseItem>1 Project manager</CaseItem>
              <CaseItem>1 Graphic designer</CaseItem>
              <CaseItem>1 UI/UX desigher</CaseItem>
              <CaseItem>1 Business analist</CaseItem>
            </CaseList>
            <GoalWrapper>
              <GoalTitle>Our goal</GoalTitle>
              <p>
                It was necessary to develop a new brand style for the zoo, which
                would be associated with the city of Kharkiv. Create a
                multifunctional website for zoo visitors, employees and
                partners.
              </p>
              <p>
                We have combined our collective experience of prolific dreamers,
                designers, front-end developers of the company and connected it
                with our client's business, demonstrating a unique brand and a
                functional website that takes into account the entire business
                logic of the institution.
              </p>
            </GoalWrapper>
          </TextWrapper>

          <TimeLineLayout>
            <ProjectTitle> PROJECT TIMELINE</ProjectTitle>
            <ProjectWrap>
              <Frame />
              <TimeLayout>
                <TimeList>
                  <TimeItem>1 m</TimeItem>
                  <TimeItem>2 m</TimeItem>
                  <TimeItem>3 m</TimeItem>
                  <TimeItem>4 m</TimeItem>
                  <TimeItem>5 m</TimeItem>
                  <TimeItemLast>6 m</TimeItemLast>
                </TimeList>
                <CircleList>
                  <Circle />
                  <CircleProcess />
                  <CircleProcess />
                  <CircleProcess />
                  <CircleProcess />
                  <Circle />
                </CircleList>
              </TimeLayout>
              <ListLayout>
                <ListLayoutItem>
                  <ul>
                    <li>Development of project technical documentation</li>
                    <li>Development of brand style concepts</li>
                  </ul>
                </ListLayoutItem>
                <ListLayoutItem>
                  <ul>
                    <li>Brand design development</li>
                    <li>Website prototype development</li>
                  </ul>
                </ListLayoutItem>
                <ListLayoutItem>
                  <ul>
                    <li>Website development</li>
                    <li>Development of text and graphic content</li>
                  </ul>
                </ListLayoutItem>
                <ListLayoutItem>
                  <ul>
                    <li>Business logic implementation</li>
                  </ul>
                </ListLayoutItem>
                <ListLayoutItem>
                  <ul>
                    <li>Connecting external units</li>
                    <li>Testing</li>
                  </ul>
                </ListLayoutItem>
                <ListLayoutItem>
                  <ul>
                    <li>Project handover</li>
                  </ul>
                </ListLayoutItem>
              </ListLayout>
            </ProjectWrap>
          </TimeLineLayout>
        </DecriptionSection>
      </InfoLayout>
    </Section>
  );
};
export default Zoo;
