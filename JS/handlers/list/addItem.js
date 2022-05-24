import { itemList } from "../../elements/itemList.js"

function addItem(item) {
  const { id, text, flag, num, date } = item
  const state = flag ? 'checked' : ''
  const li = document.createElement('li')

  itemList.append(li)
  li.dataset.id = id

  li.innerHTML = /* html */`
    <cell class="index" title="index">i</cell>
    <cell class="id" title="id">${id}</cell>
    <cell class="text" title="text">
      <p>${text}</p>
    </cell>
    <cell class="num" title="number">${num}</cell>
    <cell class="date" title="date">${date}</cell>
    <cell class="flag" title="flag">
      <input type="checkbox" ${state}>
    </cell>
    <cell class="btns">
      <button class="edit-btn" title="edit">✏️</button>
      <button class="del-btn" title="remove">🗑️</button>
    </cell>
  `
}

export { addItem }
