import { handleSave } from "./handleSave.js"

function makeHandleFocusoutEditing(li, elems) {
  return onfocusout

  function onfocusout() {
    setTimeout(() => {
      if (![...elems].includes(document.activeElement)) {
        handleSave(li)

        elems.forEach(el => el.onfocus = el.onblur = null)

        li.removeEventListener('focusout', onfocusout)
      }
    })
  }
}

export { makeHandleFocusoutEditing }
