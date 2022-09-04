import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
   console.log("App rendering")
   return (
      <div className="App">
         {/*<PageTitle title={"This is APP component"}/>*/}
         {/*<PageTitle title={"My friends"}/>*/}
         <Accordion title={"Menu"} collapsed={true} />
         <Accordion title={"Users"} collapsed={false} />
         <Rating value={0}/>
         <Rating value={1}/>
         <Rating value={2}/>
         <Rating value={3}/>
         <Rating value={4}/>
         <Rating value={5}/>
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
