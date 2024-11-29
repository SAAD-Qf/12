

// Authentication and authorization today topic
"use  client"

import Sessionwrapper from "@/app/component/sessionwrapper"
import LoginComponent from "../app/component/login"
import {auth} from "@/app/lib/auth"
import Signoutcomponent from "../app/component/signout"
import Login from "@/app/Login/page"


export default async function Home (){
  const session = await auth()
  const isAuthenticated = !!session?.user
  return(
    <div className=" min-h-screen w-screen bg-cover lg:min-h-max min-w-fit " 
    style={{ backgroundImage: "url('/back.gif')" }}>
      <Sessionwrapper>
      <LoginComponent/>
      <Login/>
      <Signoutcomponent/>
      </Sessionwrapper>
    </div>
  )
}
