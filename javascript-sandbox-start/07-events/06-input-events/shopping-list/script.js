const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const heading = document.querySelector('h1')

function onInput(e) {
  heading.textContent = e.target.value
}

function onChecked(e) {
  const isChecked = e.target.checked
  heading.textContent = isChecked ? 'checked' : 'not checked'
}

function onFocus() {
  console.log('input is focused')
  itemInput.style.outlineStyle = 'solid'
  itemInput.style.outlineWidth = '2px'
  itemInput.style.outlineColor = 'green'
}

function onBlur() {
  console.log('input is not focused')
  itemInput.style.outlineStyle = 'none'
}

itemInput.addEventListener('input', onInput)
priorityInput.addEventListener('change', onInput)
checkbox.addEventListener('change', onChecked)
itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur', onBlur)
