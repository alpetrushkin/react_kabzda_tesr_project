import React, {useState} from 'react';
import style from './Second.module.css'

export const Second = () => {
   let [second, setSecond] = useState(0)

   const onClickResetHandler = () => {
   }


   return (
      <div >
         <h3>{second}</h3>
         <button onClick={() => setSecond(second + 1)}>+</button>
         <button onClick={() => setSecond(second - 1)}>-</button>
         <button disabled={true} onClick={onClickResetHandler}>Reset</button>
      </div>
   );
};