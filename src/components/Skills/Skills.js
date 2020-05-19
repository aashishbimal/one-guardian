import React from 'react';
// import CardList from './Card/CardList';

function Skills(props) {

    const data = [
        {
          "name": "Java",
          "imageURL": "/images/java.png",
          "description": "Java is a widely used programming language expressly designed for use in the distributed environment of the internet. It is the most popular programming language for Android smartphone applications and is also among the most favored for the development of edge devices and the internet of things.",
          "id": "5b6c6a7f01a7c38429530883"
        },
        {
          "name": "React",
          "imageURL": "/images/react.png",
          "description": "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. We'll get to the funny XML-like tags soon.",
          "id": "5b6c6aeb01a7c38429530884"
        },
        {
            "name": "Angular",
            "imageURL": "/images/angular.png",
            "description": "Angular is written using TypeScript language, which is basically a superset for JavaScript. It fully compiles to JavaScript, but helps spot and eliminate common mistakes when actually typing the code.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "JavaScript",
            "imageURL": "/images/javascript.png",
            "description": "Javascript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "Python",
            "imageURL": "/images/python.png",
            "description": "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "C",
            "imageURL": "/images/c.jpg",
            "description": "It was mainly developed as a system programming language to write an operating system. The main features of C language include low-level access to memory, a simple set of keywords, and clean style, these features make C language suitable for system programmings like an operating system or compiler development.",
            "id": "5b6c6aeb01a7c38429530884"
          },
          {
            "name": "PHP",
            "imageURL": "/images/php.png",
            "description": "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications. PHP stands for Hypertext Pre-processor, that earlier stood for Personal Home Pages. PHP scripts can only be interpreted on a server that has PHP installed.",
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

export default Skills;