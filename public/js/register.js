function abrirConfirmacao(event) {
    event.preventDefault();
    
    const login = document.getElementById('login').value.trim(); // .trim() remove espaços extras
    const senha = document.getElementById('senha').value;
    const repetirSenha = document.getElementById('repetir_senha').value;

    // Validação em ordem lógica (do específico para o geral)
    if (login.length < 4) { 
    alert('O login deve ter no mínimo 4 caracteres!');
    document.getElementById('login').focus(); // Melhoria: foca no campo problemático
    return;
    }

    if (senha.length < 6) { 
    alert('A senha deve ter no mínimo 6 caracteres!');
    document.getElementById('senha').focus();
    return;
    }

    if (senha !== repetirSenha) {   
    alert('As senhas não coincidem!');
    document.getElementById('repetir_senha').focus();
    return;
    }

    // Validação extra: força da senha (opcional)
    const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!senhaForteRegex.test(senha)) {
        alert('A senha deve conter pelo menos:\n- 1 letra maiúscula\n- 1 letra minúscula\n- 1 número');
        document.getElementById('senha').focus();
        return;
    }
    // Coletar todos os dados do formulário
    const formData = {
        login: document.getElementById('login').value,
        // senha: senha, // Removido por segurança (não armazene no localStorage!)
        nome: document.getElementById('Nome').value,
        dataNascimento: document.getElementById('data_nascimento').value,
        cpf: document.getElementById('cpf').value,
        sexo: document.querySelector('input[name="sexo"]:checked').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        trilha: document.querySelector('input[name="area"]:checked').value,
        // OBS: Não incluímos os arquivos (documento de identidade e comprovante de residência)
        // pois o localStorage não é adequado para armazenar arquivos
    };

    localStorage.setItem('cadastroTrilhasInova', JSON.stringify(formData));
    
    window.open("../pages/confirmation.html", "_blank"); 
}

// Função para carregar dados salvos 
function carregarDadosSalvos() {
    const dadosSalvos = localStorage.getItem('cadastroTrilhasInova');
    if (dadosSalvos) {
        const formData = JSON.parse(dadosSalvos);
        
        // Preencher os campos com os dados salvos
        document.getElementById('Nome').value = formData.nome || '';
        document.getElementById('data_nascimento').value = formData.dataNascimento || '';
        document.getElementById('cpf').value = formData.cpf || '';
        if (formData.sexo) {
            document.querySelector(`input[name="sexo"][value="${formData.sexo}"]`).checked = true;
        }
        document.getElementById('email').value = formData.email || '';
        document.getElementById('telefone').value = formData.telefone || '';
        document.getElementById('cep').value = formData.cep || '';
        document.getElementById('rua').value = formData.rua || '';
        document.getElementById('numero').value = formData.numero || '';
        document.getElementById('cidade').value = formData.cidade || '';
        document.getElementById('estado').value = formData.estado || '';
        if (formData.trilha) {
            document.querySelector(`input[name="area"][value="${formData.trilha}"]`).checked = true;
        }
    }
}

window.addEventListener('DOMContentLoaded', carregarDadosSalvos);