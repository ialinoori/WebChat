import React,{useState,useEffect,useContext} from 'react';
import { useHistory } from "react-router-dom"
import { auth } from "../firebase"
import { ChatEngine } from "react-chat-engine"
import axios from "axios"

//Components
import Navbar from './Navbar';

//Styles
import styles from "./Chats.module.css"

//Context
import{AuthContext } from "../contexts/AuthContextProvider"



const Chats = () => {

    const[loading,setLoading] = useState(true)
    const user = useContext(AuthContext)
    const history = useHistory()

    useEffect(() =>{
        if(!user){
            history.push("/")
            return;
        }
        axios.get("https://api.chatengine.io/users/me",{
            headers:{
                "project-id":"b4544775-b083-4948-84b3-99d0ac1c38ca",
                "user-name":user.email,
                "user-secret":user.uid
            }
        })
         .then(() => {
             setLoading(false)
         })
         .catch(()=>{
             let formdata = new FormData();
             formdata.append("email",user.email)
             formdata.append("username",user.email)
             formdata.append("secret",user.uid)
             getFile(user.photoURL)
                 .then(avatar =>{
                     formdata.append("avatar",avatar,avatar.name)
                     axios.post("https://api.chatengine.io/users/",formdata,{
                         headers:{
                             "private-key":"edec87b5-5fea-4001-89a7-1a7596c90e95"

                         }

                     })
                     .then(()=>setLoading(false))
                     .catch(error=>console.log(error))

                 })


         })
    },[user,history])

    

    const getFile =async (url) =>{
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data],"userPhoto.jpg",{type:"image/jpeg"})
    }







    const logoutHandler = async () =>{
        await auth.signOut();
        history.push("/")
    }
    
    if(!user || loading) return "Loading..."


    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>
            <ChatEngine
               height="calc(100vh - 50px)"
               projectID= "b4544775-b083-4948-84b3-99d0ac1c38ca"
               userName={user.email}
               userSecret={user.uid}
            />
            
        </div>
    );
};

export default Chats;