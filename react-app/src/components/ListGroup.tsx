function ListGroup() {
  const items = ["Kerala", "Tamil Nadu", "Telgana", "Karnataka", "Hyderabad"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
