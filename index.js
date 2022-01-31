/*Get user input for:
1. Enter Team Manager's name: 
2. Enter Team Manager's ID number:
3. Enter Team Manager's Email address:
4. Enter Team Manager's Office number:

5. Select option:
 - Add Engineer
 - Add Intern
 - Finish building my team

 ---> If they select Engineer:
1. Enter Engineer's name: 
2. Enter Engineer's ID number:
3. Enter Engineer's Email address:
4. Enter Engineer's GitHub username:

5. Select option:
 - Add Engineer
 - Add Intern
 - Finish building my team

 ---> If they select Intern
1. Enter Intern's name: 
2. Enter Intern's ID number:
3. Enter Intern's Email address:
4. Enter Intern's School:

5. Select option:
 - Add Engineer
 - Add Intern
 - Finish building my team

 ---> If they select Finish building my team
 Exit application and generate HTML file

*/

// imports
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

var allAnswers = [];

const createCards = () => {
    var html =  ``;

    for (let i = 0; i < allAnswers.length; i++) {
        const ans = allAnswers[i];
        if(ans.role === 'Team Manager') {
            html += 
            `<!-- Card Generation Start -->
            <div class="card col-3 m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${ans.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${ans.role}</h6>
                <p class="card-text">ID: ${ans.ID}</p>
                <p class="card-text">Office Number: ${ans.officeNum}</p>
                <a href="mailto:${ans.email}" class="card-link">${ans.email}</a>
            </div>
        </div>
        <!-- Card Generation End -->`

        } else if (ans.role === 'Engineer') {
            html += 
            `<!-- Card Generation Start -->
            <div class="card col-3 m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${ans.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${ans.role}</h6>
                <p class="card-text">ID: ${ans.ID}</p>
                <a href="mailto:${ans.email}" class="mEmail card-link">${ans.email}</a></br></br>
                GitHub: <a href="https://github.com/${ans.github}" class="card-link">${ans.github}</a>
            </div>
        </div>
        <!-- Card Generation End -->`

        } else if (ans.role === 'Intern') {
            html += 
            `<!-- Card Generation Start -->
            <div class="card col-3 m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${ans.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${ans.role}</h6>
                <p class="card-text">ID: ${ans.ID}</p>
                <p class="card-text">${ans.school}</p>
                <a href="mailto:${ans.email}" class="card-link">${ans.email}</a>
            </div>
        </div>
        <!-- Card Generation End -->`
        }
        
    }
    return html;
}

const addEmployee = (answers) => {
    //html.generate(answers.mName, answers.mID, answers.mEmail, answers.mOfficeNum);
    //console.log("ANSWERS:" + answers);
    allAnswers.push(answers);
    if (answers.optionList === 'Add Engineer') {
        inquirer.prompt([
            {
                type: 'input',
                message: "Enter Engineer's name:",
                name: 'name' //Engineer name
            },
            {
                type: 'input',
                message: "Enter Engineer's ID number:",
                name: 'ID' //Engineer ID
            },
            {
                type: 'input',
                message: "Enter Engineer's Email address:",
                name: 'email' //Engineer email
            },
            {
                type: 'input',
                message: "Enter Engineer's GitHub Username:",
                name: 'github' //Engineer github name 
            },
            {
                type: 'list',
                message: 'Select an option:',
                choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
                name: 'optionList' // Create a new employee or finish team
            }
        ]).then((answers) => {
           // console.log(answers);
           answers.role = "Engineer";
            addEmployee(answers);

        })
    } else if (answers.optionList === "Add Intern") {
        inquirer.prompt([
            {
                type: 'input',
                message: "Enter Intern's name:",
                name: 'name' //Intern name
            },
            {
                type: 'input',
                message: "Enter Intern's ID number:",
                name: 'ID' //Intern ID
            },
            {
                type: 'input',
                message: "Enter Intern's Email address:",
                name: 'email' //Intern email
            },
            {
                type: 'input',
                message: "Enter Intern's School name:",
                name: 'school' //Intern office number
            },
            {
                type: 'list',
                message: 'Select an option:',
                choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
                name: 'optionList' // Create a new employee or finish team
            }
        ]).then((answers) => {
           // console.log(answers);
           answers.role = "Intern";
            addEmployee(answers);
        })
    } else if (answers.optionList === 'Finish building team'){
        // generate html
        var str = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./dist/style.css">
            <title>Document</title>
        </head>
        <body>
            <nav class="navbar navbar-light bg-purp">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Team Builder</a>
                </div>
              </nav>
              <main>
                <div class="container mt-5">
                    <div class="row">
                        ${createCards()}
                    </div>
                </div>
              </main>
              
              <script src="../index.js"></script>
        </body>
        </html>`;
        fs.writeFile('./dist/index.html', str, () => {});
        
    }
}
inquirer
    .prompt([
        // questions
        {
            type: 'input',
            message: "Enter Team Manager's name:",
            name: 'name' //manager name
        },
        {
            type: 'input',
            message: "Enter Team Manager's ID number:",
            name: 'ID' //manager ID
        },
        {
            type: 'input',
            message: "Enter Team Manager's Email address:",
            name: 'email' //manager email
        },
        {
            type: 'input',
            message: "Enter Team Manager's Office number:",
            name: 'officeNum' //manager office number
        },
        {
            type: 'list',
            message: 'Select an option:',
            choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
            name: 'optionList' // Create a new employee or finish team
        }
    ])
    .then(answers => {
        //html.generate(answers.mName, answers.mID, answers.mEmail, answers.mOfficeNum);
        //console.log("ANSWERS:" + answers);

        answers.role = "Team Manager";
        addEmployee(answers);
});