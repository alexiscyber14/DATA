import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [company, setCompany] = useState([]);
  const params = useParams();
  const { companyName } = params;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies?filter=${companyName}`);
      const data = await response.json();
      setCompany(data);
    };
    fetchData();
  }, [companyName]);

  return (
    <div>
      <h1>List of Companies</h1>
      {company.map((company) => (
        <div key={company.id}>
          <h2>{company.name}</h2>
          <h2>{company.rank}</h2>
        </div>
      ))}
    </div>
  );
};

export default Details;
