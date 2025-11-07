# Project Overview

This project is a simple, static website designed to display summaries of lectures. The main technologies used are HTML, CSS, and JavaScript. The architecture is straightforward: a single `index.html` file serves as the main entry point, and the lecture content is loaded dynamically from separate HTML files stored in the `content` directory. The site is styled using CSS, with a responsive design that adapts to different screen sizes. JavaScript is used for content loading and handling user interactions like theme toggling and sidebar navigation.

# Building and Running

This is a static website, so there is no build process. To run the project, simply open the `index.html` file in a web browser.

# Development Conventions

## Language Convention

Always use the Egyptian accent when writing in Arabic.

## Lecture Template

This is the template to be used for all lectures. It is important to follow this structure to maintain consistency across the website.

- The `<bdi>` tag is used to wrap all Arabic text to ensure proper rendering.
- The `<code>` tag is not used. Instead, class names and code snippets are written directly in the text.
- The Font Awesome arrow `<i class="fa-solid fa-arrow-left"></i>` is used to separate terms from their explanations.

```html
<h3>
  <bdi>Lecture Title</bdi>
</h3>
<h3><bdi>Summary</bdi></h3>
<p>
  <bdi>A summary of the lecture.</bdi>
</p>

<h3><bdi>Key Points</bdi></h3>
<ol>
  <li>
    <h4 data-order="1"><bdi>Key Point 1</bdi></h4>
    <p><bdi>Details about the first key point.</bdi></p>
    <ul>
      <li><bdi>Term</bdi> <i class="fa-solid fa-arrow-left"></i> <bdi>Explanation</bdi></li>
    </ul>
    <pre><bdi>Code example</bdi></pre>
  </li>
</ol>

<h3><bdi>Notes</bdi></h3>
<ul>
  <li><bdi>An important note.</bdi></li>
</ul>
```

## Adding a New Lecture

To add a new lecture to the website, follow these steps:

1.  **Create a new HTML file** in the `content` directory. The file should be named following the pattern `lecXX.html`, where `XX` is the lecture number.
2.  **Add the lecture to the `lectures` array** in `js/content-loader.js`. The entry should be an object with the following properties:
    *   `id`: The ID of the lecture (e.g., `lecXX`).
    *   `title`: The title of the lecture (e.g., `Lecture XX`).
    *   `group`: The group the lecture belongs to (e.g., `HTML & CSS`).

## Generating Lecture Files

A utility script, `content/generate-files.js`, is available to generate placeholder files for new lectures. To use it, run the following command in your terminal:

```bash
node content/generate-files.js
```
