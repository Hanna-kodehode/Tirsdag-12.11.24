// Oppg. 1, Text Swap
const TextSwap = "No er det tysdag";
console.log(TextSwap.split(" ").reverse().join(" "));

//Oppg. 2, toUpperCase() or toLowerCase(), that is the question

let stringToUpperCase = "HeLLo På DeG";
let doWeWantUpperCase = true; //Switch to false if we don't want uppercase

if (doWeWantUpperCase) {
  stringToUpperCase = stringToUpperCase.toUpperCase();
} else {
  stringToUpperCase = stringToUpperCase.toLowerCase();
}

console.log(stringToUpperCase);

//Oppg 3, dayToText

const dayToText = "Torsdag"; //endre dag for å endre utfall

switch (dayToText) {
  case "Mandag":
    console.log("Mandag... ny veke, nye moglegheiter?");
    break;
  case "Tirsdag":
    console.log("Tysdag... er det helg snart?");
    break;
  case "Onsdag":
    console.log("Onsdag, endelig lillelaurdag.");
    break;
  case "Torsdag":
    console.log("Torsdag er ein veldig fin dag!");
    break;
  case "Fredag":
    console.log("Fredag, snart helg!");
    break;
  case "Lørdag":
    console.log("Laurdag, endelig avslapning.");
    break;
  case "Søndag":
    console.log("Søndag... Nyt den...");
    break;
  default:
    console.log("Ugyldig dag. Vennligst skriv inn ein gyldig dag.");
}

//Oppg. 4, charAt

const Hei = "Hei på deg H";
const Bjørnar = "Bjørnar spiste brødskive med salami";

const firstChar1 = Hei.charAt(0);
const lastChar1 = Hei.charAt(Hei.length - 1);
console.log(firstChar1 === lastChar1);

const firstChar2 = Bjørnar.charAt(0);
const lastChar2 = Bjørnar.charAt(Bjørnar.length - 1);
console.log(firstChar2 === lastChar2);

//Oppg. 5, "Hei", "Salami", "Bjarte"

const searchTrue = "Hei";
const list1 = ["Hei", "Salami", "Bjarte"];
console.log(list1.includes(searchTrue), ", ordet finnes i lista");

const searchFalse = "Torsdag";
const list2 = ["Hei", "Salami", "Bjarte"];
console.log(list2.includes(searchFalse), ", ordet finnes ikkje i lista");

//Oppg. 6, Hei Bjarte

const words = ["Hei", "Salami", "Bjarte"];

const firstWord = words.shift();
const lastWord = words.pop();

const combined = firstWord + lastWord;

console.log(combined);

//Oppg. 7, Superku?

const text1 = "HaLlA På Deg";
const text2 = "Halla på deg";

console.log(
  text1.toLowerCase() === text2.toLowerCase(),
  ", setningane er like"
);

const text3 = "HaLalA På Deg";
const text4 = "Bjarne Superku";

console.log(
  text3.toLowerCase() === text4.toLowerCase(),
  ", setningane er ikkje like"
);

//Oppg. 8, alder

const age = 42;

if (age < 13) {
  console.log("Born");
} else if (age >= 13 && age <= 19) {
  console.log("Tenåring");
} else if (age >= 20 && age <= 64) {
  console.log("Vaksen");
} else if (age >= 65) {
  console.log("Pensjonist");
} else {
  console.log("Det der er ikkje ein alder");
}

//Oppg. 9, vokal eller konsonant?

const letter = "Æ";

if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u" ||
  letter === "y" ||
  letter === "æ" ||
  letter === "ø" ||
  letter === "å" ||
  letter === "A" ||
  letter === "E" ||
  letter === "I" ||
  letter === "O" ||
  letter === "U" ||
  letter === "Y" ||
  letter === "Æ" ||
  letter === "Ø" ||
  letter === "Å"
) {
  console.log(true, ", bokstaven er ein vokal"); // Vokal
} else {
  console.log(false, ", bokstaven er eni konsonant"); // Konsonant
}

//Oppg. 10, årstider as

const month = "Juni";

switch (month) {
  case "Desember":
  case "Januar":
  case "Februar":
    console.log("Måneden tilhøyrer vinteren");
    break;
  case "Mars":
  case "April":
  case "Mai":
    console.log("Måneden tilhøyrer våren");
    break;
  case "Juni":
  case "Juli":
  case "August":
    console.log("Måneden tilhøyrer sommaren");
    break;
  case "September":
  case "Oktober":
  case "November":
    console.log("Måneden tilhøyrer hausten");
    break;
  default:
    console.log("Det er ikkje ein måned");
}

//Oppg. 11, vêrmeldingen for november
const array = ["sol", "vind", "regn", "snøv"];

const newArray = array.slice(1, array.length - 1);

console.log("Dei neste dagene blir det:", newArray, "Uff då.");

//Ferdig yippie
