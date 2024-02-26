import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Courses from "./components/Courses";
import Selected from "./components/Selected";

function App() {
  const [selects, setSlectes] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaning, setRemaning] = useState(20);
  const [price, setPrice] = useState(0);

  const handleToSelect = (course, credit_in_hour, course_price) => {
    // console.log(course)
    if (selects.includes(course)) {
      toast("Already taken!");
    } else {
      const newCreadit = credit + credit_in_hour;
      if (newCreadit <= 20) {
        setCredit(newCreadit);
      }
      const newRemaning = remaning - credit_in_hour;
      if (newRemaning >= 0) {
        setRemaning(newRemaning);
        setSlectes([...selects, course]);
      } else {
        toast("You have no longer creadit hour left!");
        <ToastContainer />;
      }
      setPrice(price + course_price);
    }
  };

  return (
    <>
      <div className="container m-auto">
        <div>
          <h1 className="text-5xl p-5 text-center font-bold pt-8 ">
            Course Registration
          </h1>
        </div>
        <div className="md:flex gap-5">
          <Courses handleToSelect={handleToSelect} />
          <Selected
            selects={selects}
            credit={credit}
            remaning={remaning}
            price={price}
          />
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
