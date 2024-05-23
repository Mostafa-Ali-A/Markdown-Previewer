import './Preview.css';
import React from 'react';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
//import hljs from 'highlight.js';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { mangle } from 'marked-mangle';
import Prism from 'prismjs';

export default function Preview({ text }) {
	const options = {
		breaks: true,
		gfm: true,
	};

	const marked = new Marked(
		gfmHeadingId(options),
		mangle(),
		markedHighlight({
			langPrefix: 'prismjs language-',
			highlight(code, lang) {
				/*const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;*/
				return Prism.highlight(code, Prism.languages.javascript, 'javascript');
			},
		}),
	);

	return (
		<article
			id='preview'
			dangerouslySetInnerHTML={{
				__html: marked.parse(text),
			}}></article>
	);
}
