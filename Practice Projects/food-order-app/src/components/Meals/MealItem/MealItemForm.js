import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = (props) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log('Form is here');
  };

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <Input
        label='amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ add</button>
    </form>
  );
};

export default MealItemForm;
