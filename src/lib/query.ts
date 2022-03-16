export const myQuery = `
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
