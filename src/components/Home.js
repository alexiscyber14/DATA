import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanies } from '../redux/logic/companySlice';
import '../App.css';
import Globe from '../globe.jpg';

const CompanyList = () => {
  const companies = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <div className="homeContainer">
      <div className="intro">
        <img src={Globe} alt="into_image" />
        <div className="text-cont">
          <h1>
            <span className="title">Fortune 100</span>
            <span className="year">Year 2009</span>
          </h1>
        </div>
      </div>
      <div>
        <div className="content">
          {companies.map((company) => (
            <NavLink to={`details/${company.name}`} className="listItem" key={company.id}>
              <p className="icon"><i className="fa fa-arrow-right" /></p>
              <p className="title">{company.name}</p>
              <p className="money">
                Revenue:_$
                {company.revenue}
                M
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
