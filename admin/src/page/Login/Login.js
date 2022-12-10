import { Link } from "react-router-dom";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import { Logo } from "../../constants/images";
import { useState, useEffect} from "react"
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        document.title = "Login"
    })

    console.log({email, password})

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log({email, password})
        const url = ''
        axios.post(url,{
            email: email,
            password: password
        })
        .then((res) => {
            console.log(res)
            alert('Login successful')
        })
        .catch((err) => {
            console.log(err)
            alert('Login failed')
        })
    }

    return (
        <div className="relative bg-login h-screen bg-cover bg-center bg-no-repeat">
            <section className="h-screen flex justify-center items-center">
                <form className="h-auto w-1/3 px-10 py-5 text-white bg-blur rounded-lg border-2 border-black font-medium">
                    <div className="flex items-end justify-center">
                        <img className="w-24 h-full border border-black" src={Logo} alt="Logo"/>
                        <p className="ml-6 text-lg tracking-[.2em]">CAY <br/> STUDIO</p>
                    </div>
                    <div className="my-2">
                        <label>Email</label>
                        <div className="flex items-center grow bg-blur rounded-lg px-3 mt-2">
                            <BiEnvelope />
                            <input
                            type="email"
                            value={email}
                            onChange={handleEmail}
                            className="form-control block w-full px-4 py-2 text-md font-normal bg-transparent m-0 outline-none"
                            id="loginPassword"
                            placeholder="Enter your email"
                            maxLength={64}
                            required
                            />                        
                        </div>
                    </div>
                    <div className="mb-5">
                        <label>Password</label>
                        <div className="flex items-center grow bg-blur rounded-lg px-3 mt-2">
                            <BiLockAlt />
                            <input
                            type="password"
                            value={password}
                            onChange={handlePassword}
                            className="form-control block w-full px-4 py-2 text-md font-normal bg-transparent m-0 outline-none"
                            id="loginPassword"
                            placeholder="Enter your password"
                            maxLength={100}
                            required
                            />
                        </div>
                    </div>
                    <div className="text-center">
                    <Link to="/">
                        <input 
                        type="submit"
                        className="inline-block px-7 py-3 w-full bg-black text-md tracking-wide font-bold leading-snug uppercase rounded shadow-md hover:bg-white hover:text-black focus:outline-none"
                        onClick={handleSubmit}
                        />
                    </Link>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Login