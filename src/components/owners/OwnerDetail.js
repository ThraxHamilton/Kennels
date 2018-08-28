import React, { Component } from "react"

export default class OwnerDetail extends Component {
    render() {
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="owner">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {owner.name}   
                        </h4>
                        <h6 className="card-title">{owner.address}</h6>
                        <a href="#"
                            onClick={() => this.props.deleteowner(owner.id)
                                            .then(() => this.props.history.push("/owners"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}