document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value.trim();

  // Validação: apenas e-mail válido
  if (!usuario || !senha) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Aceita apenas domínios válidos
  const validDomains = [
    'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com',
    'bol.com.br', 'uol.com.br', 'terra.com.br', 'live.com', 'msn.com',
    'protonmail.com', 'aol.com', 'ymail.com', 'globo.com', 'zipmail.com.br'
  ];
  const emailRegex = /^[^\s@]+@([^\s@]+)$/;
  const match = usuario.match(emailRegex);
  if (!match) {
    alert('Digite um e-mail válido.');
    return;
  }
  const domain = match[1].toLowerCase();
  if (!validDomains.includes(domain)) {
    alert('Aceitamos apenas e-mails dos domínios: ' + validDomains.join(', '));
    return;
  }

  // Aqui você pode adicionar a lógica de autenticação real
  // Por enquanto, apenas simula sucesso
  alert('Login realizado com sucesso!');
  localStorage.setItem('loggedIn', 'true');

  // Fecha imediatamente o modal de login
  const modalLogin = document.getElementById('modalLogin');
  if (modalLogin) {
    modalLogin.classList.remove('mostrar');
    modalLogin.style.display = 'none';
  }

  window.dispatchEvent(new Event('loginStateChanged'));
  // Atualiza o texto do modal de resultados
  const avisoMensagem = document.getElementById('avisoMensagem');
  if (avisoMensagem) {
    avisoMensagem.textContent = 'Não há resultados disponíveis.';
  }
  // window.location.href = 'pagina-protegida.html';
});
