/** @type {import('tailwindcss').Config} */
export default {
  // agregamos archivos o carpetas q usaran tailwind.css
  // cuando hacemos modificaciones en un archivo de configuracion se debe reiniciar el servidor
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}

