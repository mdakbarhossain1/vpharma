import { Link } from "react-router-dom"
import Button from "../../components/Form/Button"
import TextField from "../../components/Form/TextField"
import { useState } from "react"
// import useAuth from "../../hook/useAuth"
import GoogleSignIn from "../../components/Form/GoogleSignIn"


const Login = () => {

  // const { signInUser } = useAuth()

  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  })


  //form inputs
  const Inputs = [
    { id: 1, type: "email", placeholder: "Email", value: `${userInput.email}`, name: 'email' },
    { id: 2, type: "password", placeholder: "Password", value: `${userInput.password}`, name: 'password' },
  ];

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userInput: email, userInput: password)
  // }

  //handle submit form 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userInput: email, userInput: password)
  //   signInUser(userInput: email, userInput: password)
  // }

  return (
    <main className="h-screen w-full banner">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-center h-screen">
          <form className="bg-white w-3/5 mt-6 p-4 rounded-lg shadow-lg" onSubmit={console.log("first")}>
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
            <Button text="Sign In" />
            <Link to="/signup">
              <p className="text-base text-primary text-center my-6 hover:underline">Need an account ?</p>
            </Link>

            <GoogleSignIn text="Sign In With Google" />
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login