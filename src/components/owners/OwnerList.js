import React, { Component } from 'react'

class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {owner.name}
                        {owner.phone}
                            <a href="#"
                                onClick={() => this.props.deleteOwners(owner.id)}
                                className="card-link">Delete</a>
                        </h5>
                    </div>
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnerList