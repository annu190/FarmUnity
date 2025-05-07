import { useEffect, useState } from 'react';

const LaborVacanciesList = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    // Simulate fetching from backend or localStorage
    const data = JSON.parse(localStorage.getItem('farmerVacancies')) || [];
    setVacancies(data);
  }, []);

  return (
    <ul className="space-y-3">
      {vacancies.length === 0 ? (
        <p>No vacancies available at the moment.</p>
      ) : (
        vacancies.map((vac, index) => (
          <li key={index} className="border p-3 rounded shadow">
            <p><strong>Job Title:</strong> {vac.title}</p>
            <p><strong>Location:</strong> {vac.location}</p>
            <p><strong>Description:</strong> {vac.description}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default LaborVacanciesList;
