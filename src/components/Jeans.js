
import jeans from './images/events-bg.png';

function Jeans(){
    return(
        <>
        <h1>This is jeans Page</h1>     
        <img src={jeans} alt="This" /> 
        <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
        </div>
        <img src={require('./images/feature.jpg')} alt="hello" />       
        </>       
    )
}

export default Jeans