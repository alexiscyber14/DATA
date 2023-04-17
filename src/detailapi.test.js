// check if the rockets datat is fetched from the spaceX Api
const fetchCompany = async () => {
  const response = await fetch('https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies?filter=Chevron');
  const company = await response.json();
  return company;
};

describe('fetchCompany', () => {
  it('should fetch company from the fortune 100 api', async () => {
    const company = await fetchCompany();
    expect(company).toBeDefined();
    expect(Array.isArray(company)).toBe(true);
    expect(company.length).toBe(1);
  });
});
