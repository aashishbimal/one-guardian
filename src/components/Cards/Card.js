import React from 'react';
// import CardList from './Card/CardList';

function Card(props) {

    const data = [
        {
          "name": "Big Data",
          "imageURL": "/images/Big-data.jpg",
          "description": "Big Data is a field that treats ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software.",
          "id": "5b6c6a7f01a7c38429530883"
        },
        {
          "name": "Internet of things",
          "imageURL": "/images/internet-of-things.jpg",
          "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
          "id": "5b6c6aeb01a7c38429530884"
        },
        {
            "name": "Machine Learning",
            "imageURL": "/images/Machine-learning.png",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Augmented Reality",
            "imageURL": "/images/Augmented-reality.jpg",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "RPA UI Path",
            "imageURL": "/images/rpa.png",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Machine Learning",
            "imageURL": "/images/Machine-learning.png",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Augmented Reality",
            "imageURL": "/images/Augmented-reality.jpg",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Internet of things",
            "imageURL": "/images/internet-of-things.jpg",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Internet of things",
            "imageURL": "/images/internet-of-things.jpg",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          }
    ]

    const styles = {
        width: '18rem',
        margin: '10px'
    };

    return(

        <div style={{'flex-flow': 'row wrap', display: 'flex', padding: '10px'}}>
            {
                data.map((obj,i) => {
                    return (
                        <div class="card" style={styles}>
                        <img class="card-img-top" src={obj.imageURL} alt="Card image cap" />
                        <div class="card-body">
                          <h5 class="card-title">{obj.name}</h5>
                          <p class="card-text">{obj.description}</p>
                        </div>
                        </div>
                      
                    );
                })
            }
        </div>

    );
}

export default Card;