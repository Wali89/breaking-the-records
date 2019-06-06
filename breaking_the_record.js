function breakingRecords(scores) {
  let high = scores[0];
  let low = scores[0]
  let min = 0;
  let max = 0;

  for (let i = 0; i < scores.length; i++) {
      if (scores[i] > high) {
          max += 1
          high = scores[i]
      } else if (scores[i] < low ){
          min += 1
          low = scores[i]
      }
  }
  return [max, min]

}