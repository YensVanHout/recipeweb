const recipes = [
  "Lorem ipsum ",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum ",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum ",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum ",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum ",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum ",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit amet",
];

function shuffle(array: Array<string>) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const data = shuffle(recipes);