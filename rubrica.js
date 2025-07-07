// qui dentro inseriremo la logica per recuperare i valori dal form
// e creare un oggetto relativo al contatto salvato utilizzando una classe JS

// creiamo una CLASSE per generare un oggetto di tipo Contact
class Contact {
  constructor(_firstName, _lastName, _phone) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.phone = _phone
  }
  prefix = '+39'
  favourite = false
}

// cominciamo raccogliendo i riferimenti ai 3 campi del form
const firstNameInput = document.getElementById('firstName') // <input>
const lastNameInput = document.getElementById('lastName') // <input>
const phoneInput = document.getElementById('phone') // <input>

// recupero il riferimento al FORM e intervengo sul suo evento di "submit"
const formElement = document.getElementById('rubrica-form')
formElement.addEventListener('submit', function (e) {
  e.preventDefault() // così la pagina non si aggiorna
  // ora sono libero di proseguire con il recupero dati
  const nuovoContatto = new Contact(
    firstNameInput.value,
    lastNameInput.value,
    phoneInput.value
  )
  console.log('Ho creato un contatto', nuovoContatto)
  // svuoto il form
  formElement.reset()
})
