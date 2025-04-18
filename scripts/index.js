// Initialize Monaco Editor
require.config({
    paths: {
        'vs': 'https://unpkg.com/monaco-editor@0.39.0/min/vs'
    }
});

require(['vs/editor/editor.main'], function () {
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: ``,
        language: 'html',
        theme: 'MyCustomtheme'
    });

    // Define custom theme
    monaco.editor.defineTheme('myCustomTheme', {
        base: 'vs-dark', // or 'vs', 'hc-black'
        inherit: true, // set to false if you don’t want to inherit anything
        rules: [
          { token: '', foreground: 'F8F8F8', background: '1E1E1E' },
          { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
          { token: 'string', foreground: 'CE9178' },
          { token: 'keyword', foreground: '569CD6', fontStyle: 'bold' },
          // Add more token styles here...
        ],
        colors: {
          'editor.background': '#1E1E1E',
          'editor.foreground': '#F8F8F8',
          'editor.lineHighlightBackground': '#2B2B2B',
          'editorCursor.foreground': '#7C56C1',
          'editorIndentGuide.background': '#404040',
          'editor.selectionBackground': '#264F78',
          // Add more editor colors here...
        }
      });
      
      monaco.editor.setTheme('myCustomTheme');

    // Add ! abbreviation trigger
    editor.onDidChangeModelContent(() => {
        const model = editor.getModel();
        const content = model.getValue();

        if (content.trim() === "!") {
            const html5Template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>`;

            // Set content and place cursor at "Document"
            model.setValue(html5Template);

            const index = html5Template.indexOf("Document");
            const position = model.getPositionAt(index);

            editor.setPosition(position);
            editor.setSelection({
                startLineNumber: position.lineNumber,
                startColumn: position.column,
                endLineNumber: position.lineNumber,
                endColumn: position.column + "Document".length
            });

            editor.focus();
        }
    });
});
