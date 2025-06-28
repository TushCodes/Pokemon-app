# Random Pokémon Generator

Hello and welcome to the **Random Pokémon Generator**, a simple web app that fetches and displays a random Pokémon using the PokéAPI. Perfect for all Pokémon enthusiasts in India!

## Features
- **Random Pokémon**: Instantly shows the Pokémon’s name, sprite image, and type(s).
- **Loader Spinner**: Smooth spinner animation while data is being fetched.
- **Clear Data**: One click to remove previously shown details.
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes.

## Project Structure
```
Pokemon-app/
├── index.html         # Main HTML page
├── styles.css         # Styling for layout, loader, and card design
├── script.js          # PokéAPI fetch logic and UI updates
└── README.md          # Overall project documentation
```

## Local Development
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Pokemon-app
   ```
2. **Start a local HTTP server**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   ```
3. **Open in browser**: Navigate to `http://localhost:8000`
4. **Try it out**: Click **Generate Random Pokémon**, then **Clear Data** as you please.
