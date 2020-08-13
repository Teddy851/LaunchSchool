function timeOfDay(timeInMinutes) {
  if (timeInMinutes === 0) {
    return "00:00";
  }

  if (timeInMinutes / timeInMinutes === -1) {
    if (Math.abs(timeInMinutes) < 60) {
      let min = Math.abs(timeInMinutes);
      console.log(`23:${60 - min}`);
    } else {
      let hours = Math.floor(timeInMinutes / 60);
      let minutes = timeInMinutes % 60;

      console.log(`${24 - Math.abs(hours)}${60 - Math.abs(minutes)}`);
    }
  }

  if (timeInMinutes < 60) {
    console.log(`23:${60 - timeInMinutes}`);
  } else {
    let hours = Math.floor(timeInMinutes / 60);
    let minutes = timeInMinutes % 60;

    console.log(`${24 - hours}${60 - minutes}`);
  }
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");