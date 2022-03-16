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
import { fetchCmsAPI } from "../lib/dato-cms";
import { useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";

export default function Home({ subscription }: any) {
  const { data, error, status } = useQuerySubscription(subscription);

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

export const getStaticProps = async (context: any) => {
  const myQuery = `
query MyQuery {
  banner {
    title
    content
    image {
      url
    }
  }
  aboutme {
    title
    content
    image {
      url
    }
  }
  allServices {
    id
    title
    content
    image {
      url
    }
  }
  allPosts {
    id
    title
    content
    image {
      url
    }
  }
  linkExterno {
    linkInstagran
    linkWhatsapp
  }
}
`;

  const graphqlRequest = {
    query: myQuery,
    preview: context.preview,
  };

  return {
    props: {
      subscription: context.preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
    revalidate: 1000 * 60 * 1, // 1 minuto
  };
};
