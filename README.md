# Currency Converter

A simple and modern currency converter web app built with React and Tailwind CSS, powered by Vite. Instantly convert between currencies using real-time exchange rates.

## Features
- Convert between any two currencies
- Real-time exchange rates via public API
- Swap currencies with one click
- Responsive and clean UI with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository or download the source code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Project Structure
```
├── public/
├── src/
│   ├── components/
│   │   ├── InputBox.jsx
│   │   └── index.js
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization
- To change the default currencies, edit the `from` and `to` state in `App.jsx`.
- To use a different exchange rate API, update the fetch URL in `useCurrencyInfo.js`.

## License
This project is open source and available under the [MIT License](LICENSE).
