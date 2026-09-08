class ParceirosFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="partners-container">

  <a href="https://www.scout.org" target="_blank" rel="noopener noreferrer" class="partner-card card-purple">
    <img src="../assets/imgs/wosm.png" alt="World Scouting">
  </a>


  <a href="https://www.escoteiros.org.br" target="_blank" rel="noopener noreferrer" class="partner-card card-white card-featured">
    <img src="../assets/imgs/ueb.png" alt="Escoteiros do Brasil">
  </a>


  <a href="https://escoteirospe.org.br" target="_blank" rel="noopener noreferrer" class="partner-card card-white">
    <img src="../assets/imgs/uebpe.png" alt="Escoteiros do Brasil Pernambuco">
  </a>
</div>
    `;
  }
}

customElements.define('parceiros-footer', ParceirosFooter);