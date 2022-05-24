import { makeHandleFocusEditing } from "../onedit/handleFocusEditing.js"
import { makeHandleFocusoutEditing } from "../onedit/handleFocusoutEditing.js"

function handleEdit(li) {
  const elems = li.querySelectorAll('p, .num, .date')

  elems.forEach(el => {
    el.contentEditable = true

    el.onfocus = makeHandleFocusEditing(el)
  })

  elems[0].focus()
  li.classList.add('editable')

  li.addEventListener('focusout', makeHandleFocusoutEditing(li, elems))
}

export { handleEdit }
