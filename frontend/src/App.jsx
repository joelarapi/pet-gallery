import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import AboutUs from "./components/AboutUs";
import RootLayout from "./views/Root";
import ContactPage from "./components/ContactPage";
import DogGallery from "./components/DogGallery";
import CatGallery from "./components/CatGallery";
import BirdGallery from "./components/BirdGallery";
import PetForm from "./components/PetForm";
import PetDetails from "./components/PetDetails";
import EditPet from "./components/EditPet";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-page" element={<ContactPage/>}/>
          <Route path="dashboard/dog-gallery" element={<DogGallery/>}/>
          <Route path="dashboard/cat-gallery" element={<CatGallery/>}/>
          <Route path="dashboard/bird-gallery" element={<BirdGallery/>}/>
          <Route path="pet-form" element={<PetForm/>}/>
          <Route path="pet/:id" element={<PetDetails/>}/>
          <Route path="pet/:id/edit" element={<EditPet/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
