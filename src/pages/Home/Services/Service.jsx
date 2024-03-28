import { useNavigate } from "react-router-dom";
import Button from "../../../components/Form/Button";


const Service = ({data}) => {
    const { title, icon, description } = data;

    const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center space-y-3 bg-white border border-gray-200 hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-105 p-4 box-border rounded-xl">
            <img className="w-24" src={icon} alt={title} />
            <h1 className="text-gray-600 poppins text-xl text-center">{title}</h1>
            <p className="text-gray-500 text-center">{description.slice(0, 70)}</p>
            <Button className="w-36 btn-primary py-3 px-2 poppins text-sm" text="Learn More" onClick={() => navigate(`/services/${title}`)} />
        </div>
  )
}

export default Service