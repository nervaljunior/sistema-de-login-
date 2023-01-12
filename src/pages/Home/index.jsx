import './styles.css';


export function Home() {

  return (
    <div className= "container"><h1> sistema de login</h1>
    <label htmlFor="email">e-mail:</label>
    <input type="email" name="email" id="email" placeholder='blablabla@gmail.com'pattern='.+globex\.com' />
    <label htmlFor="text"> usuário: </label>
    <input type="text" name='text' id="text" placeholder="digite o nome"/>
    <label htmlFor="password"> senha: </label>
    <input type="password" name='password' id='password' placeholder='difite sua senha' />
    <button type="button">adicionar</button>
    </div>
  )
}

