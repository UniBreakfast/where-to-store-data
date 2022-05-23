const addItemForm = document.getElementById('addItemForm')
const itemList = document.getElementById('itemList')

const handlers = { handleCheck, handleEdit, handleSave, handleRemove }

addItemForm.onsubmit = () => {
  const inputData = getFormData()
  const item = { id: genId(), ...inputData }

  addItemForm.reset()
  addItem(item)
  updateListIndices()
}

itemList.onclick = event => {
  if (event.target == itemList) return

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

  } else if (
    el.type != 'checkbox' &&
    !el.classList.contains('btns') &&
    el.contentEditable != 'true'
  ) {
    return 'handleCheck'
  }
}

function handleRemove(li) {
  li.remove()
  updateListIndices()
}

function handleCheck(li) {
  setTimeout(() => {
    if (handleSave.worked || li.classList.contains('editable')) return

    const box = li.querySelector('[type="checkbox"]')
    box.checked = !box.checked
  }, 50)
}

function handleEdit(li) {
  const elems = li.querySelectorAll('p, .num, .date')

  elems.forEach(el => {
    el.contentEditable = true

    el.onfocus = () => {
      const value = el.innerText

      el.onblur = () => {
        const newValue = el.innerText

        if (el.parentNode.classList.contains('text')) {
          el.parentNode.scrollTop = 0

        } else if (el.classList.contains('num')) {
          el.innerText = getValidNumber(newValue, value)

        } else if (el.classList.contains('date')) {
          el.innerText = getValidDate(newValue, value)
        }
      }

      el.onkeydown = ({key}) => {
        if (key == 'Enter') {
          el.blur()
        } else if (key == 'Escape') {
          el.innerText = value
          el.onblur = null
          el.blur()
        }
      }
    }
  })
  elems[0].focus()
  li.classList.add('editable')

  li.addEventListener('focusout', onfocusout)

  function onfocusout() {
    setTimeout(() => {
      if (![...elems].includes(document.activeElement)) {
        handleSave(li)

        elems.forEach(el => el.onfocus = el.onblur = null)

        li.removeEventListener('focusout', onfocusout)
      }
    });
  }
}

function handleSave(li) {
  const elems = li.querySelectorAll('p, .num, .date')

  elems.forEach(el => el.contentEditable = false)
  li.classList.remove('editable')
  handleSave.worked = true

  setTimeout(() => handleSave.worked = false, 200);
}

function getValidNumber(newVal, oldVal) {
  const value = parseFloat(newVal)

  return Number.isNaN(value) ? oldVal : value
}

function getValidDate(newVal, oldVal) {
  if (!/\d\d\d\d-\d\d-\d\d/.test(newVal)) return oldVal

  try {
    return new Date(newVal).toISOString().slice(0, 10)
  } catch {
    return oldVal
  }
}
