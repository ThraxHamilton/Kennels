import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'
import AnimalManager from '../modules/AnimalManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
import OwnerManager from '../modules/OwnerManager'

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


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />

                <Route exact path="/animals" render={(props) => {
    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
}} />

               <Route exact path="/employees" render={(props) => {
    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
}} />

                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwners={this.deleteOwners} owners={this.state.owners} />
                }} />
                
                
            </React.Fragment>
        )
    }
}