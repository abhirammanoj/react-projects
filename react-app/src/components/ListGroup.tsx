function ListGroup() {
  let items = ["Kerala", "Tamil Nadu", "Telgana", "Karnataka", "Hyderabad"];
  // items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
