# Security Policy

## Supported Versions

The following versions of freeCodeCamp are currently being supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| staging | :white_check_mark: |
| master  | :white_check_mark: |

## Reporting a Vulnerability

We take the security of freeCodeCamp seriously. If you have discovered a security vulnerability, we appreciate your help in disclosing it to us in a responsible manner.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them to our security team at:

- Email: security@freecodecamp.org

Please include the following information:

1. Description of the vulnerability
2. Steps to reproduce the issue
3. Potential impact of the vulnerability
4. Possible solutions (if you have any)

### What to Expect

- You will receive an acknowledgment of your report within 48 hours
- We will investigate and confirm the vulnerability
- We will work on a fix and keep you informed of progress
- Once fixed, we will publicly acknowledge your responsible disclosure (if desired)

### Safe Harbor

We support responsible disclosure and will not take legal action against security researchers who:

- Act in good faith
- Do not access or modify user data
- Do not degrade system performance
- Give us reasonable time to respond before public disclosure

## Security Best Practices for Contributors

### Environment Variables

- Never commit `.env` files to version control
- Use `sample.env` as a template for local development
- All secrets should be loaded from environment variables

### Authentication

- Use strong, unique passwords for all accounts
- Enable two-factor authentication where available
- Never share API keys or access tokens

### Code Security

- Always validate and sanitize user input
- Use parameterized queries for database operations
- Keep dependencies up to date
- Review code for potential security issues before submitting PRs

### Dependencies

We use [Snyk](https://snyk.io/) to monitor for known vulnerabilities in our dependencies. You can run a local security audit:

```bash
npm audit
```

## Security-Related Configuration

The following configuration files are security-relevant:

- `config/secrets.js` - Loads all secrets from environment variables
- `.env` - Local environment configuration (never commit this)
- `sample.env` - Template for environment configuration

## Credits

We would like to thank all security researchers who have responsibly disclosed vulnerabilities to us. Your efforts help keep freeCodeCamp safe for everyone.
