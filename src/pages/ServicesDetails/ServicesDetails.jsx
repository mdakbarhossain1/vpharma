import { Link, useParams } from "react-router-dom"

import { BsArrowLeft } from 'react-icons/bs';
import useFetch from "../../hook/useFetch";
import { Fade } from "react-awesome-reveal";

const ServicesDetails = () => {
    const { title } = useParams();

    const data = useFetch("services.json");
    console.log(data)
    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6  overflow-y-hidden">
            <div className="flex flex-col justify-center items-center pt-24">
                {title}
            </div>
        </section>
    )
}

export default ServicesDetails