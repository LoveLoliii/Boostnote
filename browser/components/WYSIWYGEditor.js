import React from 'react'
import ProseMirror from 'react-prosemirror'
import style from './WYSIWYGEditor.styl'
import CSSModules from 'browser/lib/CSSModules'

import 'prosemirror/dist/inputrules/autoinput'
import 'prosemirror/dist/markdown'

class WYSIWYGEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps (props) {
    this.setState({
      value: props.value,
      config: props.config
    })
  }

  componentDidMount () {
    const proseMirrorElement = document.getElementsByClassName('ProseMirror')[0]
    proseMirrorElement.style.border = 'initial'
    require('./WYSIWYGEditor.styl')
  }

  handleOnChange (e) {
    this.setState({
      value: e
    })
  }

  render () {
    const { value } = this.state
    const { config } = this.props
    const customStyle = {
      fontSize: `${config.preview.fontSize}px`
    }
    return (
      <div styleName='root'
        style={customStyle}>
        <ProseMirror
          value={value}
          onChange={(e) => this.handleOnChange(e)}
          options={{
            docFormat: 'markdown',
            autoInput: true
          }} />
      </div>
    )
  }
}

export default CSSModules(WYSIWYGEditor, style)