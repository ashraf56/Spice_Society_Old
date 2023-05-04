import React from 'react';
import { Accordion } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  const options = {
    orientation: 'landscape',
};
    return (
        <div className='container ' >
          <div className='w-100' ref={ref}>
<h1 className='text-center pb-5'>Common questions</h1>

             <Accordion defaultActiveKey="0" className='container mb-5   pb-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tell us the differences between uncontrolled and controlled components?</Accordion.Header>
        <Accordion.Body>
          <p>
            <strong>Uncontrolled components:</strong>
            Uncontrolled components are store their own state internally.Their value is controlled by the user.They are more like traditional HTML forms. <br />
            <strong>Controlled components:</strong>
            controlled components value is controlled by React.They are easier to manage.
            controlled components rely on a parent component to handle their state and pass the new values as props.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to validate React props using PropTypes?</Accordion.Header>
        <Accordion.Body>
        To validate React props using PropTypes, we need to- 
    install the prop-types package using npm or yarn.
Import PropTypes from ‘prop-types’ in our component file.
        Define the propTypes property for our component, specifying the type and requiredness of each prop using the validators provided by PropTypes.
Access and use the props in our component, optionally using default props for optional prop.


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Tell us the difference between nodejs and express js?</Accordion.Header>
        <Accordion.Body>
        Node.js is a run-time environment for executing JavaScript code outside of a browser, using the V8 engine . Node.js allows developers to write server-side JavaScript code, which can interact with databases, file systems, and networks.
        <br />
        Express.js is a framework based on Node.js for building web applications using the principles and approaches of Node.js.Express.js provides  powerful features and tools for building web applications and APIs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
        <Accordion.Body>
        Custom hook is a JS function. It starts with 'use'. It is
        reducing code duplication.
       we can create a custom hook for any purpose that suits our application’s needs.
        It can help to reduce the complexity of our components. Also,
        we can use the custom hook to extract and share common logic between components.


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
<div className='text-center'>
<Pdf targetRef={ref} options={options} filename="code-example.pdf">
{({ toPdf }) =>
<p className=' fs-5 btn  fw-bold' onClick={toPdf}>Print as Pdf</p>}
</Pdf>
</div>
        </div>
    );
};

export default Blog;