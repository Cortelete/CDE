// Arquivo: data/pmc.js
// Contém os dados exclusivamente para o deck de "Project Model Canvas".

export const pmc = {
    title: "Project Model Canvas",
    theme: "rose",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    summary: "Planeje seu projeto de forma visual e colaborativa em uma única página.",
    cards: [
        {
            id: 1,
            title: "Por Quê?",
            tip: "A alma do projeto. Se isso for fraco, tudo desmorona.",
            description: "Este bloco contém as justificativas e o problema que o projeto visa resolver. É o ponto de partida e a razão de existir do projeto.",
            topics: ["Problema/Oportunidade", "Objetivos do Projeto", "Justificativa"],
            topicsDetails: [
                { title: "Problema/Oportunidade", content: "<p>Descreva a dor do cliente ou a oportunidade de mercado que motivou o projeto.</p>" },
                { title: "Objetivos do Projeto", content: "<p>O que se espera alcançar ao final? Seja específico, mas de alto nível.</p>" },
                { title: "Justificativa", content: "<p>Por que este projeto é importante para a organização agora? Como ele se alinha com a estratégia?</p>" }
            ],
            question: "Por que o bloco 'Por Quê?' é o primeiro a ser preenchido no PMC?",
            answer: "Porque ele estabelece o propósito fundamental do projeto. Sem uma compreensão clara do problema a ser resolvido e do porquê ele é importante, todas as outras seções do canvas perdem o sentido e a direção."
        },
        {
            id: 2,
            title: "O Quê?",
            tip: "O que você vai entregar de fato?",
            description: "Descreve o produto final do projeto, a solução para o problema apresentado no bloco 'Por Quê?'.",
            topics: ["Produto do Projeto", "Requisitos", "Critérios de Aceitação"],
            topicsDetails: [
                { title: "Produto do Projeto", content: "<p>Descreva claramente o que será criado. É um software? Um novo processo? Um evento?</p>" },
                { title: "Requisitos", content: "<p>Liste as principais características e funcionalidades que o produto deve ter para resolver o problema.</p>" },
                { title: "Critérios de Aceitação", content: "<p>Como saberemos que o produto está pronto e atende às expectativas? Defina métricas claras.</p>" }
            ],
            question: "Qual a relação entre o bloco 'O Quê?' e o escopo do projeto?",
            answer: "O bloco 'O Quê?' define o escopo do produto. É a base para detalhar todo o trabalho necessário (escopo do projeto) para criar e entregar a solução com os requisitos e critérios de aceitação definidos."
        },
        {
            id: 3,
            title: "Para Quem?",
            tip: "Se você tenta agradar a todos, não agrada a ninguém.",
            description: "Identifica as partes interessadas (stakeholders) do projeto: quem será beneficiado, quem será impactado e quem pode influenciar no projeto.",
            topics: ["Clientes/Usuários", "Patrocinador (Sponsor)", "Equipe"],
            topicsDetails: [
                { title: "Clientes/Usuários", content: "<p>Quem vai usar o produto final? Quais são suas necessidades e expectativas?</p>" },
                { title: "Patrocinador (Sponsor)", content: "<p>Quem está financiando o projeto e tem a palavra final sobre seus objetivos e continuidade?</p>" },
                { title: "Equipe do Projeto", content: "<p>Quem vai trabalhar na construção do produto? Quais são suas habilidades e responsabilidades?</p>" }
            ],
            question: "Por que é importante diferenciar 'cliente' de 'usuário' neste bloco?",
            answer: "Porque nem sempre são a mesma pessoa. O 'cliente' é quem paga pelo projeto (ex: um diretor de departamento), enquanto o 'usuário' é quem vai interagir com o produto no dia a dia (ex: um analista). As necessidades de ambos devem ser consideradas."
        },
        {
            id: 4,
            title: "Como?",
            tip: "O plano de ataque. Como sairemos do ponto A para o B?",
            description: "Detalha as principais entregas, as fases e o plano macro de como o projeto será executado.",
            topics: ["Entregas Principais", "Fases ou Macro-atividades", "Não-Escopo"],
            topicsDetails: [
                { title: "Entregas Principais", content: "<p>Quais são os principais 'pacotes' de trabalho que serão entregues? Pense nos grandes blocos da EAP.</p>" },
                { title: "Fases ou Macro-atividades", content: "<p>Descreva a abordagem geral. Será em cascata? Ágil? Quais são as grandes etapas (ex: Pesquisa > Design > Desenvolvimento > Teste)?</p>" },
                { title: "Não-Escopo", content: "<p>Deixar claro o que **não** será feito é tão importante quanto o que será. Ajuda a gerenciar as expectativas.</p>" }
            ],
            question: "Para que serve a seção 'Não-Escopo'?",
            answer: "Serve para evitar mal-entendidos e o 'scope creep'. Ao listar explicitamente o que está fora do projeto, você alinha as expectativas com os stakeholders e cria uma defesa contra pedidos de funcionalidades não planejadas."
        },
        {
            id: 5,
            title: "Onde?",
            tip: "Onde o projeto vive e respira.",
            description: "Define o contexto, as dependências externas e os sistemas com os quais o projeto irá interagir.",
            topics: ["Sistemas e Plataformas", "Dependências Externas", "Infraestrutura"],
            topicsDetails: [
                { title: "Sistemas e Plataformas", content: "<p>Com quais outros sistemas o seu projeto precisa se integrar? (ex: CRM, ERP, API de pagamentos).</p>" },
                { title: "Dependências Externas", content: "<p>De quais outros times, departamentos ou fornecedores seu projeto depende para ter sucesso?</p>" },
                { title: "Infraestrutura", content: "<p>Onde a solução será hospedada? (ex: Servidores locais, AWS, Azure).</p>" }
            ],
            question: "Por que mapear dependências externas é crucial para o planejamento?",
            answer: "Porque uma dependência externa é um risco. Se outro time atrasar uma entrega que é essencial para o seu projeto, seu cronograma será diretamente impactado. Mapeá-las permite criar planos de mitigação."
        },
        {
            id: 6,
            title: "Quando?",
            tip: "O tempo é implacável.",
            description: "Estabelece a linha do tempo macro do projeto, com os principais marcos e o cronograma geral.",
            topics: ["Marcos (Milestones)", "Cronograma Preliminar", "Restrições de Tempo"],
            topicsDetails: [
                { title: "Marcos (Milestones)", content: "<p>Quais são os pontos de verificação mais importantes do projeto? (ex: Fim da fase de design, Lançamento da versão beta).</p>" },
                { title: "Cronograma Preliminar", content: "<p>Uma visão de alto nível das datas de início e fim, e da duração das principais fases.</p>" },
                { title: "Restrições de Tempo", content: "<p>Existe algum prazo final inegociável? (ex: Lançamento para uma feira, exigência regulatória).</p>" }
            ],
            question: "Qual a diferença entre uma entrega e um marco (milestone)?",
            answer: "Uma entrega é um resultado tangível (ex: um protótipo). Um marco é um ponto no tempo que representa a conclusão de um conjunto de entregas ou uma fase importante, e não tem duração. É uma 'foto' no cronograma."
        },
        {
            id: 7,
            title: "Quanto?",
            tip: "Quanto vai custar a brincadeira?",
            description: "Define os recursos financeiros do projeto, incluindo os custos e as fontes de receita ou economia esperadas.",
            topics: ["Custos", "Fontes de Receita", "Retorno sobre Investimento"],
            topicsDetails: [
                { title: "Custos", content: "<p>Liste os principais custos envolvidos: pessoal, ferramentas, marketing, infraestrutura, etc.</p>" },
                { title: "Fontes de Receita", content: "<p>Como este projeto vai gerar dinheiro? (Venda direta, assinaturas, economia de custos operacionais).</p>" },
                { title: "Retorno sobre Investimento (ROI)", content: "<p>Uma estimativa inicial de como os benefícios financeiros se comparam aos custos.</p>" }
            ],
            question: "Por que 'economia de custos' é considerada uma fonte de receita neste bloco?",
            answer: "Porque, do ponto de vista financeiro, um real economizado tem o mesmo impacto positivo no balanço da empresa que um real ganho. Se um projeto automatiza uma tarefa e economiza R$10.000 por mês, esse é o seu retorno."
        },
        {
            id: 8,
            title: "Quem?",
            tip: "Quem está no barco com você?",
            description: "Define a equipe principal do projeto e suas responsabilidades.",
            topics: ["Gerente de Projeto", "Equipe Principal", "Stakeholders Chave"],
            topicsDetails: [
                { title: "Gerente de Projeto", content: "<p>Quem é o responsável final pelo sucesso do projeto?</p>" },
                { title: "Equipe Principal", content: "<p>Liste os membros chave da equipe e suas principais competências (ex: Desenvolvedor front-end, Designer UX).</p>" },
                { title: "Stakeholders Chave", content: "<p>Além do patrocinador e clientes, quem mais precisa ser gerenciado de perto?</p>" }
            ],
            question: "Qual a diferença entre os blocos 'Para Quem?' e 'Quem?'",
            answer: "O bloco 'Para Quem?' foca nos beneficiários e impactados pelo **produto** do projeto (clientes, usuários). O bloco 'Quem?' foca nas pessoas que irão **executar** o projeto (a equipe)."
        },
        {
            id: 9,
            title: "Riscos",
            tip: "O que pode dar terrivelmente errado?",
            description: "Identifica as principais incertezas e ameaças que podem comprometer o sucesso do projeto.",
            topics: ["Riscos de Negócio", "Riscos Técnicos", "Riscos de Recursos"],
            topicsDetails: [
                { title: "Riscos de Negócio", content: "<p>E se o mercado mudar? E se um concorrente lançar algo similar?</p>" },
                { title: "Riscos Técnicos", content: "<p>E se a tecnologia escolhida não funcionar como esperado? E se a integração com outro sistema falhar?</p>" },
                { title: "Riscos de Recursos", content: "<p>E se um membro chave da equipe sair do projeto? E se o orçamento for cortado?</p>" }
            ],
            question: "Após listar os riscos, qual é o próximo passo lógico?",
            answer: "O próximo passo é analisá-los em termos de probabilidade e impacto, e então definir um plano de resposta para os mais críticos (mitigar, aceitar, transferir ou evitar)."
        },
        {
            id: 10,
            title: "Premissas",
            tip: "As verdades que você assume para poder começar.",
            description: "Lista as suposições que estão sendo feitas e que são consideradas verdadeiras para que o planejamento seja válido.",
            topics: ["Premissas de Negócio", "Premissas Técnicas", "Validação"],
            topicsDetails: [
                { title: "Premissas de Negócio", content: "<p>Ex: 'Assumimos que os clientes estão dispostos a pagar R$X pelo serviço'.</p>" },
                { title: "Premissas Técnicas", content: "<p>Ex: 'Assumimos que a API do fornecedor Y estará disponível 99.9% do tempo'.</p>" },
                { title: "Validação", content: "<p>Uma premissa é um risco disfarçado. O objetivo é validar essas suposições o mais rápido possível para reduzir a incerteza do projeto.</p>" }
            ],
            question: "Qual a relação entre uma premissa e um risco?",
            answer: "Uma premissa é uma suposição que você toma como verdadeira. O risco associado é a possibilidade de essa premissa se provar falsa, e o impacto que isso teria no projeto."
        },
        {
            id: 11,
            title: "Restrições",
            tip: "As regras do jogo que você não pode quebrar.",
            description: "Fatores limitantes que afetam a execução do projeto e que devem ser respeitados.",
            topics: ["Orçamento Fixo", "Prazo Inegociável", "Recursos Limitados"],
            topicsDetails: [
                { title: "Orçamento Fixo", content: "<p>O projeto não pode ultrapassar um determinado valor.</p>" },
                { title: "Prazo Inegociável", content: "<p>A entrega deve ocorrer até uma data específica, sem exceções.</p>" },
                { title: "Recursos Limitados", content: "<p>A equipe disponível é pequena ou há limitações de equipamento.</p>" }
            ],
            question: "Como as restrições impactam a flexibilidade do gerente de projeto?",
            answer: "Elas reduzem drasticamente a margem de manobra. Com restrições fortes em custo, tempo e escopo, o gerente de projeto tem menos opções para lidar com imprevistos e precisa ser extremamente eficiente no gerenciamento."
        },
        {
            id: 12,
            title: "Grupo de Entregas",
            tip: "Dividir para conquistar.",
            description: "Agrupa as entregas principais em conjuntos lógicos que podem ser planejados e executados em fases ou Sprints.",
            topics: ["Fase 1: MVP", "Fase 2: Expansão", "Lançamento"],
            topicsDetails: [
                { title: "Fase 1: MVP (Produto Mínimo Viável)", content: "<p>Quais são as entregas essenciais para lançar a primeira versão funcional do produto?</p>" },
                { title: "Fase 2: Expansão", content: "<p>Quais entregas virão após o MVP, adicionando novas funcionalidades e melhorias?</p>" },
                { title: "Lançamento", content: "<p>Quais são as entregas relacionadas ao lançamento em si, como marketing, treinamento, etc.?" }
            ],
            question: "Por que agrupar entregas é útil em um planejamento ágil?",
            answer: "Porque permite focar o esforço da equipe em um conjunto coeso de funcionalidades por vez (como em uma Sprint), entregando valor de forma incremental e permitindo feedback mais rápido, em vez de tentar fazer tudo de uma vez."
        },
        {
            id: 13,
            title: "O Canvas Vivo",
            tip: "Não é um documento, é uma ferramenta.",
            description: "O Project Model Canvas não é para ser preenchido uma vez e esquecido. Ele deve ser um documento vivo, revisado e atualizado constantemente.",
            topics: ["Ferramenta de Comunicação", "Revisão Periódica", "Adaptação"],
            topicsDetails: [
                { title: "Ferramenta de Comunicação", content: "<p>Use o canvas para comunicar o estado e a direção do projeto para toda a equipe e stakeholders de forma rápida e visual.</p>" },
                { title: "Revisão Periódica", content: "<p>Revise o canvas no início de cada fase ou Sprint. As premissas ainda são válidas? Os riscos mudaram?</p>" },
                { title: "Adaptação", content: "<p>Se o contexto mudar, não tenha medo de atualizar o canvas. É uma ferramenta para guiar a adaptação, não para engessar o projeto.</p>" }
            ],
            question: "Com que frequência o PMC deve ser revisado?",
            answer: "Não há uma regra fixa, mas uma boa prática é revisá-lo em momentos-chave: no início e fim de cada Sprint (em projetos ágeis) ou fase (em projetos tradicionais), ou sempre que ocorrer uma mudança significativa que impacte os pilares do projeto."
        }
    ]
};
