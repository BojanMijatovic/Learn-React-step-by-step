const FilterBeer = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          type='text'
          placeholder='find some beer'
          onChange={(e) => onFormSubmit(e)}
        />
        <button type='submit'>find beer</button>
      </form>
    </div>
  );
};

export default FilterBeer;
