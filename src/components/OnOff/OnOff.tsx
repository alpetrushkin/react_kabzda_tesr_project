import React, {useState} from 'react';
import styles from './OnOff.module.css'

export const OnOff = () => {
   let [on, setOn] = useState(false)

   const onIndicatorStyle = {
      backgroundColor: on ? 'green' : 'white',

   }
   const offIndicatorStyle = {
      backgroundColor: on ? 'white' : 'red',

   }
   const indicatorStyle = {
      backgroundColor: on ? 'green' : 'red',

   }

   return (
      <div className={styles.body}>
         <button style={onIndicatorStyle} className={styles.onIndicator} onClick={() => setOn(true) }>On</button>
         <button style={offIndicatorStyle} className={styles.offIndicator} onClick={() => setOn(false) }>Off</button>
         <div style={indicatorStyle} className={styles.indicator}></div>
      </div>
   );
};

