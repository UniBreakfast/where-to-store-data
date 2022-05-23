import { getValidNumber } from "../validation/getValidNumber.js"
import { getValidDate } from "../validation/getValidDate.js"

function makeHandleBlurEditing(el, value) {
  return () => {
    const newValue = el.innerText

    if (el.parentNode.classList.contains('text')) {
      el.parentNode.scrollTop = 0

    } else if (el.classList.contains('num')) {
      el.innerText = getValidNumber(newValue, value)

    } else if (el.classList.contains('date')) {
      el.innerText = getValidDate(newValue, value)
    }
  }
}

export { makeHandleBlurEditing }
