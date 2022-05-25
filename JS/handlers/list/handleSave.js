function handleSave(li) {
  const elems = li.querySelectorAll('p, .num, .date')

  elems.forEach(el => el.removeAttribute('contenteditable'))
  li.classList.remove('editable')
  handleSave.worked = true

  setTimeout(() => handleSave.worked = false, 200)
}

export { handleSave }
