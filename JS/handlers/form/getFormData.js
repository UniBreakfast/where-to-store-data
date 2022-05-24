import { addItemForm } from "../../elements/addItemForm.js"

function getFormData() {
  const formData = new FormData(addItemForm)
  const { text, flag, num, date } = Object.fromEntries(formData)

  return {
    text: text || 'none',
    flag: Boolean(flag),
    num: num === '' ? NaN : num,
    date: date || 'unknown'
  }
}

export { getFormData }
