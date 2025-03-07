# Franc Browser Bundle

This project provides a browser-compatible UMD bundle of the [franc](https://github.com/wooorm/franc) language detection library, which is natively available only as an ESM module.

## What is Franc?

Franc is a natural language detection library that can detect the language of text in over 180+ languages. It's incredibly useful for applications that need to automatically detect the language of user input.

## Installation

### npm

```bash
npm install @dardanisufi95/franc-bundle
```

### CDN (unpkg)

```html
<script src="https://unpkg.com/@dardanisufi95/franc-bundle@1.0.0/dist/franc.min.js"></script>
```

## Usage

### Direct Script Tag

Include the bundle in your HTML:

```html
<script src="node_modules/@dardanisufi95/franc-bundle/dist/franc.min.js"></script>
<!-- Or use the CDN version -->
<script src="https://unpkg.com/@dardanisufi95/franc-bundle@1.0.0/dist/franc.min.js"></script>
```

Then you can use the franc function:

```javascript
// Detect the language
const languageCode = franc('The quick brown fox jumps over the lazy dog.');
console.log(languageCode); // 'eng' for English
```

### From Node.js (CommonJS)

```javascript
const franc = require('@dardanisufi95/franc-bundle');

// Detect the language
const languageCode = franc('The quick brown fox jumps over the lazy dog.');
console.log(languageCode); // 'eng' for English
```

### Demo

Open `demo.html` in your browser to see a working example of the franc library in action.

## Language Detection Examples

```javascript
// English
franc('The quick brown fox jumps over the lazy dog.'); // 'eng'

// Spanish
franc('El zorro marrón rápido salta sobre el perro perezoso.'); // 'spa'

// French
franc('Le renard brun rapide saute par-dessus le chien paresseux.'); // 'fra'

// German
franc('Der schnelle braune Fuchs springt über den faulen Hund.'); // 'deu'
```

## Building from Source

1. Clone this repository
2. Install dependencies: `npm install`
3. Build the bundle: `npm run build`
4. The UMD bundle will be available in the `dist` directory

## Browser Compatibility

This UMD bundle works in all modern browsers (Chrome, Firefox, Safari, Edge) as well as IE11 (with appropriate polyfills if using modern JavaScript features in your code).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

This is a repackaging of the excellent [franc](https://github.com/wooorm/franc) library by Titus Wormer. 