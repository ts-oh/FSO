const Content = (props) => {
  console.log(props);
  const { parts } = props.course;
  return (
    <main>
      <p>1. {parts[0].name}</p>
      <p>2. {parts[1].name}</p>
      <p>3. {parts[2].name}</p>
    </main>
  );
};

export default Content;
