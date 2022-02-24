const { users, all, store, update, destroy } = require("../task");

describe("# Menjalankan Test: Array of Object Users", () => {
  test("users harus berupa array of object", () => {
    expect(users).toEqual(
      expect.arrayContaining([expect.objectContaining({})])
    );
  });

  test("users setidaknya memiliki 5 items/data", () => {
    expect(users.length).toBeGreaterThanOrEqual(5);
  });

  users &&
    users.forEach((user) => {
      const { name } = user;
      test(`${name ?? "item"} harus berupa object`, () => {
        expect(typeof user).toBe("object");
      });
    });

  users &&
    users.forEach((user) => {
      const { name } = user;
      test(`${
        name ?? "name"
      } harus memiliki property name, age, dan major`, () => {
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("age");
        expect(user).toHaveProperty("major");
      });
    });
});

describe("# Menjalankan Test: Function all", () => {
  test("function all harus bisa dipanggil", () => {
    expect(all()).toBeUndefined();
  });
});

describe("# Menjalankan Test: Function store", () => {
  const user = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };

  test("function create harus bisa dipanggil", () => {
    expect(store(user)).toBeUndefined();
  });

  test("function create harus bisa menambahkan user baru", () => {
    const lengthOfOldUsers = users.length;
    store(user);
    const lengthOfNewUsers = users.length;

    expect(lengthOfNewUsers).toBeGreaterThan(lengthOfOldUsers);
  });
});

describe("# Menjalankan Test: Function edit", () => {
  test("function edit harus bisa dipanggil", () => {
    const index = 1;
    const user = {
      name: "Isfa",
      age: 23,
      major: "English",
    };

    expect(update(index, user)).toBeUndefined();
  });

  test("function edit harus bisa mengedit user", () => {
    const index = 1;
    const user = {
      name: "Muh Isfhani Ghiyath",
      age: 20,
      major: "Software Engineer",
    };

    const oldUser = users[index];
    update(index, user);
    const newUser = users[index];

    expect(newUser).not.toEqual(oldUser);
  });
});

describe("# Menjalankan Test: Function destroy", () => {
  const index = 2;

  test("function destroy harus bisa dipanggil", () => {
    expect(destroy(index)).toBeUndefined();
  });

  test("function destroy harus bisa menghapus user", () => {
    const lengthOfOldUsers = users.length;
    destroy(index);
    const lengthOfNewUsers = users.length;

    expect(lengthOfNewUsers).toBeLessThan(lengthOfOldUsers);
  });
});
