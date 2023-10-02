# Sentence Caser

![npm](https://img.shields.io/npm/v/sentence-caser)
![license](https://img.shields.io/npm/l/sentence-caser)

Sentence Caser is a lightweight, easy-to-use npm package that converts strings to sentence case, ensuring proper capitalization and formatting.

## Installation

Use the package manager [npm](https://npmjs.com) to install Sentence Caser.

```sh

## Usage

npm install sentence-caser

const sentenceCaser = require('sentence-caser');

const myString = "joNathan ruKUNDO";
const convertedString = sentenceCaser(myString);

console.log(convertedString); // Outputs: "Jonathan Rukundo"
