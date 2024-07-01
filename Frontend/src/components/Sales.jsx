import React, { useState, useEffect } from 'react';
import l1 from "../../public/kidslist.json";
import l2 from "../../public/menslist.json";
import l3 from "../../public/womenslist.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import './Sales.css';  
import logoImage from '../assets/file.png';  

function Sales() {
  const list = [...l1, ...l2, ...l3];
  const filterData = list.filter((data) => data.discountRate >= 0);

  const initialDays = 0;
  const initialHours = 6;
  const initialMinutes = 0;
  const initialSeconds = 0;

  const calculateEndDate = () => {
    const now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + initialDays,
      now.getHours() + initialHours,
      now.getMinutes() + initialMinutes,
      now.getSeconds() + initialSeconds
    );
  };

  const [endDate, setEndDate] = useState(() => {
    const storedEndDate = localStorage.getItem('flashSaleEndDate');
    return storedEndDate ? new Date(storedEndDate) : calculateEndDate();
  });

  useEffect(() => {
    if (!localStorage.getItem('flashSaleEndDate')) {
      localStorage.setItem('flashSaleEndDate', endDate.toISOString());
    }
  }, [endDate]);

  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className='font-bold text-4xl pb-2 sm:text-3xl'>Flash <span className='text-red-500'>Sales</span></h1>
            <img src={logoImage} alt="Logo" className="h-14" />
          </div>
          <div className="flex items-center space-x-4 text-red-500">
            {Object.keys(timeLeft).length > 0 && ( 
              <>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold text-black">{timeLeft.days}</p>
                  <p className="text-lg ml-1">days</p>
                </div>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold text-black">{timeLeft.hours}</p>
                  <p className="text-lg ml-1">hr</p>
                </div>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold text-black">{timeLeft.minutes}</p>
                  <p className="text-lg ml-1">min</p>
                </div>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold text-black">{timeLeft.seconds}</p>
                  <p className="text-lg ml-1">sec</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div  slider-container dark:bg-slate-800 dark:text-white>
          <Slider {...settings}>
            {filterData.map((product, index) => (
              <Card key={product.id} product={product} />
            ))}
          </Slider>
          <div className='my-10'></div>
        </div>
      </div>
    </>
  );
}

export default Sales;
