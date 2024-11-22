import { ReactElement, useState } from "react";
import style from "../stylesheets/utils.module.scss";

export function Video(): ReactElement {
  const [state, updateState] = useState(0);

  return (
    <>
      <div>
        <ul className={style.ol}>
          <li>
            What is Richie JS?
            <button
              onClick={() => {
                updateState(10);
              }}
            >
              (1.40)
            </button>
          </li>

          <li>
            Why it is Useful?
            <button
              onClick={() => {
                updateState(40);
              }}
            >
              (2.20)
            </button>
          </li>

          <li>
            How it Works?
            <button
              onClick={() => {
                updateState(50);
              }}
            >
              (3.50)
            </button>
          </li>

          <li>
            Configuration Setup
            <button
              onClick={() => {
                updateState(100);
              }}
            >
              (7.10)
            </button>
          </li>

          <li>
            Richie JS in Action
            <button
              onClick={() => {
                updateState(100);
              }}
            >
              (9.20)
            </button>
          </li>

          <li>
            Sign off
            <button
              onClick={() => {
                updateState(110);
              }}
            >
              (10.50)
            </button>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/xyz?si=LPwgPRCeiYL8l284&start=${state}&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share;"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}
