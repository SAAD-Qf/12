"use client"

import { signIn } from "next-auth/react";

export default function(){
    return(
        <div>
            <h1 className="font-serif text-2xl text-center justify-center items-center text-teal-500 border-2 border-red-500 shadow-lg shadow-orange-50 rounded-3xl">
                sign in with github
            </h1>
            <br />
            <button className="bg-teal-300 text-white px-4 py-1 rounded-lg shadow-xl shadow-teal-500 text-center items-center justify-center  font-serif  " onClick={() => signIn ('github')}> 
                sign in 
            </button>
        </div>
    )
}