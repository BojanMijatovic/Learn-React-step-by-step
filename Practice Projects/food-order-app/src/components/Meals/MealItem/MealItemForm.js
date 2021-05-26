import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input
        label='amount'
        input={{
          id: 'amount',
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
