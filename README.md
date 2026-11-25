# DIGITAL MUSEUM

## Призначення застосунку

DIGITAL MUSEUM — інтерактивний цифровий музей, який дозволяє переглядати, додавати, видаляти та шукати експонати, а також додавати їх до обраного.

Дані зберігаються за допомогою localStorage.

## Використані технології

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Docker
- Nginx

## Структура Dockerfile

- Dockerfile.basic — базова конфігурація.
- Dockerfile.optimized — оптимізована конфігурація.
- Dockerfile — фінальна конфігурація з додатковими оптимізаціями.
- .dockerignore — виключення зайвих файлів із контексту складання.
- nginx.conf — конфігурація вебсервера.

## Multi-stage build

На першому етапі використовується образ node:22-alpine, встановлюються залежності та виконується збірка React-застосунку.

На другому етапі використовується nginx:alpine, до якого копіюються готові файли з директорії dist.

Це дозволяє зменшити розмір фінального образу.

## Додаткові оптимізації

- npm ci — встановлення залежностей відповідно до package-lock.json.
- BuildKit cache mounts — кешування завантажених npm-пакетів між збірками.

## Порівняння розмірів образів

| Образ         | Розмір |
| ------------- | ------ |
| Базовий       | 476    |
| Оптимізований | 28.9   |

## Docker Hub

https://hub.docker.com/r/young77tash/digital-museum

## Завантаження образів

```bash
docker pull young77tash/digital-museum:1.0
docker pull young77tash/digital-museum:2.0
```

## Запуск застосунку

Версія 1.0:

```bash
docker run -d -p 8081:80 young77tash/digital-museum:1.0
```

Версія 2.0:

```bash
docker run -d -p 8082:80 young77tash/digital-museum:2.0
```

Адреси застосунку:

- http://localhost:8081
- http://localhost:8082

## Доступні версії

- 1.0 — початкова версія застосунку.
- 2.0 — додано відображення загальної кількості експонатів.
