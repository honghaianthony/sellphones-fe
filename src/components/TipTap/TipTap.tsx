import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { Icon } from '@iconify/react';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';

const MenuBar = ({ editor }: any) => {
	if (!editor) {
		return null;
	}
	const addImage = () => {
		const url = window.prompt('URL');

		if (url) {
			editor.chain().focus().setImage({ src: url }).run();
		}
	};
	return (
		<>
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				className={editor.isActive('bold') ? 'is-active mr-3' : 'mr-3'}
				type="button"
			>
				<Icon icon="ant-design:bold-outlined" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				className={editor.isActive('italic') ? 'is-active mr-3' : 'mr-3'}
				type="button"
			>
				<Icon icon="ant-design:italic-outlined" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleUnderline().run()}
				className={editor.isActive('underline') ? 'is-active mr-3' : 'mr-3'}
				type="button"
			>
				<Icon icon="ant-design:underline-outlined" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleStrike().run()}
				className={editor.isActive('strike') ? 'is-active mr-3' : 'mr-3'}
				type="button"
			>
				<Icon icon="ant-design:strikethrough-outlined" />
			</button>
			<button
				onClick={() => editor.chain().focus().setTextAlign('left').run()}
				className={
					editor.isActive({ textAlign: 'left' }) ? 'is-active mr-3' : 'mr-3'
				}
				type="button"
			>
				<Icon icon="akar-icons:text-align-left" />
			</button>
			<button
				onClick={() => editor.chain().focus().setTextAlign('center').run()}
				className={
					editor.isActive({ textAlign: 'center' }) ? 'is-active mr-3' : 'mr-3'
				}
				type="button"
			>
				<Icon icon="akar-icons:text-align-center" />
			</button>
			<button
				onClick={() => editor.chain().focus().setTextAlign('right').run()}
				className={
					editor.isActive({ textAlign: 'right' }) ? 'is-active mr-3' : 'mr-3'
				}
				type="button"
			>
				<Icon icon="akar-icons:text-align-right" />
			</button>
			<button
				onClick={() => editor.chain().focus().setTextAlign('justify').run()}
				className={
					editor.isActive({ textAlign: 'justify' }) ? 'is-active mr-3' : 'mr-3'
				}
				type="button"
			>
				<Icon icon="fluent:text-align-justify-20-filled" />
			</button>
			<button onClick={addImage} type="button" className="mr-3">
				<Icon icon="akar-icons:image" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCode().run()}
				className={editor.isActive('code') ? 'is-active mr-3' : 'mr-3'}
				type="button"
			>
				<Icon icon="ant-design:code-outlined" />
			</button>

			<button
				onClick={() => editor.chain().focus().setParagraph().run()}
				className={editor.isActive('paragraph') ? 'is-active mr-3' : 'mr-3'}
				type="button"
			>
				<Icon icon="bi:paragraph" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				className={
					editor.isActive('heading', { level: 1 }) ? 'is-active mr-3' : 'mr-3'
				}
				type="button"
			>
				<Icon icon="ci:heading-h1" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				className={
					editor.isActive('heading', { level: 2 }) ? 'is-active mr-3' : 'mr-3'
				}
				type="button"
			>
				<Icon icon="ci:heading-h2" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				className={
					editor.isActive('heading', { level: 3 }) ? 'is-active mr-3' : 'mr-3'
				}
				type="button"
			>
				<Icon icon="ci:heading-h3" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				className={
					editor.isActive('heading', { level: 4 }) ? 'is-active mr-3' : 'mr-3'
				}
				type="button"
			>
				<Icon icon="ci:heading-h4" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
				className={
					editor.isActive('heading', { level: 5 }) ? 'is-active mr-3' : 'mr-3'
				}
				type="button"
			>
				<Icon icon="ci:heading-h5" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
				className={
					editor.isActive('heading', { level: 6 }) ? 'is-active mr-3' : 'mr-3'
				}
				type="button"
			>
				<Icon icon="ci:heading-h6" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={editor.isActive('bulletList') ? 'is-active mr-3' : 'mr-3'}
				type="button"
			>
				<Icon icon="clarity:bullet-list-line" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={editor.isActive('orderedList') ? 'is-active mr-3' : 'mr-3'}
				type="button"
			>
				<Icon icon="fe:list-order" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				className={editor.isActive('codeBlock') ? 'is-active mr-3' : 'mr-3'}
				type="button"
			>
				<Icon icon="bx:code-block" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				className={editor.isActive('blockquote') ? 'is-active mr-3' : 'mr-3'}
				type="button"
			>
				<Icon icon="clarity:block-quote-line" />
			</button>
			<button
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
				className="mr-3"
				type="button"
			>
				<Icon icon="codicon:horizontal-rule" />
			</button>
			<button
				onClick={() => editor.chain().focus().setHardBreak().run()}
				className="mr-3"
				type="button"
			>
				<Icon icon="bi:file-break" />
			</button>
			<button
				onClick={() => editor.chain().focus().undo().run()}
				className="mr-3"
				type="button"
			>
				<Icon icon="ant-design:undo-outlined" />
			</button>
			<button
				onClick={() => editor.chain().focus().redo().run()}
				className="mr-3"
				type="button"
			>
				<Icon icon="ant-design:redo-outlined" />
			</button>
		</>
	);
};

const Tiptap = ({ setContent, content }: any) => {
	console.log('cont', `${content}`);
	const editor: any = useEditor({
		extensions: [
			StarterKit,
			Underline,
			TextAlign.configure({
				types: ['heading', 'paragraph'],
			}),
			Image,
		],
		content: `${content}`,
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			setContent(html);
		},
	});

	return (
		<div className="border rounded border-solid border-slate-400 px-3 py-3">
			<div className="mb-3">
				<MenuBar editor={editor} />
			</div>

			<div className="border rounded border-solid border-slate-300">
				<EditorContent editor={editor} className="mx-5 my-5" />
			</div>
		</div>
	);
};

export default Tiptap;
