import { useState } from "react";
import img from "./assets/sorry1.jpg";
import img1 from "./assets/sorry3.jpg";

function App() {
  const [isSorry, setIsSorry] = useState(false);

  const handleSorry = () => {
    setIsSorry(true);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-[100%] bg-[url(./assets/sorry2.jpg)] cover fixed">
        <div className="h-[400px] w-[400px] p-[20px] bg-white relative rounded">
          {
            !isSorry ? (
              <img
                src={img}
                alt="It is sorry image"
                className="h-[200px] w-[200px] absolute top-[20px] left-[90px]"
              />
            ) : (
              <img
                src={img1}
                alt="It is sorry image"
                className="h-[200px] w-[200px] absolute top-[20px] left-[90px]"
              />
            )
          }

          <div className="absolute top-[230px] w-full text-center">
            <h1 className="font-bold text-2xl">
              {
                isSorry
                  ? "Very very sorry Simran, ithuku mela ippadi panna maatan"
                  : "Sorry Simran, summa vilaiyatuku thaannga Simran"
              }
            </h1>

            {
              !isSorry &&
              <button
                className="h-[50px] w-[300px] bg-blue-500 text-2xl font-bold text-white rounded mt-[20px]"
                onClick={handleSorry}
              >
                Simran Click Here
              </button>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

