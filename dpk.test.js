const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns result whose length is 128 if partitionkey does not exist inside the event", () => {
    const tirivalKey = deterministicPartitionKey({});
    expect(tirivalKey.length).toBe(128);
  });

  it("Returns result converted to string if it's lenghth is less than 128", () => {
    const tirivalKey = deterministicPartitionKey({ partitionKey: 3283 });
    expect(tirivalKey).toBe('3283');
  });
});
