import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from './Item';
import { IoIosArrowBack,  IoIosArrowForward} from "react-icons/io";
import Countdown from 'react-countdown';

import '../../../css/HomeStyle/Section.css'


function SampleNextArrow(props) {
  const {  style, onClick } = props;
  const mystyle = {
    border: "1px solid black",
    fontSize: '1.4rem',
    textAlign: "center",
    color: 'black', 
    position: "absolute", 
    bottom: "-3rem", 
    right: "2rem",
    display: "flex",
    padding: ".5rem"


  };
  return (
    <div
      style={{ ...style, ...mystyle
      }}
      onClick={onClick}
    >
        <IoIosArrowForward/>   
    </div>
  );
}

function SamplePrevArrow(props) {
  const {  style, onClick } = props;
  const mystyle = {
    border: "1px solid black",
    fontSize: '1.4rem',
    textAlign: "center",
    color: 'black', 
    position: "absolute", 
    bottom: "-3rem",
    right: "4.4rem",
    display: "flex",
    padding: ".5rem",
  }
  return (
    <div
      style={{ ...style, ...mystyle}}
      onClick={onClick}
    >
        <IoIosArrowBack/>   
    </div>
  );
}

function SimpleSlider(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const itemList = props.itemList; 
  const title = props.title;
  const sectionName = props.sectionName
  return (
    
    <div className="section">
        <div className={sectionName} id={sectionName}>
            <h2 className="title" >{title}</h2>
            <div className="slider-container">
                <div className="slider">
                    <Slider {...settings} >
                    {
                        itemList.map((item) => 
                        <Item 
                        key = {item.productId}
                        currId={item.productId}
                        imageLink={item.imgUrl1}
                        type={item.type}
                        productName={item.name}
                        productPrice={item.unitPrice}
                        protductOldPrice={item.oldPrice}
                        rating={item.rating}
                        />
                        )
                    }
                    </Slider>    
                </div>
            </div>
        </div>
    </div>
  );
}

function Sale(props) {
  return (
      <SimpleSlider 
      title={props.title}
      itemList={props.itemList}
      sectionName="sale"
      />
  );
}


const renderer = ({ days, hours, minutes, seconds }) => (
  <div className="countdown-time">
    <div className="countdown-days">
      <p className="number">{days}</p>
      <p className="text">Ngày</p>
    </div>
    <div className="countdown-hours">
      <p className="number">{hours}</p>
      <p className="text">Giờ</p>
    </div>
    <div className="countdown-minutes">
      <p className="number">{minutes}</p>
      <p className="text">Phút</p>
    </div>
    <div className="countdown-seconds">
      <p className="number">{seconds}</p>
      <p className="text">Giây</p>
    </div>
  </div>
);

function CountDownSale() {
  return (
    <div className="countdown-container">
      <Countdown date={Date.now() + 172800000} renderer={renderer} />
      <h2>Khuyến mãi hot nhất</h2>
      <h3>New collection up to 60% off</h3>
      <a href="#sale">Xem chi tiết</a>
    </div>
  );
}

function NewProduct(props) {
  return (
      <SimpleSlider 
      title={props.title}
      itemList={props.itemList}
      sectionName="newProduct"
      />
  );
}

function BestSeller(props) {
  return (
      <SimpleSlider 
      title={props.title}
      itemList={props.itemList}
      sectionName="bestSeller"
      />
  );
}



export {Sale, CountDownSale, NewProduct, BestSeller};
