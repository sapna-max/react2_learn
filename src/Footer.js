
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
let name="hi to all";
const car = {type:"Fiat", model:"500", color:"white"};
let a=2
let msg="";
if(a>=10){
    msg="heelo";
}
else{
      msg="bye";
}

function Footer(){
    return(
        <>
        <h1 style={{backgroundColor:"yellow"}}>Footer</h1>
        <div class="alert alert-primary" role="alert">
             A simple primary alert—check it out!
        </div>
        <button type="button" class="btn btn-primary">Primary</button>  

        <h1>{name}</h1>
        <p>{car.color}</p>
        <p>{msg}</p>
        <p>{(a>5)?"Hello Kumar": "Bye Kumar"}</p>

        </>
    )
}

export default Footer;