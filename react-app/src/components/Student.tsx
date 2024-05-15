interface props {
  name: string;
  age: number;
  isStudent: boolean;
}
function Student({ name, age, isStudent }: props) {
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Student : {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
export default Student;
