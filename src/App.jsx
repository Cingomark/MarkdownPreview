import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const markdownDefault = `# Main Heading (H1)

## Subheading (H2)

This is a link to [OpenAI's website](https://www.openai.com).

Here is some inline code: \`console.log("Hello, World!");\`

### Code Block:

\`\`\`
// JavaScript code example
function greet() {
    console.log("Hello, World!");
}
greet();
\`\`\`

### List Item:

- This is a list item

### Blockquote:

> "This is a blockquote. Markdown makes it easy to format text."

### Image:

![Alt text for image](https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png)

### Bold Text:

**This text is bolded.**`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: markdownDefault,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePreview = this.updatePreview.bind(this);
  }
  handleChange = (event) => {
    this.setState(
      {
        markdown: event.target.value,
      },
      () => {
        this.updatePreview();
      }
    );
  };
  updatePreview() {
    document.getElementById("preview").innerHTML = `${marked.parse(
      this.state.markdown
    )}`;
  }
  componentDidMount() {
    this.updatePreview();
  }
  render() {
    return (
      <main>
        <span className="editorSpan">
          <h2 className="heading">Editor</h2>
          <textarea
            id="editor"
            value={this.state.markdown}
            onChange={this.handleChange}
          ></textarea>
        </span>
        <span className="previewSpan">
          <h2 className="heading">Preview</h2>
          <section id="preview"></section>
        </span>
      </main>
    );
  }
}

export default App;
