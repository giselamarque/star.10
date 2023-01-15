const generateIntern = internDisplay => {
    const intern = internDisplay.intern;
    const internName = intern.name;
    const internId = intern.id;
    const internEmail = intern.email;
    const internSchool = intern.school;

    return `
    ${internName}
    ${internId}
    ${internEmail}
    ${internSchool}
    `;
};

// Path: src/page.js
// Compare this snippet from index.js:

const generateManager = managerDisplay => {

    const manager = managerDisplay.manager;
    const managerName = manager.name;
    const managerId = manager.id;
    const managerEmail = manager.email;
    const managerOffice = manager.officeNumber;

    return `
    ${managerName}
    ${managerId}
    ${managerEmail}
    ${managerOffice}
    `;
}

const generateEngineer = engineerDisplay => {
    
        const engineer = engineerDisplay.engineer;
        const engineerName = engineer.name;
        const engineerId = engineer.id;
        const engineerEmail = engineer.email;
        const engineerGithub = engineer.github;
    
        return `
        ${engineerName}
        ${engineerId}
        ${engineerEmail}
        ${engineerGithub}
        `;
    }
    module.exports = (internData, managerData, engineerData) => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="page.css">
            <title>Team Profile</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
                <section>
                    <h2>Manager</h2>
                    ${generateManager(managerData)}
                </section>
                <section>
                    <h2>Engineer</h2>
                    ${generateEngineer(engineerData)}
                </section>
                <section>
                    <h2>Intern</h2>
                    ${generateIntern(internData)}
                </section>
            </main>
        </body>
        </html>
        `;
    };

