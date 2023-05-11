import React from 'react'
// import {useNavigate} from 'react-router-dom'
class AboutUs extends React.Component{
    constructor(props){
        super(props)
    }
    display=(e)=>{
        // e.preventDefault()
        // const navigate= useNavigate()
       this.props.history.push("/login")
        console.log("Aboutsus")
    }
    render(){
    return(
        <div>
            <form>
                <button onClick={()=>this.display()}>Click</button>
            </form>
        </div>
    )
  }
}
export default AboutUs