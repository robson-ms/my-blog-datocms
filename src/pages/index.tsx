import Head from "next/head";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import ContactForm from "../components/Form";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import MyServices from "../components/MyServices";

import { Container } from "../styles/pages/home";
import { getAllPosts } from "../lib/dato-cms";

export default function Home(props: any) {
  console.log(props);
  return (
    <Container>
      <Head>
        <title>Next LP</title>
      </Head>
      <Header />

      <Footer />
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const allProfiles = JSON.parse(JSON.stringify(posts));

  return {
    props: {
      posts: allProfiles,
    },
    revalidate: 1000 * 60 * 1, // 1 minuto
  };
};
