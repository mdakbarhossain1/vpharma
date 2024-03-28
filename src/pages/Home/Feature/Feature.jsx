import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import useFetch from "../../../hook/useFetch";

const Feature = () => {

    const data = useFetch("feature.json");

    // console.log(data)
    return (
        <section className="max-w-screen-xl mx-auto px-6 p-6">
            <Swiper
                className="mySwiper py-2"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                // grabCursor={true}
                slidesPerView={4}
                speed={400}
                spaceBetween={20}

            >
                {
                    data.map((data) => <SwiperSlide key={data.id} >
                        <div className='flex justify-center items-center'>
                            <div>
                                <img src={data.icon} alt={data.title} />
                            </div>
                            <div className=" ml-3">
                                <h3 className='text-2xl font-bold'>{data.title}</h3>
                                <p className='text-md opacity-50'>{data.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    )
}

export default Feature