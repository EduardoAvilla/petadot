// Função para rolar até a âncora
function rolarParaAncora() {
    const elementoAncora = document.getElementById('ancora');
    
    // Verifica se o elemento âncora existe
    if (elementoAncora) {
      // Obtém a posição vertical do elemento âncora
      const posicaoAncora = elementoAncora.offsetTop;
      
      // Rola a página até a posição do elemento âncora
      window.scrollTo({
        top: posicaoAncora,
        behavior: 'smooth' // Adiciona suavidade à rolagem
      });
    }
  }
  
  // Obtém o botão pelo ID
  const botao = document.getElementById('contato');
  
  // Adiciona um ouvinte de evento de clique ao botão
  botao.addEventListener('click', rolarParaAncora);