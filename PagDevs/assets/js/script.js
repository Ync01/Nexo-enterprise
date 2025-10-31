// script.js - Versão alternativa mais robusta
const teamMembers = {
    'yoshio': {
        name: 'Yoshio',
        age: '15 anos',
        description: 'líder do projeto, designou tarefas, desenvolveu a Página Inicial, a página dos Devs, criou o botão de acessibilidade.',
        image: './assets/img/yoshio.png'
    },
    'davi-rocha': {
        name: 'Davi Rocha',
        age: '16 anos',
        description: 'responsável pelas páginas de Android e IOS, e pelo Quiz.',
        image: './assets/img/davi.png'
    },
    'eduardo': {
        name: 'Eduardo',
        age: '16 anos',
        description: 'responsável pelas páginas de Computadores Quânticos, Inteligência Artificial, Assistentes Virtuais e Releitura da Capa.',
        image: './assets/img/dudu.png'
    },
    'gabriel-agustinelli': {
        name: 'Gabriel Agustinelli',
        age: '16 anos',
        description: 'responsável pelas páginas de Redes Sociais, Linha do Tempo, modo claro e escuro e tradução das páginas.',
        image: './assets/img/gabriel.png'
    },
    'lucas-cruz': {
        name: 'Lucas Cruz',
        age: '16 anos',
        description: 'responsável pelas páginas de Sistemas Operacionais, Linguagens de Programações e rodapé das páginas.',
        image: './assets/img/lucas.png'
    }
};

// Funções do pop-up
function openPopup(memberId) {
    const member = teamMembers[memberId];
    if (member) {
        document.getElementById('popupImage').src = member.image;
        document.getElementById('popupName').textContent = member.name;
        document.getElementById('popupAge').textContent = member.age;
        document.getElementById('popupDescription').textContent = member.description;
        document.getElementById('memberPopup').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closePopup() {
    document.getElementById('memberPopup').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Configurar eventos de clique nos membros
    const members = document.querySelectorAll('.member');
    
    members.forEach(member => {
        member.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member-id');
            openPopup(memberId);
        });
    });
    
    // Configurar botão fechar
    document.getElementById('closePopup').addEventListener('click', closePopup);
    
    // Fechar ao clicar fora
    document.getElementById('memberPopup').addEventListener('click', function(e) {
        if (e.target === this) closePopup();
    });
    
    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closePopup();
    });
});

// Fallback para garantir que funcione
window.addEventListener('load', function() {
    console.log('Página carregada - Popup script ativo');
});