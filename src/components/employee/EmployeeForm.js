import React, { Component } from "react"

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        employee: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewEmployee = evt => {
        evt.preventDefault()
        if (this.state.employee === "") {
            window.alert("Please select a caretaker")
        } else {
            const newEmployee = {
                name: this.state.employee,
            }

            // Create the employee and redirect user to employee list
            this.props.addEmployees(newEmployee).then(() => this.props.history.push("/employees"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="EmployeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">New Employee</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="employee"
                            placeholder="Employee Name" />
                    </div>

                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}