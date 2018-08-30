import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import AnimalManager from '../modules/AnimalManager'
import AnimalDetail from './animals/AnimalDetail'
import AnimalForm from './animals/AnimalForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeManager from '../modules/EmployeeManager'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeForm from './employee/EmployeeForm'
import LocationList from './locations/LocationList'
import LocationManager from '../modules/LocationManager'
// import LocationDetail from './locations/LocationDetail'
import OwnerList from './owners/OwnerList'
import OwnerManager from '../modules/OwnerManager'
import OwnerDetail from './owners/OwnerDetail'
import OwnerForm from './owners/OwnerForm'


export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}
        // Simple way for a fetch call
        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })

        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
        OwnerManager.getAll().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })


        // .then(() => fetch("http://localhost:5002/owners")
        // .then(r => r.json()))
        // .then(owners => newState.owners = owners)
        // .then(() => this.setState(newState))
    }
    // ADD 
    // Add animal promise
    addAnimal = animal => AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))
    // Add employee 
    addEmployees = employee => EmployeeManager.post(employee)
        .then(() => EmployeeManager.getAll())
        .then(employees => this.setState({
            employees: employees
        }))
    // Add Owner
    addOwners = owner => OwnerManager.post(owner)
        .then(() => OwnerManager.getAll())
        .then(owners => this.setState({
            owners: owners
        }))  


// DELETE FUNCTIONS
    // Delete animal Function
    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(e => e.json())
            .then(animals => this.setState({
                animals: animals
            }))
    }
    // Fire Employees
    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            }))
    }
    // Delete Owners
    deleteOwners = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            }))
    }


// RENDER FUNCTION(s)
    render() {
        return (
            <React.Fragment>
                {/* LOCATIONS */}
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />

                {/* ANIMALS */}
                {/* Path to link to another page with details. Ex. "animals/1" */}
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                {/* Path to display animals */}
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                        deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals} />
                }} />
                {/* Render form to add new animal */}
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />

                {/* EMPLOYEES */}
                {/* Exact path for employee details on new address */}
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                {/* Display employees */}
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props}
                        deleteEmployee={this.deleteEmployee}
                        employees={this.state.employees} />
                }} />
                {/* Add Employee */}
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addEmployees={this.addEmployees}
                        employees={this.state.employees} />
                }} />

                {/* OWNERS */}
                {/* Path to display owner list/card and delete from API */}
                {/* Exact path for details */}
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
                {/* Display Owners */}
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList {...props}
                        deleteOwner={this.deleteOwners}
                        owners={this.state.owners} />
                }} />
                {/* Add Owner */}
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                        addOwners={this.addOwners}
                        owners={this.state.owners} />
                }} />




            </React.Fragment>
        )
    }
}