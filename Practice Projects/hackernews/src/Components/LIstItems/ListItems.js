const ListItems = (props) => {
  return (
    <div>
      {props.listItems.map((item, id) => {
        return (
          <div key={id}>
            <p>{`${id + 1}: ${item.title}`}</p>
            <p>{`Author : ${item.author}`}</p>
            <p>{`Work have :${item.points} points and ${item.num_comments} comments`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
