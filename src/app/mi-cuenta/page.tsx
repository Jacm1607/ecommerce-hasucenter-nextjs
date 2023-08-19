"use client"
import LayoutProject from "../layout/layoutProyect";
import { useEffect, useState } from "react";
import { Api } from "@/services/api";
import { useRouter } from 'next/navigation'


export default function CategoryHome() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const api = new Api();
        const data = await api.get('https://www.dashboard.hauscenter.com.bo/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        console.log(data.status)
        if (data.status === 200) {
          setUser(data.data)
          setLoading(false);
          setAuthenticated(true);
        }
      } catch (error : any) {
        if (error.response.status === 401) {
          setLoading(false);
          setAuthenticated(false);
        }
      }
    };

    fetchData();
  }, [])

  return(
    <LayoutProject>
      {loading ? <Cargando /> : authenticated ? <Perfil user={user}/> : <PageCuenta />}
    </LayoutProject>
  )
}

const Cargando = () => (
  <center className="h-[460px]">
    <span className="text-[60px] font-extrabold text-sky-900">Cargando...</span>
  </center>
)

const Perfil = ({ user }: any) => {
  const token = sessionStorage.getItem('token');
    console.log(token)
  const router = useRouter();
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  const closeSession = () => {
    console.log("sesion cerrada")
    sessionStorage.removeItem('token');
    router.replace('/')
  }

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  
  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleSubmitUpdate = async (e: any) => {
    
    try {
      e.preventDefault();

      const userData = {
        email: email,
        username: username,
      };

      const api = new Api();
      const data = await api.put(`https://www.dashboard.hauscenter.com.bo/api/users/${user.id}`, userData, {headers: {
        Authorization: `Bearer ${token}`,
      }});
      if (data.status === 200) {
        alert("Información actualizada")
      }
    } catch (error) {
      alert("error al iniciar sesion, intenta con otra cuenta.")
    }
  };
  return (
    <>


        <form onSubmit={handleSubmitUpdate} className="grid grid-cols-4 gap-4 my-32">
          <div className="col-span-1">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-sky-900 uppercase ">Usuario</span>
              <input type="text" onChange={handleUsernameChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" defaultValue={user.username} required />
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-sky-900 uppercase ">Email</span>
              <input type="text" onChange={handleEmailChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" defaultValue={user.email} required />
            </div>
          </div>

          <div className="col-span-4">
            <div className="flex justify-end gap-4">
            <button type="submit" className="text-xl font-extrabold text-white bg-sky-900 rounded-full py-2 px-8 uppercase mt-4">Actualizar</button>
            <button type="button" onClick={closeSession} className="text-xl font-extrabold text-white bg-sky-900 rounded-full py-2 px-8 uppercase mt-4">Cerrar sesion</button>
            </div>
          </div>

        </form>

    </>
  )
}

const PageCuenta = () => {
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
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      username: username
    };
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!emailRegex.test(userData.email)) {
      return alert('Dirección de correo electrónico no válida');
    } 

    if (userData.username.length < 4) {
      return alert('Ingrese como minimo 4 caracter en username');
    }

    if (!passwordRegex.test(userData.password)) {
      return alert('La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un número.')
    }

    const api = new Api();
    const data = await api.post(`https://www.dashboard.hauscenter.com.bo/api/auth/local/register`, userData);
    if (data.status === 200) {
      router.back();
    }
    else {
      alert("Error al registrar intente mas tarde.")
    }
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      const userData = {
        identifier: email,
        password: password,
      };

      const api = new Api();
      const data = await api.post(`https://www.dashboard.hauscenter.com.bo/api/auth/local`, userData);
      sessionStorage.setItem('token', data.data.jwt);
      router.back();
    } catch (error) {
      alert("error al iniciar sesion, intenta con otra cuenta.")
    }
  };
  return (
    <>
        <div className="grid grid-cols-2">
          <div className="col-span-2">
            <p className="font-extrabold text-6xl text-sky-900 text-center my-12">MI CUENTA</p>
          </div>

          <div className="col-span-1 m-10 flex justify-center border-r-2 border-solid border-sky-900">

            <form onSubmit={handleSubmit} className="w-full">
              <div className="w-2/3">

                <div className="flex flex-col mb-6">
                  <span className="text-xl font-extrabold text-sky-900 uppercase ">Usuario</span>
                  <input type="text" onChange={handleEmailChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" required placeholder="" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-sky-900 uppercase ">Contraseña</span>
                  <input type="password" onChange={handlePasswordChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" required placeholder="" />
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
                  <input type="text" onChange={handleEmailChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" required placeholder="" />
                </div>

                <div className="flex flex-col mb-6">
                  <span className="text-xl font-extrabold text-sky-900 uppercase ">Usuario</span>
                  <input type="text" onChange={handleUsernameChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" required placeholder="" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-sky-900 uppercase ">Contraseña</span>
                  <input type="password" onChange={handlePasswordChange} className="h-[50px] rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" required placeholder="" />
                </div>

                <button type="submit" className="text-xl font-extrabold text-white bg-sky-900 rounded-full py-2 px-8 uppercase mt-4">Crear cuenta</button>
              </div>
            </form>

          </div>
        </div>
    </>
  )
}