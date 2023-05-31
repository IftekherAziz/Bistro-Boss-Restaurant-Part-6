import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero lg:h-[650px] md:h-[600px] h-[420px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl py-12 px-12 bg-black opacity-70 text-white">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
