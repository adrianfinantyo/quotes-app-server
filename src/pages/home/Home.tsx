import React from "react";
import { motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.scss";
import { imageList } from "./ImageList";

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };
const textTransition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const frameVariants = {
  hover: { scale: 0.95, transition },
};

const imageVariants = {
  hover: { scale: 1.1, transition },
};

const descVariants = {
  rest: { y: 0, opacity: 0 },
  hover: { y: -30, opacity: 1, transition: { delay: 0.2, ...textTransition } },
};

const Home = (props: any) => {
  return (
    <motion.div
      id="main-container"
      exit={{ y: 500, opacity: 0, transition: { delay: 0.2, ...transition } }}
    >
      <div id="gallery">
        {imageList.map((data, index) => (
          <ImageThumbnail data={data} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;

const ImageThumbnail = (props: any) => {
  const [hover, togglehover] = useCycle(false, true);
  return (
    <Link
      className="thumbnail"
      key={props.index}
      to={{
        pathname: "/detail",
        state: { index: props.index, ...props.data },
      }}
    >
      <motion.div
        className="photographer"
        variants={descVariants}
        animate={hover ? "hover" : "rest"}
      >
        <svg viewBox="0 0 512 512">
          <CameraIcon />
        </svg>
        <h1>{props.data.photographer}</h1>
      </motion.div>
      <motion.div
        whileHover="hover"
        variants={frameVariants}
        className="frame"
        onHoverStart={() => togglehover()}
        onHoverEnd={() => togglehover()}
        initial={{ y: 200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.2 * props.index, ...transition },
        }}
      >
        <motion.img
          variants={imageVariants}
          whileHover="hover"
          src={props.data.link}
          alt={`Photo by: ${props.data.photographer}`}
        />
      </motion.div>
    </Link>
  );
};

const CameraIcon = () => {
  return (
    <>
      <g>
        <g>
          <path
            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M256,490.667
			c-129.387,0-234.667-105.28-234.667-234.667S126.613,21.333,256,21.333S490.667,126.613,490.667,256S385.387,490.667,256,490.667z
			"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M481.835,341.333H203.605c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667h278.229
			c5.888,0,10.667-4.779,10.667-10.667C492.501,346.112,487.723,341.333,481.835,341.333z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M296.213,494.123L158.229,249.771c-2.901-5.141-9.451-6.933-14.549-4.032c-5.12,2.901-6.933,9.429-4.032,14.549
			L277.611,504.64c1.963,3.456,5.589,5.419,9.301,5.419c1.792,0,3.584-0.427,5.269-1.387
			C297.301,505.771,299.115,499.243,296.213,494.123z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M207.915,150.699c-5.12-2.859-11.648-1.088-14.528,4.053L53.696,402.219c-2.901,5.163-1.088,11.648,4.032,14.549
			c1.664,0.917,3.456,1.365,5.248,1.365c3.712,0,7.339-1.963,9.28-5.419l139.691-247.467
			C214.848,160.085,213.035,153.6,207.915,150.699z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M308.416,149.333H30.635c-5.909,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h277.76
			c5.888,0,10.688-4.779,10.688-10.667S314.304,149.333,308.416,149.333z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M372.437,251.541L234.517,7.317c-2.923-5.141-9.451-6.912-14.549-4.032c-5.12,2.901-6.933,9.429-4.032,14.549
			l137.899,244.224c1.963,3.456,5.589,5.419,9.301,5.419c1.792,0,3.584-0.427,5.269-1.387
			C373.525,263.189,375.339,256.661,372.437,251.541z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M454.507,95.531c-5.099-2.901-11.605-1.131-14.549,4.032L300.053,346.752c-2.901,5.141-1.088,11.627,4.032,14.549
			c1.643,0.917,3.456,1.365,5.248,1.365c3.712,0,7.317-1.941,9.301-5.397L458.539,110.08
			C461.44,104.939,459.627,98.453,454.507,95.531z"
          />
        </g>
      </g>
    </>
  );
};
