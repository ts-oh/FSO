const Header = (props) => {
  console.log(props);
  const { name } = props.course;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
