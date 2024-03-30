import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth"
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";

const GoogleSignIn = ({ text }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
                console.log(user)
            })
    }

    return (
        <>
            {/* //google signin g */}
            <div className="border-t border-gray-200 mt-6">
                <p className="text-center text-gray-400 py-4">OR </p>
                <div className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100" onClick={handleGoogleSignIn}>
                    <FcGoogle className="w-6 h-6" />
                    <span className="poppins">{text}</span>
                </div>
            </div>
        </>
    )
}

export default GoogleSignIn