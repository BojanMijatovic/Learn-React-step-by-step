import Card from '../UI/Card';

import styles from './UsersList.module.scss';

const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user, id) => {
          return (
            <li key={id}>
              {' '}
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UsersList;
