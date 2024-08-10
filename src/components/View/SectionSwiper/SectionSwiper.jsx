import React from "react";
import { ArrowLeft, ArrowRight } from "../../../assets";
import { SwiperSlide, Swiper } from "swiper/react";

const SectionSwiper = ({
  title,
  datas = [],
  swiperProps,
  gridLength,
  className,
  SwiperSlideComponent,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex gap-4 justify-center">
      {!isOpen && datas.length > gridLength && (
        <button className={`${className}-arrow-left`}>
          <ArrowLeft />
        </button>
      )}
      <div className="w-full max-w-[1240px] max-1350:max-w-[1100px] max-1200:max-w-[1000px] max-1100:max-w-[850px] max-950:max-w-[750px] max-850:max-w-[690px] max-780:max-w-[600px] max-700:max-w-[550px] max-650:max-w-[500px] max-600:max-w-[450px] max-550:max-w-[400px] max-500:max-w-[350px] max-450:max-w-[300px] max-400:max-w-[250px] max-350:max-w-[200px]">
        <div className="flex items-center justify-between gap-4 pb-8">
          <h2 className="font-bold text-[36px] leading-[47px]">{title}</h2>
          {datas.length > gridLength && (
            <p
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#BE123C] text-[18px] leading-[24px] cursor-pointer"
            >
              {isOpen ? "Minimize" : "View All"}
              {!isOpen ? (
                <span className="text-xl"> &gt;</span>
              ) : (
                <span className="text-xl"> &lt;</span>
              )}
            </p>
          )}
        </div>
        {datas.length > 0 ? (
        <div>
          {!isOpen ? (
            <Swiper {...swiperProps} className={`${className}-swiper`}>
              {datas.map((data, i) => (
                <SwiperSlide key={i}>
                  <SwiperSlideComponent {...data} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div
              style={{ gridTemplateColumns: `repeat(${gridLength}, 1fr)` }}
              className="grid gap-12"
            >
              {datas.map((data, i) => (
                <SwiperSlideComponent key={i} {...data} />
              ))}
            </div>
          )}
        </div>
        ) : (
          <p className="text-[#6B7280] font-bold text-lg">{`No ${title} Found`}</p>
        )}
      </div>
      {!isOpen && datas.length > gridLength && (
        <button className={`${className}-arrow-right`}>
          <ArrowRight />
        </button>
      )}
    </div>
  );
};

export default SectionSwiper;
