document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');
  const feedback = document.getElementById('feedback');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let erros = [];

    if (!nome.value.trim()) erros.push('Nome é obrigatório.');
    if (!email.value.includes('@')) erros.push('Email inválido.');
    if (!mensagem.value.trim()) erros.push('Mensagem é obrigatória.');

    if (erros.length > 0) {
      feedback.innerHTML = erros.join('<br>');
      feedback.style.color = 'red';
    } else {
      feedback.innerHTML = 'Mensagem enviada com sucesso!';
      feedback.style.color = 'green';
      form.reset();
    }
  });
});
