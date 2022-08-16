const Content = (props) => {
  console.log(props);
  const part1 = `${props.p1} ${props.e1}`;
  const part2 = `${props.p2} ${props.e2}`;
  const part3 = `${props.p3} ${props.e3}`;
  return (
    <main>
      <p>{part1}</p>
      <p>{part2}</p>
      <p>{part3}</p>
    </main>
  );
};

export default Content;
