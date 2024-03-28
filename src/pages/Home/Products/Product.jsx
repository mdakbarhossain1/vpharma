
import { useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsCart2 } from "react-icons/bs";
import { Rating } from 'react-simple-star-rating'
import Swal from "sweetalert2";
import Button from "../../../components/Form/Button";
import { useNavigate } from "react-router-dom";
import useOrder from "../../../hook/useOrder";

const Product = ({ product }) => {
    const { title, image, description, price, reviews, rating, id } = product;
    const [disabled, setDisabled] = useState(false);
    const { handleCart, orders } = useOrder();
    const navigation = useNavigate()
    return (
        <Bounce>
            <div className="flex flex-col justify-center items-center space-y-3 bg-white border border-gray-200 hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-105 p-4 box-border rounded-xl">
                <img className="w-full h-72" src={image} alt={title} />
                <h1 className="text-gray-600 poppins text-lg text-center">{title}</h1>
                <p className="text-gray-500 text-center flex-grow">{description.slice(0, 70)}</p>

                {/* price  */}
                <h2 className="text-gray-900 text-center font-bold poppins text-3xl">${price}</h2>
                {/* rating  */}
                <div className="flex items-center space-x-2" >
                    <div
                        style={{
                            direction: 'ltr',
                        }}
                    >
                        <Rating
                            initialValue={rating}
                            readonly
                            className="rating-icon"
                        />
                    </div>
                    <span className="text-gray-600">({reviews})</span>
                </div>

                {/* buttons */}
                <div className="flex items-center space-x-3">
                    <button disabled={disabled} className={` ${disabled} && "opacity-30" w-36 bg-customGreen rounded-md py-3 px-4 poppins text-sm flex items-center justify-center space-x-3 text-center text-white`} onClick={() => {
                        handleCart(product);
                        setDisabled(true)
                        Swal.fire({
                            title: "Good job!",
                            text: "You clicked the button!",
                            icon: "success"
                        });

                    }}>
                        <BsCart2 className="text-2xl" />
                        <span>{orders.find(item => item.id === id) || disabled ? "Added" : "Cart"}</span>
                    </button>
                    <Button className="w-36 bg-customGreen py-3 px-2 poppins text-md rounded-md text-white" text="View" onClick={() => navigation(`/products/${title}`)} />
                </div>
            </div>
        </Bounce>
    )
}

export default Product