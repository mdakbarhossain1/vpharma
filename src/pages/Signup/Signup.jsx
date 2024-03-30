import { Link, useLocation, useNavigate } from "react-router-dom"
import GoogleSignIn from "../../components/Form/GoogleSignIn"
import Button from "../../components/Form/Button"
import TextField from "../../components/Form/TextField"
import { useState } from "react"
import useAuth from "../../hook/useAuth"
import Swal from "sweetalert2"

const Signup = () => {

  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    image: '',
    password: '',
  })

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page', location.state)


  const { createUser, updateUserProfile } = useAuth()

  // handle change
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInput(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  //form inputs
  const Inputs = [
    { id: 1, type: "text", placeholder: "Name", value: `${userInput.name}`, name: 'name' },
    { id: 2, type: "email", placeholder: "Email", value: `${userInput.email}`, name: 'email' },
    { id: 3, type: "text", placeholder: "Profile Picture Link", value: `${userInput.image}`, name: 'image' },
    { id: 4, type: "password", placeholder: "Password", value: `${userInput.password}`, name: 'password' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, image } = userInput;
    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUserProfile(name, image)
          
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
      <main className="h-screen w-full banner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center h-screen">
            <form className="bg-white w-3/5 mt-6 p-4 rounded-lg shadow-lg" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-6">
                {Inputs.map(input => (
                  <TextField
                    key={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={input.value}
                    name={input.name}
                    onChange={handleChange}
                  />
                ))}
              </div>
              <Button text="Register" />
              <Link to="/login">
                <p className="text-base text-primary text-center my-6 hover:underline">Already have an account ?</p>
              </Link>

              <GoogleSignIn text="Sign In With Google" />
            </form>
          </div>
        </div>
      </main>
    )
  }

  export default Signup