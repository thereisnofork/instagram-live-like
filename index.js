const img = document.querySelectorAll(".image");
const notifBar = document.getElementById("notifBar");

const numbers = [
   "first",
   "second",
   "third",
   "fourth",
   "fifth",
   "sixth",
   "seventh",
   "eighth",
];

img.forEach((img, idx) => {
   img.addEventListener("dblclick", (e) => {
      const interval = setInterval(() => {
         createHeart(e, img);
      }, Math.random() * 250);

      setTimeout(() => {
         clearInterval(interval);
      }, Math.random() * 2000);

      const notifmaker = document.createElement("div");
      notifmaker.classList.add("notif");
      notifBar.appendChild(notifmaker);

      notifmaker.innerText = `you liked ${numbers[idx]} photo`;

      setTimeout(() => {
         notifmaker.style.opacity = 1;
      }, 20);
      setTimeout(() => {
         notifmaker.style.opacity = 0;
      }, 3500);
      setTimeout(() => {
         notifmaker.remove();
      }, 4500);
   });
});

function createHeart(e, img) {
   const heart = document.createElement("i");
   heart.classList.add("fas");
   heart.classList.add("fa-heart");
   heart.classList.add("heart");
   heart.style.color = generateRandomColor();

   randomScale(heart);

   let img_parent = img.parentElement;
   let img_parent_pos = img_parent.getBoundingClientRect();
   const x = e.clientX - img_parent_pos.left;
   const y = e.clientY - img_parent_pos.top;

   heart.style.left = `${x + Math.random() * 25}px`;
   heart.style.top = `${y + Math.random() * 25}px`;

   img_parent.appendChild(heart);

   setTimeout(() => {
      heart.remove();
   }, 2000);
}

function generateRandomColor() {
   let letters = "0123456789ABCDEF";
   let color = "#";
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

function randomScale(heart) {
   heart.animate(
      [
         // keyframes
         { transform: "translateY(0px) scale(0.3)" },

         {
            transform: `translateY(${radnomRange1()}px) scale(${radnomRange2()})`,
         },
      ],
      {
         // timing options
         duration: 1800,
         iterations: Infinity,
      }
   );
   heart.animate(
      [
         // keyframes
         { opacity: randomOpacity1() },

         { opacity: randomOpacity1() },
      ],
      {
         // timing options
         duration: 1600,
         iterations: Infinity,
      }
   );
}

function radnomRange1() {
   let num = Math.random() * -300;
   if (num > -80) num += num;
   return num;
}
function radnomRange2() {
   return Math.random() * 3;
}
function randomOpacity1() {
   return Math.random();
}
