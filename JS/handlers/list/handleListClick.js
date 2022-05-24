import { classifyTarget } from "../../logic/classifyTarget.js"
import { handlers } from "../handlers.js"

function handleListClick(event) {
  if (event.target == itemList) return

  const targetLike = classifyTarget(event.target)

  handlers[targetLike]?.(event.target.closest('li'))
}

export { handleListClick }
