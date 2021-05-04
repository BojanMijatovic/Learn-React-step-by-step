import FeatureItem from './FeatureItems/FeatureItem';
import './Features.css';

const Feature = () => {
  const textForItems = ['item-1', 'item-2', 'item-3'];

  return (
    <div className='features'>
      <FeatureItem itemText={textForItems[0]} />
      <FeatureItem itemText={textForItems[1]} />
      <FeatureItem itemText={textForItems[2]} />
    </div>
  );
};

export default Feature;
