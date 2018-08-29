import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }
                        }>
                       Add New Owner
                </button>
                </div>
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {owner.name}
                        {owner.phone}
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                            <a href="#"
                                onClick={() => this.props.deleteOwners(owner.id)}
                                className="card-link">Delete</a>
                        </h5>
                    </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}

export default OwnerList