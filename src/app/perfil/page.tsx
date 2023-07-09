"use client"
import LayoutProject from "../layout/layoutProyect";
import { useState } from "react";
import { Api } from "@/services/api";
import { useRouter, redirect } from 'next/navigation'


export default function PerfilHome() {
    const token = sessionStorage.getItem('token');
    if (token === null) {
        return redirect('/')
    } else {
        console.log(token)
        const router = useRouter();
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [username, setUsername] = useState('');
    
        const handleEmailChange = (e: any) => {
            setEmail(e.target.value);
        };
    
        const handleUsernameChange = (e: any) => {
            setUsername(e.target.value);
        };
    
        const handlePasswordChange = (e: any) => {
            setPassword(e.target.value);
        };
    
    
        const handleSubmitRegister = async (e: any) => {
            sessionStorage.clear();
    
        };
    
        const handleSubmit = async (e: any) => {
            e.preventDefault();
    
            const userData = {
                identifier: email,
                password: password,
            };
    
            const api = new Api();
            const data = await api.post(`https://www.dashboard.hauscenter.com.bo/api/auth/local`, userData);
            console.log(data)
            router.back();
        };
        return (
            <>
                <LayoutProject>
                    <div className="grid grid-cols-2">
                        <div className="col-span-2">
                            <p className="font-extrabold text-6xl text-sky-900 text-center my-12">MI CUENTA</p>
                        </div>
    
                        <div className="col-span-1 m-10 flex justify-center border-r-2 border-solid border-sky-900">
    
                            <form onSubmit={handleSubmit} className="w-full">
                                <div className="w-2/3">
    
                                    <div className="flex flex-col mb-6">
                                        <span className="text-xl font-extrabold text-sky-900 uppercase ">Usuario</span>
                                        <input type="email" onChange={handleEmailChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                    </div>
    
                                    <div className="flex flex-col">
                                        <span className="text-xl font-extrabold text-sky-900 uppercase ">Contrasenha</span>
                                        <input type="password" onChange={handlePasswordChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                    </div>
    
                                    <center>
                                        <button type="submit" className="text-xl font-extrabold text-white bg-sky-900 rounded-full py-2 px-8 uppercase mt-4">Iniciar sesion</button>
                                    </center>
                                </div>
                            </form>
    
                        </div>
    
                        <div className="col-span-1 p-10 flex justify-start">
                            <form onSubmit={handleSubmitRegister} className="w-full" method="post">
                                <div className="w-2/3">
    
                                    <div className="flex flex-col mb-6">
                                        <span className="text-xl font-extrabold text-sky-900 uppercase ">Correo</span>
                                        <input type="text" onChange={handleEmailChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                    </div>
    
                                    <div className="flex flex-col mb-6">
                                        <span className="text-xl font-extrabold text-sky-900 uppercase ">Usuario</span>
                                        <input type="text" onChange={handleUsernameChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                    </div>
    
                                    <div className="flex flex-col">
                                        <span className="text-xl font-extrabold text-sky-900 uppercase ">Contrasenha</span>
                                        <input type="text" onChange={handlePasswordChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                    </div>
    
                                    <button type="submit" className="text-xl font-extrabold text-white bg-sky-900 rounded-full py-2 px-8 uppercase mt-4">Crear cuenta</button>
                                </div>
                            </form>
    
                        </div>
                    </div>
                </LayoutProject>
            </>
        )
    }
}
