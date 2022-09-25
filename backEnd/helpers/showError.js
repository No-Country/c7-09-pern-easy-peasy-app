const showError = (res, e) => {
  const responseError = {
    error: 'Internal Server Error',
    mesagge: e.message,
    code: e.code,
  }
  res.status(500).json(responseError)
}

module.exports = { showError }
