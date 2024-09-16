export const shuffle = (array) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  // for (const x of Array(48).keys()) {

  //   allBars.bars?.push({
  //       id: x.toString(),
  //       width: "10px",
  //       height: `${10*x}px`,
  //       left: `${(1*x)}px`,
  //       top: `${50 + (480-(10*x))}px`,
  //       position: "relative"
  //   });
  // }
}