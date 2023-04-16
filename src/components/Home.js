import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanies } from '../redux/logic/companySlice';

const CompanyList = () => {
  const companies = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <div>
      <h1>List of Companies</h1>
      {companies.map((company) => (
        <div key={company.id}>
          <NavLink to={`details/${company.name}`}>
            <h2>{company.name}</h2>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
