import PropTypes from "prop-types";

const Section = (props) => {
  return (
    <div className={`w-screen relative h-screen ${props.className}`.trim()}>
      {props.children}
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;
