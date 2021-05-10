import faker from 'faker';

const CommentDetail = () => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.avatar()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          Sam
        </a>
        <div className='metadata'>
          <span className='date'></span>Today at 6:00 pm
        </div>
        <div className='text'>Nice blog post</div>
      </div>
    </div>
  );
};

export default CommentDetail;
