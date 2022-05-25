import { updateListIndices } from "../../logic/updateListIndices.js"

function handleRemove(li) {
  li.remove()
  updateListIndices()
}

export { handleRemove }
