import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Second} from "./components/Second/Second";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {
   console.log("App rendering")
   return (
      <div className="App">
         <OnOff/>
         {/*<Second/>*/}
         <UncontrolledAccordion title={"Menu"} />
         <UncontrolledRating />
         {/*<PageTitle title={"This is APP component"}/>*/}
         {/*<PageTitle title={"My friends"}/>*/}
         {/*<Accordion title={"Menu"} collapsed={true} />*/}
         {/*<Accordion title={"Users"} collapsed={false} />*/}
         {/*<UncontrolledRating value={0}/>*/}
         {/*<UncontrolledRating value={1}/>*/}
         {/*<UncontrolledRating value={2}/>*/}
         {/*<UncontrolledRating value={3}/>*/}
         {/*<UncontrolledRating value={4}/>*/}
         {/*<UncontrolledRating value={5}/>*/}
      </div>
   );
}

interface PageTitlePropsType {
   title: string
}

function PageTitle(props: PageTitlePropsType) {
   console.log("PageTitle rendering")
   return <div>{props.title}</div>
}

export default App;
