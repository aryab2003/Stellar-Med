import { doc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import React, { useEffect, useState } from "react";

export default function PatientReminder(props) {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    // Function to fetch medicines
    const fetchMedicines = async () => {
      try {
        console.log("Fetching medicines...");
        const patientId = props.data;
        const patientRef = doc(db, "Patient", patientId);
        const medicinesRef = collection(patientRef, "medicine-reminder");

        // Create a query for medicines, ordered by createdAt
        const q = query(medicinesRef);

        const snapshot = await getDocs(q);
        const newMedicines = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        // Update medicines state once at the end
        setMedicines(newMedicines);
        console.log("Medicines retrieved:", newMedicines);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    // Call fetchmedicines when the component mounts
    console.log("Calling fetchMedicines...");
    fetchMedicines();
  }, [props.data]);

  console.log("Medicines state:", medicines);

  return (
    <>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        <li className="w-full px-4 py-2 border-b border-gray-200  font-bold text-lg text-blue-600">
          Medicines
        </li>
        {medicines.map((meds) => (
          <li
            className="w-full px-4 py-2 border-b border-gray-200"
            key={meds.id}
          >
            {meds.name}
          </li>
        ))}
      </ul>

      {/* Render other elements here */}
    </>
  );
}
