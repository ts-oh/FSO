const Total = (props) => {
  console.log(props);
  const { parts } = props.course;
  return (
    <p>
      Number of exercises:{' '}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}{' '}
    </p>
  );
};

export default Total;
