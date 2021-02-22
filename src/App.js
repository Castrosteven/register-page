import BrowserDetect from "./components/BrowserDetect";
import RegisterForm from "./components/RegisterForm";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <div className="App h-100">
      <TopNavbar></TopNavbar>
      <BrowserDetect></BrowserDetect>
      <div className="container ">
        <div className="row justify-content-center align-content-center ">
          <div className="col-6 border m-2">
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
