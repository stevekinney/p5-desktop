import React from 'react'
import { render } from 'react-dom'

import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/tomorrow'

function onChange (newValue) {
  console.log('change', newValue)
}

// Render editor
render(
  <AceEditor
    mode="javascript"
    theme="tomorrow"
    onChange={onChange}
    name="editor"
    tabSize={2}
    fontSize={14}
    editorProps={{$blockScrolling: true}}
  />,
  document.getElementById('application')
)
