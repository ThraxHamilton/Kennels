import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="employee-card">
                            {employee.name}
                            <a href="#"
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="employee-card-link">Delete</a>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList