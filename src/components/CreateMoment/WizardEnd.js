import React from "react";
import withContext from "../ContextApi/Context_HOC";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import prev from "../../Image/Group 4.svg";
import next from "../../Image/Group 5.svg";

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img src={prev} className={className + " prevArrow"} onClick={onClick} />
  );
}
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <img src={next} className={className + " nextArrow"} onClick={onClick} />
  );
}
const WizardEnd = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  const {
    title,
    selectedCategory,
    duration,
    price,
    locale,
    hostQualification,
    streetAddress,
    city,
    state,
    zipcode,
    whatWeWillDo,
    whereWeWillBe,
    availableStartTime,
    availableEndTime,
    photoOne,
    photoTwo,
    availableDate,
    groupSizeLimit
  } = props.context;
  let date = availableDate.map(el => {
    return <p>{el}</p>;
  });
  return (
    <div className="review-pag-wizard">
      <div className="review-wizard">
        <Slider {...settings}>
          <img className="review-img" src={photoOne} alt="" />
          <img className="review-img" src={photoTwo} alt="" />
        </Slider>
        <p className="ontop-slider">{locale}</p>
        <p className="ontop-slider">{selectedCategory}</p>
        <p className="ontop-slider">{duration} hours</p>
      </div>
      <div>
        <h3>{title}</h3>
        <h5>${price} per person</h5>
        <p className="nextto-slider">
          {streetAddress}, {city}, {state}, {zipcode}
        </p>
        <p className="nextto-slider">
          {availableStartTime}-{availableEndTime}
        </p>
        <div className="nextto-slider">{date}</div>
        <p className="nextto-slider">{groupSizeLimit} guest</p>
        <p className="nextto-slider">{hostQualification}</p>
        <p className="nextto-slider">{whatWeWillDo}</p>
        <p className="nextto-slider">{whereWeWillBe}</p>
        <Link to="/host">
          <button onClick={() => props.post()}>POST</button>
        </Link>
      </div>
    </div>
  );
};

export default withContext(WizardEnd);
