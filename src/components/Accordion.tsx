import React from "react";

interface AccordionPropsType {
   title: string
   collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
   console.log("Accordion rendering")

   return (
      <div>
         <AccordionTitle titleValue={props.title}/>
         {!props.collapsed && <AccordionBody  />}
      </div>
   )
}

// export function Accordion1(props: AccordionPropsType) {
//    console.log("Accordion rendering")
//    if (props.collapsed === true) {
//       return (
//          <div>
//             <AccordionTitle titleValue={props.title}/>
//          </div>
//       )
//    } else {
//       return (
//          <div>
//             <AccordionTitle titleValue={props.title}/>
//             <AccordionBody  />
//          </div>
//       )
//    }
// }

interface AccordionTitlePropsType {
   titleValue: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
   console.log("AccordionTitle")
   return <h3>{props.titleValue}</h3>
}

function AccordionBody() {
   console.log("AccordionBody")
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   )
}