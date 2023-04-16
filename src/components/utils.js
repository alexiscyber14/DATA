import { useParams } from 'react-router-dom';

export const GetCompanyNameFromParams = () => {
  const params = useParams();
  const { companyName } = params;
  return companyName;
};
