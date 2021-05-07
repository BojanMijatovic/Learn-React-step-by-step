const App = () => {
  const btnText = 'Click me';
  return (
    <div>
      <label htmlFor='name' className='label'>
        Name
      </label>
      <input type='text' placeholder='input name' />
      <button type='submit' style={{ backgroundColor: 'red', color: 'white' }}>
        {btnText}
      </button>
    </div>
  );
};

export default App;
