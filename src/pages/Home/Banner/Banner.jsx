import { Fade } from "react-awesome-reveal"
import medal from "../../../assets/images/medal.png"
import banner from "../../../assets/images/banner.png"
import Button from "../../../components/Form/Button"
import { useNavigate } from "react-router-dom"
const Banner = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="max-w-screen-xl py-20 mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-10">
                    <Fade direction="left">
                        <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-6">

                            <div className="flex flex-col space-y-2">
                                <img className="w-10" src={medal} alt="banner" />
                                <h1 className="poppins text-gray-700 font-semibold text-3xl lg:text-3xl leading-relaxed">Best Quality <br /> <span className="text-5xl">Your Trusted <br />Pharmacy Store</span></h1>
                                <p className="text-gray-500 text-light text-sm">Our products are world best product.We sell the real projects.<br /> Welcome to our shop.</p>
                            </div>
                            {/* button  */}
                            <Button className="bg-customGreen py-3 px-4 poppins w-48 mt-6 text-white rounded-lg hover:bg-teal-600 hover:shadow-xl hover:transition-all" text="Explore our shop" onClick={() => navigate('/products')} />
                        </div>
                    </Fade>

                    <Fade direction="right">
                        <div className="order-1 lg:order-2">
                            <img src={banner} alt="banner" />
                        </div>
                    </Fade>

                </div>
            </section>
        </>
    )
}

export default Banner