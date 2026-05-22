# AIFriends

**An AI character chat platform built with Django 6.0 + Vue 3.0**

[中文文档](README.md)

[![Django](https://img.shields.io/badge/Django-6.0-092E20?style=flat-square&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.0-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

A full-stack web application supporting AI character creation, real-time chat, voice interaction, and a blog system.

## Features

- **AI Character System** — Create custom AI characters with avatars, personas, backgrounds, and voice cloning
- **Smart Chat** — SSE streaming responses powered by LangChain/LangGraph, with RAG knowledge base and long-term memory
- **Voice Interaction** — ASR speech recognition, TTS synthesis, and voice cloning via Aliyun
- **Blog System** — Markdown editor (Vditor), image upload, tag management, infinite scroll
- **User System** — JWT authentication, profile management, personal space

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vue 3 + Vite + Pinia + Tailwind CSS + DaisyUI |
| Backend | Django 6.0 + Django REST Framework + SimpleJWT |
| Database | MySQL 8.0 |
| AI Engine | LangChain + LangGraph + OpenAI Compatible API |
| Voice | Aliyun Speech (ASR + TTS + Voice Cloning) |

## Quick Start

```bash
git clone https://github.com/liar-ac/AI-Chat-Platform.git
cd AI-Chat-Platform

# Backend
conda create -n AIFriends python=3.12 && conda activate AIFriends
pip install -r requirements.txt
cd backend && cp .env.example .env  # Edit .env with your config
mysql -u root -p -e "CREATE DATABASE aifriends CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
python manage.py migrate
python manage.py runserver 127.0.0.1:8000

# Frontend (in another terminal)
cd frontend && npm install && npm run build
```

Open http://localhost:8000/

## Environment Variables

See `.env.example` files in `backend/` and `frontend/` for all required variables.

**Production must set:** `DJANGO_SECRET_KEY` (random), `DJANGO_DEBUG=False`, `DJANGO_ALLOWED_HOSTS`.

## Security

- Never commit `.env` files
- Always rotate leaked keys immediately
- See [SECURITY.md](SECURITY.md) for vulnerability reporting

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT License](LICENSE)
