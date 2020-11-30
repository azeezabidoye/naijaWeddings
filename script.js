console.log('naija weddings')

const eventDate = document.getElementById('eventDate')
const eventForm = document.querySelector('form')
const eventSubmit = document.getElementById('submit')

eventSubmit.addEventListener('click', () => {
    let allDate = eventDate.value.split('-')
    let yearDate = parseInt(allDate[0] - 1)
    console.log(allDate)
    console.log(yearDate)
})

