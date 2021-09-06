const person = {
  name: "bum",
  age: 20
}

const resolvers = {
  Query: {
    person: () => person
  }
};
  
export default resolvers;