import { addItemForm } from "./elements/addItemForm.js"
import { itemList } from "./elements/itemList.js"

import { handleSubmitForm } from "./handlers/form/handleSubmitForm.js"
import { handleListClick } from "./handlers/list/handleListClick.js"

addItemForm.onsubmit = handleSubmitForm

itemList.onclick = handleListClick
