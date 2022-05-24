function handleSave(li) {
  const elems = li.querySelectorAll('p, .num, .date')

  elems.forEach(el => el.contentEditable = false)
  li.classList.remove('editable')
  handleSave.worked = true

  setTimeout(() => handleSave.worked = false, 200)
}

export { handleSave }
