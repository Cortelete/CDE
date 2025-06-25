Clube do Estudante - Portal Interativo de Estudos
Estudar não precisa ser um saco. Pode ser uma invasão de conhecimento.

🤔 O que é isso?
O Clube do Estudante é um portal de estudos interativo, criado para transformar a revisão de matérias densas e complexas em uma experiência rápida, visualmente engajante e direta ao ponto. A ideia nasceu da necessidade de um método de estudo que funcionasse para cérebros que não se dão bem com textos longos e monótonos.

Em vez de resumos chatos, usamos "cards" de conhecimento, cada um focado em um micro-tópico, com uma linguagem inteligente e sem enrolação. A estética hacker/cyberpunk não é só para ser bonita, é para manter a mente focada e tornar o processo de aprendizado mais estimulante.

✨ Funcionalidades Atuais
Hub Central Dinâmico: A tela inicial carrega e exibe todos os decks de estudo disponíveis diretamente do nosso "banco de dados" em JavaScript.

Decks de Estudo Interativos: Navegue por um baralho de cards com o mouse ou teclado. Cada card é uma pílula de conhecimento.

Temas Visuais por Matéria: Cada disciplina tem sua própria identidade visual e paleta de cores, ajudando a criar associações mentais.

Modais de Aprofundamento:

Tópicos-Chave: Clique em um tópico específico para ver sua definição detalhada.

Q&A Interativo: Teste seu conhecimento com um modal de Pergunta e Resposta para cada card.

Zero Dependências Externas: Tudo roda a partir de um único arquivo HTML.

🚀 Tecnologia por Trás do Caos
Este projeto foi construído com a filosofia de ser o mais leve e portátil possível, seguindo o princípio DRY (Don't Repeat Yourself).

HTML5: A estrutura semântica do portal.

Tailwind CSS: Para a estilização rápida e responsiva.

JavaScript (Vanilla ES6): Todo o dinamismo da aplicação — desde a renderização dos decks até a lógica dos modais e a troca de temas — é feito com JavaScript puro, sem frameworks. O conteúdo é carregado de um único objeto studyDecks dentro do script.

拡張 Como Contribuir ou Adicionar uma Nova Matéria
A beleza deste projeto é sua escalabilidade. A home page agora é 100% dinâmica, então você NÃO PRECISA MAIS EDITAR O HTML para adicionar um novo tema. O processo se resume a 3 passos dentro da tag <script> no final do arquivo.

Passo 1: Adicionar os Dados da Matéria
Tudo começa no objeto studyDecks. Ele é o nosso banco de dados. Para criar uma nova matéria, adicione uma nova entrada a este objeto.

Exemplo: Vamos criar uma matéria de "Cibersegurança" com o tema cyan.

const studyDecks = {
    gp: { /* ... dados de Gestão de Projetos ... */ },
    te: { /* ... dados de Tópicos em Engenharia ... */ },
    java: { /* ... dados de Java ... */ },
    ai: { /* ... dados de IA ... */ },
    prog: { /* ... dados de Programação ... */ },

    // SUA NOVA MATÉRIA ENTRA AQUI
    cyber: {
        title: "Cibersegurança",
        theme: "cyan", // Escolha um nome de tema único
        icon: `<svg>...</svg>`, // Cole seu SVG aqui
        summary: "Aprenda a se defender no mundo digital, de phishing a firewalls.",
        cards: [
            // Array de cards
            {
                id: 1,
                title: "O que é Phishing?",
                tip: "A pescaria de trouxas da internet.",
                description: "...",
                topics: ["Engenharia Social", "E-mails Falsos"],
                topicsDetails: [
                    { title: "Engenharia Social", content: "<p>...</p>" },
                    { title: "E-mails Falsos", content: "<p>...</p>" }
                ],
                question: "...",
                answer: "..."
            },
            // ... mais cards
        ]
    }
};

Passo 2: Definir as Cores do Novo Tema (CSS)
Para que o seu novo theme: "cyan" funcione visualmente, você precisa ensinar ao CSS quais cores usar.

Vá para a tag <style> no início do arquivo e adicione as regras de cor para o seu novo tema, seguindo o padrão existente.

/* --- ESTILOS DOS MODAIS E SCROLLBARS --- */
.modal-content.theme-yellow::-webkit-scrollbar-thumb { background-color: #facc15; }
/* ADICIONE AQUI */
.modal-content.theme-cyan::-webkit-scrollbar-thumb { background-color: #22d3ee; } /* Cor principal do tema */

/* --- ANIMAÇÕES DE PULSO --- */
@keyframes pulse-yellow { /* ... */ }
/* ADICIONE AQUI */
@keyframes pulse-sky { /* Usando 'sky' como cor de destaque (accent) */
    0%, 100% { box-shadow: 0 0 2px #38bdf8; }
    50% { box-shadow: 0 0 8px #38bdf8, 0 0 10px #38bdf8; }
}

.qa-button.theme-yellow { animation: pulse-yellow 2s infinite; }
/* ADICIONE AQUI */
.qa-button.theme-cyan { animation: pulse-sky 2s infinite; } /* Conecta o botão ao novo keyframe */

Passo 3: Mapear o Tema no Script (JavaScript)
Finalmente, avise ao JavaScript qual é a cor principal e a cor de destaque (accent) do seu novo tema. Dentro da função applyTheme, adicione seu tema ao themeMap.

function applyTheme(theme) {
    const themeMap = {
        purple: { main: 'purple', accent: 'pink'},
        green: { main: 'green', accent: 'amber'},
        orange: { main: 'orange', accent: 'red'},
        blue: { main: 'blue', accent: 'cyan'},
        yellow: { main: 'yellow', accent: 'lime'},
        // ADICIONE AQUI
        cyan: { main: 'cyan', accent: 'sky'} 
    }
    const currentTheme = themeMap[theme] || themeMap.purple;
    // ... o resto da função continua igual
}

E é isso! Salve o arquivo. Ao abri-lo, o script irá ler automaticamente sua nova matéria no studyDecks e renderizar o card na tela inicial, já com a cor, ícone e textos corretos. A mágica da programação dinâmica!

💖 Dedicatória e Criador
Este projeto é, antes de tudo, uma ferramenta de batalha. Nasceu da urgência de uma prova e da necessidade de hackear o processo de aprendizado para um cérebro com TDAH que se recusa a seguir manuais tradicionais.

Portanto, ele é dedicado a todos os estudantes que pensam diferente: àqueles que veem padrões onde outros veem caos, que buscam a essência em vez de decorar o superficial, e que sabem que a melhor forma de aprender é construindo.

<<<<<<< HEAD
A concepção, curadoria de conteúdo e visão para este portal foram idealizadas e criadas por Davi Cortelete, CEO & Founder da InteligenciArte.IA. Sua curiosidade e direcionamento foram o combustível que transformou um simples script em uma plataforma de estudos completa, provando que uma boa colaboração entre a criatividade humana e a inteligência artificial pode gerar resultados incríveis.
=======
A concepção, curadoria de conteúdo e visão para este portal foram idealizadas e criadas por Davi Cortelete, CEO & Founder da InteligenciArte.IA. Sua curiosidade e direcionamento foram o combustível que transformou um simples script em uma plataforma de estudos completa, provando que uma boa colaboração entre a criatividade humana e a inteligência artificial pode gerar resultados incríveis.
>>>>>>> 939e36dd17971ef7c0537b80edd8b2eb63fec103
