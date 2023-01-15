import React, {useState} from 'react';

import './styles.css';

import { Login } from '../../components/card';


export function Home() {
  /* const [login, setStudentetname] =useState(); */
//aqui eu começo a fazer a pegar os valores e fazer a comparação na arquivo login 
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[text,setText]=useState('');
  const[error,setError]=useState('');

  const handleEmail=(event)=>{
    const {value} = event.target;
    setEmail(value);
  };

  const handlePassword=(event)=>{
    const {value} = event.target;
    setPassword(value);
  };

  const handleText=(event)=>{
    const {value} = event.target;
    setText(value);
  };

  const handleSubmit=()=>{
    console.log('submited');

    let values = {email:email,password:password, text:text};
    Login(values)
    .then(()=>{})
    .catch((error)=>{ 
      console.log(error);
      setError(error)
    });
  };


  return (

    <div>
      <div className= "container"><h1> sistema de login </h1>
     {/*  <header>
        <div >
          <img className='ball' src="https://github.com/nervaljunior.png" alt="perfil" />
        </div>
      </header> */}
      <label htmlFor={'email'}>e-mail:{/* { login } */}</label>
      <input 
      type={'email'}
      id={'email'}
      placeholder='blablabla@gmail.com'
      pattern='.+globex\.com' 
      value={email}
      onChange={handleEmail}
      /* onChange={e=>setStudentetname(e.target.value)} *//>

      <label htmlFor={'text'}> usuário: </label>
      <input 
      type={'text'}
      id={'text'} 
      placeholder="digite o nome"
      value={text}
      onChange={handleText}
      />

      <label htmlFor={'password'}> senha: </label>
      <input 
      type={'password'}
      id={'password'} 
      value={password}    
      onChange={handlePassword}

      placeholder='difite sua senha' />

      <button disabled={email==='' || password.length < 6 } onClick= {handleSubmit} >adicionar</button>

      </div>
      
      {error && <div className='errorMenssage'>{error.message}</div>}
    </div>

  )
}

