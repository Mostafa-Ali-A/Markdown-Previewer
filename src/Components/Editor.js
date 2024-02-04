import './Editor.css';
import React, { useState } from 'react';
import Preview from './Preview';
import Previewer from './Store/Previewer';

export default function Editor() {
	const [text, setText] = useState(Previewer);
	const [editorMaximized, setEditorMaximized] = useState(false);
	const [previewMaximized, setPreviewMaximized] = useState(false);

	const wrap = editorMaximized
		? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
		: previewMaximized
		? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
		: ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

	const handleEditorMaximized = () => {
		if (!previewMaximized) setEditorMaximized(!editorMaximized);
	};
	const handlePreviewMaximized = () => {
		if (!editorMaximized) setPreviewMaximized(!previewMaximized);
	};

	/* On Clicking Buttons Events */

	const clearTextarea = () => {
		setText('');
	};

	return (
		<>
			<div
				className={wrap[0]}
				id='editorWrap'>
				<div className='toolbar'>
					<i
						className='fa fa-free-code-camp'
						aria-hidden='true'
					/>
					<span className='head'>Editor</span>
					<button
						className='clearBtn'
						onClick={clearTextarea}>
						Clear
					</button>
					<i
						onClick={handleEditorMaximized}
						className={wrap[2]}
					/>
				</div>
				<textarea
					id='editor'
					name='text'
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='Enter Your Markdown'
				/>
			</div>
			<div
				className={wrap[1]}
				id='previewWrap'>
				<div className='toolbar'>
					<i
						className='fa fa-free-code-camp'
						aria-hidden='true'
					/>
					<span className='head'>Previewer</span>
					<i
						onClick={handlePreviewMaximized}
						className={wrap[2]}
					/>
				</div>
				<Preview text={text} />
			</div>
		</>
	);
}
