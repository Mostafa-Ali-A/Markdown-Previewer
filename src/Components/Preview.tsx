import './Preview.css';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
//import hljs from 'highlight.js';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { mangle } from 'marked-mangle';
import { highlight, languages } from 'prismjs';

export default function Preview({ text }: { text: string }) {
	const options = {
		prefix: 'my-prefix-',
	};

	const marked = new Marked(
		gfmHeadingId(options),
		mangle(),
		markedHighlight({
			langPrefix: 'prismjs language-',
			highlight(code, _lang) {
				/*const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;*/
				return highlight(code, languages.javascript, 'javascript');
			},
		}),
	);

	return (
		<article
			id='preview'
			dangerouslySetInnerHTML={{
				__html: marked.parse(text),
			}}
		/>
	);
}
