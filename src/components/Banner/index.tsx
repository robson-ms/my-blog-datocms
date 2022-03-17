import { Container, Buttons } from "./styles";

import { Banner, LinkExterno } from "../../lib/types";

type BannerType = {
  banner: Banner;
  links: LinkExterno;
};

const BannerComponent: React.FC<BannerType> = ({ banner, links }) => {
  return (
    <Container>
      <div id="/" className="banner--container">
        <div className="image--container">
          <div className="bg" />
          <img src={banner.image.url} className="image" alt="image" />
        </div>
        <div className="banner--descriptions">
          <h1>{banner.title}</h1>
          <p>{banner.content}</p>

          <Buttons>
            <a
              href={links.linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="whatsapp">
                <img src="/whatsapp-icon.png" alt="whatsapp" />
                <span>Whatsapp</span>
              </button>
            </a>
            <a
              href={links.linkInstagran}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="instagram">
                <img src="/instagram-icon.png" alt="instagram" />
                <span>Instagram</span>
              </button>
            </a>
          </Buttons>
        </div>
      </div>
    </Container>
  );
};

export default BannerComponent;
