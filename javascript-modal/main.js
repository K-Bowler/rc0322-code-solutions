var $openButton = document.querySelector('.open-modal');
var $modalButton = document.querySelector('.modal-button');
var $background = document.querySelector('#background-none');
var $survey = document.querySelector('#survey-none');
function popUp() {
  if ($background.id === 'background-none') {
    $background.id = 'background-on';
  } else $background.id = 'background-none';
  if ($survey.id === 'survey-none') {
    $survey.id = 'survey-on';
  } else $survey.id = 'survey-none';
}
$openButton.addEventListener('click', popUp);
$modalButton.addEventListener('click', popUp);
