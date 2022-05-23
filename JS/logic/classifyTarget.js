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

export { classifyTarget }
