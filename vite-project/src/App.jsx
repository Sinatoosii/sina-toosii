/* eslint-disable react/jsx-key */
import TextItem from "./Components/TextItem";
import { sculptureList } from "./"
function App() {
const myArrey =[{name:"text1", age:20}, {name:"text2", age:30}]



  return (
    <div>
    <TextItem title=" TextItem1"/>
    {myArrey.map((i) =>{return (<div>{i.name}</div>)})}
    </div>
  )
}
  
export default App;
