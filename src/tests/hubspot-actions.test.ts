const getUserhub = require('../hubspot/actions/users/get-user.ts');
const getUsershub = require('../hubspot/actions/users/get-users.ts');

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
    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(fetchedUser).toBeDefined();
        expect(fetchedUser.user).toBeDefined();
        expect(fetchedUser.user).toHaveProperty(key);
      });
    } else {
      console.error('getUser response_type is undefined or null');
    }
  });
});
