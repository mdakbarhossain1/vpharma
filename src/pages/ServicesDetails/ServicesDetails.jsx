import { Link, useParams } from "react-router-dom"

import { BsArrowLeft } from 'react-icons/bs';
import useFetch from "../../hook/useFetch";
import { Fade } from "react-awesome-reveal";

const ServicesDetails = () => {
    const { title } = useParams();
    const data = useFetch("services.json");
    const myData = data.filter(items => items.title === title)
    console.log(myData)
    console.log(data)
    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6  overflow-y-hidden">
            <div className="flex flex-col justify-center items-center pt-24">
                {
                    myData.map(service => <div key={service.id} className="shadow-lg p-6 box-border">
                        {/* cover image  */}
                        <Fade left>
                            <img className="w-full h-96 mx-auto object-cover rounded-lg" src={service.image} alt="coverimg" />
                        </Fade>
                        <Fade left>
                            {/* title and icon  */}
                            <div className="flex flex-col md:flex-row lg:flex-row  justify-center items-center space-x-3 py-4">
                                <img className="w-12 mt-4" src={service.icon} alt="icon" />
                                <h1 className="text-gray-600 poppins text-3xl text-center pt-3">{service.title}</h1>
                            </div>
                            {/* description  */}
                            <p className="text-gray-500 text-justify">{service.description}</p>
                        </Fade>
                        <Link to="/" className="pt-4 text-blue-500 text-sm hover:underline flex items-center space-x-3"><BsArrowLeft /> <span>Back</span></Link>
                    </div>)
                }
            </div>
        </section>
    )
}

export default ServicesDetails