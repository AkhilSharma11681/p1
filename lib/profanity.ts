const banned = [
  "fuck",
  "bitch",
  "nude",
  "porn",
  "sex",
  "escort",
  "onlyfans"
];

export function containsBadWords(text: string) {
  return banned.some(word =>
    text.toLowerCase().includes(word)
  );
}
