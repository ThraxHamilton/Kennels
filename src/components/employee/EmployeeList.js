import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                       Add Employee
                </button>
                </div>
                <section className="employees">
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id} className="employee-card">
                                {employee.name}
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="employee-card-link">Delete</a>
                            </div>
                        )
                    }
                </section>
                </React.Fragment>
                )
            }
        }
        
export default EmployeeList