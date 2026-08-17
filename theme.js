/* Pulsante giorno / notte — Serena Ionta */
(function () {
  var radice = document.documentElement;
  var bottone = document.getElementById('tema-bottone');
  if (!bottone) return;

  function aggiorna() {
    var scuro = radice.getAttribute('data-tema') === 'scuro';
    bottone.textContent = scuro ? '☀' : '☾';
    bottone.setAttribute('title', scuro ? 'Modalità giorno' : 'Modalità notte');
    bottone.setAttribute('aria-label', scuro ? 'Passa alla modalità giorno' : 'Passa alla modalità notte');
  }

  aggiorna();

  bottone.addEventListener('click', function () {
    var nuovo = radice.getAttribute('data-tema') === 'scuro' ? 'chiaro' : 'scuro';
    radice.setAttribute('data-tema', nuovo);
    try { localStorage.setItem('tema-serena', nuovo); } catch (e) {}
    aggiorna();
  });
})();
