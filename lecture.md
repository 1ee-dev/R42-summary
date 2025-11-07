
# Project: Lecture Summaries

This project is a collection of lecture summaries, presented as simple HTML files. Each HTML file represents a single lecture and is structured in a consistent way to make it easy to read and navigate.

## Lecture Structure

Each lecture HTML file follows a specific template to ensure consistency. Here is a breakdown of the structure:

### 1. Lecture Title

The lecture starts with a main title, which is an `<h3>` element. The title is wrapped in a `<bdi>` tag to support bidirectional text, which is useful for multilingual content.

```html
<h3><bdi>Lecture Title</bdi></h3>
```

### 2. Summary

After the title, there is a "Summary" section. This section provides a brief overview of the lecture's content. It consists of a heading and a paragraph.

```html
<h3><bdi>Summary</bdi></h3>
<p>
  This is a summary of the lecture...
</p>
```

### 3. Key Points

The "Key Points" section is the core of the lecture summary. It is an ordered list (`<ol>`) where each list item (`<li>`) represents a key concept from the lecture.

Each key point has:
*   A sub-heading (`<h4>`) with a `data-order` attribute to number the points and a `<bdi>` tag.
*   A paragraph (`<p>`) that explains the key point in more detail.
*   Optionally, a `<pre>` tag can be included to display code snippets.

```html
<h3><bdi>Key Points</bdi></h3>
<ol>
  <li>
    <h4 data-order="1"><bdi>Key Point Title</bdi></h4>
    <p>
      Explanation of the key point.
    </p>
    <pre><bdi>code example</bdi></pre>
  </li>
  ...
</ol>
```

### 4. Notes

The "Notes" section is an unordered list (`<ul>`) that contains additional tips, reminders, or interesting points related to the lecture. Each list item (`<li>`) is a single note, often starting with an emoji.

```html
<h3><bdi>Notes</bdi></h3>
<ul>
  <li>💡 A helpful tip.</li>
  <li>🧠 A reminder.</li>
  ...
</ul>
```

## How to Create a New Lecture

To create a new lecture, simply create a new HTML file in the `content` directory (e.g., `lec33.html`) and follow the template described above. You can use the existing lecture files as a reference.
