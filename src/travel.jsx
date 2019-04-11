import React from 'react';

class Travel extends React.Component{
    render(){
        const{destination, country, photo, distance} = this.props;
        return (
            <div>
                <p>{destination}</p>
                <p>{country}</p>
                <p>{distance}</p>
                <figure>
                    <img src={photo} alt={destination}></img>
                    <figcaption>{destination}</figcaption>
                </figure>
            </div>
        );
    }
}
export default Travel;