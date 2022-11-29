import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="relative bg-login h-screen bg-cover bg-center bg-no-repeat">
            <section class="h-screen flex justify-center items-center">
                <div class="px-6 h-auto w-1/4 text-white bg-blur rounded-lg">
                    <div class="flex justify-center items-center flex-wrap w-full g-6">
                        <div>
                        <form>
                            <div class="text-3xl font-bold text-center justify-center mb-2">
                                logo hehe
                            </div>
                            <div class="mb-6">
                                <label>Email</label>
                                <div class="flex items-center grow bg-blur rounded-lg px-3 mt-2">
                                    <img class="w-5 h-5 fill-white" src="" alt=""/>
                                    <input
                                    type="email"
                                    class="form-control block w-full px-4 py-2 text-md font-normal text-white bg-transparent m-0 "
                                    id="loginPassword"
                                    placeholder="Enter your email"
                                    maxLength={36}
                                    />                        
                                </div>
                            </div>

                            <div class="mb-6">
                                <label>Password</label>
                                <div class="flex justify-center items-center bg-blur rounded-lg px-3 mt-2">
                                    <div class="flex items-center">
                                        <img class="flex w-5 h-5 fill-white-0" src="" alt=""/>
                                        <input
                                        type="password"
                                        class="flex form-control w-auto px-4 py-2 text-md font-normal text-white bg-transparent m-0 "
                                        id="loginPassword"
                                        placeholder="Enter your password"
                                        maxLength={36}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="text-center">
                            <Link to="/">
                                <button
                                type="button"
                                class="inline-block px-7 py-3 w-full bg-blue-600 text-white text-md tracking-wide font-bold leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                Login
                                </button>
                            </Link>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login