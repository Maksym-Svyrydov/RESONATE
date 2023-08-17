import React from 'react';
// import { BsArrowRight } from 'react-icons/bs';

import { Section } from './1-DT-CasesZoo.styled';
import bgImg from '../../../../img/Cases/Zoo-Bg-Img.png';
const Zoo = () => {
  return (
    <Section>
      <div>
        <p>Branding &</p>
        <p>Website development</p>
        <p>
          with
          <span>KHARKIV ZOO</span>
        </p>
        <div>
          <div>
            <img src={bgImg} alt="Mankey in Zoo" />
          </div>
        </div>
      </div>
      <div>
        <h2>CASE STUDIES</h2>
        <div>
          <div>arrow</div>
          <div>
            <ul>
              <li>Project team</li>
              <li>2 frontend developers</li>
              <li>1 backend developer</li>
              <li>1 Project manager</li>
              <li>1 Graphic designer</li>
              <li>1 UI/UX desigher</li>
              <li>1 Business analist</li>
            </ul>
            <div>
              <h3>Our goal</h3>
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
            </div>
          </div>
          <div>
            <div></div>
            <ul>
              <li>
                <ul>
                  <li>Development of project technical documentation</li>
                  <li>Development of brand style concepts</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Brand design development</li>
                  <li>Website prototype development</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Website development</li>
                  <li>Development of text and graphic content</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Business logic implementation</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Connecting external units</li>
                  <li>Testing</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Project handover</li>
                </ul>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Zoo;
