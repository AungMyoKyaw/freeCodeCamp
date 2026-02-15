![freeCodeCamp Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

[![Join the chat at https://gitter.im/freecodecamp/freecodecamp](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/freecodecamp/freecodecamp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Known Vulnerabilities](https://snyk.io/test/github/freecodecamp/freecodecamp/badge.svg)](https://snyk.io/test/github/freecodecamp/freecodecamp)
[![Build Status](https://travis-ci.org/freeCodeCamp/freeCodeCamp.svg?branch=staging)](https://travis-ci.org/freeCodeCamp/freeCodeCamp)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)

# freeCodeCamp's Open Source Codebase and Curriculum

freeCodeCamp is a friendly open source community where you learn to code and help nonprofits.

**We help our campers build job-worthy portfolios of real apps used by real people, while helping nonprofits.**

You start by working through our self-paced, browser-based full stack JavaScript curriculum.

## Table of Contents

- [Certifications](#certifications)
- [Community](#community)
- [Found a Bug?](#found-a-bug)
- [Contributing](#contributing)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Security](#security)
- [License](#license)

## Certifications

By working through our curriculum, you can earn four certifications:

### 1. Front End Certification

The first section will teach you the basics of how webpages work and also introduce you to JavaScript programming.

**Skills:** `HTML`, `CSS`, `JavaScript`, `jQuery`, `Bootstrap`

**Requirements:** Build **10 front-end projects** and implement many **JavaScript algorithms**.

### 2. Data Visualization Certification

The second section builds upon the first and introduces you to more advanced topics.

**Skills:** `Sass`, `React`, `D3`

**Requirements:** Build **5 React-apps** and **5 Data visualization apps** using `D3.js`.

### 3. Back End Certification

The third section introduces you to back end development and source control.

**Skills:** `Node.js`, `Express`, `MongoDB`, `Git`

**Requirements:** Build **5 APIs** and **5 full stack apps**.

We will accept solutions implemented in _any_ programming language, as long as both a live demo and the source code are publicly accessible.

### 4. Full Stack Certification

The fourth section is where you'll get **real-world experience** by working on projects for **nonprofits**.

We'll pair you with another camper, an agile project manager, and a stakeholder from a nonprofit organization. Together, you'll plan, build and maintain apps that help that nonprofit carry out its mission more effectively.

**Requirements:** Work on **two projects from scratch** and then **maintain/upgrade two existing projects**.

---

## Community

This code is running live at [freeCodeCamp.org](https://www.freecodecamp.org).

### Connect with us:

- [Gitter chat rooms](https://gitter.im/FreeCodeCamp/FreeCodeCamp)
- [Medium publication](https://medium.freecodecamp.org)
- [Interactive forum](https://forum.freecodecamp.org)
- [Wiki knowledgebase](https://forum.freecodecamp.org/c/wiki)
- [Local Facebook groups](https://study-group-directory.freecodecamp.org/)
- [YouTube channel](https://youtube.com/freecodecamp)

### [Join our community here](https://www.freecodecamp.org/signin)

---

## Found a Bug?

Do not file an issue until you have followed these steps:

1. Read the [Help I've Found a Bug](https://forum.freecodecamp.org/t/how-to-report-a-bug/19543) article and follow its instructions.
2. Ask for confirmation in the appropriate [Help Room](https://forum.freecodecamp.org/t/free-code-camp-official-chat-rooms/19390/2).
3. Please _do not_ open an issue without a 3rd party confirmation of your problem.

---

## Contributing

We welcome pull requests from freeCodeCamp campers (our students) and seasoned JavaScript developers alike! Please follow [these steps](CONTRIBUTING.md) to contribute.

---

## Development Setup

### Prerequisites

| Prerequisite                                | Version |
| ------------------------------------------- | ------- |
| [MongoDB](http://www.mongodb.org/downloads) | `~ ^3`  |
| [MailHog](https://github.com/mailhog/MailHog) | `~ ^1` |
| [Node.js](http://nodejs.org)                | `~ ^6`  |
| npm (comes with Node)                       | `~ ^3`  |

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourUsername/freeCodeCamp.git
cd freeCodeCamp

# Install dependencies
npm install

# Copy environment variables
cp sample.env .env

# Start MongoDB (in a separate terminal)
mongod

# Initialize the database (run once)
npm run only-once

# Start the application
gulp
```

The application will be available at `http://localhost:3000`.

For detailed setup instructions, see [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Project Structure

```
freeCodeCamp/
├── client/              # Frontend React application
│   ├── less/            # LESS stylesheets
│   ├── epics/           # Redux observables
│   └── utils/           # Client utilities
├── common/              # Shared code between client and server
│   ├── app/             # Application components and routes
│   ├── models/          # Data models
│   └── utils/           # Shared utilities
├── server/              # Backend LoopBack/Express server
│   ├── boot/            # Server initialization scripts
│   ├── middlewares/     # Express middlewares
│   ├── models/          # Server models
│   ├── resources/       # Static resources
│   ├── services/        # Backend services
│   ├── utils/           # Server utilities
│   └── views/           # Jade templates
├── seed/                # Database seed data and challenges
├── config/              # Configuration files
├── public/              # Static assets
└── test/                # Test files
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run all tests |
| `npm run lint` | Lint JavaScript and JSON files |
| `npm run only-once` | Initialize database with seed data |
| `gulp` | Start development server with hot reload |

---

## Security

### Reporting Security Issues

If you discover a security vulnerability within freeCodeCamp, please send an email to security@freecodecamp.org. All security vulnerabilities will be promptly addressed.

### Security Best Practices

- Never commit `.env` files or any files containing secrets
- Use environment variables for all sensitive configuration
- Report any potential security issues immediately

---

## License

Copyright (c) 2017 freeCodeCamp.

The content of this repository is bound by the following licenses:

- The computer software is licensed under the [BSD-3-Clause](./LICENSE.md).
- The curricular content in the `./seed/challenges` directory and our wiki are licensed under the [CC-BY-SA-4.0](./LICENSE-freeCodeCamp-Curriculum.md).

---

## Code of Conduct

This project follows the [freeCodeCamp Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to support@freecodecamp.org.
