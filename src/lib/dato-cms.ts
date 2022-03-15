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

  const json = await res.json();

  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json;
}

export async function getAllData() {
  const data = await fetchCmsAPI(`
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
  `);

  return data;
}

export default { getAllData };
