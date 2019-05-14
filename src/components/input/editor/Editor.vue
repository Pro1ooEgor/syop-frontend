<template>
  <div>
    <div class="quill-editor pt-3">
      <!-- Create the editor container -->
      <div id="toolbar"></div>
      <div id="editor" ref="editor"></div>
    </div>
    <div class="pt-3 text-right">
      <button
        type="button"
        style="width:160px"
        class="btn btn-outline-success"
        @click="sendData"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import hljs from 'highlight.js'
import Quill from 'quill'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'
import 'quill-emoji'

import toolbarOptions from './toolbarOptions'

Quill.register('modules/imageResize', ImageResize)
Quill.register('modules/imageDrop', ImageDrop)

export default {
  name: 'Editor',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Write here your text ...'
    },
    // snow or bubble (second doesn't support yet)
    theme: {
      type: String,
      default: 'snow'
    }
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    sendData () {
      axios
        .post('http://localhost:8000/api/articles/', {
          title: 'Test',
          text: this.content || this.value
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    if (this.$el) {
      this.quill = new Quill(this.$refs.editor, {
        modules: {
          toolbar: toolbarOptions,
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          },
          imageResize: {
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
          },
          imageDrop: true,
          'emoji-toolbar': true
        },
        boundary: document.body,
        theme: this.theme,
        placeholder: this.placeholder
      })

      if (this.value) {
        this.quill.pasteHTML(this.value)
      }

      // Mark model as touched if editor lost focus
      this.quill.on('selection-change', range => {
        if (!range) {
          this.$emit('blur', this.quill)
        } else {
          this.$emit('focus', this.quill)
        }
      })
      // Update model if text changes
      this.quill.on('text-change', (delta, oldDelta, source) => {
        let html = this.$refs.editor.children[0].innerHTML
        const quill = this.quill
        const text = this.quill.getText()
        if (html === '<p><br></p>') html = ''
        this.content = html
        this.$emit('input', this.content)
        this.$emit('change', { html, text, quill })
      })
      // Emit ready event
      this.$emit('ready', this.quill)
    }
  },
  beforeDestroy () {
    this.quill = null
    delete this.quill
  },
  watch: {
    // Watch content change
    value (newVal, oldVal) {
      if (this.quill) {
        if (newVal && newVal !== this.content) {
          this.content = newVal
          this.quill.pasteHTML(newVal)
        } else if (!newVal) {
          this.quill.setText('')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
