import './Preview.css';
import React from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';

export default function Preview({ text }) {
	return (
		<div
			id='preview'
			dangerouslySetInnerHTML={{
				__html: marked(text, {
					breaks: true,
					gfm: true,
					highlight: function (code) {
						return Prism.highlight(code, Prism.languages.javascript, 'javascript');
					},
				}),
			}}
		/>
	);
}
