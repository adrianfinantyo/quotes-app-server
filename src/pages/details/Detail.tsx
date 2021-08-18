import { m, motion, useCycle } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.scss";

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

const photoVariants = {
  rest: { y: 500, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  exit: { y: 500, opacity: 0, transition: { delay: 0.2, ...transition } },
};

const Detail = () => {
  const data: any = useLocation().state;
  console.log(data);

  const handleOnClick = () => window.open(`${data.link}`);

  return (
    <motion.div id="detail-main" initial="rest" animate="enter" exit="exit">
      <motion.div className="img-wrapper" variants={photoVariants}>
        <img src={data.link} alt={data.photographer} />
      </motion.div>
      <div className="desc-wrapper">
        <h1>Photo Title</h1>
        <h3>Photo by: {data.photographer}</h3>
        <button onClick={handleOnClick}>
          See Original <Arrow />
        </button>
      </div>
    </motion.div>
  );
};

export default Detail;

const Arrow = () => {
  return (
    <svg viewBox="0 0 492.004 492.004">
      <g>
        <g>
          <path
            d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
          />
        </g>
      </g>
    </svg>
  );
};
