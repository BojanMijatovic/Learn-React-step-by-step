import faker from 'faker';

import styles from './App.module.scss';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div>
      <ApprovalCard className={styles.newDiv}>
        <CommentDetail
          author='Nicolas'
          timeAgo='Today at 16:45 pm'
          text='Great tutorial thanks'
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Ted'
          timeAgo='Today at 18:05 pm'
          text='You are welcome'
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Mike'
          timeAgo='Yesterday at 06:45 am'
          text='This is awesome'
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
