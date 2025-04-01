"use client";

import { useState } from "react"

function Body() {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <>
            <form className="bg-black/75 text-white p-12 w-3/12 my-36 right-0 left-0 mx-auto rounded-lg">
                <h1 className="font-bold text-2xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 text-gray-400 bg-gray-800 w-full" />}
                <input type="text" placeholder="Email Address" className="p-4 my-4 text-gray-400 bg-gray-800 w-full" />
                <input type="password" placeholder="Password" className="p-4 my-4 text-gray-400 bg-gray-800 w-full" />
                <button type="submit" className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 text-white">{isSignInForm ? "New to Netflix? " : "Already registered? "}<span className="cursor-pointer text-red-700" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In Now"}</span></p>
            </form>
        </>
    )
}

export default Body