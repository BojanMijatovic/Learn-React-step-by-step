import Card from '../../UI/Card/Card';
import style from './UsersList.module.css';

const UsersList = ({ users }) => {
  return (
    <Card className={style.users}>
      <ul>
        {users.map((user, id) => {
          return (
            <li key={id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
