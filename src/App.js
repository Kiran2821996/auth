import Counter from "./components/Counter";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const login = useSelector((state)=>state.auth.loginData)
  return (
    <>
    {console.log(login)}
    {login?<Counter/>:<Login/>}
     
   
    </>
   
  );
}

export default App;
