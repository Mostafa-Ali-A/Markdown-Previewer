import "./App.css";
import React from "react";
import { marked } from "marked";
import Prism from "prismjs";

function App() {
  const ed="col-sm-12-ed col-md-12-ed col-lg-12-ed";
  const pr="col-sm-12-pr col-md-12-pr col-lg-12-pr";

  const clearTextarea = () => {
    setText("");
  };

  const [text, setText] = React.useState (Previewer);

  return (
    <div className="container">
      <div className="editorWrap">
        <div className="toolbar">
          <i class="fa fa-free-code-camp" aria-hidden="true">
          </i>
          <h1 className="h">Editor
          </h1>
          <button className="clearBtn" onClick={clearTextarea}>Clear
          </button>
        </div>
        <textarea id="editor" className={ed} name="text" value={text} onChange={(e) => setText(e.target.value) } placeholder="Enter Your Markdown" />
      </div>
        <div className="previewWrap">
          <div className="toolbar">
          <i class="fa fa-free-code-camp" aria-hidden="true">
            </i>
            <h1 className="h">Previewer
            </h1>
          </div>
        <Preview markdown={text} />
      </div>
    </div>
    );

    function Preview({markdown}){
    return(
      <div id="preview" className={pr}
      dangerouslySetInnerHTML={{__html: marked(text, {
        breaks: true,
        gfm: true,
        highlight: function (code) {
          return Prism.highlight(code, Prism.languages.javascript, "javascript");
        }
        })}}
      ></div>
    );
    }
  }

const Previewer = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;
