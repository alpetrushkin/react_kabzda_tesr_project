import React from "react";

interface RatingType {
   value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingType) {
   console.log("UncontrolledRating rendering")

   return (
      <div>
         <Star selected={props.value > 0}/>
         <Star selected={props.value > 1}/>
         <Star selected={props.value > 2}/>
         <Star selected={props.value > 3}/>
         <Star selected={props.value > 4}/>
      </div>
   )
}

interface StarPropsType {
   selected: boolean
}

function Star(props: StarPropsType) {
   console.log("Star rendering")
   if (props.selected) {
      return <span><b>star</b> </span>
   } else {
      return <span>star </span>
   }
}
