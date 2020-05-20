import React from 'react';
// import CardList from './Card/CardList';

function Employee(props) {

    const data = [
        {
          "name": "Farhan Aslam",
          "imageURL": "/images/farhan.jpg",
          "description": "React",
          "id": "5b6c6a7f01a7c38429530883"
        },
        {
          "name": "Sahil Satija",
          "imageURL": "/images/sahil.jpg",
          "description": "React",
          "id": "5b6c6aeb01a7c38429530884"
        },
        {
            "name": "Ashish Bimal",
            "imageURL": "/images/ashish.jpg",
            "description": "DotNet",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Anshu Ashish",
            "imageURL": "/images/anshu.jpg",
            "description": "Dotnet",
            "id": "5b6c6aeb01a7c38429530884"
          }
    ]

    const styles = {
        width: '20rem',
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

export default Employee;