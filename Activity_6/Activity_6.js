function gradeStudent(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    console.log("Invalid input. Please provide an array of scores.");
    return;
  }

  let processedScores = [...scores];

  if (processedScores.length > 3) {
    let min = Math.min(...processedScores);
    let index = processedScores.indexOf(min);
    processedScores.splice(index, 1);
    console.log(`Dropped lowest score: ${min}`);
  }

  let total = 0;
  for (let i = 0; i < processedScores.length; i++) {
    total += processedScores[i];
  }
  let average = total / processedScores.length;

  let letterGrade = "";
  if (average >= 90) {
    letterGrade = "A";
  } else if (average >= 80) {
    letterGrade = "B";
  } else if (average >= 70) {
    letterGrade = "C";
  } else if (average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  console.log(`Scores used: ${processedScores}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Letter Grade: ${letterGrade}`);

  return {
    average: average,
    grade: letterGrade,
  };
}
