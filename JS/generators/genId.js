function genId() {
  const id = genId.next || 1

  genId.next = id + 1

  return id
}

export { genId }
