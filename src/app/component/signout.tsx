"use client"

import { signOut } from "next-auth/react";

export default function(){
    return(
        <div>
            <h1 className="font-serif text-2xl text-center justify-center items-center text-red-500">
                sign out with Github
            </h1>
            <button className="bg-teal-300 text-white px-4 py-1 rounded-lg shadow-sm grid col-3 items-center justify-center shadow-rose-500  font-serif" onClick={() => signOut ()}> 
                sign out 
            </button>
        </div>
    )
}