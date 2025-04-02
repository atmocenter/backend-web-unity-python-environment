# 🌐 PACE Website Backend Server

This is the backend server for the **PACE website** project. It is built using **Node.js** and **Express**, and is responsible for serving the static frontend files (including Unity WebGL builds) and specific build assets via custom API routes.

## 📁 Folder Structure

```
server/
├── build/              # Static frontend build files from react project seen here (link to repo) and Unity build assets
│   └── Build/          # Unity WebGL-specific files like data, wasm, framework, loader
├── index.js            # Main server entry point
```

## 🚀 Features

- Serves static files from the `build/` directory.
- Hosts Unity WebGL build files via dedicated endpoints:
  - `/getdata` – Serves Unity `.data` file
  - `/getframe` – Serves Unity `framework.js`
  - `/getloader` – Serves Unity `loader.js`
  - `/getwasm` – Serves Unity `.wasm` file
- Handles root `/` requests by sending the main `index.html`
- CORS enabled for all origins

## 🌍 API Endpoints

| Route         | Description                        | Content-Type               |
|---------------|------------------------------------|----------------------------|
| `/`           | Serves the main frontend page      | `text/html`                |
| `/getdata`    | Serves the Unity `.data` file      | `application/octet-stream` |
| `/getframe`   | Serves Unity framework script      | `text/html`                |
| `/getloader`  | Serves Unity loader script         | `text/html`                |
| `/getwasm`    | Serves Unity WebAssembly binary    | `application/wasm`         |

> ⚠️ Make sure to replace the filenames inside the `sendFile` calls with the actual filenames from your Unity `Build/` folder.

## 🔧 Setup Instructions

1. Install dependencies (if any):
   ```bash
   npm install
   ```

2. Place your compiled frontend (React, HTML, etc.) and Unity WebGL build files into the `build/` directory.

3. Run the server:
   ```bash
   node index.js
   ```

4. Access the server at:
   ```
   http://localhost:3333/
   ```

## 🛡️ CORS

CORS is enabled for all origins (`origin: '*'`). Adjust as necessary for production environments.

## 🧑‍💻 License

MIT License. Feel free to use and modify.
