// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slider1 from './Slider/Slider1'
import Slider2 from './Slider/Slider2'
import Slider3 from './Slider/Slider3'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <Swiper
            className={`container`}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Slider1/>
            </SwiperSlide>

            <SwiperSlide>
                <Slider2/>
            </SwiperSlide>
            <SwiperSlide>
                <Slider3/>
            </SwiperSlide>

        </Swiper>
    );
};