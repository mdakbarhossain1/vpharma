import { Bounce } from "react-awesome-reveal";
import useOrder from "../../hook/useOrder";
import { Rating } from "react-simple-star-rating";
import { MdDeleteOutline } from 'react-icons/md';

const OrderCard = ({ product }) => {
    const { title, image, price, reviews, rating, id } = product;
    const { removeProduct } = useOrder();
    return (
        <Bounce left>
            <div className="flex space-x-5 bg-gray-50 rounded-xl p-4 transition transfrom hover:scale-105 hover:shadow-xl duration-700">
                {/* image  */}
                <div>
                    <img className="w-40" src={image} alt={title} />
                </div>
                {/* details  */}
                <div className="flex flex-col justify-between flex-grow">
                    <h1 className="text-lg poppins text-gray-700">{title}</h1>
                    {/* price  */}
                    <h2 className="text-gray-900 font-bold poppins text-2xl">${price}</h2>
                    {/* rating  */}
                    <div className="flex items-center space-x-2">
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
                </div>
                {/* delete  */}
                <div>
                    <MdDeleteOutline className="text-2xl text-gray-600 cursor-pointer" onClick={() => removeProduct(id)} />
                </div>
            </div>
        </Bounce>
    )
}

export default OrderCard