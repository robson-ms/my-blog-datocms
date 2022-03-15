import { Container, Buttons } from "./styles";

interface ImageUrl {
  url: string;
}

interface IBanner {
  id: string;
  title: string;
  content: string;
  image: ImageUrl;
}

interface LinkType {
  linkInstagran: string;
  linkWhatsapp: string;
}

type BannerType = {
  banner: IBanner;
  links: LinkType;
};

const Banner: React.FC<BannerType> = ({ banner, links }) => {
  return (
    <>
      {Object.keys(banner).length > 0 && (
        <Container>
          <div id="/" className="banner--container">
            <div className="banner--descriptions--content">
              <div className="banner--descriptions">
                <h1>{banner.title}</h1>
                <p>{banner.content}</p>

                {Object.keys(links).length > 0 && (
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
                )}
              </div>
            </div>
            <div className="image--container">
              <img src={banner.image.url} className="image" alt="image" />
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Banner;
