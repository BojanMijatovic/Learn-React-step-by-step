import '../style/Header.css';
import AboutUs from './AboutUs/AboutUs';

const Header = () => {
  const about = 'We are small but great company';

  return (
    <div className='header'>
      <h1>REACT PEOPLE Company</h1>
      <h2>Who We are?</h2>
      <p className='text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum minima, a
        sapiente voluptatibus eveniet nobis laboriosam veniam deleniti eaque sed
        quibusdam suscipit commodi placeat nihil cumque aspernatur et quo amet!
      </p>
      <AboutUs aboutText={about} />
    </div>
  );
};

export default Header;
