import {
  Section,
  Title,
  TitleTxtAccent,
  TitleServices,
  ServicesList,
  ServicesItem,
  QuestionTxt,
  QuestionList,
  QuestionItem,
  ContactTitle,
  Form,
  FormInput,
  Textarea,
  ButtonSubmit,
  LinksTitle,
  LinkList,
  Contacts,
  LinkItem,
  ContactLink,
  SocialLinkList,
  IconItem,
  Icon,
  Rsnt,
} from './Footer.styled';
import insta from '../../../img/icons/footer-icons/instagaram.svg';
import facebook from '../../../img/icons/footer-icons/facebook.svg';
import be from '../../../img/icons/footer-icons/Be.svg';
import whtsp from '../../../img/icons/footer-icons/whatsup.svg';
import lnkdin from '../../../img/icons/footer-icons/linkiedIn.svg';
import twitter from '../../../img/icons/footer-icons/twitter.svg';
import mailIco from '../../../img/icons/footer-icons/mail.svg';
import youtube from '../../../img/icons/footer-icons/youtube.svg';
const Footer = () => {
  return (
    <Section>
      <Title>
        let’s <TitleTxtAccent>resonate</TitleTxtAccent> your project.
      </Title>
      <TitleServices>SERVICES</TitleServices>
      <ServicesList>
        <ServicesItem>Marketing</ServicesItem>
        <ServicesItem>Promotion</ServicesItem>
        <ServicesItem>Social media</ServicesItem>
        <ServicesItem>Development</ServicesItem>
        <ServicesItem>Branding</ServicesItem>
        <ServicesItem>Other</ServicesItem>
      </ServicesList>
      <QuestionTxt>Have you filled out our brief yet?</QuestionTxt>
      <QuestionList>
        <QuestionItem>Yes I did</QuestionItem>
        <QuestionItem>Download</QuestionItem>
      </QuestionList>
      <ContactTitle>Contact info</ContactTitle>
      <Form>
        <FormInput type="text" name="Name" placeholder="Name*" />
        <FormInput type="tel" name="phone" placeholder="Phone*" />
        <FormInput type="email" name="email" placeholder="Email" />
        <Textarea
          type="text"
          name="Project details"
          placeholder="Project details"
        />
        <ButtonSubmit type="submit">SEND</ButtonSubmit>
      </Form>
      <LinksTitle>Quick links</LinksTitle>
      <LinkList>
        <LinkItem>Marketing</LinkItem>
        <LinkItem>Promotion</LinkItem>
        <LinkItem>Branding</LinkItem>
        <LinkItem>Social media</LinkItem>
        <LinkItem>Development</LinkItem>
      </LinkList>
      <LinksTitle>Contacts</LinksTitle>
      <Contacts>
        <LinkItem>
          <ContactLink type="email" href="info@resonate.com.ua">
            info@resonate.com.ua
          </ContactLink>
        </LinkItem>
        <LinkItem>
          <ContactLink type="tel" href="+380671200002">
            +380671200002
          </ContactLink>
        </LinkItem>
      </Contacts>
      <LinksTitle>Follow</LinksTitle>
      <SocialLinkList>
        <IconItem>
          <Icon src={insta} alt="insta" />
        </IconItem>
        <IconItem>
          <Icon src={facebook} alt="insta" />
        </IconItem>
        <IconItem>
          <Icon src={be} alt="insta" />
        </IconItem>
        <IconItem>
          <Icon src={whtsp} alt="insta" />
        </IconItem>
        <IconItem>
          <Icon src={lnkdin} alt="insta" />
        </IconItem>
        <IconItem>
          <Icon src={twitter} alt="insta" />
        </IconItem>
        <IconItem>
          <Icon src={mailIco} alt="insta" />
        </IconItem>
        <IconItem>
          <Icon src={youtube} alt="insta" />
        </IconItem>
      </SocialLinkList>
      <Rsnt> &#169; resonate 2022</Rsnt>
    </Section>
  );
};
export default Footer;
