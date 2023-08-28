import { nanoid } from 'nanoid';
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
  LinksWrapper,
  CheckboxContainer,
  Checkbox,
  Label,
} from './DT-Footer.styled';
import insta from '../../../../img/icons/footer-icons/instagaram.svg';
import facebook from '../../../../img/icons/footer-icons/facebook.svg';
import be from '../../../../img/icons/footer-icons/Be.svg';
import whtsp from '../../../../img/icons/footer-icons/whatsup.svg';
import lnkdin from '../../../../img/icons/footer-icons/linkiedIn.svg';
import twitter from '../../../../img/icons/footer-icons/twitter.svg';
import mailIco from '../../../../img/icons/footer-icons/mail.svg';
import youtube from '../../../../img/icons/footer-icons/youtube.svg';

const FooterDesktop = () => {
  const handleSubmitForm = (e) => {
    const form = e.target;
    e.preventDefault();
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const details = form.elements.details.value;
    const newRequest = {
      id: nanoid(),
      name: name,
      phone: phone,
      email: email,
      details: details,
      services: {
        marketing: form.elements.marketing.value,
        promotion: form.elements.promotion.value,
        social: form.elements.social.value,
        development: form.elements.development.value,
        branding: form.elements.branding.value,
        other: form.elements.other.value,
      },
    };
    form.reset();
    console.log(newRequest);
    console.log(form);
  };

  return (
    <Section>
      <LinksWrapper>
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
      </LinksWrapper>
      <div>
        <Title>
          let’s <TitleTxtAccent>resonate</TitleTxtAccent> your project.
        </Title>
        <Form onSubmit={handleSubmitForm}>
          <TitleServices>SERVICES</TitleServices>
          <ServicesList>
            <CheckboxContainer>
              <Checkbox
                name="marketing"
                type={'checkbox'}
                id="Marketing"
                value={true}
              />
              <Label htmlFor={'Marketing'}>Marketing</Label>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                name="promotion"
                type={'checkbox'}
                id="Promotion"
                value={true}
              />
              <Label htmlFor={'Promotion'}>Promotion</Label>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                name="social"
                type={'checkbox'}
                id="Social media"
                value={true}
              />
              <Label htmlFor={'Social media'}>Social media</Label>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                name="development"
                type={'checkbox'}
                id="Development"
                value={true}
              />
              <Label htmlFor={'Development'}>Development</Label>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                name="branding"
                type={'checkbox'}
                id="Branding"
                value={true}
              />
              <Label htmlFor={'Branding'}>Branding</Label>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                name="other"
                type={'checkbox'}
                id="Other"
                value={true}
              />
              <Label htmlFor={'Other'}>Other</Label>
            </CheckboxContainer>
          </ServicesList>
          <QuestionTxt>Have you filled out our brief yet?</QuestionTxt>
          <QuestionList>
            <QuestionItem>Yes I did</QuestionItem>
            <QuestionItem>Download</QuestionItem>
          </QuestionList>
          <ContactTitle>Contact info</ContactTitle>

          <FormInput
            id="name"
            type="text"
            name="name"
            required
            placeholder="Name*"
          />
          <FormInput id="phone" type="tel" name="phone" placeholder="Phone*" />
          <FormInput
            id="email"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <Textarea
            id="details"
            type="text"
            name="details"
            placeholder="Project details"
          />
          <ButtonSubmit type="submit">SEND</ButtonSubmit>
        </Form>
      </div>
    </Section>
  );
};
export default FooterDesktop;
