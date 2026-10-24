# picture-to-color-ASCII-art
A browser-based tool that transforms pictures into colorful ASCII art using JavaScript, preserving pixel colors through character mapping.

 Live Website: https://sanjananagulapalli.github.io/picture-to-color-ASCII-art/

About the Project

Picture to Color ASCII Art is a web development project that converts an image into artwork made from text characters.

ASCII art is a technique that uses characters such as "@", "#", "*", "+", and "." to represent shapes, shades, and visual details. Instead of displaying an image only as ordinary pixels, an ASCII art converter uses characters to recreate its appearance.

This project combines text-based art with colour to create a colourful representation of an uploaded picture.

The website runs in a browser and uses JavaScript for its interactive functionality.

Technologies Used

HTML

HTML (HyperText Markup Language) defines the structure of the webpage. It provides elements such as headings, buttons, image-upload controls, and areas for displaying content.

CSS

CSS (Cascading Style Sheets) controls the visual appearance of the webpage, including colours, spacing, layout, typography, and styling.

JavaScript

JavaScript adds functionality to the website. It can respond to user actions, process image information, map image details to text characters, and display the generated artwork.

Browser APIs

Web browsers provide APIs that allow JavaScript to work with files, images, and graphics. Depending on the implementation, APIs such as the File API and Canvas API can help load an image and access its pixel data.

How Does It Work?

The general process behind image-to-ASCII conversion involves the following steps:

1. Image selection: The user chooses a picture from their device.
2. Image processing: The browser loads the picture so that its visual information can be accessed.
3. Pixel analysis: The image can be represented as a grid of pixels, with each pixel containing colour information.
4. Character mapping: Image details, such as brightness, can be mapped to text characters of different visual densities.
5. Colour mapping: The original pixel colours can be used to colour the corresponding characters.
6. Output display: The characters are arranged to create a text-based representation of the original image.

The result is colourful ASCII art that resembles the input picture.

Project Files

- "index.html" — Contains the webpage structure and may include the CSS styling.
- "script.js" — Contains the JavaScript functionality for the interactive tool and image conversion.
- "README.md" — Explains the project, technologies, usage, and setup instructions.

How to Use

1. Open the "live website" (https://sanjananagulapalli.github.io/picture-to-colour-ASCII-art/).
2. Select a picture using the image-upload control.
3. Use the available controls to generate the ASCII artwork.
4. View the colourful character-based output.

Run Locally

To explore the project on your own computer:

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open "index.html" in a browser or use a local development server if needed.
4. Experiment with the code and observe how the website behaves.

To clone the repository using Git, run:

git clone https://github.com/sanjananagulapalli/picture-to-colour-ascii-art.git
cd picture-to-colour-ascii-art

What I Learned

This project provided an opportunity to practise:

- Building a webpage using HTML.
- Styling a user interface with CSS.
- Using JavaScript to make a webpage interactive.
- Exploring how images can be represented using text characters.
- Understanding the basic concepts of pixel colours and character mapping.
- Publishing a website using GitHub Pages.
- Documenting and sharing a project through GitHub.

Future Improvements

Possible improvements for future versions include:

- Adjustable character density and output size.
- Different ASCII character sets.
- Custom colour and monochrome modes.
- Download options for the generated artwork.
- More control over image resolution and appearance.

These are potential enhancements rather than claims about features already implemented.

Deployment

This project is hosted using GitHub Pages. The published website allows visitors to use the tool directly in their browsers, while the GitHub repository provides access to the source code.

---

Created as a hands-on project exploring web development and creative coding.
