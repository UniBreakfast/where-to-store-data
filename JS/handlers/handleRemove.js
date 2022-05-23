import { updateListIndices } from "../logic/updateListIndices.js"

updateListIndices
function handleRemove(li) {
  li.remove()
  updateListIndices()
}

export { handleRemove }
