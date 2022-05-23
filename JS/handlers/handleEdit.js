import { makeHandleFocusEditing } from "./handleFocusEditing.js"
import { makeHandleFocusoutEditing } from "./handleFocusoutEditing.js"

export { handleEdit }

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
