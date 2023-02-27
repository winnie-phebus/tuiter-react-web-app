import { Route, Routes } from "react-router";
import Tre from "./Tre";
import Ytr from "./Ytr";
import Uyt from "./Uyt";
const Cxz = () => {
  return (
    <>
      <Routes>
        <Route path="/:a/:b" element={<Tre />} />
        <Route index element={<Ytr />} />
        <Route path="/gfd/:a/:b" element={<Uyt />} />
      </Routes>
    </>
  );
};
export default Cxz;
