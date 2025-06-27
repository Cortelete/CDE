/*
 * Arquivo: script.js
 * Descrição: Controller principal da aplicação Clube do Estudante.
 * VERSÃO FINAL: Lógica completa e funcional, sem omissões.
 */

// --- IMPORTAÇÃO DOS DADOS (MODEL) ---
import { studyDecks } from './data/index.js';

// --- EVENTO PRINCIPAL ---
document.addEventListener('DOMContentLoaded', () => {

    // --- SELEÇÃO DOS ELEMENTOS DO DOM (CACHE) ---
    const mainHub = document.getElementById('main-hub');
    const studyDeckView = document.getElementById('study-deck-view');
    const subjectSelection = document.getElementById('subject-selection');
    const modalContainer = document.getElementById('modal-container');
    const cardDeck = document.getElementById('card-deck');
    const cardCounter = document.getElementById('card-counter');
    const studyTitle = document.getElementById('study-title');
    const backToHubBtn = document.getElementById('back-to-hub');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const readmeBtn = document.getElementById('open-readme-btn');

    // --- ESTADO DA APLICAÇÃO ---
    let currentDeckKey = null;
    let currentIndex = 0;

    // =================================================================
    // --- FUNÇÕES DE RENDERIZAÇÃO (CONSTRUÇÃO DA VIEW) ---
    // =================================================================

    function renderSubjectCards() {
        subjectSelection.innerHTML = '';
        for (const key in studyDecks) {
            const deck = studyDecks[key];
            const cardElement = document.createElement('div');
            cardElement.className = `subject-card theme-${deck.theme} group relative w-full h-80 bg-[#161b22]/80 backdrop-blur-md rounded-lg border border-gray-700 p-6 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-300`;
            cardElement.dataset.subjectKey = key;
            cardElement.innerHTML = `
                <div class="gradient-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <div class="relative z-10 flex flex-col items-center justify-center h-full">
                    <div class="icon">${deck.icon}</div>
                    <h2 class="title text-2xl font-bold tech-font mt-4">${deck.title}</h2>
                    <p class="mt-2 text-sm text-gray-400 flex-grow">${deck.summary}</p>
                </div>
                <span class="cards-count relative z-10 text-xs font-bold tech-font text-gray-500 group-hover:text-inherit transition-colors mt-4">${deck.cards.length} CARDS</span>
            `;
            subjectSelection.appendChild(cardElement);
        }
    }

    function createFlashcard(cardData, index) {
        const card = document.createElement('div');
        card.className = `study-card absolute w-full h-full p-4 bg-[#161b22]/80 backdrop-blur-md rounded-lg border hover:border-current transition-all duration-300 ease-out flex flex-col cursor-pointer`;
        card.style.zIndex = studyDecks[currentDeckKey].cards.length - index;
        card.dataset.id = cardData.id;
        const topicsHTML = (cardData.topics || []).map((topic, topicIndex) =>
            `<span class="topic-span bg-gray-700/50 text-xs font-medium px-2.5 py-1 rounded-full tech-font hover:bg-current/20 transition-colors duration-200 cursor-pointer" data-topic-index="${topicIndex}">${topic}</span>`
        ).join('');
        card.innerHTML = `<header class="study-card-header flex justify-between items-start border-b border-gray-700 pb-2"><h3 class="text-xl font-bold tech-font">${String(cardData.id).padStart(2, '0')}: ${cardData.title}</h3><div class="flex items-center space-x-2"><button class="qa-button p-1 rounded-full border" title="Testar conhecimento"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></button></div></header><main class="flex-grow flex flex-col justify-center items-center text-center mt-4 px-2"><p class="italic mb-2 tip">"${cardData.tip}"</p><p class="text-sm text-gray-400">${cardData.description}</p></main><footer class="mt-4 border-t border-gray-700 pt-3"><p class="text-center text-xs text-gray-500 mb-2 tech-font">[TÓPICOS-CHAVE]</p><div class="flex justify-center items-center gap-2 flex-wrap">${topicsHTML}</div></footer>`;
        
        card.addEventListener('click', () => {
            if (cardData.details) {
                openDetailsModal(cardData);
            } else {
                openQaModal(cardData);
            }
        });

        card.querySelector('.qa-button').addEventListener('click', (e) => { e.stopPropagation(); openQaModal(cardData); });
        card.querySelectorAll('.topic-span').forEach(span => { span.addEventListener('click', (e) => { e.stopPropagation(); openTopicModal(cardData, parseInt(e.target.dataset.topicIndex, 10)); }); });
        
        return card;
    }

    function updateDeckView() {
        cardDeck.innerHTML = '';
        const cards = studyDecks[currentDeckKey].cards;
        cards.forEach((cardData, index) => {
            const cardElement = createFlashcard(cardData, index);
            const offset = (index - currentIndex) * 12;
            const scale = 1 - (index - currentIndex) * 0.04;
            if (index < currentIndex) { cardElement.style.transform = 'translateX(-120%) scale(0.8) rotate(-15deg)'; cardElement.style.opacity = '0'; } else { cardElement.style.transform = `translateX(${offset}px) scale(${scale})`; cardElement.style.opacity = `${1 - (index - currentIndex) * 0.2}`; }
            cardDeck.appendChild(cardElement);
        });
        cardCounter.textContent = `${currentIndex + 1} / ${cards.length}`;
    }

    function renderAllModals() {
        let modalsHTML = '';
        for (const key in studyDecks) { const deck = studyDecks[key]; modalsHTML += `<div id="${deck.theme}-topic-modal" class="modal-wrapper fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-[51] hidden"><div class="modal-content-wrapper bg-[#161b22] rounded-lg shadow-2xl w-full max-w-2xl transform scale-95"><header class="modal-header p-4 flex justify-between items-center"><h2 class="modal-title text-2xl font-bold tech-font"></h2><button class="close-modal-btn text-gray-400 hover:text-white text-3xl">&times;</button></header><div class="modal-content p-6 max-h-[60vh] overflow-y-auto text-gray-300 prose prose-invert prose-p:my-2 prose-strong:text-white"></div></div></div><div id="${deck.theme}-qa-modal" class="modal-wrapper qa-modal fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50 hidden"><div class="modal-content-wrapper bg-[#161b22] rounded-lg shadow-2xl w-full max-w-2xl transform scale-95"><header class="modal-header p-4 flex justify-between items-center"><h2 class="modal-title text-2xl font-bold tech-font">// Teste seu Conhecimento</h2><button class="close-modal-btn text-gray-400 hover:text-white text-3xl">&times;</button></header><div class="p-6"><div class="qa-question mb-4 text-gray-200"></div><div class="qa-answer hidden p-4 bg-black/30 rounded-md border border-gray-700"></div><div class="mt-6 text-center"><button class="reveal-btn font-bold py-2 px-6 rounded-md transition-all duration-200 tech-font">Revelar Resposta</button></div></div></div></div>`; }
        modalsHTML += `<div id="readme-modal" class="modal-wrapper fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50 hidden"><div class="modal-content-wrapper bg-[#161b22] border border-gray-500/50 rounded-lg shadow-2xl w-full max-w-3xl transform scale-95"><header class="p-4 border-b border-gray-500/30 flex justify-between items-center"><h2 class="text-2xl font-bold tech-font text-gray-300">// Sobre o Projeto: Clube do Estudante</h2><button class="close-modal-btn text-gray-400 hover:text-white text-3xl">&times;</button></header><div class="modal-content p-6 max-h-[70vh] overflow-y-auto theme-gray"><div class="space-y-4 text-gray-300 tech-font"><p>O <strong>Clube do Estudante</strong> é uma plataforma de aprendizado gamificada...</p></div></div></div></div>`;
        modalContainer.innerHTML += modalsHTML;
    }
    
    function applyTheme(themeName) { document.body.className = `bg-gray-900 text-gray-200 theme-${themeName}`; }
    
    function showMainHub() {
        studyDeckView.classList.add('hidden');
        mainHub.classList.remove('hidden');
        document.body.className = 'bg-gray-900 text-gray-200';
    }

    function startStudyDeck(subjectKey) {
        if (!studyDecks[subjectKey]) return;
        currentDeckKey = subjectKey;
        currentIndex = 0;
        mainHub.classList.add('hidden');
        studyDeckView.classList.remove('hidden');
        applyTheme(studyDecks[subjectKey].theme);
        studyTitle.textContent = studyDecks[subjectKey].title;
        updateDeckView();
    }

    function openDetailsModal(cardData) {
        const modal = document.getElementById('details-modal');
        const modalTitle = document.getElementById('details-modal-title');
        const modalContent = document.getElementById('details-modal-content');
        const theme = studyDecks[currentDeckKey].theme;

        let detailsHtml = `<p class="mb-4 text-gray-300">${cardData.description}</p>`;
        if (cardData.details && cardData.details.subtitle && cardData.details.points) {
            detailsHtml += `<h4 class="font-bold text-lg text-${theme}-400 tech-font mb-2">${cardData.details.subtitle}</h4>`;
            detailsHtml += `<ul class="list-disc list-inside space-y-2 text-gray-200">`;
            cardData.details.points.forEach(point => {
                detailsHtml += `<li>${point}</li>`;
            });
            detailsHtml += `</ul>`;
        }

        modalTitle.textContent = `${String(cardData.id).padStart(2, '0')}: ${cardData.title}`;
        modalContent.innerHTML = detailsHtml;
        
        const header = modal.querySelector('.modal-header');
        header.className = `modal-header p-4 flex justify-between items-center border-b border-${theme}-500/30`;
        modalTitle.className = `modal-title text-2xl font-bold tech-font text-${theme}-400`;
        
        showModal(modal);
    }
    
    function openTopicModal(cardData, topicIndex) {
        const theme = studyDecks[currentDeckKey].theme;
        const topicDetail = cardData.topicsDetails[topicIndex];
        if (!topicDetail) return;
        const modal = document.getElementById(`${theme}-topic-modal`);
        modal.querySelector('.modal-title').textContent = topicDetail.title;
        modal.querySelector('.modal-content').innerHTML = topicDetail.content;
        showModal(modal);
    }

    function openQaModal(cardData) {
        const theme = studyDecks[currentDeckKey].theme;
        const modal = document.getElementById(`${theme}-qa-modal`);
        modal.querySelector('.qa-question').innerHTML = `<p class="font-bold">Pergunta:</p><p>${cardData.question}</p>`;
        const answerDiv = modal.querySelector('.qa-answer');
        answerDiv.innerHTML = `<p class="font-bold">Resposta:</p><p><strong>${cardData.answer}</strong></p>`;
        answerDiv.classList.add('hidden');
        const revealBtn = modal.querySelector('.reveal-btn');
        revealBtn.textContent = "Revelar Resposta";
        revealBtn.onclick = () => { answerDiv.classList.remove('hidden'); revealBtn.textContent = "Resposta Revelada"; };
        showModal(modal);
    }

    function showModal(modalElement) {
        if (!modalElement) return;
        modalElement.classList.remove('hidden');
        setTimeout(() => { modalElement.querySelector('.modal-content-wrapper').classList.add('scale-100'); modalElement.querySelector('.modal-content-wrapper').classList.remove('scale-95'); }, 10);
    }

    function closeModal(modalElement) {
        if (!modalElement) return;
        const contentWrapper = modalElement.querySelector('.modal-content-wrapper');
        if (contentWrapper) { contentWrapper.classList.remove('scale-100'); contentWrapper.classList.add('scale-95'); }
        setTimeout(() => modalElement.classList.add('hidden'), 300);
    }

    // --- EVENT LISTENERS ---
    subjectSelection.addEventListener('click', (e) => { const subjectCard = e.target.closest('.subject-card'); if (subjectCard) startStudyDeck(subjectCard.dataset.subjectKey); });
    backToHubBtn.addEventListener('click', showMainHub);
    prevBtn.addEventListener('click', () => { if (!currentDeckKey) return; const cardCount = studyDecks[currentDeckKey].cards.length; currentIndex = (currentIndex - 1 + cardCount) % cardCount; updateDeckView(); });
    nextBtn.addEventListener('click', () => { if (!currentDeckKey) return; const cardCount = studyDecks[currentDeckKey].cards.length; currentIndex = (currentIndex + 1) % cardCount; updateDeckView(); });
    readmeBtn.addEventListener('click', () => { showModal(document.getElementById('readme-modal')); });
    modalContainer.addEventListener('click', (e) => { if (e.target.classList.contains('close-modal-btn')) closeModal(e.target.closest('.modal-wrapper')); if (e.target.classList.contains('modal-wrapper')) closeModal(e.target); });
    window.addEventListener('keydown', (e) => { const isModalOpen = document.querySelector('.modal-wrapper:not(.hidden)'); if (e.key === 'Escape') { if (isModalOpen) closeModal(isModalOpen); else if (!studyDeckView.classList.contains('hidden')) showMainHub(); } if (isModalOpen) return; if (!studyDeckView.classList.contains('hidden')) { if (e.key === 'ArrowLeft') prevBtn.click(); if (e.key === 'ArrowRight') nextBtn.click(); } });

    // --- INICIALIZAÇÃO ---
    function init() {
        try {
            renderAllModals();
            renderSubjectCards();
            console.log("Aplicação pronta.");
        } catch (error) {
            console.error("Um erro fatal ocorreu durante a inicialização:", error);
            subjectSelection.innerHTML = `<p class="text-red-500 text-center col-span-full">Ocorreu um erro fatal ao carregar a aplicação. Verifique o console (F12) para detalhes técnicos.</p>`;
        }
    }
    
    init();
});
