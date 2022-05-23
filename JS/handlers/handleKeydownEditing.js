function makeHandleKeydownEditing(el, value) {

  return event => {
    if (event.key == 'Enter') {
      el.blur()

    } else if (event.key == 'Escape') {
      el.innerText = value
      el.onblur = null
      el.blur()
    }
  }
}

export { makeHandleKeydownEditing }
