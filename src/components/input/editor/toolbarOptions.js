export default [
  [{ 'font': [] }],
  [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons

  [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
  [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],

  [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
  [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
  [{ 'direction': 'rtl' }], // text direction

  [{ 'header': 1 }, { 'header': 2 }], // custom button values

  [{ 'header': [1, 2, 3, 4, false] }],
  ['blockquote'],
  ['code', 'code-block'],
  ['link', 'image', 'video', 'clean'], // remove formatting button
  ['emoji']
]
