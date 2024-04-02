
const name1 = document.getElementById("name-1");
const name2 = document.getElementById("name-2");
const name3 = document.getElementById("name-3");
const name4 = document.getElementById("name-4");

const score1 = document.getElementById("sco-1");
const score2 = document.getElementById("sco-2");
const score3 = document.getElementById("sco-3");
const score4 = document.getElementById("sco-4");

const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");
const img4 = document.getElementById("img-4");

const totalScore = document.getElementById("total-score");

const calification = document.getElementById("calification");

const names = [name1, name2, name3, name4];
const scores = [score1, score2, score3, score4];
const images = [img1, img2, img3, img4];

let values = [];

fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    displayData(data);
  })
  .catch(function (error) {
    console.log('An error occurred:', error);
  });
function displayData(data) {
  values = data;
  actualization();
}


const actNames = () => {
  for (let i = 0; i < names.length; i++) {
    names[i].innerText = values[i].category;
  }
};
const actScores = () => {
  for (let i = 0; i < scores.length; i++) {
    scores[i].innerText = values[i].score;
  }
};
const actImg = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].src = values[i].icon;
  }
};
const actTotalScore = () => {
  let sum = 0;
  for (let i = 0; i < names.length; i++) {
    sum += parseInt(scores[i].innerText);
  }
  sum = Math.round(sum / 4);
  totalScore.innerText = sum;
};

const actCalification = () => {
  let sum = parseInt(totalScore.innerText);
  if (sum >= 80) {
    calification.innerText = "Excellent";
  } else if (sum >= 60) {
    calification.innerText = "Great";
  } else if (sum >= 40) {
    calification.innerText = "Good";
  } else if (sum >= 20) {
    calification.innerText = "Regular";
  } else {
    calification.innerText = "Bad";
  }
};


const actualization = () => {

  actNames();
  actScores();
  actImg();
  actTotalScore();
  actCalification();

};

