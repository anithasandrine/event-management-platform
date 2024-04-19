export const filterTypes = (data: CareerPostAtributes[]) => {
  let types: string[] = [];
  for (const post of data) {
    types = types.includes(post.category) ? types : [...types, post.category];
  }
  console.log("values", types);
  return types;
};
