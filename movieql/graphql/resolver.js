const Chobby = {
  name: "Chobby",
  age: 20,
  gender: "Male",
};

export const resolvers = {
  Query: {
    person: () => Chobby,
  },
};
