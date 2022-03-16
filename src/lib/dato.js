const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.NEXT_DATOCMS_API_TOKEN;

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
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
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllData(preview) {
  const data = await fetchAPI(
    `
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
  `,
    { preview }
  );

  return data;
}
