document.addEventListener('DOMContentLoaded', function() {
  const cadastroForm = document.getElementById('cadastroForm');
  if (!cadastroForm) return;
  cadastroForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('cadastroNome').value.trim();
    const email = document.getElementById('cadastroEmail').value.trim();
    const senha = document.getElementById('cadastroSenha').value.trim();
    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    const validDomains = [
      'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com',
      'bol.com.br', 'uol.com.br', 'terra.com.br', 'live.com', 'msn.com',
      'protonmail.com', 'aol.com', 'ymail.com', 'globo.com', 'zipmail.com.br'
    ];
    const emailRegex = /^[^\s@]+@([^\s@]+)$/;
    const match = email.match(emailRegex);
    if (!match) {
      alert('Digite um e-mail válido.');
      return;
    }
    const domain = match[1].toLowerCase();
    if (!validDomains.includes(domain)) {
      alert('Aceitamos apenas e-mails dos domínios: ' + validDomains.join(', '));
      return;
    }
    alert('Cadastro realizado com sucesso!');
    // Aqui você pode adicionar lógica para enviar os dados ao backend
  });
});
