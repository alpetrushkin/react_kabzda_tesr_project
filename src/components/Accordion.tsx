import React from "react";

interface AccordionPropsType {
   title: string
   collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
   console.log("Accordion rendering")
   if (props.collapsed === true) {
      return (
         <div>
            <AccordionTitle  titleValue={props.title}/>
            <AccordionBody  />
         </div>
      )
   } else {
      return (
         <div>
            <AccordionTitle titleValue={props.title}/>
         </div>
      )
   }

}

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