// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import $ from "jquery";

let parent = document.querySelectorAll(".down-menu__link");
let child = document.querySelectorAll(".down-menu__info");

let nowI = 0;
child[nowI]?.classList.remove("close");
for (let i = 0; i < parent.length; i++) {
  for (let j = 0; j < child.length; j++) {
    if (i == j) {
      parent[i].onmouseover = function (event) {
        child[nowI].classList.toggle("close");
        child[i].classList.remove("close");
      };
      parent[i].onmouseout = function (event) {
        nowI = i;
      };
    }
  }
}
let calcs = [];
let indicators = [];
let other = [];
parent?.forEach((n, i) => {
  n.textContent.includes("Калькулятор") ||
  n.textContent.includes("Расчет сложного процента")
    ? calcs.push(n)
    : n.textContent.includes("Индикатор") ||
        n.textContent.includes("Корреляция валютных пар") ||
        n.textContent.includes("Стакан ордеров Forex") ||
        n.textContent.includes("Отчеты Commitments of Traders")
      ? indicators.push(n)
      : other.push(n);
});

let menuLink = document.querySelectorAll(".menu__link");
let menuItem = document.querySelectorAll(".menu__item");

let underMenuLink = document.querySelectorAll(".under-menu__link");
let underMenuItem = document.querySelectorAll(".under-menu__item");

let underMenues = document.querySelectorAll(".menu__under-menu");

let underMenuesBottom = document.querySelectorAll(".under-menu");

// let underMenuesDown = document.querySelectorAll(".menu__under-menu-down");
// let underMenuesLink = document.querySelectorAll('.')
// console.log(menuItem)

// for (let i = 0; i < menuLink.length; i++) {
//   menuLink[i]?.addEventListener("click", (e) => {
//     menuLink[i].classList.toggle("open-item");
//     // if(menuItem[i].contains(underMenues[i])) {
//     // underMenues[i].classList.toggle("open-under-menu");
//     // underMenues.forEach((n, i) => {
//     //   console.log(menuItem[i].contains(n))
//     // })

//     // }
//   })
// }
// var nearestAncestor = $(menuItem[i]).closest(menu);
// console.log(nearestAncestor)
// let test = document.querySelector('#t')
// console.log(test.closest('.menu__under-menu'))
let calc = calcs
  .map(
    (name) =>
      `<li class="under-menu__item"><a href="#" class="under-menu__link ">${name.textContent}</a></li>`
  )
  .join("");
let otherItems = other
  .map(
    (name) =>
      `<li class="under-menu__item"><a href="#" class="under-menu__link ">${name.textContent}</a></li>`
  )
  .join("");
menuLink.forEach((link, i) => {
  link.addEventListener("click", (e) => {
    underMenues.forEach((menu) => {
      // console.log(foundMenu !== undefined)
      if (menuItem[i].contains(menu)) {
        link.classList.toggle("open-item");
        menu.classList.toggle("open-under-menu");
      }
    });
  });
});
// console.log(foundMenu)

// let menuUnder;
underMenuLink.forEach((link, i) => {
  link.addEventListener("click", (e) => {
    underMenuesBottom.forEach((menu) => {
      if (underMenuItem[i].contains(menu)) {
        link.classList.toggle("open-item2");
        menu.classList.toggle("open-under-menu2");

        // menuUnder = menu;
        // return menuUnder;
        // console.log(menuUnder)
      }

      // console.log(menu)
      // console.log(underMenuItem[i].contains(menu))
    });
  });
});
underMenues[0].insertAdjacentHTML("beforeend", otherItems);
underMenuesBottom[1].insertAdjacentHTML("beforeend", calc);
// menuUnder?.insertAdjacentHTML("beforeend", calc);
// for (let i = 0; i < menuLink.length; i++) {
//   // console.log(underMenues[i])
//   menuLink[i]?.addEventListener("click", (e) => {
//     menuLink[i].classList.toggle("open-item");
//     underMenues[i].classList.toggle("open-under-menu");
//     // for(let j = 0; j < underMenues.length; j++) {
//     //   if(i == j) {
//     //   underMenues[j].classList.toggle("open-under-menu");
//     //   }
//     // }
//   });

// }

// for (let i = 0; i < menuLink.length; i++) {
//   // console.log(underMenues[i])
//   menuLink[i]?.addEventListener("click", (e) => {
//     menuItem[i].classList.toggle("open-item");
//     // console.log(menuItem[i])
//     // console.log(menuLink[i])
//     for(let j = 0; j < underMenues.length; j++) {
//       if(i == j) {
//         underMenues[j].classList.toggle("open-under-menu");
//       }
//     }
//   });
// }
// for (let i = 0; i < underMenuLink.length; i++) {
//   underMenuLink[i].addEventListener("click", (e) => {
//     underMenuItem[i].classList.toggle("open-item");
//     // console.log(underMenues.length)
//     for(let j = 0; j < underMenues.length; j++) {
//       console.log(underMenues)
//       if(i == j) {
//         underMenues[j].classList.toggle("open-under-menu");
//       }
//     }
//   });
// }

// for (let i = 0; i < underMenuLink.length; i++) {
//   underMenuLink[i].addEventListener("click", (e) => {
//     underMenuItem[i].classList.toggle("open-item");
//     underMenues.forEach((underMenu) => {
//       if (underMenuItem[i].contains(underMenu)) {
//         underMenu.classList.toggle("open-under-menu");
//       }
//     });
//   });
// }
// let test = other
//   .map(
//     (name) =>
//       `<li class="under-menu__item"><a href="#" class="under-menu__link ">${name.textContent}</a></li>`
//   )
//   .join("");

// let test2 = calcs
//   .map(
//     (name) =>
//       `<li class="under-menu__item"><a href="#" class="under-menu__link ">${name.textContent}</a></li>`
//   )
//   .join("");

// underMenues[0].insertAdjacentHTML("beforeend", test);
// underMenues[1].insertAdjacentHTML("beforeend", test2);
// underMenues[2].innerHTML = test2;
// console.log(underMenues[2])
// underMenuItem[0].addEventListener("click", (e) => {
//   // underMenuItem[0].classList.toggle("open-item2");
//   underMenues[1].insertAdjacentHTML("beforeend", test2);
//   // underMenues[1].classList.toggle("open-under-menu");
//   // underMenues[1].insertAdjacentHTML("beforeend", test2);
// // console.log(test2)
// });
// // console.log(underMenues)
