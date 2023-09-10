import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Doctornavbar from "./Doctornavbar";
import { db } from "../../firebase";


export default function Patientlist() {
  const location = useLocation();

  const email = new URLSearchParams(location.search).get("email");

  const [undertakingPatients, setUndertakingPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const patientsRef = collection(db, "Patient");
      const snapshot = await getDocs(patientsRef);
      const patients = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const filteredPatients = patients.filter(
        (ele) => ele.doctorEmail === email
      );
      setUndertakingPatients(filteredPatients);
    };

    fetchPatients();
  }, [email]);
    

  let myStyles = {
    backgroundImage: `url("https://img.freepik.com/premium-photo/blurry-office-interior_103324-720.jpg")` ,
    height:'91vh',
    backgroundSize: 'cover',
   }
   let patient = {
    width : '70rem',
    opacity : '0.80'
   }



  return (
    <>
      <Doctornavbar />
      <div className="min-h-full" style={myStyles}>
      <header className="">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Patient-list
          </h1>
        </div>
      </header>
      <div className="overflow-x-auto  mx-auto rounded-xl" style={patient}>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="text-lg">
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Age
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Problem
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {undertakingPatients.map((item, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                  {item.Age}
                </td>
                <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                  {item.problem}
                </td>
                <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                  {item.status === true ? "Online" : "Offline"}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    to={`/Patientinfo?id=${item.id}`}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}
