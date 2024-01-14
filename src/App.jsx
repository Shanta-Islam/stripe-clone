import Banner from "./Banner";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Sidebar />
        <Banner/>
        <Submenu />
      </div>
    </>
  );
}

export default App;
