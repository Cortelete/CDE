// Arquivo: data/pmc.js
// Contém os dados para o baralho "Project Model Canvas" com 'details' reestruturado.

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
            description: "Contém as justificativas e o problema que o projeto visa resolver.",
            topics: ["Problema/Oportunidade", "Objetivos do Projeto", "Justificativa"],
            topicsDetails: [
                { title: "Problema/Oportunidade", content: "Descreve a dor do cliente ou oportunidade que motivou o projeto." },
                { title: "Objetivos do Projeto", content: "Define as metas finais que se espera alcançar." },
                { title: "Justificativa", content: "Mostra por que esse projeto é importante e estratégico." }
            ],
            question: "Por que o bloco 'Por Quê?' é o primeiro a ser preenchido no PMC?",
            answer: "Porque ele estabelece o propósito fundamental do projeto. Sem uma compreensão clara do problema a ser resolvido, todas as outras seções perdem o sentido.",
            details: {
                subtitle: "// A Origem do Propósito:",
                points: [
                    "<strong>Problema/Oportunidade:</strong> Descreve a dor ou oportunidade que gerou o projeto.",
                    "<strong>Objetivos:</strong> Define o que se espera alcançar com o projeto.",
                    "<strong>Justificativa:</strong> Alinha o projeto com a estratégia da organização."
                ]
            }
        },
        {
            id: 2,
            title: "O Quê?",
            tip: "O que você vai entregar de fato?",
            description: "Descreve o produto final do projeto, a solução para o problema.",
            topics: ["Produto do Projeto", "Requisitos", "Critérios de Aceitação"],
            topicsDetails: [
                { title: "Produto do Projeto", content: "Descreve o que será criado (software, evento, serviço etc)." },
                { title: "Requisitos", content: "Lista as funcionalidades e necessidades essenciais." },
                { title: "Critérios de Aceitação", content: "Define como saberemos se o produto está pronto." }
            ],
            question: "Qual a relação entre o bloco 'O Quê?' e o escopo do projeto?",
            answer: "O bloco 'O Quê?' define o escopo do produto, base para detalhar o escopo do projeto.",
            details: {
                subtitle: "// O Escopo da Entrega:",
                points: [
                    "<strong>Produto:</strong> O que será criado como solução.",
                    "<strong>Requisitos:</strong> Funcionalidades que o produto deve ter.",
                    "<strong>Critérios de Aceitação:</strong> Como saber se o produto está concluído."
                ]
            }
        },
        {
            id: 3,
            title: "Para Quem?",
            tip: "Se você tenta agradar a todos, não agrada a ninguém.",
            description: "Identifica as partes interessadas do projeto.",
            topics: ["Clientes/Usuários", "Patrocinador", "Equipe"],
            topicsDetails: [
                { title: "Clientes/Usuários", content: "Quem usará o produto final e suas necessidades." },
                { title: "Patrocinador", content: "Quem financia o projeto e aprova suas direções." },
                { title: "Equipe", content: "Quem executa o trabalho e suas responsabilidades." }
            ],
            question: "Por que é importante diferenciar 'cliente' de 'usuário'?",
            answer: "Porque quem paga pelo projeto nem sempre é quem usa. As necessidades de ambos devem ser entendidas.",
            details: {
                subtitle: "// Os Impactados e Beneficiados:",
                points: [
                    "<strong>Clientes/Usuários:</strong> Quem será afetado e usará o produto.",
                    "<strong>Patrocinador:</strong> Quem aprova e financia o projeto.",
                    "<strong>Equipe:</strong> Pessoas que executarão o trabalho."
                ]
            }
        },
        {
            id: 4,
            title: "Como?",
            tip: "O plano de ataque. Como sairemos do ponto A para o B?",
            description: "Define as entregas principais, fases e abordagem de execução.",
            topics: ["Entregas Principais", "Fases ou Macro-atividades", "Não-Escopo"],
            topicsDetails: [
                { title: "Entregas Principais", content: "Pacotes principais que serão desenvolvidos." },
                { title: "Fases ou Macro-atividades", content: "Etapas maiores ou método de execução (ágil, cascata etc)." },
                { title: "Não-Escopo", content: "O que explicitamente não será feito." }
            ],
            question: "Para que serve a seção 'Não-Escopo'?",
            answer: "Para evitar mal-entendidos e alinhar expectativas com stakeholders.",
            details: {
                subtitle: "// A Estratégia de Execução:",
                points: [
                    "<strong>Entregas:</strong> Grandes blocos a serem produzidos.",
                    "<strong>Fases:</strong> Como o trabalho será dividido ao longo do tempo.",
                    "<strong>Não-Escopo:</strong> O que está fora do escopo para evitar escopo oculto."
                ]
            }
        },
        {
            id: 5,
            title: "Onde?",
            tip: "Onde o projeto vive e respira.",
            description: "Define o ambiente e as interações externas necessárias.",
            topics: ["Sistemas e Plataformas", "Dependências Externas", "Infraestrutura"],
            topicsDetails: [
                { title: "Sistemas e Plataformas", content: "Integrações com sistemas existentes." },
                { title: "Dependências Externas", content: "Outros times, fornecedores, serviços externos." },
                { title: "Infraestrutura", content: "Onde o projeto será hospedado ou executado." }
            ],
            question: "Por que mapear dependências externas é crucial?",
            answer: "Porque são riscos potenciais. Atrasos externos impactam diretamente o cronograma.",
            details: {
                subtitle: "// O Contexto de Execução:",
                points: [
                    "<strong>Sistemas:</strong> Com o que o projeto se conecta.",
                    "<strong>Dependências:</strong> De quem dependemos para entregar.",
                    "<strong>Infraestrutura:</strong> Ambiente onde o projeto funcionará."
                ]
            }
        },
        {
            id: 6,
            title: "Quando?",
            tip: "O tempo é implacável.",
            description: "Define marcos, cronograma e restrições temporais.",
            topics: ["Marcos", "Cronograma Preliminar", "Restrições de Tempo"],
            topicsDetails: [
                { title: "Marcos", content: "Eventos importantes como entregas, lançamentos, validações." },
                { title: "Cronograma Preliminar", content: "Visão geral das fases e prazos." },
                { title: "Restrições de Tempo", content: "Limites inegociáveis de tempo." }
            ],
            question: "Qual a diferença entre entrega e marco?",
            answer: "Entrega é um produto. Marco é um ponto no tempo que marca um progresso.",
            details: {
                subtitle: "// O Ritmo do Projeto:",
                points: [
                    "<strong>Marcos:</strong> Pontos críticos de verificação.",
                    "<strong>Cronograma:</strong> Linha do tempo prevista.",
                    "<strong>Restrições:</strong> Prazos que não podem ser alterados."
                ]
            }
        },
        {
            id: 7,
            title: "Quanto?",
            tip: "Quanto vai custar a brincadeira?",
            description: "Orçamento, fontes de receita e retorno esperado.",
            topics: ["Custos", "Fontes de Receita", "Retorno sobre Investimento"],
            topicsDetails: [
                { title: "Custos", content: "Principais gastos envolvidos no projeto." },
                { title: "Fontes de Receita", content: "Como o projeto trará retorno." },
                { title: "Retorno sobre Investimento", content: "Comparação entre custo e benefício." }
            ],
            question: "Por que economia de custos é considerada receita?",
            answer: "Porque o impacto financeiro positivo é o mesmo: mais dinheiro no caixa.",
            details: {
                subtitle: "// O Investimento no Projeto:",
                points: [
                    "<strong>Custos:</strong> O que será gasto.",
                    "<strong>Receita:</strong> O que será ganho ou economizado.",
                    "<strong>ROI:</strong> O retorno financeiro esperado."
                ]
            }
        },
        {
            id: 8,
            title: "Quem?",
            tip: "Quem está no barco com você?",
            description: "Define os principais responsáveis pela execução.",
            topics: ["Gerente de Projeto", "Equipe Principal", "Stakeholders Chave"],
            topicsDetails: [
                { title: "Gerente de Projeto", content: "Responsável pela entrega do projeto." },
                { title: "Equipe Principal", content: "Membros principais e suas funções." },
                { title: "Stakeholders Chave", content: "Quem precisa ser monitorado de perto." }
            ],
            question: "Qual a diferença entre 'Para Quem?' e 'Quem?'",
            answer: "'Para Quem?' trata dos beneficiários, 'Quem?' dos executores.",
            details: {
                subtitle: "// A Força de Trabalho:",
                points: [
                    "<strong>Gerente:</strong> Responsável pela entrega e coordenação.",
                    "<strong>Equipe:</strong> Membros principais que farão o trabalho.",
                    "<strong>Stakeholders Chave:</strong> Pessoas com influência crítica no sucesso."
                ]
            }
        },
        {
            id: 9,
            title: "Riscos",
            tip: "O que pode dar terrivelmente errado?",
            description: "Incertezas que podem comprometer o sucesso do projeto.",
            topics: ["Riscos de Negócio", "Riscos Técnicos", "Riscos de Recursos"],
            topicsDetails: [
                { title: "Riscos de Negócio", content: "Mudança de mercado, concorrência, demanda." },
                { title: "Riscos Técnicos", content: "Tecnologia falha, integração impossível." },
                { title: "Riscos de Recursos", content: "Equipe reduzida, falta de verba." }
            ],
            question: "O que fazer após listar os riscos?",
            answer: "Avaliar impacto e probabilidade, e criar planos de mitigação.",
            details: {
                subtitle: "// Lidando com a Incerteza:",
                points: [
                    "<strong>Negócio:</strong> Mudanças externas que afetam o projeto.",
                    "<strong>Técnico:</strong> Dificuldades tecnológicas previstas.",
                    "<strong>Recursos:</strong> Falta de pessoal ou orçamento."
                ]
            }
        },
        {
            id: 10,
            title: "Premissas",
            tip: "As verdades que você assume para poder começar.",
            description: "Hipóteses feitas que precisam ser verdadeiras.",
            topics: ["Premissas de Negócio", "Premissas Técnicas", "Validação"],
            topicsDetails: [
                { title: "Premissas de Negócio", content: "Ex: clientes estão dispostos a pagar." },
                { title: "Premissas Técnicas", content: "Ex: a API do fornecedor funcionará." },
                { title: "Validação", content: "Ações para confirmar que as premissas são reais." }
            ],
            question: "Qual a relação entre premissas e riscos?",
            answer: "Se a premissa for falsa, vira risco. Validá-las é reduzir incertezas.",
            details: {
                subtitle: "// Assumindo para Agir:",
                points: [
                    "<strong>Negócio:</strong> Suposições sobre o mercado.",
                    "<strong>Técnico:</strong> Suposições sobre tecnologia.",
                    "<strong>Validação:</strong> Estratégias para checar premissas."
                ]
            }
        },
        {
            id: 11,
            title: "Restrições",
            tip: "As regras do jogo que você não pode quebrar.",
            description: "Limites que afetam o projeto e não podem ser ignorados.",
            topics: ["Orçamento Fixo", "Prazo Inegociável", "Recursos Limitados"],
            topicsDetails: [
                { title: "Orçamento Fixo", content: "Não ultrapassar o valor definido." },
                { title: "Prazo Inegociável", content: "Data final que deve ser respeitada." },
                { title: "Recursos Limitados", content: "Equipe ou equipamentos reduzidos." }
            ],
            question: "Como as restrições impactam a flexibilidade do gerente?",
            answer: "Elas reduzem as opções de manobra, exigindo mais eficiência.",
            details: {
                subtitle: "// As Fronteiras do Projeto:",
                points: [
                    "<strong>Orçamento:</strong> Valor máximo disponível.",
                    "<strong>Prazo:</strong> Data final obrigatória.",
                    "<strong>Recursos:</strong> Limitações físicas ou humanas."
                ]
            }
        },
        {
            id: 12,
            title: "Grupo de Entregas",
            tip: "Dividir para conquistar.",
            description: "Agrupa entregas em fases ou ciclos.",
            topics: ["Fase 1: MVP", "Fase 2: Expansão", "Lançamento"],
            topicsDetails: [
                { title: "Fase 1: MVP", content: "O mínimo viável para validar o produto." },
                { title: "Fase 2: Expansão", content: "Funcionalidades extras e melhorias." },
                { title: "Lançamento", content: "Marketing, suporte e treinamento para ir ao ar." }
            ],
            question: "Por que agrupar entregas é útil em projetos ágeis?",
            answer: "Permite foco em valor incremental e feedback rápido.",
            details: {
                subtitle: "// Fases de Entrega:",
                points: [
                    "<strong>MVP:</strong> Primeira entrega funcional.",
                    "<strong>Expansão:</strong> Incrementos adicionais.",
                    "<strong>Lançamento:</strong> Divulgação e ativação do produto."
                ]
            }
        },
        {
            id: 13,
            title: "O Canvas Vivo",
            tip: "Não é um documento, é uma ferramenta.",
            description: "Deve ser revisto e adaptado constantemente.",
            topics: ["Ferramenta de Comunicação", "Revisão Periódica", "Adaptação"],
            topicsDetails: [
                { title: "Ferramenta de Comunicação", content: "Compartilhar o status e visão do projeto." },
                { title: "Revisão Periódica", content: "Revisar a cada fase ou sprint." },
                { title: "Adaptação", content: "Atualizar conforme mudanças no contexto." }
            ],
            question: "Com que frequência o PMC deve ser revisado?",
            answer: "Ao final de cada sprint/fase ou diante de grandes mudanças.",
            details: {
                subtitle: "// Mantendo o Canvas Atual:",
                points: [
                    "<strong>Comunicação:</strong> Facilita entendimento por todos.",
                    "<strong>Revisão:</strong> Garante alinhamento com a realidade.",
                    "<strong>Adaptação:</strong> Permite responder a mudanças."
                ]
            }
        }
    ]
};
