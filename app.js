const createAccount = document.getElementById('createAccount')
const socialLinks = document.getElementById('socialLinks')
const personalInfo = document.getElementById('personalInfo')
const progress = document.getElementById('progress')
const backOne = document.getElementById('backOne')
const backTwo = document.getElementById('backTwo')
const nextOne = document.getElementById('nextOne')
const nextTwo = document.getElementById('nextTwo')
const submit = document.getElementById('submit')



nextOne.onclick = function() {
  createAccount.style.left = '-450px'
  socialLinks.style.left = '40px'
  progress.style.width = '240px'
}

backOne.onclick = function() {
  createAccount.style.left = '40px'
  socialLinks.style.left = '450px'
  progress.style.width = '120px'
}

nextTwo.onclick = function() {
  socialLinks.style.left = '-450px'
  personalInfo.style.left = '40px'
  progress.style.width = '100%'
}

backTwo.onclick = function() {
  socialLinks.style.left = '40px'
  personalInfo.style.left = '450px'
  progress.style.width = '240px'
}