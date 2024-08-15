import './Editor.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLeftAndUpRightToCenter, faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import Preview from './Preview';
import Previewer from './Store/Previewer';

export default function Editor() {
	const [text, setText] = useState(Previewer);
	const [editorMaximized, setEditorMaximized] = useState(false);
	const [previewMaximized, setPreviewMaximized] = useState(false);

	const handleEditorMaximized = () => {
		setEditorMaximized(!editorMaximized);
	};
	const handlePreviewMaximized = () => {
		setPreviewMaximized(!previewMaximized);
	};

	/*const handleMaximized = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		if (e.currentTarget.previousElementSibling.className === 'clearBtn') {
			setEditorMaximized(!editorMaximized);
		} else if (e.currentTarget.previousElementSibling.className === 'head') {
			setPreviewMaximized(!previewMaximized);
		}
	};*/

	const handleMaximized = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		if (e.currentTarget === document.getElementsByClassName('fa-maximize')[0]) {
			setEditorMaximized(!editorMaximized);
		} else if (e.currentTarget === document.getElementsByClassName('fa-maximize')[1]) {
			setPreviewMaximized(!previewMaximized);
		}
	};

	const wrap = editorMaximized
		? [
				'editorWrap maximized',
				'previewWrap hide',
				<FontAwesomeIcon
					icon={faDownLeftAndUpRightToCenter}
					onClick={handleEditorMaximized}
				/>,
		  ]
		: previewMaximized
		? [
				'editorWrap hide',
				'previewWrap maximized',
				<FontAwesomeIcon
					icon={faDownLeftAndUpRightToCenter}
					onClick={handlePreviewMaximized}
				/>,
		  ]
		: [
				'editorWrap',
				'previewWrap',
				<FontAwesomeIcon
					icon={faMaximize}
					onClick={handleMaximized}
				/>,
		  ];

	/* On Clicking Buttons Events */

	const clearTextarea = () => {
		setText('');
	};

	return (
		<>
			<section
				className={wrap[0] as string}
				id='editorWrap'>
				<div className='toolbar'>
					<FontAwesomeIcon icon={faFreeCodeCamp} />
					<h6 className='head'>Editor</h6>
					<button
						title='Clear'
						className='clearBtn'
						onClick={clearTextarea}>
						Clear
					</button>
					{wrap[2]}
				</div>
				<textarea
					id='editor'
					name='text'
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='Enter Your Markdown'
				/>
			</section>
			<section
				className={wrap[1] as string}
				id='previewWrap'>
				<div className='toolbar'>
					<FontAwesomeIcon icon={faFreeCodeCamp} />
					<h6 className='head'>Previewer</h6>
					{wrap[2]}
				</div>
				<Preview text={text} />
			</section>
		</>
	);
}
