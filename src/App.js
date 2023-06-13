import About from "./components/About/About";
import Certificat from "./components/Certificat/Certificat";
import Contacts from "./components/Contacts/Contacts";
import HomePage from "./components/Homepage/HomePage";
import MePage from "./components/MePage/MePage";
import { Modal } from "./components/Modal/Modal";
import Project from "./components/Project/Project";
import Service from "./components/Service/Service";
import Trust from "./components/Trust/Trust";
import FullPageScroll from "./FullPageScroll/FullPageScroll";

function App() {
  return (
    <div>
      <FullPageScroll />
      {/* <Modal />
      <HomePage/>
      <About/>

      <Service/>
      <Project/>
      <MePage/>
      <Trust/>
      <Certificat/>
      <Contacts/> */}
    </div>
  );
}

export default App;
