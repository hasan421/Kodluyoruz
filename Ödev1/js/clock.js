const getUserName = () => {
  const user = prompt("Please enter your name");
  document.getElementById("myName").textContent = user;
};

const getCurrentTime = () => {
  const clockElement = document.querySelector(".clock");

  const date = new Date();

  var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

  console.log(date.getDate());
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();

  currentHours = currentHours < 10 ? `0${currentHours}`: currentHours;
  currentMinutes = currentMinutes < 10 ? `0${currentMinutes}`: currentMinutes;
  currentSeconds = currentSeconds < 10 ? `0${currentSeconds}`: currentSeconds;


  actualTime = `${currentHours}:${currentMinutes}:${currentSeconds} ${gunler[date.getDay()]}`;

  clockElement.textContent = actualTime;
};

const showTime = () => {
  setInterval(() => {
    getCurrentTime();
  }, 1000);
};
showTime();
getUserName();
