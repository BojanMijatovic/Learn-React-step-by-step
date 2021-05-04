import '../style/Section.css';

const Section = (props) => {
  const classes = `section ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Section;
