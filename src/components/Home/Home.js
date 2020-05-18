import React from 'react';

function Home(props) {

    return (
  <div>
    <h1>Hello world work-assist!</h1>
    <p>Welcome to your new single-page application, built with:</p>
    <ul>
      <li>React and Redux for client-side code</li>
      <li>Bootstrap for layout and styling</li>
      <li>Node.js for server-side code</li>
    </ul>
    <p>
      The run the application on your development machine you need to install npm version 6 or greater
      and Node.js version 10 or greater,
      then open a command prompt, change the current directory to be the root application directory and run <code>npm install</code> and <code>npm start</code>.
    </p>
    <p>To help you get started, we've also set up:</p>
    <ul>
      <li><strong>Client-side navigation</strong> using React Router. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
      <li><strong>Client-side state management</strong> using Redux.</li>
      <li>
        <strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically,
        so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.
      </li>
      <li><strong>Server code</strong>. Node.Js Express server which delivers the React application and routes HTTP calls to the backend APIs.</li>
    </ul>
    <p>The <code>src</code> subdirectory is a standard React application based on the <code>create-react-app</code> template.</p>
    <p>The <code>server</code> subdirectory is a standard Node.Js Express which acts as the backend server for the React application.</p>
    <p>
      <strong>This code is based on the Guardian React software template.</strong>
    </p>
    <p>
      <strong>If you have any suggestions or you want to contribute to the React software template please send us an
        <a href='mailto:devsupport@glic.com?subject=React software template request'> email</a>.
      </strong>
    </p>
    <p><em><strong>DO NOT remove the /health endpoint exposed by the Node.js server because it's been used by the AWS ELB to determine the application health.</strong></em></p>
  </div>
    );
}
export default Home;
