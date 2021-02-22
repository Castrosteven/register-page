import RegisterForm from "./components/RegisterForm";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <div className="App h-100">
      <TopNavbar></TopNavbar>
      <div className="container h-100 ">
        <div className="row h-100 justify-content-center align-content-center ">
          <div className="col-6 border m-2">
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
