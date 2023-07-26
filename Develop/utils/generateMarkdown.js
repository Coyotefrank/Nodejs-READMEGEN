// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return (
     ` ## license 
     This project is licensed under the ${license}`
    )
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}

## Description
${data.description}

Table Of Content 

* [Installation](#installation)

* [Usage](#usage) 

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


## Installation


## Usage
${data.usage}

${renderLicenseSection(data.license)}

## License 

${data.license}
## Questions
 
* Email: ${data.email}
* Github: https://github.com/${data.github}


`;
}

module.exports = generateMarkdown;
