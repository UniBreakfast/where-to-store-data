function getValidDate(newVal, oldVal) {
  if (!/^\d\d\d\d-\d\d-\d\d$/.test(newVal)) return oldVal

  try {
    return new Date(newVal).toISOString().slice(0, 10)
  } catch {
    return oldVal
  }
}

export { getValidDate }
