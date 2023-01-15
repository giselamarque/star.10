const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs'); 

const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the manager?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the id of the manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the manager?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the manager?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the office number of the manager!');
                    return false;
                }
            }
        }
    ])
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager);
        console.log(manager
        );
    });
};

const promptTeam = () => {
    console.log(`
    =================
    Add a New Team Member
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the team member?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team member?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the team member!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the team member?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the id of the team member!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the team member?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the team member!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github of the engineer?',
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the github of the engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the intern?',
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the school of the intern!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddTeamMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(teamMemberData => {
        let { name
            , id
            , email
            , role
            , github
            , school
            , confirmAddTeamMember } = teamMemberData;
        let teamMember;
        if (role === 'Engineer') {
            teamMember = new Engineer(name, id, email, github);
            console.log(teamMember);
        }
        else if (role === 'Intern') {
            teamMember = new Intern(name, id, email, school);
            console.log(teamMember);
        }
        teamMembers.push(teamMember);
        if (confirmAddTeamMember) {
            return promptTeam(teamMembers);
        }
        else {
            return teamMembers;
        }
    });
};
    promptQuestions()

