// assets/js/members-popup.js
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

document.addEventListener('DOMContentLoaded', function() {
    const members = document.querySelectorAll('.member');
    const memberIds = ['yoshio', 'davi-rocha', 'eduardo', 'gabriel-agustinelli', 'lucas-cruz'];
    
    members.forEach((member, index) => {
        member.setAttribute('data-member-id', memberIds[index]);
        member.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member-id');
            openPopup(memberId);
        });
    });
    
    document.getElementById('closePopup').addEventListener('click', closePopup);
    
    document.getElementById('memberPopup').addEventListener('click', function(e) {
        if (e.target === this) {
            closePopup();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
});