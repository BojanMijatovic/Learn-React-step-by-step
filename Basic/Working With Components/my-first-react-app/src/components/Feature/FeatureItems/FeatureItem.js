import Section from '../../Section';
import './FeatureItem.css';

const FeatureItem = (props) => {
  return (
    <Section>
      <div className='item'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
        architecto.
        <h3>{props.itemText}</h3>
      </div>
    </Section>
  );
};

export default FeatureItem;
