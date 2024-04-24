document.getElementById('login-button').addEventListener('click', function() {
    var username = document.getElementById('username').value
    var senha = document.getElementById('senha').value

    fetch('./database/credenciais.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível carregar o arquivo JSON.')
            }
            return response.json()
        })
        .then(data => {
            var jsonUsername = data.username;
            var jsonSenha = data.senha;

            if (username === jsonUsername && senha === jsonSenha) {
                alert('Login bem-sucedido!')
                window.location.href = 'quiz.html'
            } else {
                document.getElementById('error-message').textContent = 'Usuário ou senha incorretos.'
            }
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error))
});

window.onload = function() {
    document.body.classList.add('loaded')
};
