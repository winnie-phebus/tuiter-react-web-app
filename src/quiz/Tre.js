import { useParams } from "react-router";
const Tre = () => {
  const { a, b } = useParams();
  const qq = parseInt(a);
  const ee = parseInt(b);
  return (
    <>
      <h2>{ee + qq}</h2>
    </>
  );
};
export default Tre;
