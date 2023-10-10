import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ id, imgs }) => {
  const SlideButton = ({ currentSlide, slideCount, children, ...props }) => (
    <div {...props}>{children}</div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <DotWrapper>
        <ul>{dots}</ul>
      </DotWrapper>
    ),
    dotsClass: "dots_custom",
  };

  return (
    <>
      <StyledSlider {...settings}>
        {imgs.map((img, index) => (
          <ImgWrapper key={index}>
            <img src={img} />
          </ImgWrapper>
        ))}
      </StyledSlider>
    </>
  );
};

export default ImageSlider;

const StyledSlider = styled(Slider)`
  display: flex;
  width: 677px;
  height: 500px;
  border-radius: 10px;
  align-items: center;
  margin-top: 85px;

  .slick-prev::before {
    opacity: 0;
    display: none;
  }
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-prev {
    left: -30px;
  }
  .slick-next {
    right: -30px;
  }

  .left:hover {
    color: #e6e6e6;
  }
  .right:hover {
    color: #e6e6e6;
  }
`;
const ImgWrapper = styled.div`
  width: 161px;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(to bottom, #000, #000 30%, transparent);
  img {
    width: 100%;
    height: 100%;
  }
`;

const DotWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2px;
  border-radius: 10px;
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 6px;
  }
  li > button {
    border: none;
    height: 8px;
    width: 8px;
    border-radius: 100%;

    background: #d1d1d1;
    color: transparent;
    cursor: pointer;
    padding: 0;
  }
  li.slick-active button {
    background-color: #ffffff;
  }
`;
