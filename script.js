const questions = [
  {
    image: "q1.jpg",
    answer: "ai",
    difficulty: "EASY",
    clue: "Look closely at the face, hair and skin texture.",
    explanation:
      "AI images can sometimes have overly smooth textures or small inconsistencies around detailed areas."
  },

  {
    image: "q2.jpg",
    answer: "real",
    difficulty: "EASY - MEDIUM",
    clue: "Look at the hands and how objects interact.",
    explanation:
      "Check whether fingers, objects, lighting and physical contact appear natural and consistent."
  },

  {
    image: "q3.jpg",
    answer: "ai",
    difficulty: "MEDIUM",
    clue: "Examine the small background details.",
    explanation:
      "AI-generated scenes may contain objects that merge together, repeat strangely or have inconsistent geometry."
  },

  {
    image: "q4.jpg",
    answer: "real",
    difficulty: "HARD",
    clue: "Don't rely on only one visual clue.",
    explanation:
      "Modern AI-generated images can be extremely convincing. When authenticity matters, also consider the image source and context."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function startGame() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");

  currentQuestion = 0;
  score = 0;

  showQuestion();
}

function showQuestion() {
  answered = false;

  const question = questions[currentQuestion];

  document.getElementById("question-number").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  document.getElementById("score").textContent =
    `Score: ${score}`;

  document.getElementById("difficulty").textContent =
    question.difficulty;

  document.getElementById("game-image").src =
    question.image;

  document.getElementById("progress-bar").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  document.getElementById("result-box").classList.add("hidden");

  document.getElementById("real-btn").disabled = false;
  document.getElementById("ai-btn").disabled = false;
}

function submitAnswer(selectedAnswer) {

  if (answered) return;

  answered = true;

  const question = questions[currentQuestion];

  document.getElementById("real-btn").disabled = true;
  document.getElementById("ai-btn").disabled = true;

  if (selectedAnswer === question.answer) {

    score++;

    document.getElementById("result-title").textContent =
      "✓ CORRECT!";

    document.getElementById("result-title").style.color =
      "#15803d";

  } else {

    document.getElementById("result-title").textContent =
      "✕ NOT QUITE";

    document.getElementById("result-title").style.color =
      "#b91c1c";
  }

  document.getElementById("score").textContent =
    `Score: ${score}`;

  document.getElementById("answer-reveal").textContent =
    question.answer === "ai"
      ? "THIS IMAGE IS AI-GENERATED"
      : "THIS IS A REAL PHOTO";

  document.getElementById("clue").textContent =
    question.clue;

  document.getElementById("explanation").textContent =
    question.explanation;

  document.getElementById("result-box").classList.remove("hidden");

  document.getElementById("next-btn").textContent =
    currentQuestion === questions.length - 1
      ? "VIEW MY RESULTS →"
      : "NEXT QUESTION →";
}

function nextQuestion() {

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {

  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("final-screen").classList.remove("hidden");

  document.getElementById("final-score").textContent =
    `${score} / ${questions.length}`;

  let title;
  let message;

  if (score <= 1) {
    title = "AI APPRENTICE 👀";
    message =
      "AI fooled you this time. Keep looking closely!";
  } else if (score === 2) {
    title = "AI DETECTIVE 🔍";
    message =
      "Good effort! You're starting to spot the clues.";
  } else if (score === 3) {
    title = "AI SPOTTER 🕵️";
    message =
      "Great eye! AI is getting harder to fool you.";
  } else {
    title = "AI MASTER 🏆";
    message =
      "Excellent! You spotted all four images correctly.";
  }

  document.getElementById("final-title").textContent = title;
  document.getElementById("final-message").textContent = message;
}

function restartGame() {

  document.getElementById("final-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");

  currentQuestion = 0;
  score = 0;
  answered = false;
}
