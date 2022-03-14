import Head from "next/head";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import ContactForm from "../components/Form";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import MyServices from "../components/MyServices";

import { Container } from "../styles/pages/home";
import {
  getAboutMe,
  getAllPosts,
  getBanner,
  getLinks,
  getServices,
} from "../../lib/dato-cms";

export default function Home(props: any) {
  return (
    <Container>
      <Head>
        <title>Next LP</title>
      </Head>
      <Header />
      {/* <Banner banner={props.dataBanner[0]} links={props.dataLinks[0]} /> */}
      <main>
        {/* <MyServices services={props.dataServices} />

        <AboutMe dataAboutMe={props.dataAboutMe[0]} /> */}

        <div className="posts main--center">
          {props.posts.map((post: any) => (
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
  const API_URL = "https://graphql.datocms.com/";
  const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

  async function fetchCmsAPI(query: string, { variables }: any = {}) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();
    if (json.errors) {
      throw new Error("Failed to fetch API");
    }

    return json.data;
  }
  const data = await fetchCmsAPI(`
  {
    allPosts {
      id
      title
      content
      image {
        url
      }
      visible
    }
  }
  `);

  return {
    props: {
      posts: data.allPosts,
    },
    revalidate: 1000 * 60 * 1, // 1 minut
  };
};
