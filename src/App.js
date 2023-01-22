import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./App.css";

const angles = [
  [
    "30°",
    "𝜋/6",
    {
      cos: "√3/2",
      sin: "1/2",
      tan: "√3/3",
      sec: "2√3/3",
      cosec: "2",
      cot: "√3",
    },
  ],
  [
    "45°",
    "𝜋/4",
    { cos: "√2/2", sin: "√2/2", tan: "1", sec: "√2", cosec: "√2", cot: "1" },
  ],
  [
    "60°",
    "𝜋/3",
    {
      cos: "1/2",
      sin: "√3/2",
      tan: "√3",
      sec: "2",
      cosec: "2√3/3",
      cot: "√3/3",
    },
  ],
  [
    "90°",
    "𝜋/2",
    {
      cos: "0",
      sin: "1",
      tan: "undefined",
      sec: "undefined",
      cosec: "1",
      cot: "undefined",
    },
  ],
  [
    "120°",
    "2𝜋/3",
    {
      cos: "-1/2",
      sin: "√3/2",
      tan: "-√3",
      sec: "-2",
      cosec: "2√3/3",
      cot: "-√3/3",
    },
  ],
  [
    "135°",
    "3𝜋/4",
    {
      cos: "-√2/2",
      sin: "√2/2",
      tan: "-1",
      sec: "-√2",
      cosec: "√2",
      cot: "-1",
    },
  ],
  [
    "150°",
    "5𝜋/6",
    {
      cos: "-√3/2",
      sin: "1/2",
      tan: "-√3/3",
      sec: "-2√3/3",
      cosec: "2",
      cot: "-√3",
    },
  ],
  [
    "180°",
    "𝜋",
    {
      cos: "-1",
      sin: "0",
      tan: "0",
      sec: "-1",
      cosec: "undefined",
      cot: "undefined",
    },
  ],
  [
    "210°",
    "7𝜋/6",
    {
      cos: "-√3/2",
      sin: "-1/2",
      tan: "√3/3",
      sec: "-2√3/3",
      cosec: "-2",
      cot: "√3",
    },
  ],
  [
    "225°",
    "5𝜋/4",
    {
      cos: "-√2/2",
      sin: "-√2/2",
      tan: "1",
      sec: "-√2",
      cosec: "-√2",
      cot: "1",
    },
  ],
  [
    "240°",
    "4𝜋/3",
    {
      cos: "-1/2",
      sin: "-√3/2",
      tan: "√3",
      sec: "-2",
      cosec: "-2√3/3",
      cot: "√3/3",
    },
  ],
  [
    "270°",
    "3𝜋/2",
    {
      cos: "0",
      sin: "-1",
      tan: "undefined",
      sec: "undefined",
      cosec: "-1",
      cot: "undefined",
    },
  ],
  [
    "300°",
    "5𝜋/3",
    {
      cos: "1/2",
      sin: "-√3/2",
      tan: "-√3",
      sec: "2",
      cosec: "-2√3/3",
      cot: "-√3/3",
    },
  ],
  [
    "315°",
    "7𝜋/4",
    {
      cos: "√2/2",
      sin: "-√2/2",
      tan: "-1",
      sec: "√2",
      cosec: "-√2",
      cot: "-1",
    },
  ],
  [
    "330°",
    "11𝜋/6",
    {
      cos: "√3/2",
      sin: "-1/2",
      tan: "-√3/3",
      sec: "2√3/3",
      cosec: "-2",
      cot: "-√3",
    },
  ],
  [
    "360°",
    "2𝜋",
    {
      cos: "1",
      sin: "0",
      tan: "0",
      sec: "1",
      cosec: "undefined",
      cot: "undefined",
    },
  ],
];

const trigFunctions = ["sin", "cos", "tan", "cosec", "sec", "cot"];

const initialAngleIdx = Math.floor(Math.random() * 16);
const initialTrigFunc = trigFunctions[Math.floor(Math.random() * 6)];

function App() {
  const [angleIdx, setAngleIdx] = useState(initialAngleIdx);
  const [trigFunc, setTrigFunc] = useState(initialTrigFunc);
  const [usingDegrees, setUsingDegrees] = useState(false);
  const [showingAnswer, setShowingAnswer] = useState(false);

  const angle = angles[angleIdx][usingDegrees ? 0 : 1];
  const answer = angles[angleIdx][2][trigFunc];

  const handleChange = () => {
    setUsingDegrees(!usingDegrees);
  };

  const handleNew = () => {
    setShowingAnswer(false);
    setAngleIdx(Math.floor(Math.random() * 16));
    setTrigFunc(trigFunctions[Math.floor(Math.random() * 6)]);
  };

  return (
    <div className="App">
      <h2>Trig values you should know :)</h2>
      <button onClick={handleChange}>
        {usingDegrees ? "Switch to radians" : "Switch to degrees"}
      </button>
      <div onClick={() => setShowingAnswer(!showingAnswer)}>
        <Trig
          func={trigFunc}
          angle={angle}
          answer={answer}
          showingAnswer={showingAnswer}
        />
      </div>

      <button onClick={handleNew}>New</button>
    </div>
  );
}

const Trig = ({ func, angle, answer, showingAnswer }) => {
  return (
    <ReactCardFlip
      flipSpeedBackToFront={0.1}
      flipSpeedFrontToBack={0.1}
      isFlipped={!showingAnswer}
    >
      <div className="container">
        <h1>
          <Fraction fraction={answer} />
        </h1>
      </div>
      <div className="container">
        <h1>
          {func} <Fraction fraction={angle} />
        </h1>
      </div>
    </ReactCardFlip>
  );
};

const Fraction = ({ fraction }) => {
  if (fraction.split("/").length === 1) {
    return fraction;
  } else {
    const [numerator, denominator] = fraction.split("/");
    return (
      <>
        <sup>{numerator}</sup>&#8260;<sub>{denominator}</sub>
      </>
    );
  }
};

export default App;
