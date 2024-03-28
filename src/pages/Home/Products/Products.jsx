
import Title from "../../../components/Form/Title"
import useFetch from "../../../hook/useFetch";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Products = () => {
    const data = useFetch("products.json");
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
            <Title title="Products" />

            <div>
                <Swiper
                    className="mySwiper py-12"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}
                    // pagination={true} 
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
                    {data.slice(0, 6).map(product => (
                        <SwiperSlide key={product.id}>
                            <Product product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Products