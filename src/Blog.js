
import bloghead from './blog.module.css';

function Blog(){
    let obj={
        color:"blue",
        backgroundColor:"yellow",
        fontSize:"50px"
    }

    let obj2={
        fontFamily:"cooper"
    }

    return(
        <>
        <h1 className={bloghead.header}>Blog data</h1>
        <h1 style={{obj,obj2}}>Blog section </h1>
        <div className='section1'>
                <div style={{color:"red", fontSize:"10px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </div>      
        </>
    )    

}
export default Blog;