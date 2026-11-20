/* ========================================
   QUESTION DATA

   Confirmed answer key:
   Q1  = REAL
   Q2  = AI
   Q3  = REAL
   Q4  = AI
   Q5  = REAL
   Q6  = AI
   Q7  = AI
   Q8  = REAL
   Q9  = AI
   Q10 = AI
======================================== */

const questions = [

  {
    image: "q1.jpg",
    answer: "real",
    difficulty: "EASY",

    clue:
      "Look at the overall consistency of the photograph.",

    explanation:
      "This is a real photograph. Natural photos can still contain unusual lighting, blur or imperfections, so one unusual detail alone does not mean an image is AI-generated."
  },


  {
    image: "q2.jpg",
    answer: "ai",
    difficulty: "EASY",

    clue:
      "Look closely at the small visual details.",

    explanation:
      "This image is AI-generated. Small details may appear inconsistent, distorted or physically unusual. Examine the whole image rather than relying on only one feature."
  },


  {
    image: "q3.jpg",
    answer: "real",
    difficulty: "EASY - MEDIUM",

    clue:
      "Look at the whole image, not just one unusual detail.",

    explanation:
      "This is a real photograph. Real photos can contain unusual shadows, reflections, blur and other photographic imperfections that may sometimes appear artificial."
  },


  {
    image: "q4.jpg",
    answer: "ai",
    difficulty: "MEDIUM",

    clue:
      "👆 Look carefully at the fingers.",

    explanation:
      "This image is AI-generated. Look closely at the fingers. Unnatural finger shapes, positioning or interaction with objects can be a useful warning sign of AI generation."
  },


  {
    image: "q5.jpg",
    answer: "real",
    difficulty: "MEDIUM",
