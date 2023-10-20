const left_goal_count = document.getElementById("left-goal");
const right_goal_count = document.getElementById("right-goal");
const messageElement = document.getElementById("goal-message");

let left_goal = 1;
let right_goal = 0;

const showGoalMessage = (message) => {
  messageElement.innerText = message;
  messageElement.style.display = "block";
  setTimeout(() => {
    messageElement.style.display = "none";
    messageElement.innerText = "";
  }, 4000); // 4000 milliseconds (4 seconds)
};

const goalHandler = () => {
  if (left_goal % 2 === 0) {
    right_goal++;
    right_goal_count.innerText = right_goal;
  } else {
    left_goal++;
    left_goal_count.innerText = left_goal;
  }
  showGoalMessage("GOAL ⚽ !");
};

// Call goalHandler every 8 seconds (8000 milliseconds)
setInterval(() => {
  goalHandler();
}, 80000); // <<<  apni goal er time akhan theke chaange korben



const timerElement = document.getElementById("timer");

let minutes = 14;
let seconds = 0;

function updateTimer() {
  if (seconds === 59) {
    minutes++;
    seconds = 0;
  } else {
    seconds++;
  }
  const timeString = `${minutes}:${String(seconds).padStart(2, "0")}`;

  timerElement.textContent = timeString;
}

const timerInterval = setInterval(updateTimer, 1000);
