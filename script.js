let current = 0;
let score = 0;
let wrong = [];

questions.sort(() => Math.random() - 0.5);

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("bar");

function showQuestion() {

    if (current >= questions.length) {
        finishQuiz();
        return;
    }

    const q = questions[current];

    questionEl.textContent =
        `${current + 1}. ${q.question}`;

    answersEl.innerHTML = "";

    progressBar.style.width =
        `${(current / questions.length) * 100}%`;

    q.answers.forEach((answer, index) => {

        const btn = document.createElement("button");

        btn.textContent = answer;

        btn.classList.add("answer-btn");

        btn.onclick = () => {
            const buttons =
                [...answersEl.children];

            buttons.forEach(b => b.disabled = true);

            // Always show correct answer
            buttons[q.correct]
                .classList.add("correct");

            if (index === q.correct) {

                score++;

                scoreEl.textContent = score;

            } else {

                buttons[index]
                    .classList.add("wrong");

                wrong.push({
                    question: q.question,
                    correct: q.answers[q.correct]
                });

                const feedback =
                    document.createElement("p");

                feedback.innerHTML =
                    `❌ Correct Answer: <b>${q.answers[q.correct]}</b>`;

                answersEl.appendChild(feedback);
            }

            nextBtn.style.display = "block";
        };

        answersEl.appendChild(btn);
    });
}

function nextQuestion() {

    current++;

    nextBtn.style.display = "none";

    showQuestion();
}

nextBtn.addEventListener("click", nextQuestion);

function finishQuiz() {
    const percent =
        ((score / questions.length) * 100).toFixed(1);

    let grade;

    if (percent >= 90) grade = "A";
    else if (percent >= 80) grade = "B";
    else if (percent >= 70) grade = "C";
    else if (percent >= 60) grade = "D";
    else grade = "F";

    let highScore =
        Number(localStorage.getItem("highScore")) || 0;

    if (score > highScore) {

        highScore = score;

        localStorage.setItem(
            "highScore",
            score
        );
    }

    document.body.innerHTML = `
        <div class="container">

            <h1>🎉 Quiz Complete!</h1>

            <h2>Score: ${score}/${questions.length}</h2>

            <h2>${percent}%</h2>

            <h2>Grade: ${grade}</h2>

            <h3>🏆 High Score: ${highScore}</h3>

            <hr>

            <h2>Review Mistakes</h2>

            ${
                wrong.length === 0
                ? "<p>Perfect Score! 🎉</p>"
                : wrong.map(item => `
                    <div class="review-card">
                        <p><b>${item.question}</b></p>
                        <p>Correct Answer:
                        ${item.correct}</p>
                    </div>
                `).join("")
            }

            <button onclick="location.reload()">
                Try Again
            </button>

        </div>
    `;
}

document.getElementById("highscore").textContent =
    localStorage.getItem("highScore") || 0;

showQuestion();
