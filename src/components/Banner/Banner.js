import "./Banner.css";

const Banner = (props) => {
  return (
    <section id="banner">
      <div className="banner-track">
        {props.banners.map((banner) => (
          <div key={banner.id} className="slide">
            <img src={banner.img} alt={banner.title} />
          </div>
        ))}
        {props.banners.map((banner) => (
          <div key={banner.id} className="slide">
            <img src={banner.img} alt={banner.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
