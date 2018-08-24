import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="location">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.address}
                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList