import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3>Lessons learnt from project:</h3>
      <p>
        1. Basic flow of <strong>React App</strong>, index.js grabs the div with root as ID and inject App.js into the div
        <br />
        2. App.js is the main layout component that consist of sub components,
        state variables &amp; functions
        <br />
        3. Pass in <strong>variables</strong> into components via attribute, grab the
        variable from the component via {} or props.attribute_name
        <br />
        4. Set <strong>defaultProps</strong> to allow component to use default props in
        case props aren't provided by parent component
        <br />
        5. To create <strong>list of components</strong>, use
        map((arr)=&gt;(&lt;div&gt;arr.value&lt;/ div&gt;)) function.
        <br />
        6. Declare <strong>functions</strong> in App.js to easily access state variables,
        then pass in the function into sub components as props
        <br />
        7. To use <strong>Router</strong>, wrap the entire App.js with Router tag, use
        Route tag to encapsulate jsx using render attribute, or use component
        attribute to render component.
      </p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
