This project is a To-Do application built with Vite, React, and TypeScript, featuring a clean and responsive user interface. The app provides full CRUD (Create, Read, Update, Delete) functionality, allowing users to manage their tasks efficiently. Key functionalities include:

- **Add New Tasks:** Users can add tasks to their to-do list with a user-friendly input form.  
- **Edit Tasks:** Tasks can be updated with ease, allowing users to modify the task name or details.  
- **Delete Tasks:** Users can delete tasks that are no longer needed.  
- **Mark Tasks as Done:** The app includes the ability to mark tasks as completed.  
- **React Toastify Notifications:** Toast notifications are integrated to provide real-time feedback on user actions, such as adding, updating, or deleting tasks.  
- **Responsive UI:** The interface is fully responsive, ensuring a smooth experience across different devices (desktops, tablets, and mobile).  

## Video

https://github.com/user-attachments/assets/5fad73fb-365e-419b-8dd3-67e9f3206c9f

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
