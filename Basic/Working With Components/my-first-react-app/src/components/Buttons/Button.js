import './Button.css';

const Button = (props) => {
  const signUp = () => {
    let message = 'Here is message';
    props.onShowMessage(message);
  };

  return (
    <div>
      <button className='btn' onClick={signUp}>
        Contact us
      </button>
    </div>
  );
};

export default Button;
