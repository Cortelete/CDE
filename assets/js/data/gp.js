// Arquivo: data/gp.js
// Contém os dados para o baralho de "Gestão de Projetos", com o campo 'details' reestruturado.

export const gp = {
    title: "Gestão de Projetos",
    theme: "purple",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`,
    summary: "Domine o PMBOK, Riscos, Escopo e os segredos para não deixar seu projeto virar um caos.",
    cards: [
        {
            id: 1,
            title: "Definição de Projeto",
            tip: "É a missão com data de validade que a empresa te dá.",
            description: "Um esforço planejado e temporário para criar um produto, serviço ou resultado que é único, diferenciando-se das operações de rotina.",
            topics: ["Temporário", "Único", "Elaboração Progressiva"],
            topicsDetails: [
                { title: "Temporário", content: "<p>Significa que o projeto não dura para sempre. Ele tem uma data de início e uma data de término bem definidas. Isso o diferencia de 'operações', que são contínuas e repetitivas, como a produção em uma fábrica ou o suporte ao cliente.</p>" },
                { title: "Resultado Único", content: "<p>O produto ou serviço gerado (chamado de 'entrega' ou 'deliverable') é diferente de todos os outros. Mesmo projetos parecidos, como construir duas casas idênticas, terão resultados únicos devido a equipes, locais e desafios diferentes.</p>" },
                { title: "Elaboração Progressiva", content: "<p>É o processo de refinar e detalhar o plano à medida que o projeto avança e mais informações se tornam disponíveis. Começa-se com uma ideia geral e, progressivamente, os detalhes são elaborados.</p>" }
            ],
            question: "Defina o que é um projeto, usando suas duas características mais importantes.",
            answer: "Um projeto é um esforço **temporário**, pois possui um início e um fim definidos, e que visa criar um resultado **único**, ou seja, um produto ou serviço que não foi feito exatamente da mesma forma antes.",
            details: {
                subtitle: "// Características Fundamentais:",
                points: [
                    "<strong>Temporário:</strong> Significa que o projeto não dura para sempre. Ele tem uma data de início e uma data de término bem definidas.",
                    "<strong>Resultado Único:</strong> O produto ou serviço gerado é diferente de todos os outros.",
                    "<strong>Elaboração Progressiva:</strong> O plano é refinado e detalhado à medida que o projeto avança."
                ]
            }
        },
        {
            id: 2,
            title: "Restrição Tripla",
            tip: "O cobertor é sempre curto: Escopo, Tempo e Custo.",
            description: "Representa as três principais limitações de qualquer projeto: Escopo, Tempo e Custo. Alterar uma afeta as outras.",
            topics: ["Escopo", "Tempo", "Custo", "Qualidade"],
            topicsDetails: [
                { title: "Escopo", content: "<p>Refere-se a 'o que' será feito. É o trabalho total necessário para atingir os objetivos do projeto.</p>" },
                { title: "Tempo", content: "<p>É o cronograma do projeto, o tempo disponível para completar todo o trabalho definido no escopo.</p>" },
                { title: "Custo", content: "<p>É o orçamento do projeto, incluindo todos os recursos financeiros, materiais e humanos.</p>" },
                { title: "Qualidade", content: "<p>A qualidade não é uma ponta, mas o <strong>centro do triângulo</strong>. Qualquer mudança no escopo, tempo ou custo afetará diretamente a qualidade final da entrega.</p>" }
            ],
            question: "Como uma mudança no escopo afeta as outras duas pontas da Restrição Tripla?",
            answer: "Se o escopo aumenta, será necessário mais **tempo** para desenvolver as novas funcionalidades e mais **custo** para pagar pelas horas extras da equipe ou por mais recursos. Tentar manter o mesmo tempo e custo com mais escopo geralmente resulta em queda na qualidade.",
            details: {
                subtitle: "// O Triângulo de Ferro:",
                points: [
                    "<strong>Escopo:</strong> Refere-se a 'o que' será feito. É o trabalho total necessário para atingir os objetivos.",
                    "<strong>Tempo:</strong> É o cronograma do projeto, o tempo disponível para completar o trabalho.",
                    "<strong>Custo:</strong> É o orçamento do projeto, incluindo todos os recursos.",
                    "<strong>Qualidade:</strong> É o centro do triângulo, afetada por qualquer mudança nas outras três restrições."
                ]
            }
        },
        {
            id: 3,
            title: "PMI e Guia PMBOK",
            tip: "O PMBOK não é um manual, é a enciclopédia.",
            description: "O PMI (Project Management Institute) é a maior associação global de GP, e o PMBOK (Project Management Body of Knowledge) é seu guia de boas práticas.",
            topics: ["Guia, Não Metodologia", "Boas Práticas", "Áreas e Processos"],
            topicsDetails: [
                { title: "Guia, Não Metodologia", content: "<p>O PMBOK descreve 'o quê' e 'por quê', mas não o 'como' passo a passo. Ele é um framework, não uma metodologia prescritiva.</p>" },
                { title: "Boas Práticas", content: "<p>O conhecimento no PMBOK é um compilado da experiência de milhares de profissionais, representando um consenso sobre o que 'geralmente' funciona.</p>" },
                { title: "Áreas e Processos", content: "<p>O guia é estruturado em <strong>Áreas de Conhecimento</strong> (ex: Gestão de Escopo) e <strong>Grupos de Processos</strong> (Iniciação, Planejamento, etc.).</p>" }
            ],
            question: "Qual o principal objetivo do PMBOK e por que ele não é considerado uma metodologia?",
            answer: "O principal objetivo é identificar e padronizar o conjunto de conhecimentos e boas práticas em gerenciamento de projetos. Ele não é uma metodologia porque não prescreve uma única maneira de gerenciar um projeto; em vez disso, serve como um guia de referência flexível.",
            details: {
                subtitle: "// A Enciclopédia de GP:",
                points: [
                    "<strong>Guia, Não Metodologia:</strong> O PMBOK descreve 'o quê' e 'por quê', mas não o 'como'. É um framework flexível.",
                    "<strong>Boas Práticas:</strong> Compila a experiência de milhares de profissionais sobre o que geralmente funciona.",
                    "<strong>Áreas e Processos:</strong> É estruturado em Áreas de Conhecimento e Grupos de Processos."
                ]
            }
        },
        {
            id: 4,
            title: "Entidades: PRINCE2 vs. IPMA",
            tip: "PRINCE2 é o mapa; IPMA é a habilidade do pirata.",
            description: "PRINCE2 foca no processo, enquanto a IPMA foca nas competências das pessoas.",
            topics: ["PRINCE2", "IPMA", "Foco Distinto"],
            topicsDetails: [
                { title: "PRINCE2", content: "<p><strong>PR</strong>ojects <strong>IN</strong> <strong>C</strong>ontrolled <strong>E</strong>nvironments. É uma metodologia de gerenciamento focada em processos.</p>" },
                { title: "IPMA", content: "<p><strong>I</strong>nternational <strong>P</strong>roject <strong>M</strong>anagement <strong>A</strong>ssociation. Foca nas competências do gerente de projetos.</p>" },
                { title: "Foco Distinto", content: "<p>PRINCE2 se preocupa com o <strong>processo</strong> ('O que fazer?'). A IPMA se preocupa com o <strong>profissional</strong> ('O que você precisa saber e ser?').</p>" }
            ],
            question: "Explique brevemente sobre as entidades PRINCE2 e IPMA, destacando suas abordagens distintas.",
            answer: "**PRINCE2** é uma metodologia britânica focada em processos. Em contraste, a **IPMA** é uma instituição europeia focada em competências, cuja finalidade é avaliar e certificar as habilidades das pessoas.",
            details: {
                subtitle: "// Abordagens Diferentes:",
                points: [
                    "<strong>PRINCE2:</strong> Uma metodologia de gerenciamento focada em processos, popular no Reino Unido.",
                    "<strong>IPMA:</strong> Uma associação que foca nas competências do gerente de projetos.",
                    "<strong>Foco Distinto:</strong> PRINCE2 foca no processo ('o quê'), enquanto a IPMA foca no profissional ('quem')."
                ]
            }
        },
        {
            id: 5,
            title: "Ciclo de Vida (5 Grupos)",
            tip: "Nascer, planejar, trabalhar, vigiar e morrer.",
            description: "O PMBOK organiza o ciclo de vida de qualquer projeto em cinco grandes fases lógicas, chamadas de Grupos de Processos.",
            topics: ["Iniciação", "Planejamento", "Execução", "Monitoramento", "Encerramento"],
            topicsDetails: [
                { title: "Iniciação", content: "<p>É a certidão de nascimento do projeto. Desenvolve-se o Termo de Abertura e identificam-se os stakeholders.</p>" },
                { title: "Planejamento", content: "<p>É o cérebro da operação. Define como o projeto será executado, monitorado, controlado e encerrado.</p>" },
                { title: "Execução", content: "<p>É botar a mão na massa, realizando o trabalho definido no plano.</p>" },
                { title: "Monitoramento e Controle", content: "<p>É o 'big brother' do projeto. Mede o progresso contra o plano e implementa ações corretivas.</p>" },
                { title: "Encerramento", content: "<p>Formaliza a aceitação da entrega final, desmobiliza a equipe e arquiva as lições aprendidas.</p>" }
            ],
            question: "Por que o grupo de processos de Monitoramento e Controle é tão crucial e se sobrepõe ao de Execução?",
            answer: "Porque a execução nunca sai exatamente como o planejado. O Monitoramento e Controle atua como o GPS do projeto, verificando constantemente a posição real contra a rota planejada e permitindo ao gerente fazer correções em tempo real.",
            details: {
                subtitle: "// As 5 Fases Lógicas:",
                points: [
                    "<strong>Iniciação:</strong> Autorização formal do projeto.",
                    "<strong>Planejamento:</strong> Definição de como o trabalho será feito.",
                    "<strong>Execução:</strong> Realização do trabalho planeado.",
                    "<strong>Monitoramento e Controle:</strong> Medição do progresso e correção de desvios.",
                    "<strong>Encerramento:</strong> Formalização da aceitação e conclusão do projeto."
                ]
            }
        },
        {
            id: 6,
            title: "Termo de Abertura",
            tip: "A certidão de nascimento oficial do projeto.",
            description: "O Termo de Abertura (Project Charter) é o documento que autoriza formalmente a existência do projeto e concede autoridade ao gerente.",
            topics: ["Autorização Formal", "Conteúdo Essencial", "Não é o Plano"],
            topicsDetails: [
                { title: "Autorização Formal", content: "<p>É a luz verde oficial. Sem ele, o projeto não existe formalmente.</p>" },
                { title: "Conteúdo Essencial", content: "<p>Inclui: justificativa, objetivos mensuráveis, requisitos de alto nível, riscos principais, resumo de cronograma e orçamento.</p>" },
                { title: "Não é o Plano do Projeto", content: "<p>O Termo de Abertura é um documento de alto nível, enquanto o Plano de Gerenciamento é detalhado.</p>" }
            ],
            question: "Quem deve assinar o Termo de Abertura do Projeto e por quê?",
            answer: "Deve ser assinado pelo patrocinador (*sponsor*) ou pela entidade iniciadora. O gerente de projeto **não** o assina como autoridade, pois o documento é o que *lhe concede* autoridade.",
            details: {
                subtitle: "// O Documento Inicial:",
                points: [
                    "<strong>Autorização Formal:</strong> É a 'luz verde' oficial emitida pelo patrocinador para o projeto começar.",
                    "<strong>Conteúdo Essencial:</strong> Inclui justificativa, objetivos, requisitos de alto nível, e resumos de cronograma e orçamento.",
                    "<strong>Não é o Plano:</strong> É um documento de alto nível que precede o detalhado Plano de Gerenciamento do Projeto."
                ]
            }
        },
        {
            id: 7,
            title: "Estruturas Organizacionais",
            tip: "Define se você é o chefe, tem dois chefes ou ninguém sabe quem é.",
            description: "A estrutura da organização (Funcional, Projetizada, Matricial) influencia a autoridade do gerente, os recursos e a comunicação.",
            topics: ["Funcional", "Projetizada", "Matricial"],
            topicsDetails: [
                { title: "Funcional", content: "<p>Organizada por departamentos. O gerente de projeto tem pouca ou nenhuma autoridade.</p>" },
                { title: "Projetizada", content: "<p>Organizada em torno de projetos. O gerente tem autoridade total.</p>" },
                { title: "Matricial", content: "<p>Um híbrido onde a equipe responde a dois chefes: gerente funcional e de projetos.</p>" }
            ],
            question: "Qual a principal desvantagem de uma estrutura matricial para os membros da equipe?",
            answer: "A principal desvantagem é a **duplicidade de comando**. Os membros da equipe têm dois chefes, o que pode gerar conflitos de lealdade e prioridades.",
            details: {
                subtitle: "// Onde Você Trabalha:",
                points: [
                    "<strong>Funcional:</strong> Organizada por departamentos (Vendas, TI). O poder está com os gerentes funcionais.",
                    "<strong>Projetizada:</strong> Organizada por projetos. O poder está com os gerentes de projeto.",
                    "<strong>Matricial:</strong> Um híbrido que pode ser Fraca, Balanceada ou Forte, dependendo de onde está o poder."
                ]
            }
        },
        {
            id: 8,
            title: "Gestão da Integração",
            tip: "A cola que une todas as partes do projeto.",
            description: "A área que garante que todas as partes do projeto trabalhem juntas, gerenciando interdependências e decisões.",
            topics: ["Plano do Projeto", "Gerenciar Execução", "Controle de Mudanças"],
            topicsDetails: [
                { title: "Plano do Projeto", content: "<p>Consolida todos os planos das outras áreas em um único documento coeso.</p>" },
                { title: "Gerenciar Execução", content: "<p>Coordena a equipe e os recursos para realizar o trabalho definido no plano.</p>" },
                { title: "Controle de Mudanças", content: "<p>Processo formal para gerenciar, avaliar, aprovar ou rejeitar todas as solicitações de mudança.</p>" }
            ],
            question: "Por que o Controle Integrado de Mudanças é um processo da Integração e não de Escopo?",
            answer: "Porque uma mudança raramente afeta apenas o escopo; ela impacta tempo, custo e riscos. A Integração garante uma análise holística do impacto antes da decisão.",
            details: {
                subtitle: "// O Papel do Maestro:",
                points: [
                    "<strong>Plano do Projeto:</strong> Cria o 'mapa' mestre que consolida todos os outros planos.",
                    "<strong>Gerenciar Execução:</strong> Conduz a equipe para realizar o trabalho planeado.",
                    "<strong>Controle de Mudanças:</strong> Garante que o impacto de qualquer mudança seja analisado de forma holística."
                ]
            }
        },
        {
            id: 9,
            title: "Gestão do Escopo e a EAP",
            tip: "A cerca que você coloca em volta do projeto.",
            description: "Garante que o projeto inclua todo o trabalho necessário, e apenas o necessário. A EAP (Estrutura Analítica do Projeto) é a ferramenta central.",
            topics: ["Escopo Produto/Projeto", "Criar a EAP", "Dicionário da EAP"],
            topicsDetails: [
                { title: "Escopo Produto vs. Projeto", content: "<p>O escopo do <strong>produto</strong> são as características do resultado final. O escopo do <strong>projeto</strong> é o trabalho para entregar esse produto.</p>" },
                { title: "Criar a EAP (WBS)", content: "<p>A Estrutura Analítica do Projeto (WBS) subdivide as entregas em pacotes de trabalho menores.</p>" },
                { title: "Dicionário da EAP", content: "<p>Um documento que detalha cada componente da EAP.</p>" }
            ],
            question: "O que é a EAP (WBS) e por que ela é fundamental?",
            answer: "A EAP é uma decomposição hierárquica de todo o trabalho a ser executado. Ela é fundamental porque transforma o escopo em pacotes concretos, garantindo que nada seja esquecido e servindo de base para estimativas de tempo, custo e riscos.",
            details: {
                subtitle: "// Definindo as Fronteiras:",
                points: [
                    "<strong>Escopo Produto vs. Projeto:</strong> O escopo do produto é 'o quê', o do projeto é 'como'.",
                    "<strong>Criar a EAP (WBS):</strong> Subdivide o trabalho em pacotes gerenciáveis, seguindo a regra dos 100%.",
                    "<strong>Dicionário da EAP:</strong> Detalha cada pacote de trabalho da EAP."
                ]
            }
        },
        {
            id: 10,
            title: "Gestão do Tempo",
            tip: "Sua paranoia deve morar no Caminho Crítico.",
            description: "Inclui os processos para gerenciar o término do projeto no prazo. A técnica mais importante é o Método do Caminho Crítico (CPM).",
            topics: ["Diagrama de Rede", "Caminho Crítico", "Folga (Float)"],
            topicsDetails: [
                { title: "Diagrama de Rede", content: "<p>Uma representação visual das dependências entre as atividades.</p>" },
                { title: "Caminho Crítico", content: "<p>É a sequência de atividades mais longa no diagrama, que determina a menor duração possível para o projeto.</p>" },
                { title: "Folga (Float)", content: "<p>É o tempo que uma atividade pode atrasar sem afetar a data final do projeto.</p>" }
            ],
            question: "Por que o 'Caminho Crítico' é vital para o cronograma?",
            answer: "É vital porque determina a menor duração possível para o projeto. Qualquer atraso em suas atividades impactará diretamente a data de entrega final. Ele aponta exatamente quais tarefas são as mais sensíveis ao tempo.",
            details: {
                subtitle: "// Dominando o Cronograma:",
                points: [
                    "<strong>Diagrama de Rede:</strong> Visualiza as dependências entre as atividades.",
                    "<strong>Caminho Crítico:</strong> A sequência de atividades mais longa, que define a duração do projeto. Atrasos aqui atrasam tudo.",
                    "<strong>Folga (Float):</strong> O tempo que uma atividade pode atrasar sem impactar a data final. Atividades no caminho crítico têm folga zero."
                ]
            }
        },
        {
            id: 11,
            title: "Estimativas PERT",
            tip: "Ser pessimista, otimista e realista ao mesmo tempo.",
            description: "A técnica PERT usa três estimativas de tempo (Otimista, Mais Provável, Pessimista) para calcular uma duração ponderada, lidando com a incerteza.",
            topics: ["Estimativa de 3 Pontos", "Duração Esperada", "Lidando com Incerteza"],
            topicsDetails: [
                { title: "Estimativa de 3 Pontos", content: "<p>O PERT usa três estimativas: <strong>Otimista (O)</strong>, <strong>Mais Provável (M)</strong>, e <strong>Pessimista (P)</strong>.</p>" },
                { title: "Duração Esperada", content: "<p>A duração ponderada é calculada pela fórmula: <strong>Duração = (O + 4M + P) / 6</strong>.</p>" },
                { title: "Lidando com a Incerteza", content: "<p>É ideal para projetos inovadores ou de P&D, onde não há dados históricos.</p>" }
            ],
            question: "Para qual tipo de projeto a técnica PERT é mais adequada do que o CPM e por quê?",
            answer: "O PERT é mais adequado para projetos com alta incerteza e inovação (P&D), onde a duração das atividades é difícil de prever, pois o uso de três estimativas incorpora essa incerteza no cálculo do cronograma.",
            details: {
                subtitle: "// Estimando o Incerto:",
                points: [
                    "<strong>Estimativa de 3 Pontos:</strong> Usa cenários Otimista (O), Mais Provável (M) e Pessimista (P).",
                    "<strong>Duração Esperada:</strong> Calculada com a fórmula (O + 4M + P) / 6, dando mais peso ao cenário mais provável.",
                    "<strong>Ideal para Inovação:</strong> Perfeito para projetos onde a incerteza é alta e não há dados históricos."
                ]
            }
        },
        {
            id: 12,
            title: "Gestão de Custos e EVA",
            tip: "Gastou pouco porque foi eficiente ou porque não fez nada?",
            description: "A Análise de Valor Agregado (EVA) integra escopo, custo e tempo para medir o desempenho real do projeto em relação ao plano.",
            topics: ["Valor Planeado (PV)", "Custo Real (AC)", "Valor Agregado (EV)", "Índices (CPI/SPI)"],
            topicsDetails: [
                { title: "Valor Planeado (PV)", content: "<p>Orçamento autorizado para o trabalho que **deveria ter sido** concluído.</p>" },
                { title: "Custo Real (AC)", content: "<p>Custo total realmente incorrido pelo trabalho realizado.</p>" },
                { title: "Valor Agregado (EV)", content: "<p>Valor do trabalho **efetivamente** concluído, expresso em termos do orçamento.</p>" },
                { title: "Índices (CPI/SPI)", content: "<p><strong>CPI = EV / AC</strong> (Custo). Se < 1, gastando mais. <strong>SPI = EV / PV</strong> (Prazo). Se < 1, atrasado.</p>" }
            ],
            question: "Um projeto tem um CPI de 0.8 e um SPI de 1.2. Qual é a situação?",
            answer: "A situação é mista. Um **SPI de 1.2** (>1) significa que o projeto está **adiantado**. No entanto, um **CPI de 0.8** (<1) significa que está **acima do orçamento**.",
            details: {
                subtitle: "// Medindo o Desempenho:",
                points: [
                    "<strong>Valor Planeado (PV):</strong> O que deveria ter sido feito.",
                    "<strong>Custo Real (AC):</strong> Quanto foi gasto.",
                    "<strong>Valor Agregado (EV):</strong> O valor do que foi realmente feito.",
                    "<strong>Índices (CPI/SPI):</strong> CPI mede a eficiência de custo, SPI mede a eficiência de prazo. Valores > 1 são bons."
                ]
            }
        },
        {
            id: 13,
            title: "Gestão da Qualidade",
            tip: "Garantir que a brincadeira não quebre na primeira usada.",
            description: "Foca em garantir que o projeto e seu produto final atendam aos requisitos e expectativas, priorizando a prevenção de defeitos.",
            topics: ["Prevenção > Inspeção", "Custo da Qualidade", "Fitness for Use"],
            topicsDetails: [
                { title: "Prevenção > Inspeção", content: "<p>É mais barato e eficaz projetar a qualidade nos processos para evitar erros do que encontrar e corrigir defeitos no final.</p>" },
                { title: "Custo da Qualidade", content: "<p>Inclui o Custo da Conformidade (evitar falhas) e o Custo da Não Conformidade (corrigir falhas).</p>" },
                { title: "Fitness for Use", content: "<p>O produto ou serviço deve ser adequado ao seu propósito. Não adianta entregar uma Ferrari se o cliente pediu um trator.</p>" }
            ],
            question: "Explique o princípio 'prevenção sobre inspeção'.",
            answer: "Significa que é mais inteligente e econômico investir em atividades que previnam a ocorrência de defeitos (como treinamento) do que gastar recursos para inspecionar o trabalho no final e corrigir os erros. Prevenção age na causa; inspeção age no sintoma.",
            details: {
                subtitle: "// Entregando o Prometido:",
                points: [
                    "<strong>Prevenção > Inspeção:</strong> É mais barato e eficaz evitar erros do que corrigi-los.",
                    "<strong>Custo da Qualidade:</strong> Divide-se em custos para evitar falhas (conformidade) e custos por causa de falhas (não conformidade).",
                    "<strong>Fitness for Use:</strong> O produto deve ser adequado ao seu propósito, atendendo aos requisitos do cliente."
                ]
            }
        },
        {
            id: 14,
            title: "Gestão de Riscos",
            tip: "É ser o vidente pessimista que leva um guarda-chuva no sol.",
            description: "O processo de identificar, analisar e responder às incertezas do projeto, sejam elas negativas (ameaças) ou positivas (oportunidades).",
            topics: ["Ameaças/Oportunidades", "Análise Quali/Quanti", "Estratégias de Resposta"],
            topicsDetails: [
                { title: "Ameaças e Oportunidades", content: "<p>Um risco é um 'evento incerto' que, se ocorrer, tem um efeito positivo ou negativo. Ambos devem ser gerenciados.</p>" },
                { title: "Análise Quali/Quanti", content: "<p><strong>Qualitativa:</strong> Prioriza riscos com base na Probabilidade e Impacto. <strong>Quantitativa:</strong> Analisa numericamente o efeito combinado dos riscos.</p>" },
                { title: "Estratégias de Resposta", content: "<p>Para <strong>Ameaças:</strong> Prevenir, Transferir, Mitigar, Aceitar. Para <strong>Oportunidades:</strong> Explorar, Compartilhar, Melhorar, Aceitar.</p>" }
            ],
            question: "Qual a diferença entre mitigar e transferir um risco? Dê um exemplo.",
            answer: "Mitigar um risco é tomar ações para reduzir sua probabilidade/impacto (ex: testar um software exaustivamente). Transferir é passar a responsabilidade para um terceiro (ex: comprar um seguro para a obra).",
            details: {
                subtitle: "// Gerindo a Incerteza:",
                points: [
                    "<strong>Ameaças e Oportunidades:</strong> Riscos podem ser negativos (ameaças) ou positivos (oportunidades).",
                    "<strong>Análise Qualitativa e Quantitativa:</strong> Prioriza e analisa numericamente os riscos.",
                    "<strong>Estratégias de Resposta:</strong> Planos de ação para lidar com ameaças (prevenir, transferir, etc.) e oportunidades (explorar, melhorar, etc.)."
                ]
            }
        },
        {
            id: 15,
            title: "Stakeholders e Comunicações",
            tip: "Stakeholders podem te ajudar ou te foder. Escolha como se comunicar.",
            description: "Gerenciar Stakeholders é identificar todos que são impactados e gerenciar suas expectativas através de uma comunicação eficaz.",
            topics: ["Identificar Stakeholders", "Matriz Poder x Interesse", "Plano de Comunicações"],
            topicsDetails: [
                { title: "Identificar Stakeholders", content: "<p>Mapear todos que podem afetar ou ser afetados pelo projeto.</p>" },
                { title: "Matriz Poder x Interesse", content: "<p>Uma ferramenta para classificar stakeholders e definir a estratégia de engajamento.</p>" },
                { title: "Plano de Comunicações", content: "<p>Define o que informar, para quem, quando e como.</p>" }
            ],
            question: "Por que um stakeholder com alto poder e baixo interesse pode ser perigoso?",
            answer: "Porque, embora não preste atenção no dia a dia, ele tem a capacidade (alto poder) de tomar decisões drásticas que podem impactar ou cancelar o projeto se algo chamar sua atenção negativamente. A estratégia é 'mantê-lo satisfeito'.",
            details: {
                subtitle: "// Gerindo Pessoas e Expectativas:",
                points: [
                    "<strong>Identificar Stakeholders:</strong> Mapear todos os envolvidos ou impactados pelo projeto.",
                    "<strong>Matriz Poder x Interesse:</strong> Classifica stakeholders para definir a estratégia de comunicação (Gerir de perto, Manter satisfeito, etc.).",
                    "<strong>Plano de Comunicações:</strong> Define quem precisa saber o quê, quando e como."
                ]
            }
        },
        {
            id: 16,
            title: "Tipologias de Projetos",
            tip: "Entenda o bicho, depois escolha a jaula.",
            description: "Classificar um projeto (complexidade, tecnologia, novidade) para escolher a abordagem gerencial mais adequada.",
            topics: ["Complexidade", "Modelo Diamante", "Projetos Hard vs. Soft"],
            topicsDetails: [
                { title: "Complexidade", content: "<p>Define o nível de rigor necessário no gerenciamento.</p>" },
                { title: "Modelo Diamante", content: "<p>Avalia o projeto em 4 dimensões: Novidade, Tecnologia, Complexidade e Passo (urgência).</p>" },
                { title: "Projetos Hard vs. Soft", content: "<p>Projetos <strong>Hard</strong> têm objetivos claros e tangíveis. Projetos <strong>Soft</strong> têm objetivos mais abstratos.</p>" }
            ],
            question: "Por que é importante usar uma tipologia para classificar um projeto?",
            answer: "Porque a classificação ajuda a definir a 'personalidade' do projeto, permitindo escolher as ferramentas e processos mais adequados. Aplicar uma metodologia pesada a um projeto simples pode matar a agilidade, enquanto uma abordagem flexível para um complexo pode levar ao caos.",
            details: {
                subtitle: "// Classificando seu Projeto:",
                points: [
                    "<strong>Complexidade:</strong> Analisa a complexidade técnica e de negócio para definir o rigor da gestão.",
                    "<strong>Modelo Diamante:</strong> Avalia o projeto em Novidade, Tecnologia, Complexidade e Passo (urgência) para escolher a melhor abordagem.",
                    "<strong>Projetos Hard vs. Soft:</strong> Diferencia projetos com objetivos tangíveis (Hard) de projetos com metas abstratas (Soft)."
                ]
            }
        },
        {
            id: 17,
            title: "Maturidade e o PMO",
            tip: "Empresa madura não repete as mesmas cagadas.",
            description: "Maturidade é o nível em que uma organização padronizou e otimizou seus processos. O PMO é a estrutura que impulsiona essa maturidade.",
            topics: ["Modelos de Maturidade", "Tipos de PMO", "Benefícios"],
            topicsDetails: [
                { title: "Modelos de Maturidade", content: "<p>Modelos como CMMI e OPM3 descrevem níveis de maturidade, de caótico a otimizado.</p>" },
                { title: "Tipos de PMO", content: "<p>Um Escritório de Projetos (PMO) pode ser: de Suporte, de Controle ou Diretivo.</p>" },
                { title: "Benefícios", content: "<p>Empresas maduras têm maiores taxas de sucesso, mais previsibilidade e menos caos.</p>" }
            ],
            question: "Qual a relação entre um PMO e o aumento da maturidade de uma organização?",
            answer: "O PMO é o principal motor para o aumento da maturidade. Ele atua como o guardião das boas práticas, implementando metodologias, ferramentas e templates padronizados, forçando a organização a sair do caos para processos mais consistentes.",
            details: {
                subtitle: "// Estruturando o Sucesso:",
                points: [
                    "<strong>Modelos de Maturidade:</strong> Frameworks (CMMI, OPM3) que classificam a maturidade de uma organização em níveis.",
                    "<strong>Tipos de PMO:</strong> O Escritório de Projetos pode ser de Suporte (templates), de Controle (exige conformidade) ou Diretivo (gerencia diretamente).",
                    "<strong>Benefícios:</strong> Alta maturidade leva a maiores taxas de sucesso, previsibilidade e menos caos."
                ]
            }
        },
        {
            id: 18,
            title: "Gestão de Portfólio",
            tip: "A arte de dizer 'não' para projetos bons para fazer os essenciais.",
            description: "É o processo de selecionar e gerenciar o conjunto de projetos para garantir o alinhamento com a estratégia do negócio.",
            topics: ["Alinhamento Estratégico", "Balanceamento", "Diferença de Programa"],
            topicsDetails: [
                { title: "Alinhamento Estratégico", content: "<p>Garante que os recursos sejam investidos nos projetos que mais contribuem para os objetivos da empresa.</p>" },
                { title: "Balanceamento", content: "<p>Busca equilibrar o portfólio entre diferentes tipos de projetos (alto risco vs. baixo risco, etc.).</p>" },
                { title: "Diferença de Programa", content: "<p>Um <strong>portfólio</strong> é um conjunto de projetos para atingir objetivos estratégicos. Um <strong>programa</strong> é um grupo de projetos relacionados gerenciados de forma coordenada.</p>" }
            ],
            question: "Qual a diferença entre gerenciar um projeto e um portfólio?",
            answer: "Gerenciar um projeto é sobre 'fazer o trabalho direito' (entregar no escopo, prazo e custo). Gerenciar um portfólio é sobre 'fazer o trabalho certo' (selecionar os projetos corretos que maximizam o valor para a organização).",
            details: {
                subtitle: "// Escolhendo os Projetos Certos:",
                points: [
                    "<strong>Alinhamento Estratégico:</strong> Garante que os projetos selecionados contribuam para os objetivos da empresa.",
                    "<strong>Balanceamento:</strong> Equilibra o portfólio entre diferentes tipos de projetos (risco, retorno, prazo).",
                    "<strong>Portfólio vs. Programa:</strong> Gerir um portfólio é 'fazer os projetos certos'; gerir um programa é 'fazer os projetos relacionados de forma coordenada'."
                ]
            }
        },
        {
            id: 19,
            title: "Conceitos Ágeis",
            tip: "Entregue um skate, depois uma bike, depois uma moto...",
            description: "Abordagem alternativa focada em ciclos curtos, colaboração e adaptação. Scrum e Kanban são os frameworks mais populares.",
            topics: ["Manifesto Ágil", "Scrum", "Kanban"],
            topicsDetails: [
                { title: "Manifesto Ágil", content: "<p>Baseado em 4 valores, como 'Indivíduos e interações mais que processos e ferramentas'.</p>" },
                { title: "Scrum", content: "<p>Framework baseado em ciclos de tempo fixo (Sprints) com papéis, eventos e artefatos definidos.</p>" },
                { title: "Kanban", content: "<p>Método visual para gerenciar o fluxo de trabalho, focado em limitar o trabalho em progresso (WIP).</p>" }
            ],
            question: "Qual a principal diferença entre Scrum e Kanban?",
            answer: "A cadência. Scrum é iterativo, baseado em Sprints de tempo fixo. Kanban é um sistema de fluxo contínuo, sem iterações, focado em limitar o trabalho em progresso (WIP) e otimizar o fluxo de entrega.",
            details: {
                subtitle: "// Frameworks de Adaptação:",
                points: [
                    "<strong>Manifesto Ágil:</strong> Prioriza indivíduos, software funcional, colaboração com o cliente e resposta a mudanças.",
                    "<strong>Scrum:</strong> Framework iterativo baseado em ciclos fixos (Sprints) para entregar valor.",
                    "<strong>Kanban:</strong> Método visual focado em otimizar o fluxo contínuo e limitar o trabalho em andamento (WIP)."
                ]
            }
        },
        {
            id: 20,
            title: "Privacidade Hackeada (Pt.1)",
            tip: "O objetivo era simples e psicopata.",
            description: "A Cambridge Analytica (CA) tinha um 'projeto' com objetivos claros, recursos e entregas específicas para fins antiéticos.",
            topics: ["Objetivo do Projeto", "Recursos e Ferramentas", "Entregas"],
            topicsDetails: [
                { title: "Objetivo do Projeto", content: "<p>Identificar e influenciar eleitores 'persuadíveis' com desinformação e conteúdo emocional.</p>" },
                { title: "Recursos e Ferramentas", content: "<p>Banco de dados de ~87 milhões de perfis do Facebook e algoritmos de análise de dados.</p>" },
                { title: "Entregas", content: "<p>Campanhas de publicidade ('dark posts') altamente segmentadas para explorar vulnerabilidades psicológicas.</p>" }
            ],
            question: "Do ponto de vista técnico, por que o 'projeto' da CA pode ser considerado bem definido?",
            answer: "Tecnicamente, era bem definido porque possuía um objetivo específico (influenciar eleições), escopo de produto claro (perfis e campanhas), um cliente definido (campanhas políticas) e utilizava recursos específicos dentro de um prazo determinado.",
            details: {
                subtitle: "// Anatomia de um Projeto Antiético:",
                points: [
                    "<strong>Objetivo do Projeto:</strong> Identificar e influenciar eleitores 'persuadíveis' com desinformação e conteúdo emocional.",
                    "<strong>Recursos e Ferramentas:</strong> Usou um banco de dados massivo de perfis do Facebook e algoritmos de análise psicográfica.",
                    "<strong>Entregas:</strong> Campanhas de publicidade altamente segmentadas para explorar as vulnerabilidades psicológicas de cada eleitor."
                ]
            }
        },
        {
            id: 21,
            title: "Privacidade Hackeada (Pt.2)",
            tip: "O projeto foi um sucesso, mas a empresa faliu.",
            description: "O sucesso técnico da CA foi ofuscado por suas falhas colossais nas áreas de riscos, escopo, stakeholders e, acima de tudo, ética.",
            topics: ["Falha de Riscos", "Falha de Stakeholders", "Falha de Ética"],
            topicsDetails: [
                { title: "Falha de Riscos", content: "<p>Riscos massivos (legais, de reputação, éticos) foram deliberadamente ignorados.</p>" },
                { title: "Falha de Stakeholders", content: "<p>Os usuários do Facebook foram explorados como recursos, não tratados como partes interessadas.</p>" },
                { title: "Falha de Ética", content: "<p>Mesmo que um projeto atinja escopo, tempo e custo, ele é um fracasso se for antiético. A ética é um pilar fundamental.</p>" }
            ],
            question: "Como o caso da CA demonstra que o 'sucesso' não se mede só pela 'Restrição Tripla'?",
            answer: "O caso demonstra que um projeto pode ter sucesso em escopo, tempo e custo, mas ser um fracasso retumbante. Ao violar princípios éticos e de confiança, o impacto negativo destruiu a organização, provando que métricas de sucesso devem incluir ética e impacto nos stakeholders.",
            details: {
                subtitle: "// As Falhas Críticas:",
                points: [
                    "<strong>Falha de Riscos:</strong> Riscos legais, de reputação e éticos foram deliberadamente ignorados, levando à falência da empresa.",
                    "<strong>Falha de Stakeholders:</strong> Os usuários do Facebook foram explorados como recursos, não tratados como partes interessadas com direito à privacidade.",
                    "<strong>Falha de Ética:</strong> O projeto foi um sucesso técnico, mas um fracasso moral retumbante, provando que a ética é um pilar fundamental do sucesso."
                ]
            }
        }
    ]
};
