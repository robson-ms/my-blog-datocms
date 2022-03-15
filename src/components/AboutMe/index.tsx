import React from "react";

import { Container, Content } from "./styles";

export interface IImage {
  url: string;
}

export interface IDataAboutMe {
  id: string;
  title: string;
  content: string;
  image: IImage;
}

export interface IAboutMe {
  dataAboutMe: IDataAboutMe;
}

const AboutMe: React.FC<IAboutMe> = ({ dataAboutMe }) => {
  return (
    <Container>
      {Object.keys(dataAboutMe).length > 0 && (
        <Content>
          <div className="descriptions">
            <h1>{dataAboutMe.title}</h1>
            <p>{dataAboutMe.content}</p>
          </div>
          <div className="image--container">
            <img src={dataAboutMe.image.url} alt="#" />
          </div>
        </Content>
      )}
    </Container>
  );
};

export default AboutMe;
