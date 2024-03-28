import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Title from "../../../components/Form/Title"
import useFetch from "../../../hook/useFetch";
import { Bounce } from "react-awesome-reveal";
import Service from "./Service";


const Services = () => {
    const data = useFetch("services.json");
    // console.log(data)
    
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
            {/* heading  */}
            <Title title="Services" />

            {/* services  */}
            <Swiper
                className="mySwiper py-12"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay , Pagination]}
                pagination={true} 
                grabCursor={true}
                slidesPerView={3}
                speed={400}
                spaceBetween={20}
                breakpoints={{
                    320: {
                        slidesPerView: 1,

                    },
                    500: {
                        slidesPerView: 1,

                    },
                    700: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                {data.map(service => (
                    <SwiperSlide key={service.id} className=" mb-9">
                        <Bounce direction="bounce">
                            <Service data={service}/>
                        </Bounce>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Services