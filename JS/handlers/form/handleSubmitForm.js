import { getFormData } from "./getFormData.js"
import { genId } from "../../generators/genId.js"
import { updateListIndices } from "../../logic/updateListIndices.js"
import { addItem } from "../list/addItem.js"

function handleSubmitForm() {
  const inputData = getFormData()
  const item = { id: genId(), ...inputData }

  addItemForm.reset()
  addItem(item)
  updateListIndices()
}

export { handleSubmitForm }
