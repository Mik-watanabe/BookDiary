//A single book display on the search page
return function Book(props) {
  const { book } = props;
  console.log(book);
  return <>{props.name}</>;
};
