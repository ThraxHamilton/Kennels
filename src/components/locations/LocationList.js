import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class LocationList extends Component {
    render() {
        return (
            <section className="location">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name}
                        <Link className="nav-link" to={`/locations/${location.address}`}>Details</Link>
                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList