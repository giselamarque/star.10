const TeamMember = require('./team-member');

class Engineer extends TeamMember {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;