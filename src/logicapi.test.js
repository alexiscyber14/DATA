// check if the rockets datat is fetched from the spaceX Api
const fetchCompanies = async () => {
  const response = await fetch('https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies');
  const companies = await response.json();
  return companies;
};

describe('fetchComponent', () => {
  it('should fetch comapnies from the fortune 100 api ', async () => {
    const companies = await fetchCompanies();
    expect(companies).toBeDefined();
    expect(Array.isArray(companies)).toBe(true);
    expect(companies.length).toBeGreaterThan(0);
  });
});
