import React from 'react'
import { emps } from '../data'
class ListEmployeeComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            employees:[]
        }
   this.deleteEmployee.bind(this)
   this.viewEmployee.bind(this)
    }

    viewEmployee(id)
    {
        this.props.history.push(`/viewEmployee/${id}`)
    }

    deleteEmployee(id)
    {
        this.setState({employees:this.state.employees.filter(emp=>emp.id!=id)})
    }

    componentDidMount(){
        this.setState({employees:emps})
    }

    render(){
        return(
            <div>
            <h2 className="text-center">Employees List</h2>
            <div className = "row">
               <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
            </div>
            <br></br>
            <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                               <th> Employee Name</th>
                               <th> Employee Email</th>
                               <th> Employee Address</th>
                               <th> Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee => 
                                   <tr key = {employee.id}>
                                        <td> { employee.name} </td>   
                                        <td> {employee.email}</td>
                                        <td> {employee.address}</td>
                                        <td>
                                            <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                        </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

            </div>

       </div>

        )
    }
}
export default ListEmployeeComponent