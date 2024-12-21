import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Blog from "./Blog.jsx";
import Contact from "./Contact.jsx";
import NoPage from "./NoPage.jsx";
import Images from "./Images.jsx";
import Videos from "./Videos.jsx";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
              <Route path="images" element={<Images />}/>
              <Route path="videos" element={<Videos />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);