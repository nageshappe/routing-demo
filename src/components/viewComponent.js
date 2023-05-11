import React from 'react'
import { emps } from '../data'
class ViewEmployeeComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            employee:{}
        }

    
    }
    componentDidMount(){
        let newemp=emps.filter(emp=>emp.id==this.state.id)
        this.setState({employee:newemp[0]})
       console.log(this.state.employee)
    }

   
        render() {
            return (
                <div>
                    <br></br>
                    <div className = "card col-md-6 offset-md-3">
                        <h3 className = "text-center"> View Employee Details</h3>
                        <div className = "card-body">
                            <div className = "row">
                                <label> Employee First Name: </label>
                                <div> { this.state.employee.name }</div>
                            </div>
                            <div className = "row">
                                <label> Employee Last Name: </label>
                                <div> { this.state.employee.email }</div>
                            </div>
                            <div className = "row">
                                <label> Employee Email ID: </label>
                                <div> { this.state.employee.address }</div>
                            </div>
                        </div>
    
                    </div>
                </div>
            )
    }
}

export default ViewEmployeeComponent