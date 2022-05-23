const addItemForm = document.getElementById('addItemForm')
const itemList = document.getElementById('itemList')

const handlers = {handleCheck, handleEdit, handleRemove }

addItemForm.onsubmit = () => {
  const inputData = getFormData()
  const item = { id: genId(), ...inputData }

  addItemForm.reset()
  addItem(item)
  updateListIndices()
}

itemList.onclick = event => {
  const targetLike = classifyTarget(event.target)

  handlers[targetLike]?.(event.target.closest('li'))
}

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
    <cell class="flag" title="flag">
      <input type="checkbox" ${state}>
    </cell>
    <cell class="num" title="number">${num}</cell>
    <cell class="date" title="date">${date}</cell>
    <cell class="btns">
      <button class="edit-btn" title="edit">✏️</button>
      <button class="del-btn" title="remove">🗑️</button>
    </cell>
  `
}

function updateListIndices() {
  itemList.querySelectorAll('.index').forEach((cell, i) => {
    cell.innerText = i + 1
  })
}

function genId() {
  const id = genId.next || 1

  genId.next = id + 1

  return id
}

function classifyTarget(el) {
  if (el.classList.contains('edit-btn')) {
    return 'handleEdit'

  } else if (el.classList.contains('del-btn')) {
    return 'handleRemove'

  } else if (!el.classList.contains('btns')) {
    return 'handleCheck'
  }
}

function handleRemove(li) {
  li.remove()
  updateListIndices()
}

function handleCheck(li) {
  li.querySelector('[type="checkbox"]').toggleAttribute('checked')
}

function handleEdit(li) {

}
