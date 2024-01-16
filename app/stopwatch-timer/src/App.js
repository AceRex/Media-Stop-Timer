import { useEffect, useRef, useState } from "react";

function App() {
  const [countdown, setCountDown] = useState(1 * 60);
  const [bgChange, setBgChange] = useState(false);
  const timer = useRef();

  const formatTime = (time) => {
    let hr = Math.floor(time / 60);
    let min = Math.floor((time % 3600) / 60);
    let sec = Math.floor(time % 3600);

    if (hr < 10) {
      hr = "0" + hr;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    return hr + " : " + min + " : " + sec;
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timer.current);
      setCountDown("Time Up!!!");
    } else if (countdown <= 10) {
      setBgChange(true);
    }
  }, [countdown]);
  return (
    <div
      className={`${
        bgChange ? "bg-red text-light" : "bg-green text-primary"
      }  p-24 flex my-[14rem] rounded-lg`}
    >
      <p className="text-[170px] font-extrabold">{formatTime(countdown)}</p>
    </div>
  );
}

export default App;
