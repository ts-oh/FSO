const Total = (props) => {
  console.log(props);
  return <p>Number of exercises: {props.e1 + props.e2 + props.e3} </p>;
};

export default Total;
