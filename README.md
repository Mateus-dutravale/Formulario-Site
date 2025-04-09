# 📝 Sistema de Cadastro e Login  

Prototipo de fluxo de cadastro → confirmação → login, com formulário validado.  

## 🔍 Visão Geral  
**Fluxo do usuário**:  
1. Acessa a página de login (sem cadastro).  
2. Clica em "Registrar-se" e preenche o formulário.  
3. É redirecionado para uma página de confirmação.  
4. Volta à página de login para acessar o sistema.  

## 🛠️ Funcionalidades  
### Formulário de Cadastro  
- **Seções**:  
  - 📌 Informações pessoais (nome, CPF, e-mail, telefone, upload de documento).  
  - 🏡 Endereço residencial (CEP, rua, número, etc.).  
  - 🎯 Trilhas de aprendizagem (Front-End, Back-End, Jogos, etc.) com ícones.  
  - 🔑 Criação de login e senha (validação de 6+ caracteres).  
- **Validações**:  
  - Campos obrigatórios (`required`).  
  - Tipos específicos (`email`, `date`, `tel` com `pattern`).  
  - Checkbox de termos obrigatório.  

### Navegação  
- Botão "Voltar" para retornar ao login.  
- Redirecionamento pós-cadastro (via JavaScript).  

## 🧰 Tecnologias  
| Tecnologia | Função |  
|------------|--------|  
| HTML5 | Estrutura do formulário semântico |  
| CSS3 | Estilização responsiva |  
| JavaScript | Validação e redirecionamento |  

## 🗂️ Estrutura de Arquivos  
```plaintext
/  
├── public/  
│   ├── css/  
│   │   └── register.css  
│   ├── js/  
│   │   └── register.js  
│   └── img/  
│       ├── front_end.png, back_end.png, ...  
│       ├── upload-na-nuvem.png  
│       └── logo-trilhas-inova.png  
├── login.html  
├── register.html  
└── cadastro-sucesso.html (a implementar)  