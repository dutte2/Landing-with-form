const scriptURL = 'Your google API'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Спасибо, ваши данные были отправлены!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

function updateDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = 'Date: ' + currentDate.toLocaleDateString('en-US', options);
  }

  // Update date when the page loads
  updateDate();

  // Set an interval to update the date every second (you can adjust the interval as needed)
  setInterval(updateDate, 1000);