import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = "FSO - Half Stack application development";

  const part1 = "Fundamentals of React:";
  const excercises1 = 10;

  const part2 = "Using props to pass data:";
  const excercises2 = 7;

  const part3 = "State of a component:";
  const excercises3 = 14;

  return (
    <div>
      <Header c={course} />
      <Content
        p1={part1}
        e1={excercises1}
        p2={part2}
        e2={excercises2}
        p3={part3}
        e3={excercises3}
      />
      <Total e1={excercises1} e2={excercises2} e3={excercises3} />
    </div>
  );
};

export default App;
