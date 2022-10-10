import "./App.css";
import React/*, { useState, useEffect }*/ from "react";
/*import ReactDOM from "react-dom/client";*/
import { marked } from "marked";
import Prism from "prismjs";
/*import { render } from "@testing-library/react";*/

/*import { useSelector, useDispatch } from "react-redux";*/


// Allows line breaks with return button
/*marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  }
  }
);*/
// Set a function to be used by the marked Renderer, the bit that takes markdown and translates it to html.
/*const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return <div target="_blank" href="$href">${text}</div>;
}*/
function App() {
  const ed="col-sm-12-ed col-md-12-ed col-lg-12-ed";
  const pr="col-sm-12-pr col-md-12-pr col-lg-12-pr";

  const clearTextarea = () => {
    setText("");
  };

  const [text, setText] = React.useState (Previewer);

  /*React.useEffect(() => {
		setText(Previewer);
	}, []);*/

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
          <i class="fa fa-arrows-alt" aria-hidden="true">
          <i class="fa fa-compress" aria-hidden="true">
          </i>
          </i>
        </div>
        <textarea id="editor" className={ed} name="text" value={text} onChange={(e) => setText(e.target.value) } placeholder="Enter Your Markdown" />
      </div>
        <div className="previewWrap">
          <div className="toolbar">
          <i class="fa fa-free-code-camp" aria-hidden="true">
            </i>
            <h1 className="h">Previewer
            </h1>
            <i class="fa fa-arrows-alt" aria-hidden="true">
            <i class="fa fa-compress" aria-hidden="true">
            </i>
            </i>
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
        }/*,  { renderer: renderer }*/)}}
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
