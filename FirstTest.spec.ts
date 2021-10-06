import { User } from "@models/User";
test("it should be okay", () => {
  const user = new User();
  (user.name = "JEfferson"), (user.email = "jeffersonleite95@gmail.com");
  expect(user.name).toEqual("JEfferson");
});
