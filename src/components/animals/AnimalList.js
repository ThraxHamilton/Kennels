import React, { Component } from 'react'

class AnimalList extends Component {
    render() {
        return (
            <section className="animal">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {animal.animal}
                    </div>
                )
            }
            </section>
        )
    }
}

export default AnimalList