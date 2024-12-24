// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "None") return "";
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === "None") return "";
  return `[License Info](https://opensource.org/licenses/${license})`;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "None") return "";
  return `## License\n\nThis project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, feel free to reach out:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
