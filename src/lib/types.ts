export interface Image {
  url: string;
}

export interface Banner {
  title: string;
  content: string;
  image: Image;
}

export interface Aboutme {
  title: string;
  content: string;
  image: Image;
}

export interface AllService {
  id: string;
  title: string;
  content: string;
  image: Image;
}

export interface AllPost {
  id: string;
  title: string;
  content: string;
  image: Image;
}

export interface LinkExterno {
  linkInstagran: string;
  linkWhatsapp: string;
}

export interface RootType {
  banner: Banner;
  aboutme: Aboutme;
  allServices: AllService[];
  allPosts: AllPost[];
  linkExterno: LinkExterno;
}

export interface MyQueryTypes {
  data: RootType;
}
