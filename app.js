"use strict";

const titles = document.querySelectorAll('h2');
const secondSectionHeader = Array.from(titles)[1];
console.log(secondSectionHeader);

const firstParagraph = document.querySelector('section.first-section > p');
console.log(firstParagraph);


const listItems = document.getElementsByTagName('li');
const fifthItem = listItems[4];
console.log(fifthItem);

const hatredBlock = document.getElementsByClassName('hatred-level-block')[0];
console.log(hatredBlock);