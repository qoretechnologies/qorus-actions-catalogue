export const validateResponseProperties = (expectedType: any, actualResponse: any) => {
  Object.keys(expectedType).forEach((key) => {
    expect(actualResponse).toHaveProperty(key);

    const expectedFieldType = expectedType[key].type || expectedType[key];
    const actualValue = actualResponse[key];

    if (typeof expectedFieldType === 'object' && !Array.isArray(expectedFieldType)) {
      if (expectedType[key].example_value) {
        validateResponseProperties(expectedType[key].example_value[0], actualValue);
      } else {
        validateResponseProperties(expectedFieldType, actualValue);
      }
    } else if (
      (expectedFieldType === '*list' || expectedFieldType === 'list') &&
      Array.isArray(actualValue) &&
      actualValue.length > 0
    ) {
      const exampleItem = expectedType[key].example_value[0];
      validateResponseProperties(exampleItem, actualValue[0]);
    }
  });
};
