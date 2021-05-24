import Button from '../UI/Button';
import Card from '../UI/Card';

import styles from './AddUsers.module.scss';

const AddUsers = () => {
  const addFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addFormSubmit}>
        <label htmlFor='username'>UserName</label>
        <input type='text' placeholder='add user name' id='username' />
        <label htmlFor='username'>Age</label>
        <input type='number' placeholder='add user age' id='age ' />
        <Button type='submit'>add user</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
