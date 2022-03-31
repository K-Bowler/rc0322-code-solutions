var $tabContainer = document.querySelector('.tab-container');
var $nodeTab = document.querySelectorAll('.tab');
var $nodeView = document.querySelectorAll('.view');
function tabMatch(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $nodeTab.length; i++) {
      if ($nodeTab[i] === event.target) {
        $nodeTab[i].classList.add('active');
      } else {
        $nodeTab[i].classList.remove('active');
      }
    }
  }
  var $dataView = event.target.getAttribute('data-view');
  for (var n = 0; n < $nodeView.length; n++) {
    if ($nodeView[n].getAttribute('data-view') !== $dataView) {
      $nodeView[n].classList.add('hidden');
    } else {
      $nodeView[n].classList.remove('hidden');
    }
  }
}
$tabContainer.addEventListener('click', tabMatch);
