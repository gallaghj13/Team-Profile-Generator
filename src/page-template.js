const generateManager = Manager => {
  return `
    <div class="card employee-card">
        <div class =card-header manager">
            <h2 class="card-title">${Manager.name}</h2>
            <h3 class="card-title">${Manager.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
            </ul>
        </div>
    </div>`;
};

const generateEngineers = engineersArr => {
  return `
    ${engineersArr
      .map(({ name, id, email, role, github }) => {
        return `
    <div class="card employee-card">
        <div class =card-header manager">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-title">${role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
            </ul>
        </div>
    </div>
    `;
      })
      .join('')}
    `;
};

const generateInterns = internsArr => {
    console.log(internsArr);
  return `
        ${internsArr
          .map(({ name, id, email, school, role }) => {
            return `
        <div class="card employee-card">
            <div class =card-header manager">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title">${role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>
        `;
          })
          .join("")}
        `;
};

module.exports = (templateData) => {
  const { interns, engineers, ...manager } = templateData;

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <main>
            ${generateManager(manager)}
            ${generateEngineers(engineers)}
            ${generateInterns(interns)}
        </main>
        
    </body>
    </html>
    `;
};
