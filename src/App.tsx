import { Wrapper } from "@graphcms/app-sdk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Setup } from "./Setup";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Setup />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
