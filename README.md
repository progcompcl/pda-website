# CIPC Website

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npx astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `npx astro -- --help`  | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build).

---
---

## ⚠️ Consideraciones

### Agregar paquetes al proyecto

Después de agregar un paquete al `package.json`, se debe ejecutar `pnpm install` para actualizar el archivo `pnpm-lock.yaml`. Este archivo es utilizado para instalar los paquetes al momento de hacer _build_ y _deploy_ de la aplicación en las GitHubs Actions.
