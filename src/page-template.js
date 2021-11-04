const generateManager = Manager => {
  return `
    <div class="card employee-card col-3">
        <div class ="card-header manager col-12">
            <h2 class="card-title">${Manager.name}</h2>
            <h3 class="card-title">${Manager.role}</h3>
        </div>
        <div class="card-body col-12">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
};

const generateEngineers = engineersArr => {
  return `
    ${engineersArr
      .map(({ name, id, email, role, github }) => {
        return `
    <div class="card employee-card col-3">
        <div class ="card-header engineer col-12">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-title">${role}</h3>
        </div>
        <div class="card-body col-12">
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
        <div class="card employee-card col-3">
            <div class ="card-header intern col-12">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title">${role}</h3>
            </div>
            <div class="card-body col-12">
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
        <link rel="stylesheet" href="./dist/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <header class="header">
    <p>My Team</p>
    </header>
    <body>
        <main>
        <div class="row row-cols-sm-1 row-cols-md-3">
            ${generateManager(manager)}
            ${generateEngineers(engineers)}
            ${generateInterns(interns)}
        </div>
        </main>
        
    </body>
    </html>
    `;
};
