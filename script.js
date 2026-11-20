const questions = [

  {
    image: "q1.jpg",
    answer: "real",
    difficulty: "EASY",

    clue:
      "Look carefully at the overall image and its small details.",

    explanation:
      "This is a real photograph. Natural photos can still contain unusual lighting, textures or imperfections, so one strange-looking detail does not automatically mean an image is AI-generated."
  },


  {
    image: "q2.jpg",
    answer: "ai",
    difficulty: "EASY",

    clue:
      "Look closely at the small details.",

    explanation:
      "This image is AI-generated. Look for details that appear inconsistent, distorted or physically unnatural."
  },


  {
    image: "q3.jpg",
    answer: "real",
    difficulty: "EASY - MEDIUM",

    clue:
      "Look at the whole image, not just one detail.",

    explanation:
      "This is a real photograph. Real photos can contain unusual shadows, reflections, blur and imperfections that may sometimes look artificial."
  },


  {
    image: "q4.jpg",
    answer: "ai",
    difficulty: "MEDIUM",

    clue:
      "👆 Look carefully at the fingers.",

    explanation:
      "This image is AI-generated. Unusual finger shapes, positions or interaction with objects can be a useful clue."
  },


  {
    image: "q5.jpg",
    answer: "real",
    difficulty: "MEDIUM",

    clue:
      "Look carefully at the overall consistency of the image.",

    explanation:
      "This is a real photograph. Natural photographs may contain imperfect lighting, textures and other details that can sometimes appear unusual."
  },


  {
    image: "q6.jpg",
    answer: "ai",
    difficulty: "MEDIUM",

    clue:
      "Look closely at the fine details.",

    explanation:
      "This image is AI-generated. Look for small details that appear inconsistent, distorted or physically unusual."
  },


  {
    image: "q7.jpg",
    answer: "ai",
    difficulty: "MEDIUM - HARD",

    clue:
      "Look beyond the main subject and examine the background.",

    explanation:
      "This image is AI-generated. Background details can contain unusual shapes, repeated patterns or inconsistencies that are easy to overlook."
  },


  {
    image: "q8.jpg",
    answer: "real",
    difficulty: "HARD",

    clue:
      "Check whether the details remain physically consistent.",

    explanation:
      "This is a real photograph. Real photographs can still contain unusual perspectives, reflections, shadows and photographic imperfections."
  },


  {
    image: "q9.jpg",
    answer: "ai",
    difficulty: "HARD",

    clue:
      "Look carefully at lighting, shadows and reflections.",

    explanation:
      "This image is AI-generated. Subtle inconsistencies in lighting, reflections, shadows or objects can provide useful clues."
  },


  {
    image: "q10.jpg",
    answer: "ai",
    difficulty: "EXPERT",

    clue:
      "Look for very subtle inconsistencies.",

    explanation:
      "This image is AI-generated. Highly realistic AI images may contain very few obvious mistakes, so examine the details carefully and consider the source when authenticity matters."
  }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


function startGame() {

  document
    .getElementById("start-screen")
    .classList.add("hidden");


  document
    .getElementById("final-screen")
    .classList.add("hidden");


  document
    .getElementById("game-screen")
    .classList.remove("hidden");


  currentQuestion = 0;

  score = 0;

  answered = false;


  showQuestion();
}


function showQuestion() {

  answered = false;


  const question =
    questions[currentQuestion];


  document
    .getElementById("question-number")
    .textContent =
      `Question ${currentQuestion + 1} of ${questions.length}`;


  document
    .getElementById("score")
    .textContent =
      `Score: ${score}`;


  document
    .getElementById("difficulty")
    .textContent =
      question.difficulty;


  document
    .getElementById("game-image")
    .src =
      question.image;


  document
    .getElementById("progress-bar")
    .style.width =
      `${((currentQuestion + 1) / questions.length) * 100}%`;


  document
    .getElementById("result-box")
    .classList.add("hidden");


  document
    .getElementById("real-btn")
    .disabled =
      false;


  document
    .getElementById("ai-btn")
    .disabled =
      false;
}


function submitAnswer(selectedAnswer) {

  if (answered) return;


  answered = true;


  const question =
    questions[currentQuestion];


  document
    .getElementById("real-btn")
    .disabled =
      true;


  document
    .getElementById("ai-btn")
    .disabled =
      true;


  if (
    selectedAnswer ===
    question.answer
  ) {

    score++;


    document
      .getElementById("result-title")
      .textContent =
        "✓ CORRECT!";


    document
      .getElementById("result-title")
      .style.color =
        "#15803d";

  } else {

    document
      .getElementById("result-title")
      .textContent =
        "✕ NOT QUITE";


    document
      .getElementById("result-title")
      .style.color =
        "#b91c1c";
  }


  document
    .getElementById("score")
    .textContent =
      `Score: ${score}`;


  document
    .getElementById("answer-reveal")
    .textContent =
      question.answer === "ai"

        ? "THIS IMAGE IS AI-GENERATED"

        : "THIS IS A REAL PHOTO";


  document
    .getElementById("clue")
    .textContent =
      question.clue;


  document
    .getElementById("explanation")
    .textContent =
      question.explanation;


  document
    .getElementById("result-box")
    .classList.remove("hidden");


  document
    .getElementById("next-btn")
    .textContent =

      currentQuestion ===
      questions.length - 1

        ? "VIEW MY RESULTS →"

        : "NEXT QUESTION →";
}


function nextQuestion() {

  currentQuestion++;


  if (
    currentQuestion <
    questions.length
  ) {

    showQuestion();

    window.scrollTo(
      0,
      0
    );

  } else {

    showResults();
  }
}


function showResults() {

  document
    .getElementById("game-screen")
    .classList.add("hidden");


  document
    .getElementById("final-screen")
    .classList.remove("hidden");


  document
    .getElementById("final-score")
    .textContent =
      `${score} / ${questions.length}`;


  let title;

  let message;


  if (score <= 3) {

    title =
      "AI APPRENTICE 👀";


    message =
      "AI fooled you this time. Keep looking closely!";


  } else if (score <= 6) {

    title =
      "AI DETECTIVE 🔍";


    message =
      "Good effort! You're starting to spot the clues.";


  } else if (score <= 8) {

    title =
      "AI SPOTTER 🕵️";


    message =
      "Great eye! You're getting good at spotting AI.";


  } else {

    title =
      "AI MASTER 🏆";


    message =
      "Excellent! You spotted even the difficult ones.";
  }


  document
    .getElementById("final-title")
    .textContent =
      title;


  document
    .getElementById("final-message")
    .textContent =
      message;


  window.scrollTo(
    0,
    0
  );
}


function restartGame() {

  document
    .getElementById("final-screen")
    .classList.add("hidden");


  document
    .getElementById("game-screen")
    .classList.add("hidden");


  document
    .getElementById("start-screen")
    .classList.remove("hidden");


  currentQuestion = 0;

  score = 0;

  answered = false;


  window.scrollTo(
    0,
    0
  );
}
