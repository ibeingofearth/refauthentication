import './App.css';
import { useLogin } from './hooks/useLogin';
import { useLogout } from "./hooks/useLogout";


const App = () => {
  const { login, isPending } = useLogin();
  
  return (
    <div className="App">
       <button className="btn" onClick={login}>
        {isPending ? "Loading..." : "Login With Github"}
    </button>
     <button className="btn" onClick={useLogout}>
    Log Out
</button>
    </div>
  );
};

export default App;


