// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import imageSliderStyles from '../../styles/imageSlider.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { logInfo } from '@hubspot/cms-components';

import containerStyles from '../../styles/global/container.module.css';

export default function ImageSliderIsland({ props }) {
  return (
    <section className={imageSliderStyles.section}>
      <div className={containerStyles.container}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
        >
          {props.fieldValues.logo.length &&
            props.fieldValues.logo.map((slide, index) => (
              <SwiperSlide key={index} style={{ background: '#ececee' }}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading={slide.loading}
                  className={imageSliderStyles.image}
                />
                <h1>Slide #{index}</h1>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
