import './index.css';
import React, {useState} from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';
/*JS Here*/
function App() {

  const clearTextarea = () => {
    setText('');
  };

  const [text, setText] = useState (Previewer);

  const [editorMaximized, setEditorMaximized] = useState (false);
  const [previewMaximized, setPreviewMaximized] = useState (false);

  const wrap = editorMaximized
      ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
      : previewMaximized
      ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
      : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

      function handleEditorMaximized() {
        if (!previewMaximized) setEditorMaximized(!editorMaximized);
    }
    function handlePreviewMaximized() {
        if (!editorMaximized) setPreviewMaximized(!previewMaximized);
    }
    /*HTML Here*/
  return (
    <div className='container'>
      <div className={wrap[0]} id='editorWrap'>
        <div className='toolbar'>
          <i className='fa fa-free-code-camp' aria-hidden='true'/>
          <span className='head' >Editor
          </span>
          <button className='clearBtn' onClick={clearTextarea}>Clear
          </button>
          <i onClick={handleEditorMaximized} className={wrap[2]}/>
        </div>
        <textarea id='editor' name='text' value={text} onChange={(e) => setText(e.target.value) } placeholder='Enter Your Markdown' />
      </div>
      <div className={wrap[1]} id='previewWrap'>
        <div className='toolbar'>
          <i className='fa fa-free-code-camp' aria-hidden='true'/>
          <span className='head'>Previewer
          </span>
          <i onClick={handlePreviewMaximized} className={wrap[2]}/>
        </div>
        <Preview markdown={text} />
      </div>
    </div>
    );

    function Preview({markdown}){
    return(
      <div id='preview'
      dangerouslySetInnerHTML={{__html: marked(text, {
        breaks: true,
        gfm: true,
        highlight: function (code) {
          return Prism.highlight(code, Prism.languages.javascript, 'javascript');
        }
        })}}
      />
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
