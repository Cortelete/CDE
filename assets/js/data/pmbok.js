// Arquivo: data/pmbok.js
// Contém os dados para o baralho do "Guia PMBOK", com o campo 'details' reestruturado.

export const pmbok = {
    title: "Guia PMBOK",
    theme: "slate",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    summary: "Uma imersão profunda nas 10 áreas de conhecimento que sustentam a gestão de projetos profissional.",
    cards: [
        {
            id: 1,
            title: "Gestão da Integração",
            tip: "O maestro da orquestra do projeto.",
            description: "Coordena todas as partes do projeto, garantindo que tudo funcione em harmonia.",
            topics: ["Termo de Abertura", "Plano de GP", "Controle de Mudanças"],
            topicsDetails: [
                { title: "Termo de Abertura", content: "Documento que formalmente autoriza o projeto e dá autoridade ao gerente." },
                { title: "Plano de GP", content: "O plano mestre que consolida todos os outros planos." },
                { title: "Controle de Mudanças", content: "Processo para gerenciar e avaliar o impacto de todas as mudanças solicitadas." }
            ],
            question: "Qual o principal processo da Gestão da Integração?",
            answer: "O Desenvolvimento do Plano de Gerenciamento do Projeto, pois ele integra todos os outros planos em um guia coeso para a execução.",
            details: {
                subtitle: "// O Papel do Maestro:",
                points: [
                    "<strong>Termo de Abertura:</strong> Documento que formalmente autoriza o projeto e dá autoridade ao gerente.",
                    "<strong>Plano de GP:</strong> O plano mestre que consolida todos os outros planos.",
                    "<strong>Controle de Mudanças:</strong> Processo para gerenciar e avaliar o impacto de todas as mudanças solicitadas."
                ]
            }
        },
        {
            id: 2,
            title: "Gestão do Escopo",
            tip: "Definindo as fronteiras do seu trabalho.",
            description: "Garante que o projeto inclua todo o trabalho necessário, e apenas o trabalho necessário, para ser concluído com sucesso.",
            topics: ["Coletar Requisitos", "Criar EAP", "Validar Escopo"],
            topicsDetails: [
                { title: "Coletar Requisitos", content: "O processo de determinar, documentar e gerenciar as necessidades e requisitos das partes interessadas." },
                { title: "Criar EAP", content: "A Estrutura Analítica do Projeto (WBS) que decompõe o escopo total em pacotes de trabalho gerenciáveis." },
                { title: "Validar Escopo", content: "A formalização da aceitação das entregas concluídas do projeto pelos stakeholders." }
            ],
            question: "O que é 'gold plating' e por que a Gestão de Escopo o evita?",
            answer: "'Gold plating' é adicionar funcionalidades extras que não foram solicitadas, na crença de que isso agradará o cliente. A Gestão de Escopo evita isso porque aumenta o risco, o custo e o tempo sem agregar valor formal ao projeto.",
            details: {
                subtitle: "// Definindo as Fronteiras:",
                points: [
                    "<strong>Coletar Requisitos:</strong> Determinar, documentar e gerenciar as necessidades das partes interessadas.",
                    "<strong>Criar EAP (WBS):</strong> Decompor o escopo total em pacotes de trabalho menores e gerenciáveis.",
                    "<strong>Validar Escopo:</strong> Obter a aceitação formal das entregas do projeto pelos stakeholders."
                ]
            }
        },
        {
            id: 3,
            title: "Gestão do Cronograma",
            tip: "A arte de não se atrasar.",
            description: "Envolve os processos necessários para gerenciar o término pontual do projeto.",
            topics: ["Definir Atividades", "Estimar Durações", "Caminho Crítico"],
            topicsDetails: [
                { title: "Definir Atividades", content: "Identificar e documentar as ações específicas a serem realizadas para produzir as entregas do projeto." },
                { title: "Estimar Durações", content: "Estimar o número de períodos de trabalho necessários para concluir atividades individuais." },
                { title: "Caminho Crítico", content: "A sequência de atividades que representa o caminho mais longo através do projeto, que determina a menor duração possível." }
            ],
            question: "O que acontece se uma atividade no caminho crítico atrasar?",
            answer: "Qualquer atraso em uma atividade do caminho crítico impactará diretamente a data de término do projeto, a menos que uma ação corretiva seja tomada.",
            details: {
                subtitle: "// Dominando o Tempo:",
                points: [
                    "<strong>Definir Atividades:</strong> Identificar as ações específicas para produzir as entregas.",
                    "<strong>Estimar Durações:</strong> Estimar o tempo necessário para cada atividade.",
                    "<strong>Caminho Crítico:</strong> A sequência de atividades mais longa que determina a duração total do projeto."
                ]
            }
        },
        {
            id: 4,
            title: "Gestão de Custos",
            tip: "Controlando o dinheiro do projeto.",
            description: "Inclui os processos envolvidos em planejar, estimar, orçar e controlar os custos de modo que o projeto possa ser terminado dentro do orçamento aprovado.",
            topics: ["Estimar Custos", "Determinar Orçamento", "Análise de Valor Agregado"],
            topicsDetails: [
                { title: "Estimar Custos", content: "O desenvolvimento de uma aproximação dos recursos monetários necessários para concluir as atividades do projeto." },
                { title: "Determinar Orçamento", content: "Agregar os custos estimados de atividades ou pacotes de trabalho individuais para estabelecer uma linha de base de custos autorizada." },
                { title: "Análise de Valor Agregado (EVA)", content: "Uma técnica que integra escopo, cronograma e recursos para medir o desempenho e o progresso do projeto." }
            ],
            question: "O que é a linha de base de custos (cost baseline)?",
            answer: "É a versão aprovada do orçamento do projeto, distribuída ao longo do tempo, que só pode ser alterada através de procedimentos formais de controle de mudanças e é usada como base para comparação com os resultados reais.",
            details: {
                subtitle: "// Gerindo o Orçamento:",
                points: [
                    "<strong>Estimar Custos:</strong> Desenvolver uma aproximação dos recursos financeiros necessários.",
                    "<strong>Determinar Orçamento:</strong> Agregar os custos estimados para estabelecer uma linha de base autorizada.",
                    "<strong>Análise de Valor Agregado (EVA):</strong> Medir o desempenho do projeto integrando escopo, cronograma e custos."
                ]
            }
        },
        {
            id: 5,
            title: "Gestão da Qualidade",
            tip: "Entregando o que foi prometido.",
            description: "Incorpora as políticas da organização relativas a planejamento, gerenciamento e controle dos requisitos de qualidade do projeto e do produto.",
            topics: ["Planejar Qualidade", "Gerenciar Qualidade", "Controlar Qualidade"],
            topicsDetails: [
                { title: "Planejar Qualidade", content: "Identificar os requisitos e/ou padrões de qualidade para o projeto e suas entregas." },
                { title: "Gerenciar Qualidade", content: "O processo de traduzir o plano de gerenciamento da qualidade em atividades de qualidade executáveis." },
                { title: "Controlar Qualidade", content: "O processo de monitorar e registrar os resultados da execução das atividades de qualidade para avaliar o desempenho." }
            ],
            question: "Qual a diferença entre 'Gerenciar a Qualidade' e 'Controlar a Qualidade'?",
            answer: "'Gerenciar a Qualidade' é focado no processo e na prevenção de defeitos (garantia da qualidade), enquanto 'Controlar a Qualidade' é focado no produto e na identificação de defeitos (inspeção).",
            details: {
                subtitle: "// Garantindo a Excelência:",
                points: [
                    "<strong>Planejar Qualidade:</strong> Identificar os requisitos e padrões de qualidade do projeto.",
                    "<strong>Gerenciar Qualidade:</strong> Traduzir o plano em atividades executáveis (foco no processo).",
                    "<strong>Controlar Qualidade:</strong> Monitorar os resultados para avaliar o desempenho (foco no produto)."
                ]
            }
        },
        {
            id: 6,
            title: "Gestão de Recursos",
            tip: "Lidando com pessoas e coisas.",
            description: "Inclui os processos para identificar, adquirir e gerenciar os recursos necessários para a conclusão bem-sucedida do projeto.",
            topics: ["Recursos Físicos", "Recursos Humanos", "Teorias Motivacionais"],
            topicsDetails: [
                { title: "Recursos Físicos", content: "Equipamentos, materiais, instalações e infraestrutura." },
                { title: "Recursos Humanos", content: "A equipe do projeto. Envolve planejar, adquirir, desenvolver e gerenciar a equipe." },
                { title: "Teorias Motivacionais", content: "Conceitos como a Hierarquia de Maslow ou a Teoria X e Y de McGregor são usados para entender e motivar a equipe do projeto." }
            ],
            question: "O que é o Gráfico de Responsabilidades (Matriz RACI)?",
            answer: "É uma matriz usada para definir os papéis e responsabilidades da equipe. RACI significa Responsible (quem faz), Accountable (quem aprova), Consulted (quem é consultado) e Informed (quem é informado).",
            details: {
                subtitle: "// Gerindo Pessoas e Materiais:",
                points: [
                    "<strong>Recursos Físicos:</strong> Gerenciar equipamentos, materiais, instalações e infraestrutura.",
                    "<strong>Recursos Humanos:</strong> Planejar, adquirir, desenvolver e gerenciar a equipe do projeto.",
                    "<strong>Teorias Motivacionais:</strong> Usar conceitos (Maslow, McGregor) para motivar a equipe."
                ]
            }
        },
        {
            id: 7,
            title: "Gestão das Comunicações",
            tip: "Garantindo que todos saibam o que precisam saber.",
            description: "Inclui os processos necessários para assegurar que as informações do projeto sejam planejadas, coletadas, criadas, distribuídas, armazenadas, recuperadas e dispostas de maneira oportuna e apropriada.",
            topics: ["Planejar Comunicações", "Gerenciar Comunicações", "Monitorar Comunicações"],
            topicsDetails: [
                { title: "Planejar Comunicações", content: "Desenvolver uma abordagem e um plano apropriados para as atividades de comunicação do projeto." },
                { title: "Gerenciar Comunicações", content: "O processo de garantir a coleta, criação e distribuição oportuna das informações do projeto." },
                { title: "Monitorar Comunicações", content: "O processo de garantir que as necessidades de informação do projeto e de suas partes interessadas sejam atendidas." }
            ],
            question: "Por que se diz que 90% do trabalho de um gerente de projetos é comunicação?",
            answer: "Porque o sucesso do projeto depende criticamente do alinhamento de expectativas, da resolução de conflitos, do reporte de status e da coordenação da equipe, todas atividades que são fundamentalmente baseadas em uma comunicação clara, eficaz e oportuna.",
            details: {
                subtitle: "// O Fluxo de Informação:",
                points: [
                    "<strong>Planejar Comunicações:</strong> Desenvolver um plano para as atividades de comunicação do projeto.",
                    "<strong>Gerenciar Comunicações:</strong> Garantir a coleta, criação e distribuição das informações.",
                    "<strong>Monitorar Comunicações:</strong> Garantir que as necessidades de informação de todos sejam atendidas."
                ]
            }
        },
        {
            id: 8,
            title: "Gestão de Riscos",
            tip: "O que pode dar errado (ou certo)?",
            description: "Inclui os processos de condução do planejamento, identificação, análise, planejamento de respostas, implementação de respostas e monitoramento de riscos em um projeto.",
            topics: ["Riscos Positivos e Negativos", "Análise Qualitativa", "Estratégias de Resposta"],
            topicsDetails: [
                { title: "Riscos Positivos e Negativos", content: "Riscos não são apenas ameaças (negativos), mas também oportunidades (positivos) que devem ser gerenciadas." },
                { title: "Análise Qualitativa", content: "Prioriza os riscos individuais do projeto para análise ou ação adicional, avaliando sua probabilidade de ocorrência e impacto." },
                { title: "Estratégias de Resposta", content: "Para ameaças: Prevenir, Transferir, Mitigar, Aceitar. Para oportunidades: Explorar, Compartilhar, Melhorar, Aceitar." }
            ],
            question: "O que é um 'gatilho' de risco (trigger)?",
            answer: "Um gatilho é um evento ou condição que indica que um risco está prestes a ocorrer ou já ocorreu. É um sinal de alerta que aciona a implementação de um plano de resposta ao risco.",
            details: {
                subtitle: "// Gerindo a Incerteza:",
                points: [
                    "<strong>Riscos Positivos e Negativos:</strong> Gerenciar tanto ameaças (riscos negativos) quanto oportunidades (riscos positivos).",
                    "<strong>Análise Qualitativa:</strong> Priorizar riscos com base na sua probabilidade e impacto.",
                    "<strong>Estratégias de Resposta:</strong> Planos para lidar com ameaças (prevenir, mitigar) e oportunidades (explorar, melhorar)."
                ]
            }
        },
        {
            id: 9,
            title: "Gestão de Aquisições",
            tip: "Comprando coisas e contratando gente.",
            description: "Inclui os processos necessários para comprar ou adquirir produtos, serviços ou resultados externos à equipe do projeto.",
            topics: ["Planejar Aquisições", "Conduzir Aquisições", "Controlar Aquisições"],
            topicsDetails: [
                { title: "Planejar Aquisições", content: "Documentar as decisões de aquisição do projeto, especificando a abordagem e identificando fornecedores em potencial." },
                { title: "Conduzir Aquisições", content: "O processo de obtenção de respostas de fornecedores, seleção de um fornecedor e adjudicação de um contrato." },
                { title: "Controlar Aquisições", content: "Gerenciar as relações de aquisição, monitorar o desempenho do contrato e fazer alterações e correções conforme apropriado." }
            ],
            question: "Qual a diferença entre um contrato de Preço Fixo e um de Custo Reembolsável?",
            answer: "Em um contrato de **Preço Fixo**, o preço do bem ou serviço é definido no início e não muda, colocando o risco no vendedor. Em um de **Custo Reembolsável**, o comprador paga ao vendedor todos os custos legítimos incorridos, mais uma taxa, colocando o risco no comprador.",
            details: {
                subtitle: "// Compras e Contratos:",
                points: [
                    "<strong>Planejar Aquisições:</strong> Documentar as decisões de compra e identificar fornecedores.",
                    "<strong>Conduzir Aquisições:</strong> Obter propostas, selecionar um fornecedor e assinar o contrato.",
                    "<strong>Controlar Aquisições:</strong> Gerenciar os contratos, monitorar o desempenho e fazer ajustes."
                ]
            }
        },
        {
            id: 10,
            title: "Gestão das Partes Interessadas",
            tip: "Mantendo as pessoas importantes felizes.",
            description: "Inclui os processos necessários para identificar as pessoas, grupos ou organizações que podem impactar ou ser impactados pelo projeto, para analisar suas expectativas e seu impacto no projeto.",
            topics: ["Identificar Stakeholders", "Planejar Engajamento", "Monitorar Engajamento"],
            topicsDetails: [
                { title: "Identificar Stakeholders", content: "Identificar regularmente as partes interessadas do projeto, e analisar e documentar informações relevantes sobre seus interesses, envolvimento e impacto." },
                { title: "Planejar Engajamento", content: "Desenvolver abordagens para envolver as partes interessadas do projeto, com base em suas necessidades, expectativas e impacto potencial no projeto." },
                { title: "Monitorar Engajamento", content: "Monitorar os relacionamentos das partes interessadas do projeto e adequar estratégias para engajá-las através da modificação de estratégias e planos de engajamento." }
            ],
            question: "Por que um stakeholder com baixo interesse mas alto poder precisa ser 'mantido satisfeito'?",
            answer: "Porque, embora não se envolvam no dia a dia, eles têm autoridade para impactar drasticamente o projeto com uma única decisão. Mantê-los satisfeitos com informações de alto nível evita que eles se tornem uma força de oposição.",
            details: {
                subtitle: "// Gerindo as Expectativas:",
                points: [
                    "<strong>Identificar Stakeholders:</strong> Analisar e documentar os interesses e o impacto de todas as partes interessadas.",
                    "<strong>Planejar Engajamento:</strong> Desenvolver estratégias para envolver as partes interessadas com base nas suas necessidades.",
                    "<strong>Monitorar Engajamento:</strong> Monitorar os relacionamentos e ajustar as estratégias conforme necessário."
                ]
            }
        }
    ]
};
