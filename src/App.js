import { Routes, Route, BrowserRouter as Router} from "react-router-dom"
import DefaultComponent from "./component/page/default";
import { Elms } from "./router";
function App() {
  const Layout = ({elm}) => {
    return(
      <DefaultComponent>
          {elm}
     </DefaultComponent>
) 
  }
  return (
    <div className="App">
      <Router>
        <Routes>
           {Elms.map((item, index) => {
               return (
                   (item.path === "/") ?
                   (<Route key={index} path= {item.path} element={ item.element}/>) :
                    <Route key={index} path= {item.path} element={ <Layout elm ={item.element}/>} /> 
               )   
           })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
