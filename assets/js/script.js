/*
 * Arquivo: script.js
 * Local: assets/js/script.js
 * Descrição: Controller principal da aplicação Clube do Estudante.
 * Responsável por carregar os dados, renderizar os componentes
 * e gerenciar toda a interatividade do usuário.
 */

// --- IMPORTAÇÃO DOS DADOS (MODEL) ---
// Importamos o objeto principal que contém todos os decks de estudo.
// O 'type="module"' no HTML permite este tipo de importação.
import { studyDecks } from './data/index.js';

// --- EVENTO PRINCIPAL ---
// Garante que o script só execute após o HTML estar completamente carregado.
document.addEventListener('DOMContentLoaded', () => {

    // --- SELEÇÃO DOS ELEMENTOS DO DOM (CACHE) ---
    // Guardamos as referências aos elementos HTML para não ter que buscá-los toda hora.
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
    // Variáveis que controlam o estado atual do app.
    let currentDeckKey = null;
    let currentIndex = 0;

    // =================================================================
    // --- FUNÇÕES DE RENDERIZAÇÃO (CONSTRUÇÃO DA VIEW) ---
    // =================================================================

    /**
     * Renderiza os cards de seleção de matéria no hub principal.
     */
    function renderSubjectCards() {
        subjectSelection.innerHTML = ''; // Limpa a área antes de renderizar
        for (const key in studyDecks) {
            const deck = studyDecks[key];
            // Adicionamos a classe 'theme-${deck.theme}' para que o CSS aplique as cores corretas
            const cardHTML = `
                <div data-subject-key="${key}" class="subject-card theme-${deck.theme} group relative w-64 h-80 bg-[#161b22]/80 backdrop-blur-md rounded-lg border border-gray-700 p-6 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-300">
                    <div class="gradient-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <div class="relative z-10">
                        <div class="icon">${deck.icon}</div>
                        <h2 class="title text-2xl font-bold tech-font">${deck.title}</h2>
                        <p class="mt-2 text-sm text-gray-400">${deck.summary}</p>
                    </div>
                    <span class="cards-count relative z-10 text-xs font-bold tech-font text-gray-500 group-hover:text-inherit transition-colors">${deck.cards.length} CARDS</span>
                </div>`;
            subjectSelection.innerHTML += cardHTML;
        }
    }

    /**
     * Cria e retorna um único elemento de flashcard.
     * @param {object} cardData - Os dados do card a ser criado.
     * @param {number} index - A posição do card no deck.
     * @returns {HTMLElement} O elemento do card.
     */
    function createFlashcard(cardData, index) {
        const card = document.createElement('div');
        card.className = `study-card absolute w-full h-full p-4 bg-[#161b22]/80 backdrop-blur-md rounded-lg border hover:border-current transition-all duration-300 ease-out flex flex-col cursor-pointer`;
        card.style.zIndex = studyDecks[currentDeckKey].cards.length - index;
        card.dataset.id = cardData.id;

        const topicsHTML = (cardData.topics || []).map((topic, topicIndex) =>
            `<span class="topic-span bg-gray-700/50 text-xs font-medium px-2.5 py-1 rounded-full tech-font hover:bg-current/20 transition-colors duration-200 cursor-pointer" data-topic-index="${topicIndex}">${topic}</span>`
        ).join('');

        card.innerHTML = `
            <header class="study-card-header flex justify-between items-start border-b border-gray-700 pb-2">
                <h3 class="text-xl font-bold tech-font">${String(cardData.id).padStart(2, '0')}: ${cardData.title}</h3>
                <div class="flex items-center space-x-2">
                    <button class="qa-button p-1 rounded-full border" title="Testar conhecimento">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                    </button>
                </div>
            </header>
            <main class="flex-grow flex flex-col justify-center items-center text-center mt-4 px-2">
                <p class="italic mb-2 tip">"${cardData.tip}"</p>
                <p class="text-sm text-gray-400">${cardData.description}</p>
            </main>
            <footer class="mt-4 border-t border-gray-700 pt-3">
                <p class="text-center text-xs text-gray-500 mb-2 tech-font">[TÓPICOS-CHAVE]</p>
                <div class="flex justify-center items-center gap-2 flex-wrap">
                    ${topicsHTML}
                </div>
            </footer>`;

        card.querySelector('.qa-button').addEventListener('click', (e) => { e.stopPropagation(); openQaModal(cardData); });
        card.querySelectorAll('.topic-span').forEach(span => {
            span.addEventListener('click', (e) => {
                e.stopPropagation();
                openTopicModal(cardData, parseInt(e.target.dataset.topicIndex, 10));
            });
        });

        return card;
    }

    /**
     * Atualiza a visualização do deck de cards, ajustando posições e opacidade.
     */
    function updateDeckView() {
        cardDeck.innerHTML = '';
        const cards = studyDecks[currentDeckKey].cards;
        cards.forEach((cardData, index) => {
            const cardElement = createFlashcard(cardData, index);
            const offset = (index - currentIndex) * 12;
            const scale = 1 - (index - currentIndex) * 0.04;

            if (index < currentIndex) {
                cardElement.style.transform = 'translateX(-120%) scale(0.8) rotate(-15deg)';
                cardElement.style.opacity = '0';
            } else {
                cardElement.style.transform = `translateX(${offset}px) scale(${scale})`;
                cardElement.style.opacity = `${1 - (index - currentIndex) * 0.2}`;
            }

            cardDeck.appendChild(cardElement);
        });
        cardCounter.textContent = `${currentIndex + 1} / ${cards.length}`;
    }

    /**
     * Cria a estrutura HTML para todos os modais da aplicação de uma vez.
     */
    function renderAllModals() {
        let modalsHTML = '';
        for (const key in studyDecks) {
            const deck = studyDecks[key];
            modalsHTML += `
                <div id="${deck.theme}-topic-modal" class="modal-wrapper fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-[51] hidden">
                    <div class="modal-content-wrapper bg-[#161b22] rounded-lg shadow-2xl w-full max-w-2xl transform scale-95">
                        <header class="modal-header p-4 flex justify-between items-center">
                            <h2 class="modal-title text-2xl font-bold tech-font"></h2>
                            <button class="close-modal-btn text-gray-400 hover:text-white text-3xl">&times;</button>
                        </header>
                        <div class="modal-content p-6 max-h-[60vh] overflow-y-auto text-gray-300 prose prose-invert prose-p:my-2 prose-strong:text-white"></div>
                    </div>
                </div>
                <div id="${deck.theme}-qa-modal" class="modal-wrapper qa-modal fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50 hidden">
                     <div class="modal-content-wrapper bg-[#161b22] rounded-lg shadow-2xl w-full max-w-2xl transform scale-95">
                        <header class="modal-header p-4 flex justify-between items-center">
                            <h2 class="modal-title text-2xl font-bold tech-font">// Teste seu Conhecimento</h2>
                            <button class="close-modal-btn text-gray-400 hover:text-white text-3xl">&times;</button>
                        </header>
                        <div class="p-6">
                            <div class="qa-question mb-4 text-gray-200"></div>
                            <div class="qa-answer hidden p-4 bg-black/30 rounded-md border border-gray-700"></div>
                            <div class="mt-6 text-center">
                                <button class="reveal-btn font-bold py-2 px-6 rounded-md transition-all duration-200 tech-font">Revelar Resposta</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        modalsHTML += `
            <div id="readme-modal" class="modal-wrapper fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50 hidden">
                <div class="modal-content-wrapper bg-[#161b22] border border-gray-500/50 rounded-lg shadow-2xl w-full max-w-3xl transform scale-95">
                    <header class="p-4 border-b border-gray-500/30 flex justify-between items-center">
                        <h2 class="text-2xl font-bold tech-font text-gray-300">// Sobre o Projeto: Clube do Estudante</h2>
                        <button class="close-modal-btn text-gray-400 hover:text-white text-3xl">&times;</button>
                    </header>
                    <div class="modal-content p-6 max-h-[70vh] overflow-y-auto theme-gray"><div class="space-y-4 text-gray-300 tech-font">
                        <p>O <strong>Clube do Estudante</strong> é uma plataforma de aprendizado gamificada, desenhada para tornar o estudo de temas complexos mais dinâmico e eficiente. A metodologia é baseada em flashcards, uma técnica comprovada para memorização e fixação de conteúdo.</p>
                        <h3 class="text-xl font-bold text-purple-400 pt-4 border-t border-gray-700">// Como Usar</h3>
                        <ul class="list-disc list-inside space-y-2 pl-2">
                            <li><strong>Seleção de Matéria:</strong> Na tela inicial, escolha um dos decks de estudo disponíveis.</li>
                            <li><strong>Navegação:</strong> Use as setas (ou as teclas do teclado) para navegar entre os cards do deck.</li>
                            <li><strong>Tópicos-Chave:</strong> Clique em um tópico-chave dentro de um card para abrir um modal com a explicação detalhada.</li>
                            <li><strong>Teste Rápido:</strong> Use o botão com ícone de interrogação (?) para testar seu conhecimento com uma pergunta e resposta sobre o tema do card.</li>
                        </ul>
                        <h3 class="text-xl font-bold text-green-400 pt-4 border-t border-gray-700">// O Conceito</h3>
                        <p>A ideia central é quebrar grandes volumes de informação em pedaços menores e gerenciáveis. Cada card funciona como um gatilho mental, apresentando um conceito, uma dica e os tópicos essenciais. Essa abordagem facilita a revisão e o reforço do aprendizado.</p>
                    </div></div>
                </div>
            </div>
        `;
        modalContainer.innerHTML = modalsHTML;
    }

    // =================================================================
    // --- LÓGICA DE CONTROLE E INTERATIVIDADE ---
    // =================================================================

    function applyTheme(themeName) {
        document.body.className = `bg-gray-900 text-gray-200 theme-${themeName}`;
    }

    function showMainHub() {
        studyDeckView.classList.add('hidden');
        studyDeckView.classList.remove('flex');
        mainHub.classList.remove('hidden');
        mainHub.classList.add('flex');
        document.body.className = 'bg-gray-900 text-gray-200';
    }

    function startStudyDeck(subjectKey) {
        if (!studyDecks[subjectKey]) return;
        currentDeckKey = subjectKey;
        currentIndex = 0;
        mainHub.classList.add('hidden');
        mainHub.classList.remove('flex');
        studyDeckView.classList.remove('hidden');
        studyDeckView.classList.add('flex');
        applyTheme(studyDecks[subjectKey].theme);
        studyTitle.textContent = studyDecks[subjectKey].title;
        updateDeckView();
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
        revealBtn.onclick = () => {
            answerDiv.classList.remove('hidden');
            revealBtn.textContent = "Resposta Revelada";
        };
        showModal(modal);
    }

    function showModal(modalElement) {
        modalElement.classList.remove('hidden');
        setTimeout(() => {
            modalElement.querySelector('.modal-content-wrapper').classList.add('scale-100');
            modalElement.querySelector('.modal-content-wrapper').classList.remove('scale-95');
        }, 10);
    }

    function closeModal(modalElement) {
        const contentWrapper = modalElement.querySelector('.modal-content-wrapper');
        if (contentWrapper) {
            contentWrapper.classList.remove('scale-100');
            contentWrapper.classList.add('scale-95');
        }
        setTimeout(() => modalElement.classList.add('hidden'), 300);
    }

    // =================================================================
    // --- EVENT LISTENERS (OUVINTES DE EVENTOS) ---
    // =================================================================

    subjectSelection.addEventListener('click', (e) => {
        const subjectCard = e.target.closest('.subject-card');
        if (subjectCard) {
            startStudyDeck(subjectCard.dataset.subjectKey);
        }
    });
    backToHubBtn.addEventListener('click', showMainHub);
    prevBtn.addEventListener('click', () => {
        const cardCount = studyDecks[currentDeckKey].cards.length;
        currentIndex = (currentIndex - 1 + cardCount) % cardCount;
        updateDeckView();
    });
    nextBtn.addEventListener('click', () => {
        const cardCount = studyDecks[currentDeckKey].cards.length;
        currentIndex = (currentIndex + 1) % cardCount;
        updateDeckView();
    });
    readmeBtn.addEventListener('click', () => {
        showModal(document.getElementById('readme-modal'));
    });
    modalContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-modal-btn')) {
            closeModal(e.target.closest('.modal-wrapper'));
        }
        if (e.target.classList.contains('modal-wrapper')) {
            closeModal(e.target);
        }
    });
    window.addEventListener('keydown', (e) => {
        const isModalOpen = document.querySelector('.modal-wrapper:not(.hidden)');
        if (e.key === 'Escape') {
            if (isModalOpen) {
                closeModal(isModalOpen);
            } else if (!studyDeckView.classList.contains('hidden')) {
                showMainHub();
            }
        }
        if (isModalOpen) return;
        if (!studyDeckView.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'ArrowRight') nextBtn.click();
        }
    });

    // =================================================================
    // --- INICIALIZAÇÃO DA APLICAÇÃO ---
    // =================================================================

    function init() {
        console.log("Clube do Estudante iniciado!");
        renderAllModals();
        renderSubjectCards();
    }

    init(); // Chama a função principal para iniciar o app.
});
