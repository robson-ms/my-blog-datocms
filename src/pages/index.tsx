import Head from "next/head";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import ContactForm from "../components/Form";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import MyServices from "../components/MyServices";
import { request } from "../../lib/dato-cms-doc";

import { Container } from "../styles/pages/home";
import {
  getAboutMe,
  getAllPosts,
  getBanner,
  getLinks,
  getServices,
} from "../../lib/dato-cms";

export default function Home(props: any) {
  console.log(props);
  return (
    <Container>
      teste
      <div>
        {props.data.allPosts.map((post: any) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      {/*<Head>
        <title>Next LP</title>
      </Head>
      <Header />
      <Banner banner={props.dataBanner[0]} links={props.dataLinks[0]} />
      <main>
        <MyServices services={props.dataServices} />

        <AboutMe dataAboutMe={props.dataAboutMe[0]} />

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
      <Footer /> */}
    </Container>
  );
}

export async function getStaticProps() {
  const postsAll = `{
    allPosts {
      id
      title
      content
      image {
        url
      }
      visible
    }
  }`;

  const data = await request({
    query: postsAll,
  });
  return {
    props: { data },
  };
}

// export const getStaticProps = async () => {
//   const posts = await getAllPosts();
//   const dataBanner = await getBanner();
//   const dataAboutMe = await getAboutMe();
//   const dataServices = await getServices();
//   const dataLinks = await getLinks();

//   return {
//     props: {
//       posts,
//       dataBanner,
//       dataAboutMe,
//       dataServices,
//       dataLinks,
//     },
//     revalidate: 1000 * 60 * 1, // 1 minut
//   };
// };
