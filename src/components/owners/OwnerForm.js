import React, { Component } from "react"

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        owner: ""
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
    constructNewOwner = evt => {
        evt.preventDefault()
        if (this.state.owner === "") {
            window.alert("Please select a caretaker")
        } else {
            const addNewOwner = {
                name: this.state.owner,
            }

            // Create the employee and redirect user to employee list
            this.props.addOwners(addNewOwner).then(() => this.props.history.push("/owners"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="OwnerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">New Employee</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="owner"
                            placeholder="Employee Name" />
                    </div>

                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}