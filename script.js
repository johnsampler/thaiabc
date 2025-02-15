document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  // ------------------ Data Arrays ------------------

  const thaiLetters = [
    {"symbol": "ก", "romanization": "k", "pronunciation": "g (as in 'go')", "obsolete": false, "class": "middle"},
    {"symbol": "ข", "romanization": "kh", "pronunciation": "k (aspirated, as in 'key')", "obsolete": false, "class": "high"},
    {"symbol": "ฃ", "romanization": "kh", "pronunciation": "k (obsolete)", "obsolete": true, "class": "high"},
    {"symbol": "ค", "romanization": "kh", "pronunciation": "k (aspirated, as in 'car')", "obsolete": false, "class": "low"},
    {"symbol": "ฅ", "romanization": "kh", "pronunciation": "k (obsolete)", "obsolete": true, "class": "low"},
    {"symbol": "ฆ", "romanization": "kh", "pronunciation": "k (aspirated, as in 'ghost')", "obsolete": false, "class": "low"},
    {"symbol": "ง", "romanization": "ng", "pronunciation": "ng (as in 'song')", "obsolete": false, "class": "low"},
    {"symbol": "จ", "romanization": "ch", "pronunciation": "j (as in 'judge')", "obsolete": false, "class": "middle"},
    {"symbol": "ฉ", "romanization": "ch", "pronunciation": "ch (aspirated, as in 'cheese')", "obsolete": false, "class": "high"},
    {"symbol": "ช", "romanization": "ch", "pronunciation": "ch (as in 'cheese')", "obsolete": false, "class": "low"},
    {"symbol": "ซ", "romanization": "s", "pronunciation": "s (as in 'see')", "obsolete": false, "class": "low"},
    {"symbol": "ฌ", "romanization": "ch", "pronunciation": "ch (as in 'cheese')", "obsolete": false, "class": "low"},
    {"symbol": "ญ", "romanization": "y", "pronunciation": "y (as in 'yes')", "obsolete": false, "class": "low"},
    {"symbol": "ฎ", "romanization": "d", "pronunciation": "d (as in 'dog')", "obsolete": false, "class": "middle"},
    {"symbol": "ฏ", "romanization": "t", "pronunciation": "t (as in 'stop')", "obsolete": false, "class": "middle"},
    {"symbol": "ฐ", "romanization": "th", "pronunciation": "th (aspirated, as in 'top')", "obsolete": false, "class": "high"},
    {"symbol": "ฑ", "romanization": "th", "pronunciation": "th (as in 'think')", "obsolete": false, "class": "low"},
    {"symbol": "ฒ", "romanization": "th", "pronunciation": "th (as in 'this')", "obsolete": false, "class": "low"},
    {"symbol": "ณ", "romanization": "n", "pronunciation": "n (as in 'no')", "obsolete": false, "class": "low"},
    {"symbol": "ด", "romanization": "d", "pronunciation": "d (as in 'dog')", "obsolete": false, "class": "middle"},
    {"symbol": "ต", "romanization": "t", "pronunciation": "t (as in 'stop')", "obsolete": false, "class": "middle"},
    {"symbol": "ถ", "romanization": "th", "pronunciation": "th (aspirated, as in 'thumb')", "obsolete": false, "class": "high"},
    {"symbol": "ท", "romanization": "th", "pronunciation": "th (as in 'think')", "obsolete": false, "class": "low"},
    {"symbol": "ธ", "romanization": "th", "pronunciation": "th (as in 'this')", "obsolete": false, "class": "low"},
    {"symbol": "น", "romanization": "n", "pronunciation": "n (as in 'no')", "obsolete": false, "class": "low"},
    {"symbol": "บ", "romanization": "b", "pronunciation": "b (as in 'boy')", "obsolete": false, "class": "middle"},
    {"symbol": "ป", "romanization": "p", "pronunciation": "p (as in 'stop')", "obsolete": false, "class": "middle"},
    {"symbol": "ผ", "romanization": "ph", "pronunciation": "ph (aspirated, as in 'phone')", "obsolete": false, "class": "high"},
    {"symbol": "ฝ", "romanization": "f", "pronunciation": "f (as in 'fun')", "obsolete": false, "class": "high"},
    {"symbol": "พ", "romanization": "ph", "pronunciation": "ph (as in 'pharmacy')", "obsolete": false, "class": "low"},
    {"symbol": "ฟ", "romanization": "f", "pronunciation": "f (as in 'fun')", "obsolete": false, "class": "low"},
    {"symbol": "ภ", "romanization": "ph", "pronunciation": "ph (aspirated, as in 'photo')", "obsolete": false, "class": "low"},
    {"symbol": "ม", "romanization": "m", "pronunciation": "m (as in 'man')", "obsolete": false, "class": "low"},
    {"symbol": "ย", "romanization": "y", "pronunciation": "y (as in 'yes')", "obsolete": false, "class": "low"},
    {"symbol": "ร", "romanization": "r", "pronunciation": "r (rolled, like in Spanish 'pero')", "obsolete": false, "class": "low"},
    {"symbol": "ฤ", "romanization": "rue", "pronunciation": "rue (as in 'rueful')", "obsolete": false, "class": "low"},
    {"symbol": "ล", "romanization": "l", "pronunciation": "l (as in 'love')", "obsolete": false, "class": "low"},
    {"symbol": "ฦ", "romanization": "lue", "pronunciation": "lue (obsolete)", "obsolete": true, "class": "low"},
    {"symbol": "ว", "romanization": "w", "pronunciation": "w (as in 'we')", "obsolete": false, "class": "low"},
    {"symbol": "ศ", "romanization": "s", "pronunciation": "s (as in 'see')", "obsolete": false, "class": "high"},
    {"symbol": "ษ", "romanization": "s", "pronunciation": "s (as in 'sit')", "obsolete": false, "class": "high"},
    {"symbol": "ส", "romanization": "s", "pronunciation": "s (as in 'see')", "obsolete": false, "class": "high"},
    {"symbol": "ห", "romanization": "h", "pronunciation": "h (as in 'hello')", "obsolete": false, "class": "high"},
    {"symbol": "ฬ", "romanization": "l", "pronunciation": "l (as in 'love')", "obsolete": false, "class": "low"},
    {"symbol": "อ", "romanization": "o", "pronunciation": "silent (or vowel carrier)", "obsolete": false, "class": "middle"},
    {"symbol": "ฮ", "romanization": "h", "pronunciation": "h (as in 'hello')", "obsolete": false, "class": "low"}
  ];

  const thaiVowels = [
    {"symbol": "ะ", "romanization": "a", "pronunciation": "a (as in 'cat')", "placement": "after consonant", "obsolete": false},
    {"symbol": "า", "romanization": "aa", "pronunciation": "aa (as in 'father')", "placement": "after consonant", "obsolete": false},
    {"symbol": "ิ", "romanization": "i", "pronunciation": "i (as in 'bit')", "placement": "above consonant", "obsolete": false},
    {"symbol": "ี", "romanization": "ii", "pronunciation": "ii (as in 'machine')", "placement": "above consonant", "obsolete": false},
    {"symbol": "ึ", "romanization": "ɨ", "pronunciation": "ɨ (short, no direct English equivalent)", "placement": "above consonant", "obsolete": false},
    {"symbol": "ื", "romanization": "ɨ̄", "pronunciation": "ɨ̄ (long, no direct English equivalent)", "placement": "above consonant", "obsolete": false},
    {"symbol": "ุ", "romanization": "u", "pronunciation": "u (as in 'put')", "placement": "below consonant", "obsolete": false},
    {"symbol": "ู", "romanization": "uu", "pronunciation": "uu (as in 'food')", "placement": "below consonant", "obsolete": false},
    {"symbol": "เ", "romanization": "e", "pronunciation": "e (as in 'bed')", "placement": "before consonant", "obsolete": false},
    {"symbol": "แ", "romanization": "ae", "pronunciation": "ae (as in 'man')", "placement": "before consonant", "obsolete": false},
    {"symbol": "โ", "romanization": "o", "pronunciation": "o (as in 'hot')", "placement": "before consonant", "obsolete": false},
    {"symbol": "ไ", "romanization": "ai", "pronunciation": "ai (as in 'high')", "placement": "before consonant", "obsolete": false},
    {"symbol": "ใ", "romanization": "ai", "pronunciation": "ai (as in 'high')", "placement": "before consonant", "obsolete": false},
    {"symbol": "ำ", "romanization": "am", "pronunciation": "am (as in 'bomb')", "placement": "below consonant", "obsolete": false}
  ];

  // Объединяем согласные и гласные в один массив (оба считаются буквами)
  const thaiAlphabet = [...thaiLetters, ...thaiVowels];

  // Тональные данные
  const thaiTones = {
    "tones": [
      {"name": "Mid Tone", "description": "Used with middle class consonants and long vowels."},
      {"name": "Low Tone", "description": "Used with low-class consonants and certain vowel combinations."},
      {"name": "Falling Tone", "description": "Often occurs with specific rules regarding consonant class and final sounds."},
      {"name": "High Tone", "description": "Typically occurs with high-class consonants."},
      {"name": "Rising Tone", "description": "Occurs in certain conditions, often influenced by vowel length."}
    ],
    "marks": [
      {"name": "Mai Ek", "symbol": "่", "description": "Commonly associated with low tone.", "tone": "Low Tone"},
      {"name": "Mai Tho", "symbol": "้", "description": "Usually indicates a falling tone.", "tone": "Falling Tone"},
      {"name": "Mai Tri", "symbol": "๊", "description": "Often used for high tone.", "tone": "High Tone"},
      {"name": "Mai Chattawa", "symbol": "๋", "description": "Typically produces a rising tone.", "tone": "Rising Tone"}
    ],
    "rules": "Tone rules depend on the consonant class, vowel length, tone marks, and syllable ending."
  };

  // --- Автоматическое формирование массивов классов согласных ---
  const middleConsonants = thaiLetters
    .filter(letter => letter.class === 'middle')
    .map(letter => letter.symbol);

  const highConsonants = thaiLetters
    .filter(letter => letter.class === 'high')
    .map(letter => letter.symbol);

  const lowConsonants = thaiLetters
    .filter(letter => letter.class === 'low')
    .map(letter => letter.symbol);

  // Финальные согласные (буквы, которые могут появляться в конце слога)
  const finalConsonants = ["ก", "ด", "บ", "ง", "น", "ม", "ย", "ร", "ล", "ว"];

  // Вопросы для теста по классам согласных (теперь генерируются динамически)
  let consonantClassQuizQuestions = [];

  // ------------------ Utility Functions ------------------

  // Очистка области контента
  function clearContent() {
    contentDiv.innerHTML = "";
  }

  // Перемешивание массива (для вопросов викторины и вариантов ответов)
  function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  // ------------------ Main Menu ------------------

  function showMainMenu() {
    clearContent();
    const container = document.createElement("div");
    container.className = "animate-fade";
    container.innerHTML = `
      <section>
        <h2 class="section-title">Main Menu</h2>
        <div class="menu-buttons">
          <button class="lesson-btn" id="startLessons">Start Lessons</button>
          <button class="lesson-btn" id="viewAlphabet">View Consonants & Vowels</button>
        </div>
      </section>
    `;
    contentDiv.appendChild(container);
    document.getElementById("startLessons").addEventListener("click", startLesson1);
    document.getElementById("viewAlphabet").addEventListener("click", showViewConsonantsVowelsPage);
  }

  // ------------------ View Consonants and Vowels Page ------------------
  function showViewConsonantsVowelsPage() {
    clearContent();
    const container = document.createElement("div");
    container.className = "animate-fade";
    container.innerHTML = `
      <section class="view-alphabet-section">
        <h2 class="section-title">Thai Alphabet - All Letters</h2>
        <div class="grid-container" id="alphabet-grid">
        </div>
        <div class="menu-buttons">
          <button class="lesson-btn back-main-menu-btn" id="backToMainMenuFromAlphabetView">Back to Main Menu</button>
        </div>
      </section>
    `;
    contentDiv.appendChild(container);
    const alphabetGrid = document.getElementById("alphabet-grid");

    [...thaiLetters, ...thaiVowels].forEach(letter => { // Combine consonants and vowels
      const card = document.createElement("div");
      card.className = "letter-card view-page" + (letter.obsolete ? " obsolete view-page" : "");
      let exampleText = "";
      let obsoleteText = letter.obsolete ? " (obsolete)" : "";
      if (letter.pronunciation && letter.pronunciation.includes('(as in ')) {
        const parts = letter.pronunciation.split('(as in ');
        exampleText = `(${parts[1].slice(0, -1)})`;
      } else if (letter.pronunciation && !letter.pronunciation.includes('(obsolete)')) {
        exampleText = `(${letter.pronunciation})`;
      } else {
        exampleText = "";
      }

      card.innerHTML = `
        <div class="big-thai responsive-letter">${letter.symbol}</div>
        <div class="letter-details">
          ${letter.romanization} ${exampleText}${obsoleteText}
        </div>
      `;
      alphabetGrid.appendChild(card);
    });

    document.getElementById("backToMainMenuFromAlphabetView").addEventListener("click", showMainMenu);
  }

  // ------------------ Lessons ------------------

  function startLesson1() {
    clearContent();
    const lessonContent = `
      <section class="lesson-section animate-fade">
        <h2 class="section-title">Lesson 1: Thai Consonants - Middle Class</h2>
        <p>Welcome to Lesson 1! We're starting with Thai consonants, focusing on the <strong>Middle Class</strong> today.</p>
        <p>Middle class consonants are important for understanding tone rules later. Let's learn them!</p>

        <h3>Middle Class Consonants</h3>
        <div class="grid-container">
          ${displayLetters(middleConsonants)}
        </div>

        <p>These consonants are considered <strong>middle class</strong>. Try to memorize them. Click 'Start Quiz' to test your knowledge, or 'Next Lesson' to continue learning about other consonants.</p>

        <div class="lesson-buttons">
          <button class="lesson-btn quiz-lesson-btn" id="startLesson1QuizBtn">Start Quiz</button>
          <button class="lesson-btn next-lesson-btn hidden" id="startLesson2">Next Lesson: High Class Consonants</button>
          <button class="lesson-btn back-main-menu-btn" id="backToMainMenuFromLesson1">Back to Main Menu</button>
        </div>
      </section>
    `;
    contentDiv.innerHTML = lessonContent;
    document.getElementById("startLesson2").addEventListener("click", startLesson2);
    document.getElementById("backToMainMenuFromLesson1").addEventListener("click", showMainMenu);
    document.getElementById("startLesson1QuizBtn").addEventListener("click", startLesson1Quiz);
  }

  function startLesson2() {
    clearContent();
    const lessonContent = `
      <section class="lesson-section animate-fade">
        <h2 class="section-title">Lesson 2: Thai Consonants - High Class</h2>
        <p>Welcome to Lesson 2! Now we will learn about <strong>High Class Consonants</strong>.</p>
        <p>High class consonants also play a key role in tone rules. Let's see which ones they are.</p>

        <h3>High Class Consonants</h3>
        <div class="grid-container">
          ${displayLetters(highConsonants)}
        </div>

        <p>These are <strong>high class</strong> consonants. Notice how they might look and sound different from the middle class consonants. Click 'Start Quiz' to test your knowledge, or 'Next Lesson' to continue to the low class consonants!</p>

        <div class="lesson-buttons">
          <button class="lesson-btn quiz-lesson-btn" id="startLesson2QuizBtn">Start Quiz</button>
          <button class="lesson-btn next-lesson-btn hidden" id="startLesson3">Next Lesson: Low Class Consonants</button>
          <button class="lesson-btn back-lesson-btn" id="backToLesson1">Back to Lesson 1</button>
        </div>
      </section>
    `;
    contentDiv.innerHTML = lessonContent;
    document.getElementById("startLesson3").addEventListener("click", startLesson3);
    document.getElementById("backToLesson1").addEventListener("click", startLesson1);
    document.getElementById("startLesson2QuizBtn").addEventListener("click", startLesson2Quiz);
  }

  function startLesson3() {
    clearContent();
    const lessonContent = `
      <section class="lesson-section animate-fade">
        <h2 class="section-title">Lesson 3: Thai Consonants - Low Class & Consonant Classes Overview</h2>
        <p>Welcome to Lesson 3! In this lesson, we'll cover <strong>Low Class Consonants</strong> and then review all consonant classes.</p>
        <p>Low class consonants complete our introduction to consonant classes, essential for mastering Thai tones.</p>

        <h3>Low Class Consonants</h3>
        <div class="grid-container">
          ${displayLetters(lowConsonants)}
        </div>

        <h3>Consonant Classes Overview</h3>
        <p>Let's quickly recap the three consonant classes we've learned:</p>
        <ul>
          <li><strong>Middle Class:</strong>  ${middleConsonants.join(", ")}</li>
          <li><strong>High Class:</strong> ${highConsonants.join(", ")}</li>
          <li><strong>Low Class:</strong>  ${lowConsonants.join(", ")}</li>
        </ul>

        <p>Understanding these classes is crucial for learning Thai tones. Click 'Start Quiz' to test your knowledge of low class consonants, and if you pass, the button below will take you to the Consonant Class Quiz to test your knowledge of all classes!</p>

        <div class="lesson-buttons">
          <button class="lesson-btn quiz-lesson-btn" id="startLesson3QuizBtn">Start Quiz</button>
          <button class="lesson-btn next-lesson-btn hidden" id="startConsonantClassQuizBtn">Consonant Class Quiz</button>
          <button class="lesson-btn back-lesson-btn" id="backToLesson2">Back to Lesson 2</button>
        </div>
      </section>
    `;
    contentDiv.innerHTML = lessonContent;
    document.getElementById("backToLesson2").addEventListener("click", startLesson2);
    document.getElementById("startLesson3QuizBtn").addEventListener("click", startLesson3Quiz);
    document.getElementById("startConsonantClassQuizBtn").addEventListener("click", startConsonantClassQuiz);
    document.getElementById("startConsonantClassQuizBtn").textContent = "Consonant Class Quiz";
    document.getElementById("startConsonantClassQuizBtn").classList.add("hidden"); // Initially hide consonant class quiz button
  }

  function showNextLessonsPlaceholder() {
    clearContent();
    const placeholderContent = `
      <section class="lesson-section animate-fade">
        <h2 class="section-title">Coming Soon: More Lessons!</h2>
        <p>Thank you for completing the first lessons on Thai consonants!</p>
        <p>Lessons on <strong>Thai Vowels</strong> and <strong>Tones</strong> are currently under development and will be available soon. Stay tuned!</p>

        <button class="lesson-btn back-lessons-menu-btn" id="backToMainMenuFromPlaceholder">Back to Main Menu</button>
      </section>
    `;
    contentDiv.innerHTML = placeholderContent;
    document.getElementById("backToMainMenuFromPlaceholder").addEventListener("click", showMainMenu);
  }

  // --- Helper function to display letters in a grid ---
  function displayLetters(consonantSymbols) {
    let letterCardsHTML = '';
    consonantSymbols.forEach(symbol => {
      const letter = thaiLetters.find(l => l.symbol === symbol);
      if (letter) {
        let exampleText = "";
        let obsoleteText = letter.obsolete ? " (obsolete)" : "";
        if (letter.pronunciation.includes('(obsolete)')) {
          exampleText = '';
        } else if (letter.pronunciation.includes('(aspirated')) {
          const parts = letter.pronunciation.split('(aspirated, as in ');
          exampleText = parts.length > 1 ? `(aspirated, as in ${parts[1].slice(0, -1)})` : '(aspirated)';
        } else if (letter.pronunciation.includes('(as in ')) {
          const parts = letter.pronunciation.split('(as in ');
          exampleText = `(as in ${parts[1].slice(0, -1)})`;
        }
        letterCardsHTML += `
          <div class="letter-card${letter.obsolete ? ' obsolete' : ''}">
            <div class="big-thai responsive-letter">${letter.symbol}</div>
            <div class="letter-details">${letter.romanization} ${exampleText}${obsoleteText}</div>
          </div>
        `;
      }
    });
    return letterCardsHTML;
  }

  // ------------------ Lesson Quizzes ------------------

  let currentQuizQuestions = [];
  let quizIndex = 0;
  let quizScore = 0;
  let currentLessonBackButtonFn = null;
  let currentLessonNextButtonId = '';

  function startQuiz(questions, nextButtonId, backToLessonFn) {
    currentQuizQuestions = shuffleArray([...questions]);
    quizIndex = 0;
    quizScore = 0;
    currentLessonNextButtonId = nextButtonId;
    currentLessonBackButtonFn = backToLessonFn;
    showQuestion();
  }

  function showQuestion() {
    clearContent();
    if (quizIndex < currentQuizQuestions.length) {
      const questionData = currentQuizQuestions[quizIndex];
      const container = document.createElement("div");
      container.className = "quiz-section animate-fade";
      container.innerHTML = `
        <p class="quiz-counter">Question ${quizIndex + 1} of ${currentQuizQuestions.length}</p>
        <div class="quiz-thai">${questionData.thaiSymbol}</div>
        <div class="quiz-question">
          <p>${questionData.question}</p>
          <div id="options"></div>
        </div>
      `;
      contentDiv.appendChild(container);
      const optionsDiv = document.getElementById("options");
      questionData.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "quiz-btn";
        btn.textContent = opt;
        btn.addEventListener("click", () => checkAnswer(opt, questionData.answer, questionData.thaiSymbol));
        optionsDiv.appendChild(btn);
      });
    } else {
      showQuizResult();
    }
  }

  function checkAnswer(selected, correct, thaiSymbol) {
    const feedback = document.createElement("p");
    feedback.className = "quiz-feedback";
    let letterData = thaiLetters.find(letter => letter.symbol === thaiSymbol);
    if (selected === correct) {
      feedback.textContent = "Correct!";
      feedback.style.color = "green";
      if (letterData && letterData.obsolete) {
        feedback.textContent += " Note: this character is obsolete.";
      }
      quizScore++;
    } else {
      feedback.textContent = `Wrong. Correct answer: ${correct}. The correct answer is ${correct}.`;
      feedback.style.color = "red";
    }
    contentDiv.appendChild(feedback);
    quizIndex++;
    setTimeout(showQuestion, 1500);
  }

  function showQuizResult() {
    clearContent();
    const container = document.createElement("div");
    container.className = "animate-fade";
    const passPercentage = (quizScore / currentQuizQuestions.length) * 100;
    const isPass = passPercentage === 100;

    let resultMessage = `<p>Your score: ${quizScore} / ${currentQuizQuestions.length} (${passPercentage.toFixed(0)}%)</p>`;
    if (isPass) {
      resultMessage += `<p style="color:green; font-weight:bold;">Congratulations! You passed with 100%!</p>`;
    } else {
      resultMessage += `<p style="color:red; font-weight:bold;">Please try again to get 100% to proceed further.</p>`;
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'lesson-buttons';

    const restartQuizBtn = document.createElement('button');
    restartQuizBtn.className = "lesson-btn quiz-lesson-btn";
    restartQuizBtn.textContent = "Restart Quiz";
    restartQuizBtn.addEventListener("click", restartQuiz);
    buttonContainer.appendChild(restartQuizBtn);

    const backToLessonBtn = document.createElement('button');
    backToLessonBtn.className = "lesson-btn back-lesson-btn";
    backToLessonBtn.textContent = "Back to Lesson";
    backToLessonBtn.addEventListener("click", currentLessonBackButtonFn);
    buttonContainer.appendChild(backToLessonBtn);

    if (isPass && currentLessonNextButtonId) {
      const nextLessonButton = document.createElement('button');
      nextLessonButton.className = "lesson-btn next-lesson-btn";
      if (currentLessonNextButtonId === 'startConsonantClassQuizBtn') {
        nextLessonButton.textContent = "Start Consonant Class Quiz";
      } else {
        nextLessonButton.textContent = "Next Lesson";
      }
      nextLessonButton.id = currentLessonNextButtonId;
      if (currentLessonNextButtonId === 'startLesson2') {
        nextLessonButton.addEventListener("click", startLesson2);
      } else if (currentLessonNextButtonId === 'startLesson3') {
        nextLessonButton.addEventListener("click", startLesson3);
      } else if (currentLessonNextButtonId === 'startConsonantClassQuizBtn') {
        nextLessonButton.addEventListener("click", startConsonantClassQuiz);
      }
      buttonContainer.appendChild(nextLessonButton);
    }

    container.innerHTML = `
      <h2 class="section-title">Quiz Results</h2>
      ${resultMessage}
    `;
    container.appendChild(buttonContainer);

    contentDiv.appendChild(container);
  }

  function restartQuiz() {
    startQuiz(currentQuizQuestions, currentLessonNextButtonId, currentLessonBackButtonFn);
  }

  function backToLesson() {
    if (currentLessonBackButtonFn) {
      currentLessonBackButtonFn();
    } else {
      startLesson1();
    }
  }

  // --- Lesson 1 Quiz ---
  function startLesson1Quiz() {
    const quizData = generateLessonQuizQuestions(middleConsonants, lesson1QuizIncorrectOptions);
    startQuiz(quizData, 'startLesson2', startLesson1);
  }

  // --- Lesson 2 Quiz ---
  function startLesson2Quiz() {
    const quizData = generateLessonQuizQuestions(highConsonants, lesson2QuizIncorrectOptions);
    startQuiz(quizData, 'startLesson3', startLesson2);
  }

  // --- Lesson 3 Quiz ---
  function startLesson3Quiz() {
    const quizData = generateLessonQuizQuestions(lowConsonants, lesson3QuizIncorrectOptions);
    startQuiz(quizData, 'startConsonantClassQuizBtn', startLesson3);
  }

  // --- Consonant Class Quiz ---
  function startConsonantClassQuiz() {
    consonantClassQuizQuestions = generateConsonantClassQuizQuestions();
    startQuiz(consonantClassQuizQuestions, '', showMainMenu);
  }
  function showConsonantClassQuizResult() {
    showQuizResult();
  }

  // ------------------ Quiz Question Generators ------------------

  function generateLessonQuizQuestions(consonantSymbols, incorrectOptionGenerator) {
    const questions = [];
    consonantSymbols.forEach(symbol => {
      const correctLetterData = thaiLetters.find(letter => letter.symbol === symbol);
      if (correctLetterData) {
        const correctRomanization = correctLetterData.romanization;
        const incorrectOptions = incorrectOptionGenerator(correctRomanization);
        const options = shuffleArray([correctRomanization, ...incorrectOptions].slice(0, 4));

        questions.push({
          thaiSymbol: symbol,
          question: `What is the romanization of this letter?`,
          options: options,
          answer: correctRomanization
        });
      }
    });
    return questions;
  }

  function generateConsonantClassQuizQuestions() {
    const questions = [];
    thaiLetters.forEach(letter => {
      const correctClass = letter.class.charAt(0).toUpperCase() + letter.class.slice(1);
      const incorrectOptions = ["Middle", "High", "Low"].filter(c => c !== correctClass);
      const options = shuffleArray([correctClass, ...incorrectOptions].slice(0, 3));

      questions.push({
        thaiSymbol: letter.symbol,
        question: `To which class does ${letter.symbol} belong?`,
        options: options,
        answer: correctClass
      });
    });
    return questions;
  }

  // --- Incorrect Options Generators ---
  function lesson1QuizIncorrectOptions(correctAnswer) {
    return generateGenericIncorrectOptions(correctAnswer);
  }

  function lesson2QuizIncorrectOptions(correctAnswer) {
    return generateGenericIncorrectOptions(correctAnswer);
  }

  function lesson3QuizIncorrectOptions(correctAnswer) {
    return generateGenericIncorrectOptions(correctAnswer);
  }

  function generateGenericIncorrectOptions(correctAnswer) {
    const allRomanizations = thaiLetters.map(letter => letter.romanization).filter(romanization => romanization !== correctAnswer);
    const shuffledRomanizations = shuffleArray(allRomanizations);
    return shuffledRomanizations.slice(0, 3);
  }

  // ------------------ Initial Setup ------------------

  showMainMenu();
});
