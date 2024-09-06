// USERS

const getUserhub = require('../hubspot/actions/users/get-user.ts');
const getUsershub = require('../hubspot/actions/users/get-users.ts');

// DEALS
const createDeal = require('../hubspot/actions/deals/create-deal.ts');
const deleteDeal = require('../hubspot/actions/deals/delete-deal.ts');
const getDeal = require('../hubspot/actions/deals/get-deal.ts');
const getDeals = require('../hubspot/actions/deals/get-deals.ts');

//CONTACTS

const createContact = require('../hubspot/actions/contacts/create-contact.ts');
const deleteContact = require('../hubspot/actions/contacts/delete-contact.ts');
const getContact = require('../hubspot/actions/contacts/get-contact.ts');
const getContacts = require('../hubspot/actions/contacts/get-contacts.ts');

//COMPANIES

const createCompany = require('../hubspot/actions/companies/create-company.ts');
const deleteCompany = require('../hubspot/actions/companies/delete-company.ts');
const getCompany = require('../hubspot/actions/companies/get-company.ts');
const getCompanies = require('../hubspot/actions/companies/get-companies.ts');

//OWNERS

const getOwners = require('../hubspot/actions/owners/get-owners.ts');
const getOwner = require('../hubspot/actions/owners/get-owner.ts');

describe('users', () => {
  it('should fetch a users', async () => {
    const getUserAction = await getUsershub.default.api_function;
    const showusers = await getUserAction();
    expect(showusers).toBeDefined();
    expect(showusers.results).toBeDefined();
    expect(Array.isArray(showusers.results)).toBe(true);
  });
  it('should fetch a user', async () => {
    const fetchUser = await getUserhub.default.api_function;
    const fetchedUser = await fetchUser({ id: 360210657899 });
    const { response_type } = getUserhub;
    const keys = Object.keys(response_type);
    keys.map((key) => {
      expect(fetchedUser).toBeDefined();
      expect(fetchedUser).toHaveProperty(key);
    });
  });
});

describe('deals', () => {
  it('shuold create a deal', async () => {
    const createDealAction = await createDeal.default.api_function;
    const newDeal = await createDealAction({
      properties: {},
    });
    const { response_type } = createDeal;

    const keys = Object.keys(response_type);
    keys.map((key) => {
      expect(newDeal).toBeDefined();
      expect(newDeal).toHaveProperty(key);
    });
  });

  it('should fetch a deal', async () => {
    const fetchDeal = await getDeal.default.api_function;
    const fetchedDeal = await fetchDeal({ id: 21893565452 });
    const { response_type } = getDeal;
    const keys = Object.keys(response_type);
    keys.map((key) => {
      expect(fetchedDeal).toBeDefined();
      expect(fetchedDeal).toHaveProperty(key);
    });
  });
  it('should fetch a deals', async () => {
    const getUserAction = await getDeals.default.api_function;
    const showdeals = await getUserAction();
    expect(showdeals).toBeDefined();
    expect(showdeals.results).toBeDefined();
    expect(Array.isArray(showdeals.results)).toBe(true);
  });

  it('should delete a deal', async () => {
    const deleteDealAction = await deleteDeal.default.api_function;
    await deleteDealAction({ id: 21894602269 });
  });
});

describe('contacts', () => {
  it('shuold create a contact', async () => {
    const createContactAction = await createContact.default.api_function;
    const newContact = await createContactAction({
      properties: {},
    });
    const { response_type } = createContact;
    const keys = Object.keys(response_type);
    keys.map((key) => {
      expect(newContact).toBeDefined();
      expect(newContact).toHaveProperty(key);
    });
  });

  it('should fetch a contact', async () => {
    const fetchContact = await getContact.default.api_function;
    const fetchedContact = await fetchContact({ id: 53332908129 });
    const { response_type } = getContact;
    const keys = Object.keys(response_type);
    keys.map((key) => {
      expect(fetchedContact).toBeDefined();
      expect(fetchedContact).toHaveProperty(key);
    });
  });
  it('should fetch a contacts', async () => {
    const getContactsAction = await getContacts.default.api_function;
    const showcontacts = await getContactsAction();
    expect(showcontacts).toBeDefined();
    expect(showcontacts.results).toBeDefined();
    expect(Array.isArray(showcontacts.results)).toBe(true);
  });

  it('should delete a contact', async () => {
    const deleteContactAction = await deleteContact.default.api_function;
    await deleteContactAction({ id: 54741120588 });
  });
});

describe('companies', () => {
  it('shuold create a company', async () => {
    const createCompanyAction = await createCompany.default.api_function;
    const newCompany = await createCompanyAction({
      properties: {},
    });
    const { response_type } = createCompany;
    const keys = Object.keys(response_type);
    keys.map((key) => {
      expect(newCompany).toBeDefined();
      expect(newCompany).toHaveProperty(key);
    });
  });

  it('should fetch a company', async () => {
    const fetchCompany = await getCompany.default.api_function;
    const fetchedCompany = await fetchCompany({ id: 22757308343 });
    const { response_type } = getCompany;
    const keys = Object.keys(response_type);
    keys.map((key) => {
      expect(fetchedCompany).toBeDefined();
      expect(fetchedCompany).toHaveProperty(key);
    });
  });
  it('should fetch a companies', async () => {
    const getCompaniesrAction = await getCompanies.default.api_function;
    const showcompanies = await getCompaniesrAction();
    expect(showcompanies).toBeDefined();
    expect(showcompanies.results).toBeDefined();
    expect(Array.isArray(showcompanies.results)).toBe(true);
  });

  it('should delete a company', async () => {
    const deleteCompanyAction = await deleteCompany.default.api_function;
    await deleteCompanyAction({ id: 22808774251 });
  });
});

describe('owners', () => {
  it('should fetch a owner', async () => {
    const fetchOwner = await getOwner.default.api_function;
    const fetchedOwner = await fetchOwner({ id: 574053049 });
    const { response_type } = getOwner;
    const keys = Object.keys(response_type);
    keys.map((key) => {
      expect(fetchedOwner).toBeDefined();
      expect(fetchedOwner).toHaveProperty(key);
    });
  });
  it('should fetch a owners', async () => {
    const getOwnersAction = await getOwners.default.api_function;
    const showOwners = await getOwnersAction();
    expect(showOwners).toBeDefined();
    expect(showOwners.results).toBeDefined();
    expect(Array.isArray(showOwners.results)).toBe(true);
  });
});
