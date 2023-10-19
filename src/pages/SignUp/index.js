import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo da empresa" />
                </div>

                <form>
                    <h1>Cadastrar Usuario</h1>
                    <input 
                        type='text' 
                        placeholder='nome' 
                        value={name}
                        onChange={(e)=> setName(e.target.value) }
                    />

                    <input 
                        type='text' 
                        placeholder='email@email.com' 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value) }
                    />

                    <input 
                        type='password' 
                        placeholder='******' 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value) }
                    />

                    <button type='submit'>Cadastrar</button>  
                </form>
                <Link to="/">Já possui uma conta? Faça Login!</Link>
            </div>
        </div>
    )
}