import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Contenst } from '../../components/BlogComponents/Contents';
import { Footer } from '../../components/BlogComponents/Footer';
import { Hero } from '../../components/BlogComponents/Hero';
import { Intro } from '../../components/BlogComponents/Intro';
import { CheckList } from '../../components/BlogComponents/LnkdCheckList';
import { StartStrategy } from '../../components/BlogComponents/LnkdnArticle';
import { Owner } from '../../components/BlogComponents/Owner';
import { Profile } from '../../components/BlogComponents/Profiles';

import {
  Layout,
  Wrapper,
  WrapperContent,
} from '../../components/BlogComponents/Layuout.styled';

const Blog = () => {
  return (
    <>
      <Hero />
      <Layout>
        <Wrapper>
          <ContactForm />
        </Wrapper>
        <WrapperContent>
          <Intro />
          <Contenst />
          <StartStrategy />
          <CheckList />
          <Profile />
        </WrapperContent>
        <Owner />
        <Footer />
      </Layout>
    </>
  );
};

export default Blog;
