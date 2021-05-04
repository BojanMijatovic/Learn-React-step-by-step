import './Button.css';

const Button = () => {
  const signUp = () => {
    console.log(`Here is test`);
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
