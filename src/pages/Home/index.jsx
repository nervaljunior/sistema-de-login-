import React, {useState} from 'react';

import './styles.css';

import { Card } from '../../components/card';


export function Home() {

  

  const [login, setStudentetname] =useState();



  return (

    <div className= "container"><h1> sistema de login</h1>
    <label htmlFor="email">e-mail:{ login }</label>
    <input 
    type="email"
    name="email" 
    id="email" 
    placeholder='blablabla@gmail.com'
    pattern='.+globex\.com' 
    onChange={e=>setStudentetname(e.target.value)}/>

    <label htmlFor="text"> usuário: </label>
    <input 
    type="text" 
    name='text' 
    id="text" 
    placeholder="digite o nome"
    />

    <label htmlFor="password"> senha: </label>
    <input 
    type="password" 
    name='password' 
    id='password' 
    placeholder='difite sua senha' />

    <button type="button">adicionar</button>

    </div>
  )
}

