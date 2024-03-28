
const Button = ({ text, ...rest }) => {
    return (
        <button className=" w-full py-3 mt-6 poppins rounded-lg" {...rest}>{text}</button>
    )
}

export default Button