export const TextSlice = (content: string, size: number) => {
  if (content.length < size) return content;
  return `${content.slice(0, size)} ...`;
};
