const rootStyle = document.documentElement.style
const pText = document.getElementById('textBackground')

const valVarRoot = rootName => {
  return getComputedStyle(document.body).getPropertyValue(rootName)
}

const writeText = () => {
  
  pText.textContent = `background: linear-gradient(to right,rgb(${valVarRoot('--red-left')},${valVarRoot('--green-left')},${valVarRoot('--blue-left')}), rgb(${valVarRoot('--red-right')}, ${valVarRoot('--green-right')}, ${valVarRoot('--blue-right')}));`
}

const changeColorLeft = event => {
  if(event.target.id === 'inputLeftRed') {
    rootStyle.setProperty('--red-left', event.target.value)
  }else if(event.target.id === 'inputLeftGreen') {
    rootStyle.setProperty('--green-left', event.target.value)
  }else if(event.target.id === 'inputLeftBlue') {
    rootStyle.setProperty('--blue-left', event.target.value)
  }
  
  writeText()
}

const changeColorRight = event => {
  
  if(event.target.id === 'inputRightRed') {
    rootStyle.setProperty('--red-right', event.target.value)
  }else if(event.target.id === 'inputRightGreen') {
    rootStyle.setProperty('--green-right', event.target.value)
  }else if(event.target.id === 'inputRightBlue') {
    rootStyle.setProperty('--blue-right', event.target.value)
  }
  
  writeText()
}

const runEVents = () => {
  const colorLeft = document.getElementById('colorLeft')
  const colorRight = document.getElementById('colorRight')
  
  colorLeft.addEventListener('input',changeColorLeft)
  colorRight.addEventListener('input',changeColorRight)
  
}

runEVents()

