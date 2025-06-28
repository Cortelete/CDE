// Arquivo: data/direitoMilitarAvancado.js
// Contém dados avançados para o deck "Direito Militar - Avançado" com foco nas leis e normas atualizadas em 2025.

export const direitoMilitarAvancado = {
    title: "Direito Militar Avançado",
    theme: "yellow",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M12 2L2 7v7c0 5 10 8 10 8s10-3 10-8V7l-10-5z"/></svg>`,
    summary: "Conteúdo avançado sobre Direito Militar brasileiro, com foco em legislação, jurisprudência e normas atualizadas.",
    cards: [
        {
            id: 1,
            title: "Estrutura Jurídica do Estatuto dos Militares",
            tip: "Lei nº 6.880/1980 - Fundamento básico do regime jurídico militar.",
            description: "O Estatuto dos Militares (Lei nº 6.880/1980) regula direitos, deveres, regime disciplinar e responsabilidades dos militares das Forças Armadas, constituindo a base do Direito Militar brasileiro.",
            topics: ["Direitos e Deveres", "Regime Disciplinar", "Responsabilidades"],
            topicsDetails: [
                { title: "Art. 1º da Lei 6.880/1980", content: "<p>Define que os militares das Forças Armadas estão sujeitos a este estatuto.</p>" },
                { title: "Direitos e Deveres", content: "<p>Regulamenta direitos como assistência médica e deveres como obediência hierárquica.</p>" },
                { title: "Regime Disciplinar", content: "<p>Preve punições para infrações disciplinares, incluindo advertência, detenção e exclusão.</p>" }
            ],
            question: "Qual é a importância do Estatuto dos Militares no Direito Militar brasileiro?",
            answer: "Ele estabelece o regime jurídico que disciplina a carreira, direitos, deveres e responsabilidades dos militares, garantindo organização e disciplina.",
            details: {
                subtitle: "// Destaques do Estatuto:",
                points: [
                    "Base legal fundamental para militares.",
                    "Regula direitos, deveres e disciplina.",
                    "Estabelece punições e responsabilidades."
                ]
            }
        },
        {
            id: 2,
            title: "Competência do Superior Tribunal Militar (STM)",
            tip: "Órgão máximo da Justiça Militar da União.",
            description: "O STM é o tribunal superior responsável pelo julgamento dos crimes militares da União e pelo controle da constitucionalidade no âmbito militar, conforme previsto na Constituição Federal e na Lei nº 8.457/1992.",
            topics: ["Competência Penal", "Competência Constitucional", "Composição"],
            topicsDetails: [
                { title: "Art. 124 da Constituição Federal", content: "<p>Define a competência do STM para julgar crimes militares definidos em lei.</p>" },
                { title: "Lei nº 8.457/1992", content: "<p>Regulamenta a organização do STM e procedimentos.</p>" },
                { title: "Composição", content: "<p>Formado por 15 ministros, entre civis e militares, nomeados pelo Presidente da República.</p>" }
            ],
            question: "Quais são as principais competências do STM no Brasil?",
            answer: "Julgar crimes militares da União, controlar constitucionalidade em âmbito militar e uniformizar jurisprudência na Justiça Militar.",
            details: {
                subtitle: "// Funções do STM:",
                points: [
                    "Julgamento de crimes militares da União.",
                    "Controle de constitucionalidade militar.",
                    "Composição mista (civis e militares)."
                ]
            }
        },
        {
            id: 3,
            title: "Direito Penal Militar e Crimes de Guerra",
            tip: "Regulação dos crimes em situação de conflito armado.",
            description: "O Direito Penal Militar também contempla normas específicas para crimes cometidos em situações de guerra, respeitando o Direito Internacional Humanitário e tratados ratificados pelo Brasil.",
            topics: ["Crimes de Guerra", "Convenções de Genebra", "Responsabilidade Penal"],
            topicsDetails: [
                { title: "Artigos do Código Penal Militar", content: "<p>Disciplinam crimes como desobediência em combate, traição e espionagem.</p>" },
                { title: "Direito Internacional Humanitário", content: "<p>Convenções de Genebra aplicáveis a conflitos armados e proteção de civis.</p>" },
                { title: "Responsabilidade Penal", content: "<p>Militares podem ser responsabilizados por crimes internacionais em tribunais nacionais ou internacionais.</p>" }
            ],
            question: "Como o Direito Penal Militar brasileiro trata os crimes de guerra?",
            answer: "Inclui tipos penais específicos, respeita tratados internacionais e prevê responsabilização para atos que violam as leis de guerra.",
            details: {
                subtitle: "// Aspectos essenciais:",
                points: [
                    "Crimes previstos no Código Penal Militar.",
                    "Respeito às Convenções de Genebra.",
                    "Responsabilidade penal nacional e internacional."
                ]
            }
        },
        {
            id: 4,
            title: "Aplicação da Lei Penal Militar a Civis",
            tip: "Casos excepcionais de competência militar sobre civis.",
            description: "Em certas situações previstas na Constituição e no Código Penal Militar, civis podem ser julgados pela Justiça Militar, como em crimes conexos ou quando o crime ocorre durante estado de defesa ou sítio.",
            topics: ["Constituição Federal", "Código Penal Militar", "Jurisprudência"],
            topicsDetails: [
                { title: "Art. 125, § 4º da CF", content: "<p>Determina o julgamento de civis pela Justiça Militar apenas em casos de crimes militares definidos em lei.</p>" },
                { title: "Art. 9º do Código Penal Militar", content: "<p>Define os crimes militares contra a segurança externa e interna do país.</p>" },
                { title: "Jurisprudência do STM", content: "<p>Orientações sobre quando civis podem ser submetidos à Justiça Militar.</p>" }
            ],
            question: "Quando civis podem ser julgados pela Justiça Militar no Brasil?",
            answer: "Em casos específicos de crimes militares definidos em lei, principalmente durante estado de defesa ou de sítio, ou quando houver conexão com crimes militares.",
            details: {
                subtitle: "// Aplicação excepcional:",
                points: [
                    "Base constitucional e legal rigorosa.",
                    "Restrições para preservar direitos civis.",
                    "Casos raros e específicos."
                ]
            }
        },
        {
            id: 5,
            title: "Regime Disciplinar e Sanções Penais Militares",
            tip: "Punições e procedimentos no âmbito militar.",
            description: "O regime disciplinar militar prevê sanções específicas para infrações cometidas por militares, que vão desde advertências até penas privativas de liberdade, respeitando garantias processuais.",
            topics: ["Sanções Disciplinares", "Processo Administrativo Militar", "Garantias Constitucionais"],
            topicsDetails: [
                { title: "Lei nº 6.880/1980 - Art. 34", content: "<p>Estabelece as penalidades disciplinares, como advertência, repreensão, prisão e exclusão.</p>" },
                { title: "Processo Administrativo Militar", content: "<p>Procedimentos para apuração das infrações e direito à defesa.</p>" },
                { title: "Garantias Constitucionais", content: "<p>Direito ao contraditório, ampla defesa e devido processo legal.</p>" }
            ],
            question: "Quais são as principais sanções aplicáveis a militares por infrações disciplinares?",
            answer: "Advertência, repreensão, prisão disciplinar e exclusão das Forças Armadas, respeitando o devido processo legal.",
            details: {
                subtitle: "// Punições e procedimentos:",
                points: [
                    "Sanções graduadas conforme gravidade.",
                    "Processos administrativos e judiciais.",
                    "Garantias constitucionais asseguradas."
                ]
            }
        },
        {
            id: 6,
            title: "Direito Militar e Direitos Humanos",
            tip: "Compatibilização entre disciplina militar e direitos fundamentais.",
            description: "O Direito Militar deve respeitar os direitos humanos, garantindo que a disciplina e hierarquia não violem garantias fundamentais previstas na Constituição e tratados internacionais ratificados pelo Brasil.",
            topics: ["Constituição Federal", "Tratados Internacionais", "Aplicação Prática"],
            topicsDetails: [
                { title: "Art. 5º da CF", content: "<p>Garantia dos direitos e garantias fundamentais para todos, incluindo militares.</p>" },
                { title: "Tratados de Direitos Humanos", content: "<p>Convenções e pactos internacionais que o Brasil integra.</p>" },
                { title: "Aplicação no Direito Militar", content: "<p>Respeito a garantias durante processos disciplinares e criminais.</p>" }
            ],
            question: "Como o Direito Militar brasileiro assegura o respeito aos direitos humanos?",
            answer: "Integrando os direitos e garantias constitucionais e internacionais ao regime disciplinar e processual militar, garantindo proteção legal mesmo no âmbito militar.",
            details: {
                subtitle: "// Compatibilização essencial:",
                points: [
                    "Direitos garantidos pela Constituição.",
                    "Tratados internacionais incorporados.",
                    "Proteção mesmo na disciplina militar."
                ]
            }
        },
        {
            id: 7,
            title: "Estado de Defesa, Estado de Sítio e Direito Militar",
            tip: "Medidas excepcionais e seu impacto no Direito Militar.",
            description: "Durante o estado de defesa ou sítio, o Direito Militar ganha relevância, podendo ampliar a competência da Justiça Militar e o rigor na disciplina, conforme previsto na Constituição Federal (arts. 136 e 137).",
            topics: ["Estado de Defesa", "Estado de Sítio", "Competência Militar"],
            topicsDetails: [
                { title: "Art. 136 da CF", content: "<p>Disciplina o estado de defesa e suas medidas.</p>" },
                { title: "Art. 137 da CF", content: "<p>Regula o estado de sítio e restrições de direitos.</p>" },
                { title: "Ampliação da Justiça Militar", content: "<p>Maior atuação da Justiça Militar em crimes durante esses períodos.</p>" }
            ],
            question: "Qual o impacto do estado de defesa e do estado de sítio no Direito Militar?",
            answer: "Há ampliação da competência da Justiça Militar, podendo incluir civis e aumento das medidas disciplinares para manter a ordem e segurança nacional.",
            details: {
                subtitle: "// Medidas excepcionais:",
                points: [
                    "Ampliação da Justiça Militar.",
                    "Possível julgamento de civis pela Justiça Militar.",
                    "Restrição temporária de direitos."
                ]
            }
        },
        {
            id: 8,
            title: "Jurisprudência Relevante do Superior Tribunal Militar",
            tip: "Decisões que impactam a aplicação do Direito Militar.",
            description: "O STM emite decisões que uniformizam a interpretação das leis militares, influenciando diretamente a prática jurídica e a disciplina nas Forças Armadas.",
            topics: ["Precedentes", "Habeas Corpus", "Revisão Criminal"],
            topicsDetails: [
                { title: "Precedentes vinculantes", content: "<p>Decisões que orientam tribunais inferiores e instâncias militares.</p>" },
                { title: "Habeas Corpus no STM", content: "<p>Instrumento para proteger direitos fundamentais de militares.</p>" },
                { title: "Revisão Criminal", content: "<p>Possibilidade de revisão de sentenças condenatórias.</p>" }
            ],
            question: "Qual a importância da jurisprudência do STM para o Direito Militar?",
            answer: "Garante uniformidade na aplicação das leis, proteção dos direitos dos militares e segurança jurídica no âmbito militar.",
            details: {
                subtitle: "// STM e Direito Militar:",
                points: [
                    "Orientação para tribunais militares.",
                    "Proteção jurídica para militares.",
                    "Estabilidade e segurança jurídica."
                ]
            }
        },
        {
            id: 9,
            title: "Direitos Trabalhistas e Regime Jurídico dos Militares",
            tip: "Distinção entre regime estatutário militar e direito do trabalho.",
            description: "Militares das Forças Armadas não são regidos pela Consolidação das Leis do Trabalho (CLT), mas pelo regime estatutário previsto no Estatuto dos Militares, com direitos e deveres próprios.",
            topics: ["Regime Estatutário", "Não Aplicação da CLT", "Direitos Previdenciários"],
            topicsDetails: [
                { title: "Regime Estatutário", content: "<p>Prevalece o Estatuto dos Militares para direitos, deveres e regime disciplinar.</p>" },
                { title: "Exclusão da CLT", content: "<p>Militares não têm direito a greve ou contrato de trabalho típico da CLT.</p>" },
                { title: "Previdência Militar", content: "<p>Regime próprio de aposentadoria e pensões.</p>" }
            ],
            question: "Por que militares não são regidos pela CLT no Brasil?",
            answer: "Porque possuem regime jurídico próprio para garantir disciplina, hierarquia e funcionamento específico das Forças Armadas.",
            details: {
                subtitle: "// Regime jurídico especial:",
                points: [
                    "Estatuto dos Militares como base legal.",
                    "Exclusão da CLT e direitos típicos do trabalho.",
                    "Regime previdenciário próprio."
                ]
            }
        },
        {
            id: 10,
            title: "Crimes contra a Administração Militar",
            tip: "Infrações penais específicas que atentam contra o funcionamento militar.",
            description: "O Código Penal Militar prevê crimes contra a administração militar, como corrupção, peculato, prevaricação, abuso de autoridade e outros, visando proteger a moralidade e eficiência das Forças Armadas.",
            topics: ["Corrupção", "Peculato", "Abuso de Autoridade", "Penalidades"],
            topicsDetails: [
                { title: "Artigos 312 a 326 do CPM", content: "<p>Disciplinam crimes contra a administração pública militar.</p>" },
                { title: "Corrupção e Peculato", content: "<p>Condutas que envolvem desvio, fraude e enriquecimento ilícito.</p>" },
                { title: "Abuso de Autoridade", content: "<p>Uso indevido do poder conferido para fins ilegítimos.</p>" }
            ],
            question: "Quais são os principais crimes contra a administração militar previstos no Código Penal Militar?",
            answer: "Corrupção, peculato, prevaricação e abuso de autoridade, com penalidades que podem incluir detenção e exclusão do serviço militar.",
            details: {
                subtitle: "// Crimes administrativos militares:",
                points: [
                    "Protegem a moralidade das Forças Armadas.",
                    "Incluem corrupção e abuso de poder.",
                    "Sanções severas para manter a ordem."
                ]
            }
        }
    ]
};
