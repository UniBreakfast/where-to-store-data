import { makeHandleBlurEditing } from "./handleBlurEditing.js"
import { makeHandleKeydownEditing } from "./handleKeydownEditing.js"

function makeHandleFocusEditing(el) {

  return () => {
    const value = el.innerText

    el.onblur = makeHandleBlurEditing(el, value)

    el.onkeydown = makeHandleKeydownEditing(el, value)
  }
}

export { makeHandleFocusEditing }
