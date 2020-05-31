function generateMarkdown(data) {
  return `
# ${data.questions}
\n ${data.badges}
\n ${data.title}
\n ${data.describe}
\n ${data.table}
\n ${data.installation}
\n ${data.usage}
\n ${data.license}
\n ${data.contributing}
\n ${data.tests}


`;
}

module.exports = generateMarkdown;
