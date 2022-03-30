var $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var messageData = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    description: $form.elements.message.value
  };
  console.log('Values:', messageData);
  $form.reset();
}
