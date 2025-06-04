"use strict";

import { addRow } from "./functions.js";

const frameworks = [
  "Flowbite|25 de septiembre de 2021|269,000|49%",
  "React|24 de mayo de 2013|4,500,000|24%",
  "Angular|20 de septiembre de 2010|2,800,000|17%",
  "Vue|2 de diciembre de 2014|3,600,000|30%",
  "Svelte|26 de noviembre de 2016|1,200,000|57%",
  "Inferno|27 de septiembre de 2016|100,000|35%",
  "Preact|16 de agosto de 2015|600,000|28%",
  "Lit|28 de mayo de 2018|400,000|60%",
  "Alpine.js|2 de noviembre de 2019|300,000|70%",
  "Stimulus|6 de marzo de 2018|150,000|25%",
  "Solid|5 de julio de 2021|250,000|80%"
];

for (const framework of frameworks) {
  const [frameworkName, releaseDate, usersNumber, popularityPercentage] = framework.split("|").map(item => item.trim());

  const frameworkObj = {
    frameworkName,
    releaseDate,
    usersNumber,
    popularityPercentage
  };

  addRow(frameworkObj, "data-frameworks");
}

