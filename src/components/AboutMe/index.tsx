import React from "react";
import { Aboutme } from "../../lib/types";
import { Container, Content } from "./styles";

type AboutmeType = {
  dataAboutMe: Aboutme;
};

const AboutMe: React.FC<AboutmeType> = ({ dataAboutMe }) => {
  return (
    <Container>
      {!!dataAboutMe && (
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
