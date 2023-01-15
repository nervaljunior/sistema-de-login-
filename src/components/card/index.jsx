/* import './styles.css' ; */
export function Login({email, password, text}){
    const delay = (0.7 + Math.random()*2)*1000;

    return new Promise ((resolve, reject)=>{
        setTimeout(function(){
            if (password==='nervalzao' && !!email | !!text){
                resolve();
            } else{
                reject({message:'email or password wrong.'});
            }
        },delay);
    });

    /* return(
        <div className='login'>
            <a href="./">create a count</a>
            <small>
                10:15:24
            </small>
        </div>
    ) */
}