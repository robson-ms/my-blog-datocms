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
import { getAllData } from "../lib/dato-cms";

export default function Home({ data }: MyQueryTypes) {
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
  const res = await getAllData();

  return {
    props: {
      data: res.data,
    },
    revalidate: 1000 * 60 * 1, // 1 minuto
  };
};
