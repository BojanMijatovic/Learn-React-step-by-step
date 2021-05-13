import styles from './App.module.scss';

const ApprovalCard = (props) => {
  return (
    <div className={styles.newDiv}>
      <div className='content'>{props.children}</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Approve</div>
          <div className='ui basic red button'>Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
