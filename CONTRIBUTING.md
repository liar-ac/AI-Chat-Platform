# Contributing to AIFriends

Thank you for your interest in contributing!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/AI-Chat-Platform.git`
3. Create a branch: `git checkout -b feature/your-feature`
4. Set up the development environment (see README.md)

## Development Workflow

1. Make your changes
2. Run tests:
   - Backend: `python manage.py check`
   - Frontend: `npm run build`
3. Commit with a clear message: `git commit -m "feat: add your feature"`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request against `main`

## Commit Convention

Use prefixes:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `refactor:` for code refactoring
- `chore:` for maintenance tasks

## Code Style

- Python: Follow PEP 8
- JavaScript/Vue: Use consistent formatting (Prettier recommended)
- Use meaningful variable names and add comments for complex logic

## Security

- Never commit `.env` files, API keys, or credentials.
- Report security vulnerabilities privately (see SECURITY.md).
- Do not open public issues for security problems.
