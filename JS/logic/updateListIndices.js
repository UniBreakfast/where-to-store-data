import { itemList } from "../elements/itemList.js"

function updateListIndices() {
  itemList.querySelectorAll('.index').forEach((cell, i) => {
    cell.innerText = i + 1
  })
}

export { updateListIndices }
