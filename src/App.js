import "./App.css";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import Feed from "./component/Feed/Feed";
import Widgets from "./component/Widget/Widgets";
import Login from "./component/Login/Login";
import { useStateValue } from "./component/StateProvider/StateProvider";
// import { useStateValue } from "./component/StateProvider/StateProvider";



function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM Naming convention
    <div className="app">
      {
        !user ? ( 
        <Login />
         ): ( 
        <>
      <Header />
      <div className="app_body">
        {/* sidebar */}
        <Sidebar/>
        {/* Feed  */}
        <Feed /> 
        {/* Widgets */}
        <Widgets />
            </div>
            </>
      )}
      {/* App Body */}

    </div>
  );
}

export default App;
