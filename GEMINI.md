# Project Overview

This project is a simple, static website designed to display summaries of lectures. The main technologies used are HTML, CSS, and JavaScript. The architecture is straightforward: a single `index.html` file serves as the main entry point, and the lecture content is loaded dynamically from separate HTML files stored in the `content` directory. The site is styled using CSS, with a responsive design that adapts to different screen sizes. JavaScript is used for content loading and handling user interactions like theme toggling and sidebar navigation.

# Building and Running

This is a static website, so there is no build process. To run the project, simply open the `index.html` file in a web browser.

# Development Conventions

## Adding a New Lecture

To add a new lecture to the website, follow these steps:

1.  **Create a new HTML file** in the `content` directory. The file should be named following the pattern `lecXX.html`, where `XX` is the lecture number.
2.  **Add the lecture to the `lectures` array** in `js/content-loader.js`. The entry should be an object with the following properties:
    *   `id`: The ID of the lecture (e.g., `lecXX`).
    *   `title`: The title of the lecture (e.g., `Lecture XX`).
    *   `group`: The group the lecture belongs to (e.g., `HTML & CSS`).

## Lecture File Structure

Each lecture file in the `content` directory should follow this structure, and the content should primarily be in Arabic:

```html
<h3><bdi>Lecture Title</bdi></h3>
<h3><bdi>Summary</bdi></h3>
<p>
  A summary of the lecture.
</p>

<h3><bdi>Key Points</bdi></h3>
<ol>
  <li>
    <h4 data-order="1">Key Point 1</h4>
    <p>Details about the first key point.</p>
  </li>
  <li>
    <h4 data-order="2">Key Point 2</h4>
    <p>Details about the second key point.</p>
  </li>
</ol>

<h3><bdi>Notes</bdi></h3>
<ul>
  <li>An important note.</li>
  <li>Another important note.</li>
</ul>
```

## Generating Lecture Files

A utility script, `content/generate-files.js`, is available to generate placeholder files for new lectures. To use it, run the following command in your terminal:

```bash
node content/generate-files.js
```
