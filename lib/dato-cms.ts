import Image from "next";

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

  // const json = await res.json()
  // if (json.errors) {
  //   throw new Error('Failed to fetch API')
  // }

  return res;
}

export async function getAllPosts() {
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

  return data;
}

export async function getBanner() {
  const data = await fetchCmsAPI(`
  {
    allBanners {
      id
      content
      title
      image {
        url
      }
    }
  }
  `);

  return data;
}

export async function getAboutMe() {
  const data = await fetchCmsAPI(`
  {
    allAboutmes {
      id
      title
      content
      image {
        url
      }
    }
    }
  `);

  return data;
}

export async function getServices() {
  const data = await fetchCmsAPI(`
    {
      allServices {
        id
        title
        content
        image {
          url
        }
      }
    }
  `);

  return data;
}

export async function getLinks() {
  const data = await fetchCmsAPI(`
    {
      allLinkExternos {
        linkInstagran
        linkWhatsapp
      }
    }
  `);

  return data;
}

export default { getAllPosts, getBanner, getAboutMe, getServices, getLinks };
