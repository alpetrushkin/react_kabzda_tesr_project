import React, {useState} from "react";

interface AccordionPropsType {
   title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
   console.log("UncontrolledAccordion rendering")

   const [collapsed, setCollapsed] = useState(false)

   return (
      <div>
         <AccordionTitle titleValue={props.title}/><button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
         {!collapsed && <AccordionBody  />}
      </div>
   )
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