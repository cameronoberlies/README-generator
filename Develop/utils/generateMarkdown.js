// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if(license === 'boost') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  } else if(license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
  } else if(license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else {
    return ''
  };

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'apache') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if(license === 'boost') {
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  } else if(license === 'IBM') {
    return `(https://opensource.org/licenses/IPL-1.0)`
  } else if(license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  } else {
    return ''
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'apache') {
    return 'Application licensed by Apache'
  } else if(license === 'boost') {
    return 'Application licensed by Boost'
  } else if(license === 'IBM') {
    return 'Application licensed by IBM'
  } else if(license === 'MIT') {
    return 'Application licensed by MIT'
  } else {
    return ''
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  -${renderLicenseBadge(data.license)} <br>
  #Description <br>
   -${data.description}
  
##Table of Contents <br>
  -[Installation](#installation) <br>
  -[Usage](#usage) <br>
  -[License](#license) <br>
  -[Contributors](#contributors)<br>
  -[Tests](#tests) <br>
  -[Questions](#questions)

  

  ###Installation <a id="installation"></a> <br>
  -${data.installation}

  ###Usage <a id="usage"></a> <br>
  -${data.usage}

  ###License <a id="license"></a> <br>
  -${data.license} <br>
  -${renderLicenseLink(data.license)} <br>
  -${renderLicenseSection(data.license)}

  ###Contributors <a id="contributors"></a> <br>
  -${data.contributing}

  ###Tests <a id="tests"></a> <br>
  -${data.tests}

  ###Questions <a id="questions"></a> <br>
  -GitHub Username: ${data.GitHub} <br>
  -email: ${data.email}

`;
}

module.exports = generateMarkdown;
