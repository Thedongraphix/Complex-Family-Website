function php_email_form_submit(thisForm, action, formData) {
  fetch(action, {
    method: 'POST',
    body: formData,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  })
  .then(response => {
    if (response.ok) {
      return response.json();  // Expecting JSON response
    } else {
      throw new Error(`${response.status} ${response.statusText} ${response.url}`);
    }
  })
  .then(data => {
    thisForm.querySelector('.loading').classList.remove('d-block');

    if (data.success) {  // Check if the JSON response indicates success
      thisForm.querySelector('.sent-message').classList.add('d-block');
      thisForm.reset(); 
    } else {
      throw new Error(data.message ? data.message : 'Form submission failed and no error message returned from: ' + action);
    }
  })
  .catch((error) => {
    displayError(thisForm, error);
  });
}
