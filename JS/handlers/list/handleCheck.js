import { handleSave } from "./handleSave.js"

function handleCheck(li) {
  setTimeout(() => {
    if (handleSave.worked || li.classList.contains('editable')) return

    const box = li.querySelector('[type="checkbox"]')

    box.checked = !box.checked
  }, 50)
}

export { handleCheck }
