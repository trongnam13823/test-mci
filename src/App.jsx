import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Blogs from "@/pages/Blogs/index";
import BlogDetail from "@/pages/BlogDetail/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Blogs />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
