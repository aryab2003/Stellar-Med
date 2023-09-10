import { Fragment } from "react";
import Doctornavbar from "./Doctornavbar";
import Calendar from "./Calen/Calendar"
import { useLocation } from "react-router-dom";
export default function Doctordasboard() {
  const location = useLocation();
  const email = location.state ? location.state.token : null;

  let myStyles = {
    backgroundImage: `url("https://img.freepik.com/free-photo/blur-hospital_1203-7969.jpg?w=1060&t=st=1693410891~exp=1693411491~hmac=44ad241149d6f75c6bd61a3448eaae807f39a7a747b38373c6df95f641e5eadf")` ,
    height:'91vh',
    backgroundSize: 'cover',
   }

  return (
    <>
      <Doctornavbar data={email}/>
      <div className="min-h-full overflow-hidden" style={myStyles}>
        {/* <header className="">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Doctor-Dashboard
            </h1>
          </div>
        </header> */}
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 h-3/4">
            <div className="container bg-white h-1/2 w-128 rounded-xl opacity-90 my-5  justify-items-end ">
               <Calendar/>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
