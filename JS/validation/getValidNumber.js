function getValidNumber(newVal, oldVal) {
  const value = parseFloat(newVal)

  return Number.isNaN(value) ? oldVal : value
}

export { getValidNumber }
