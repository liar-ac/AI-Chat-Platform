# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest  | Yes |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

1. **Do NOT open a public issue.**
2. Use [GitHub's private vulnerability reporting](https://github.com/liar-ac/AI-Chat-Platform/security/advisories/new) to submit your report.
3. Include a description of the vulnerability, steps to reproduce, and potential impact.
4. We will acknowledge receipt within 48 hours and provide a timeline for a fix.

## Security Best Practices

- Never commit `.env` files, API keys, database passwords, or tokens to the repository.
- Always use environment variables for sensitive configuration.
- If you accidentally expose a secret, rotate it immediately.
- Use the provided `.env.example` files as templates — never copy real credentials into them.

## Secret Rotation

If a secret has been exposed in the Git history:

1. Rotate the compromised key/password immediately on the provider's platform.
2. Update your local `.env` file with the new value.
3. Consider using `git filter-repo` or BFG Repo-Cleaner to remove the secret from history (this rewrites Git history and requires force push).
4. Git history cleanup does NOT replace secret rotation — always rotate first.
