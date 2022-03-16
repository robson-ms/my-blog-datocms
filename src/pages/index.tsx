import Head from "next/head";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import ContactForm from "../components/Form";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import MyServices from "../components/MyServices";
import { MyQueryTypes } from "../lib/types";
import { Container } from "../styles/pages/home";

import { useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import { myQuery } from "../lib/query";

export default function Home({ subscription }: any) {
  const { data: dataProps } = useQuerySubscription(subscription);
  const data: MyQueryTypes = dataProps;

  return (
    <Container>
      <Head>
        <title>Next LP</title>
      </Head>
      <Header />
      <Banner banner={data.banner} links={data.linkExterno} />
      <main>
        <MyServices services={data.allServices} />

        <AboutMe dataAboutMe={data.aboutme} />

        <div className="posts main--center">
          {data.allPosts.map((post: any) => (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>

        <div className="main--center">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </Container>
  );
}

export const getStaticProps = async () => {
  const graphqlRequest = {
    query: myQuery,
  };

  return {
    props: {
      subscription: {
        ...graphqlRequest,
        initialData: await request(graphqlRequest),
        token: process.env.NEXT_DATOCMS_API_TOKEN,
      },
    },
    revalidate: 60 * 1, // 1 minuto
  };
};
