import { addItemForm } from "./elements/addItemForm.js"
import { itemList } from "./elements/itemList.js"

import { handleSubmitForm } from "./handlers/handleSubmitForm.js"
import { handleListClick } from "./handlers/handleListClick.js"

addItemForm.onsubmit = handleSubmitForm

itemList.onclick = handleListClick
