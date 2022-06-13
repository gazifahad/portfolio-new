import React from 'react';
import TextTransition, { presets } from "react-text-transition";
import './Animation.css'

const TEXTS = [
    "Web Develpment",
    "Web Designing",
    
  ];
const Animation = () => {
    const [index, setIndex] = React.useState(0);
    
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      4000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
    return (
        <div className='text-center'>
            <h1 className='mt-3 text-center d-flex flex-row'>
              I Do    
     <div className='animated-text'>
     <TextTransition
        text= { TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
     </div>
    </h1>
        </div>
    );
};

export default Animation;