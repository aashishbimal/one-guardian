import React from 'react';

function Training(props) {

    const data = [
        {
          "name": "Learning VirtualBox",
          "author": "Scott Simpson",
          "hours": "1h 50m",
          "date": new Date("2020-05-17T18:30:00.000Z").toLocaleDateString(),
          "skillLevel": "Beginner",
          "imageURL": "/images/Big-data.jpg",
          "description": "VirtualBox—a free software virtualization package from Oracle that allows you to host multiple operating systems on a single physical machine—is an excellent solution for creating your own practice and testing environments.",
          "id": "5b6c6a7f01a7c38429530883"
        },
        {
          "name": "Internet of things",
          "author": "Scott Simpson",
          "hours": "2h 10m",
          "date": new Date("2020-05-17T18:30:00.000Z").toLocaleDateString(),
          "skillLevel": "Advanced",
          "imageURL": "/images/internet-of-things.jpg",
          "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
          "id": "5b6c6aeb01a7c38429530884"
        },
        {
            "name": "Machine Learning",
            "author": "Scott Simpson",
            "hours": "3h 12m",
            "date": new Date("2020-05-17T18:30:00.000Z").toLocaleDateString(),
            "skillLevel": "Beginner",
            "imageURL": "/images/Machine-learning.png",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Augmented Reality",
            "author": "Scott Simpson",
            "hours": "5h 50m",
            "date": new Date("2020-05-17T18:30:00.000Z").toLocaleDateString(),
            "skillLevel": "Intermediate",
            "imageURL": "/images/Augmented-reality.jpg",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "RPA UI Path",
            "author": "Scott Simpson",
            "hours": "49m 25s",
            "date": new Date("2020-05-17T18:30:00.000Z").toLocaleDateString(),
            "skillLevel": "Beginner",
            "imageURL": "/images/rpa.png",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Machine Learning",
            "author": "Scott Simpson",
            "hours": "1h 50m",
            "date": new Date("2020-05-17T18:30:00.000Z").toLocaleDateString(),
            "skillLevel": "Advanced",
            "imageURL": "/images/Machine-learning.png",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Augmented Reality",
            "author": "Scott Simpson",
            "hours": "44m 50s",
            "date": new Date("2020-05-17T18:30:00.000Z").toLocaleDateString(),
            "skillLevel": "Beginner",
            "imageURL": "/images/Augmented-reality.jpg",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Internet of things",
            "author": "Scott Simpson",
            "hours": "6h 50m",
            "date": new Date("2020-05-17T18:30:00.000Z").toLocaleDateString(),
            "skillLevel": "Beginner",
            "imageURL": "/images/internet-of-things.jpg",
            "description": "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Internet of things",
            "author": "Scott Simpson",
            "hours": "8h 42m",
            "date": new Date("2020-05-17T18:30:00.000Z").toLocaleDateString(),
            "skillLevel": "Advanced",
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
                        <img class="card-img-top" src={obj.imageURL} alt="Card image cap" style={{width: 'auto', height: '150px'}} />
                        <div class="card-body">
                          <h5 class="card-title">{obj.name}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">with {obj.author}</h6>
                          <p class="card-text">{obj.description}</p>
                          <div class="row">
                            <div class="col">
                            <small class="text-muted">{obj.hours}</small>
                            </div>
                            <div class="col">
                            <small class="text-muted">{obj.skillLevel}</small>
                            </div>
                            <div class="col-4">
                            <small class="text-muted">{obj.date}</small>
                            </div>
                            </div>
                        </div>
                        </div>
                      
                    );
                })
            }
        </div>

    );
}

export default Training;