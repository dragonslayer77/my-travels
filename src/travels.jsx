import React from 'react';

const travels =[
{
    destination: 'Lisbon',
    country: 'Portugal',
    distance: '8723',
    photo:'https://picsum.photos/200/300/?random'    
},
{
    destination: 'Paris',
    country: 'France',
    distance: '8723',
    photo:'https://picsum.photos/200/300/?random'    
},
{
    destination: 'Berlin',
    country: 'Germany',
    distance: '8723',
    photo:'https://picsum.photos/200/300/?random'    
},
{
    destination: 'Istanbul',
    country: 'Turkey',
    distance: '8723',
    photo:'https://picsum.photos/200/300/?random'    
},
{
    destination: 'San Francisco',
    country: 'USA',
    distance: '8723',
    photo:'https://picsum.photos/200/300/?random'    
},
];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <div>
            <p>{travel.destination}</p>
            <p>{travel.country}</p>
            <p>{travel.distance}</p>
            <figure>
                <img src={travel.photo} alt={travel.destination}></img>
                <figcaption>{travel.destination}</figcaption>
            </figure>
        </div>
        ))}
    </div>
);

export default Travels;