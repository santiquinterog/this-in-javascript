const container = document.getElementById('container')

container.addEventListener('click', function (e) {
  e.preventDefault()
  // general function: this refers to the container element
  // which is the context from which the addEventListener function is invoked
  this.classList.toggle('content')
  setTimeout(() => {
    // Arrow function: this is lexical scope, this refers to the container element
    this.classList.toggle('content')
  }, 2000)
})
