// Arquivo: data/gp.js
// Contém os dados exclusivamente para o deck de "Gestão de Projetos".

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
            answer: "Um projeto é um esforço **temporário**, pois possui um início e um fim definidos, e que visa criar um resultado **único**, ou seja, um produto ou serviço que não foi feito exatamente da mesma forma antes."
        },
        {
            id: 2,
            title: "Restrição Tripla",
            tip: "O cobertor é sempre curto: Escopo, Tempo e Custo.",
            description: "Representa as três principais limitações de qualquer projeto: Escopo, Tempo e Custo. Alterar uma afeta as outras.",
            topics: ["Escopo", "Tempo", "Custo", "Qualidade"],
            topicsDetails: [
                { title: "Escopo", content: "<p>Refere-se a 'o que' será feito. É o trabalho total necessário para atingir os objetivos do projeto. Um escopo mal definido é uma das principais causas de fracasso.</p>" },
                { title: "Tempo", content: "<p>É o cronograma do projeto, o tempo disponível para completar todo o trabalho definido no escopo. Geralmente é a restrição mais inflexível para o cliente.</p>" },
                { title: "Custo", content: "<p>É o orçamento do projeto, incluindo todos os recursos financeiros, materiais e humanos. Exceder o custo é uma falha grave de gerenciamento.</p>" },
                { title: "Qualidade", content: "<p>A qualidade não é uma ponta, mas o <strong>centro do triângulo</strong>. Qualquer mudança no escopo, tempo ou custo afetará diretamente a qualidade final da entrega. O desafio do gerente é balancear as três restrições para entregar a qualidade esperada.</p>" }
            ],
            question: "Como uma mudança no escopo afeta as outras duas pontas da Restrição Tripla?",
            answer: "Se o escopo aumenta, será necessário mais **tempo** para desenvolver as novas funcionalidades e mais **custo** para pagar pelas horas extras da equipe ou por mais recursos. Tentar manter o mesmo tempo e custo com mais escopo geralmente resulta em queda na qualidade."
        },
        {
            id: 3,
            title: "PMI e Guia PMBOK",
            tip: "O PMBOK não é um manual, é a enciclopédia.",
            description: "O PMI (Project Management Institute) é a maior associação global de GP, e o PMBOK (Project Management Body of Knowledge) é seu guia de boas práticas.",
            topics: ["Guia, Não Metodologia", "Boas Práticas", "Áreas e Processos"],
            topicsDetails: [
                { title: "Guia, Não Metodologia", content: "<p>O PMBOK descreve 'o quê' e 'por quê', mas não o 'como' passo a passo. Ele é um framework, não uma metodologia prescritiva como o PRINCE2. Cabe ao gerente de projetos 'customizar' a abordagem, selecionando as ferramentas adequadas para cada projeto.</p>" },
                { title: "Boas Práticas", content: "<p>O conhecimento no PMBOK é um compilado da experiência de milhares de profissionais, representando um consenso sobre o que 'geralmente' funciona. 'Geralmente' é a palavra-chave, pois nem toda prática se aplica a todo projeto.</p>" },
                { title: "Áreas e Processos", content: "<p>O guia é estruturado em <strong>Áreas de Conhecimento</strong> (ex: Gestão de Escopo, Custo, Risco) e <strong>Grupos de Processos</strong> (Iniciação, Planejamento, etc.). A interseção entre eles define processos específicos, como 'Estimar os Custos' (Área de Custo, Grupo de Planejamento).</p>" }
            ],
            question: "Qual o principal objetivo do PMBOK e por que ele não é considerado uma metodologia?",
            answer: "O principal objetivo é identificar e padronizar o conjunto de conhecimentos e boas práticas em gerenciamento de projetos. Ele não é uma metodologia porque não prescreve uma única maneira de gerenciar um projeto; em vez disso, serve como um guia de referência flexível."
        },
        {
            id: 4,
            title: "Entidades: PRINCE2 vs. IPMA",
            tip: "PRINCE2 é o mapa; IPMA é a habilidade do pirata.",
            description: "PRINCE2 foca no processo, enquanto a IPMA foca nas competências das pessoas.",
            topics: ["PRINCE2", "IPMA", "Foco Distinto"],
            topicsDetails: [
                { title: "PRINCE2", content: "<p><strong>PR</strong>ojects <strong>IN</strong> <strong>C</strong>ontrolled <strong>E</strong>nvironments. É uma metodologia de gerenciamento focada em processos, muito popular no Reino Unido e Europa. É prescritiva, com 7 princípios, 7 temas e 7 processos, e foca no controle e na justificativa contínua do negócio (Business Case).</p>" },
                { title: "IPMA", content: "<p><strong>I</strong>nternational <strong>P</strong>roject <strong>M</strong>anagement <strong>A</strong>ssociation. É uma federação de associações que foca nas competências do gerente de projetos, descritas no ICB (IPMA Competence Baseline). Avalia 46 competências em 3 áreas: Perspectiva (contexto), Pessoas (habilidades interpessoais) e Prática (técnicas).</p>" },
                { title: "Foco Distinto", content: "<p>PRINCE2 se preocupa com o <strong>processo</strong> ('O que fazer?'). A IPMA se preocupa com o <strong>profissional</strong> ('O que você precisa saber e ser?'). O PMI/PMBOK fica no meio, focando no <strong>conhecimento</strong> ('O que você precisa saber?').</p>" }
            ],
            question: "Explique brevemente sobre as entidades PRINCE2 e IPMA, destacando suas abordagens distintas.",
            answer: "**PRINCE2** é uma metodologia britânica focada em processos. Em contraste, a **IPMA** é uma instituição europeia focada em competências, cuja finalidade é avaliar e certificar as habilidades das pessoas."
        },
        {
            id: 5,
            title: "Ciclo de Vida (5 Grupos)",
            tip: "Nascer, planejar, trabalhar, vigiar e morrer.",
            description: "O PMBOK organiza o ciclo de vida de qualquer projeto em cinco grandes fases lógicas, chamadas de Grupos de Processos.",
            topics: ["Iniciação", "Planejamento", "Execução", "Monitoramento", "Encerramento"],
            topicsDetails: [
                { title: "Iniciação", content: "<p>É a certidão de nascimento do projeto. Aqui se desenvolve o Termo de Abertura e se identificam as partes interessadas (stakeholders). O objetivo é obter a autorização formal para começar.</p>" },
                { title: "Planejamento", content: "<p>É o cérebro da operação. Define como o projeto será executado, monitorado, controlado e encerrado. Gera o Plano de Gerenciamento do Projeto, que inclui a EAP, cronograma, orçamento, plano de riscos, etc.</p>" },
                { title: "Execução", content: "<p>É botar a mão na massa, realizando o trabalho definido no plano para satisfazer as especificações do projeto. É onde a maior parte do orçamento é gasta.</p>" },
                { title: "Monitoramento e Controle", content: "<p>É o 'big brother' do projeto. Mede o progresso contra o plano, identifica desvios e implementa ações corretivas. Ocorre em paralelo com a Execução.</p>" },
                { title: "Encerramento", content: "<p>É o atestado de óbito ou vitória. Formaliza a aceitação da entrega final, desmobiliza a equipe e arquiva as lições aprendidas para projetos futuros.</p>" }
            ],
            question: "Por que o grupo de processos de Monitoramento e Controle é tão crucial e se sobrepõe ao de Execução?",
            answer: "Porque a execução nunca sai exatamente como o planejado. O Monitoramento e Controle atua como o GPS do projeto, verificando constantemente a posição real contra a rota planejada e permitindo ao gerente fazer correções em tempo real."
        },
        {
            id: 6,
            title: "Termo de Abertura",
            tip: "A certidão de nascimento oficial do projeto.",
            description: "O Termo de Abertura (Project Charter) é o documento que autoriza formalmente a existência do projeto e concede autoridade ao gerente.",
            topics: ["Autorização Formal", "Conteúdo Essencial", "Não é o Plano"],
            topicsDetails: [
                { title: "Autorização Formal", content: "<p>É a luz verde oficial. Sem ele, o projeto não existe formalmente, e o gerente não tem autoridade para aplicar recursos organizacionais. É emitido pelo patrocinador (sponsor).</p>" },
                { title: "Conteúdo Essencial", content: "<p>Inclui: justificativa, objetivos mensuráveis, requisitos de alto nível, riscos principais, resumo de cronograma (marcos), resumo de orçamento e o gerente de projeto designado com seu nível de autoridade.</p>" },
                { title: "Não é o Plano do Projeto", content: "<p>O Termo de Abertura é um documento de alto nível, criado na Iniciação. O Plano de Gerenciamento do Projeto é um documento detalhado, criado no Planejamento, que descreve 'como' o trabalho será feito.</p>" }
            ],
            question: "Quem deve assinar o Termo de Abertura do Projeto e por quê?",
            answer: "Deve ser assinado pelo patrocinador (*sponsor*) ou pela entidade iniciadora. O gerente de projeto **não** o assina como autoridade, pois o documento é o que *lhe concede* autoridade."
        },
        {
            id: 7,
            title: "Estruturas Organizacionais",
            tip: "Define se você é o chefe, tem dois chefes ou ninguém sabe quem é.",
            description: "A estrutura da organização (Funcional, Projetizada, Matricial) influencia a autoridade do gerente, os recursos e a comunicação.",
            topics: ["Funcional", "Projetizada", "Matricial"],
            topicsDetails: [
                { title: "Funcional", content: "<p>Organizada por departamentos (Vendas, TI, RH). O gerente de projeto tem pouca ou nenhuma autoridade, atuando mais como um coordenador. A equipe responde ao gerente funcional. Vantagem: especialização. Desvantagem: projetos são de baixa prioridade.</p>" },
                { title: "Projetizada", content: "<p>Organizada em torno de projetos. O gerente tem autoridade total sobre o projeto, orçamento e equipe. A equipe se reporta diretamente a ele. Vantagem: agilidade e foco. Desvantagem: a equipe pode ficar sem 'casa' ao final do projeto.</p>" },
                { title: "Matricial", content: "<p>Um híbrido. A equipe responde a dois chefes: gerente funcional e de projetos. Pode ser <strong>Fraca</strong> (poder com o funcional), <strong>Balanceada</strong> (poder dividido) ou <strong>Forte</strong> (poder com o de projetos). É a estrutura mais comum, mas também a que gera mais conflitos.</p>" }
            ],
            question: "Qual a principal desvantagem de uma estrutura matricial para os membros da equipe?",
            answer: "A principal desvantagem é a **duplicidade de comando**. Os membros da equipe têm dois chefes, o que pode gerar conflitos de lealdade e prioridades."
        },
        {
            id: 8,
            title: "Gestão da Integração",
            tip: "A cola que une todas as partes do projeto.",
            description: "A área que garante que todas as partes do projeto trabalhem juntas, gerenciando interdependências e decisões.",
            topics: ["Plano do Projeto", "Gerenciar Execução", "Controle de Mudanças"],
            topicsDetails: [
                { title: "Plano do Projeto", content: "<p>É o processo de consolidar todos os planos das outras áreas (escopo, tempo, custo, qualidade, etc.) em um único documento coeso e consistente. É o 'mapa' mestre do projeto.</p>" },
                { title: "Gerenciar Execução", content: "<p>É onde o gerente de projetos atua como um maestro, coordenando a equipe e os recursos para realizar o trabalho definido no plano. Inclui implementar as mudanças aprovadas.</p>" },
                { title: "Controle de Mudanças", content: "<p>É o processo formal para gerenciar, avaliar, aprovar ou rejeitar todas as solicitações de mudança. O objetivo é evitar o 'scope creep' (aumento descontrolado do escopo) e garantir que o impacto de cada mudança seja analisado de forma holística.</p>" }
            ],
            question: "Por que o Controle Integrado de Mudanças é um processo da Integração e não de Escopo?",
            answer: "Porque uma mudança raramente afeta apenas o escopo; ela impacta tempo, custo e riscos. A Integração garante uma análise holística do impacto antes da decisão."
        },
        {
            id: 9,
            title: "Gestão do Escopo e a EAP",
            tip: "A cerca que você coloca em volta do projeto.",
            description: "Garante que o projeto inclua todo o trabalho necessário, e apenas o necessário. A EAP (Estrutura Analítica do Projeto) é a ferramenta central.",
            topics: ["Escopo Produto/Projeto", "Criar a EAP", "Dicionário da EAP"],
            topicsDetails: [
                { title: "Escopo Produto vs. Projeto", content: "<p>O escopo do <strong>produto</strong> são as características e funções do resultado final (o 'o quê'). O escopo do <strong>projeto</strong> é todo o trabalho necessário para entregar esse produto (o 'como').</p>" },
                { title: "Criar a EAP (WBS)", content: "<p>A Estrutura Analítica do Projeto (Work Breakdown Structure) é o processo de subdividir as entregas em pacotes de trabalho menores e mais gerenciáveis. A regra de 100% diz que a EAP deve conter 100% do trabalho do projeto, nem mais, nem menos.</p>" },
                { title: "Dicionário da EAP", content: "<p>É um documento que detalha cada componente da EAP. Para cada pacote de trabalho, ele define: descrição, critérios de aceitação, responsáveis, premissas, restrições e estimativas. Sem o dicionário, a EAP é apenas um diagrama.</p>" }
            ],
            question: "O que é a EAP (WBS) e por que ela é fundamental?",
            answer: "A EAP é uma decomposição hierárquica de todo o trabalho a ser executado. Ela é fundamental porque transforma o escopo em pacotes concretos, garantindo que nada seja esquecido e servindo de base para estimativas de tempo, custo e riscos."
        },
        {
            id: 10,
            title: "Gestão do Tempo",
            tip: "Sua paranoia deve morar no Caminho Crítico.",
            description: "Inclui os processos para gerenciar o término do projeto no prazo. A técnica mais importante é o Método do Caminho Crítico (CPM).",
            topics: ["Diagrama de Rede", "Caminho Crítico", "Folga (Float)"],
            topicsDetails: [
                { title: "Diagrama de Rede", content: "<p>Uma representação visual das dependências entre as atividades. As dependências podem ser: <strong>Obrigatórias</strong> (hard logic), <strong>Discricionárias</strong> (soft logic, preferencial), <strong>Externas</strong> ou <strong>Internas</strong>.</p>" },
                { title: "Caminho Crítico", content: "<p>É a sequência de atividades mais longa no diagrama, que determina a menor duração possível para o projeto. Qualquer atraso em uma atividade do caminho crítico atrasa o projeto inteiro.</p>" },
                { title: "Folga (Float)", content: "<p>É o tempo que uma atividade pode atrasar sem afetar a data final do projeto. Atividades no caminho crítico têm folga zero. Existem a <strong>Folga Total</strong> (quanto pode atrasar sem impactar o fim do projeto) e a <strong>Folga Livre</strong> (quanto pode atrasar sem impactar a próxima atividade).</p>" }
            ],
            question: "Por que o 'Caminho Crítico' é vital para o cronograma?",
            answer: "É vital porque determina a menor duração possível para o projeto. Qualquer atraso em suas atividades impactará diretamente a data de entrega final. Ele aponta exatamente quais tarefas são as mais sensíveis ao tempo."
        },
        {
            id: 11,
            title: "Estimativas PERT",
            tip: "Ser pessimista, otimista e realista ao mesmo tempo.",
            description: "A técnica PERT usa três estimativas de tempo (Otimista, Mais Provável, Pessimista) para calcular uma duração ponderada, lidando com a incerteza.",
            topics: ["Estimativa de 3 Pontos", "Duração Esperada", "Lidando com Incerteza"],
            topicsDetails: [
                { title: "Estimativa de 3 Pontos", content: "<p>O PERT (Program Evaluation and Review Technique) usa três estimativas: <strong>Otimista (O)</strong>: o melhor cenário. <strong>Mais Provável (M)</strong>: o cenário realista. <strong>Pessimista (P)</strong>: o pior cenário.</p>" },
                { title: "Duração Esperada", content: "<p>A duração ponderada é calculada pela fórmula: <strong>Duração = (O + 4M + P) / 6</strong>. O peso maior na estimativa mais provável reflete a maior chance de ela ocorrer. Ex: O=2, M=4, P=12 -> Duração = (2 + 4*4 + 12) / 6 = 5 dias.</p>" },
                { title: "Lidando com a Incerteza", content: "<p>É ideal para projetos inovadores ou de P&D, onde não há dados históricos para uma estimativa determinística. O PERT reconhece a incerteza e a incorpora no plano.</p>" }
            ],
            question: "Para qual tipo de projeto a técnica PERT é mais adequada do que o CPM e por quê?",
            answer: "O PERT é mais adequado para projetos com alta incerteza e inovação (P&D), onde a duração das atividades é difícil de prever, pois o uso de três estimativas incorpora essa incerteza no cálculo do cronograma."
        },
        {
            id: 12,
            title: "Gestão de Custos e EVA",
            tip: "Gastou pouco porque foi eficiente ou porque não fez nada?",
            description: "A Análise de Valor Agregado (EVA) integra escopo, custo e tempo para medir o desempenho real do projeto em relação ao plano.",
            topics: ["Valor Planejado (PV)", "Custo Real (AC)", "Valor Agregado (EV)", "Índices (CPI/SPI)"],
            topicsDetails: [
                { title: "Valor Planejado (PV)", content: "<p>Planned Value: Orçamento autorizado para o trabalho que **deveria ter sido** concluído até uma data. É a linha de base.</p>" },
                { title: "Custo Real (AC)", content: "<p>Actual Cost: Custo total realmente incorrido pelo trabalho realizado. Quanto dinheiro saiu do bolso.</p>" },
                { title: "Valor Agregado (EV)", content: "<p>Earned Value: Valor do trabalho **efetivamente** concluído, expresso em termos do orçamento. É a métrica central, pois responde 'quanto do que planejamos já fizemos?'.</p>" },
                { title: "Índices (CPI/SPI)", content: "<p><strong>CPI = EV / AC</strong> (Índice de Desempenho de Custo). Se < 1, estamos gastando mais do que o previsto. <strong>SPI = EV / PV</strong> (Índice de Desempenho de Prazo). Se < 1, estamos atrasados.</p>" }
            ],
            question: "Um projeto tem um CPI de 0.8 e um SPI de 1.2. Qual é a situação?",
            answer: "A situação é mista. Um **SPI de 1.2** (>1) significa que o projeto está **adiantado**. No entanto, um **CPI de 0.8** (<1) significa que está **acima do orçamento**."
        },
        {
            id: 13,
            title: "Gestão da Qualidade",
            tip: "Garantir que a brincadeira não quebre na primeira usada.",
            description: "Foca em garantir que o projeto e seu produto final atendam aos requisitos e expectativas, priorizando a prevenção de defeitos.",
            topics: ["Prevenção > Inspeção", "Custo da Qualidade", "Fitness for Use"],
            topicsDetails: [
                { title: "Prevenção > Inspeção", content: "<p>É mais barato e eficaz projetar a qualidade nos processos para evitar erros (prevenção) do que encontrar e corrigir defeitos no final (inspeção). Qualidade é planejada, não inspecionada.</p>" },
                { title: "Custo da Qualidade", content: "<p>Inclui: <strong>Custo da Conformidade</strong> (dinheiro gasto para evitar falhas - prevenção, treinamento, auditorias) e <strong>Custo da Não Conformidade</strong> (dinheiro gasto por causa de falhas - retrabalho, sucata, perda de cliente).</p>" },
                { title: "Fitness for Use", content: "<p>O produto ou serviço deve ser adequado ao seu propósito. Não adianta entregar uma Ferrari (alta qualidade) se o cliente pediu um trator (requisito era outro).</p>" }
            ],
            question: "Explique o princípio 'prevenção sobre inspeção'.",
            answer: "Significa que é mais inteligente e econômico investir em atividades que previnam a ocorrência de defeitos (como treinamento) do que gastar recursos para inspecionar o trabalho no final e corrigir os erros. Prevenção age na causa; inspeção age no sintoma."
        },
        {
            id: 14,
            title: "Gestão de Riscos",
            tip: "É ser o vidente pessimista que leva um guarda-chuva no sol.",
            description: "O processo de identificar, analisar e responder às incertezas do projeto, sejam elas negativas (ameaças) ou positivas (oportunidades).",
            topics: ["Ameaças/Oportunidades", "Análise Quali/Quanti", "Estratégias de Resposta"],
            topicsDetails: [
                { title: "Ameaças e Oportunidades", content: "<p>Um risco é um 'evento incerto' que, se ocorrer, tem um efeito positivo ou negativo. Riscos negativos são ameaças. Riscos positivos são oportunidades. Ambos devem ser gerenciados.</p>" },
                { title: "Análise Quali/Quanti", content: "<p><strong>Qualitativa:</strong> Prioriza riscos com base na sua Probabilidade e Impacto, usando uma matriz para focar nos mais críticos. <strong>Quantitativa:</strong> Analisa numericamente o efeito combinado dos riscos, usando técnicas como a Simulação de Monte Carlo.</p>" },
                { title: "Estratégias de Resposta", content: "<p>Para <strong>Ameaças:</strong> Prevenir, Transferir, Mitigar, Aceitar. Para <strong>Oportunidades:</strong> Explorar (garantir que ocorra), Compartilhar (com terceiro), Melhorar (aumentar probabilidade/impacto), Aceitar.</p>" }
            ],
            question: "Qual a diferença entre mitigar e transferir um risco? Dê um exemplo.",
            answer: "Mitigar um risco é tomar ações para reduzir sua probabilidade/impacto (ex: testar um software exaustivamente). Transferir é passar a responsabilidade para um terceiro (ex: comprar um seguro para a obra)."
        },
        {
            id: 15,
            title: "Stakeholders e Comunicações",
            tip: "Stakeholders podem te ajudar ou te foder. Escolha como se comunicar.",
            description: "Gerenciar Stakeholders é identificar todos que são impactados e gerenciar suas expectativas através de uma comunicação eficaz.",
            topics: ["Identificar Stakeholders", "Matriz Poder x Interesse", "Plano de Comunicações"],
            topicsDetails: [
                { title: "Identificar Stakeholders", content: "<p>É o processo de mapear todos os indivíduos, grupos ou organizações que podem afetar ou ser afetados pelo projeto. É um processo contínuo, pois novos stakeholders podem surgir.</p>" },
                { title: "Matriz Poder x Interesse", content: "<p>Uma ferramenta para classificar stakeholders e definir a estratégia de engajamento. Alto Poder/Alto Interesse: <strong>Gerenciar de perto</strong>. Alto Poder/Baixo Interesse: <strong>Manter satisfeito</strong>. Baixo Poder/Alto Interesse: <strong>Manter informado</strong>. Baixo Poder/Baixo Interesse: <strong>Monitorar</strong>.</p>" },
                { title: "Plano de Comunicações", content: "<p>Define: O que informar? Para quem? Quando? Como (e-mail, reunião, relatório)? E quem é o responsável? Uma boa comunicação (90% do trabalho do GP) mantém as expectativas alinhadas.</p>" }
            ],
            question: "Por que um stakeholder com alto poder e baixo interesse pode ser perigoso?",
            answer: "Porque, embora não preste atenção no dia a dia, ele tem a capacidade (alto poder) de tomar decisões drásticas que podem impactar ou cancelar o projeto se algo chamar sua atenção negativamente. A estratégia é 'mantê-lo satisfeito'."
        },
        {
            id: 16,
            title: "Tipologias de Projetos",
            tip: "Entenda o bicho, depois escolha a jaula.",
            description: "Classificar um projeto (complexidade, tecnologia, novidade) para escolher a abordagem gerencial mais adequada.",
            topics: ["Complexidade", "Modelo Diamante", "Projetos Hard vs. Soft"],
            topicsDetails: [
                { title: "Complexidade", content: "<p>Um projeto pode ser tecnicamente simples (pouca incerteza tecnológica) mas ter um ambiente de negócio complexo (muitos stakeholders, regulamentação). A complexidade define o nível de rigor necessário no gerenciamento.</p>" },
                { title: "Modelo Diamante", content: "<p>Avalia o projeto em 4 dimensões: <strong>N</strong>ovidade (quão novo é o produto), <strong>T</strong>ecnologia (quão nova é a tecnologia), <strong>C</strong>omplexidade (interdependências) e <strong>P</strong>asso (urgência). A combinação define a melhor abordagem (ex: Ágil para alta novidade, Cascata para baixa novidade).</p>" },
                { title: "Projetos Hard vs. Soft", content: "<p>Projetos <strong>Hard</strong> têm objetivos claros e tangíveis (construir um prédio). Projetos <strong>Soft</strong> têm objetivos mais abstratos e difíceis de medir (mudar a cultura de uma empresa). O sucesso em projetos 'soft' é mais subjetivo.</p>" }
            ],
            question: "Por que é importante usar uma tipologia para classificar um projeto?",
            answer: "Porque a classificação ajuda a definir a 'personalidade' do projeto, permitindo escolher as ferramentas e processos mais adequados. Aplicar uma metodologia pesada a um projeto simples pode matar a agilidade, enquanto uma abordagem flexível para um complexo pode levar ao caos."
        },
        {
            id: 17,
            title: "Maturidade e o PMO",
            tip: "Empresa madura não repete as mesmas cagadas.",
            description: "Maturidade é o nível em que uma organização padronizou e otimizou seus processos. O PMO é a estrutura que impulsiona essa maturidade.",
            topics: ["Modelos de Maturidade", "Tipos de PMO", "Benefícios"],
            topicsDetails: [
                { title: "Modelos de Maturidade", content: "<p>Modelos como CMMI e OPM3 descrevem níveis de maturidade, de 1 (caótico, cada um faz de um jeito) a 5 (otimizado, processos são medidos e continuamente melhorados). Permitem que uma empresa se autoavalie e crie um roteiro para melhoria.</p>" },
                { title: "Tipos de PMO", content: "<p>Um Escritório de Projetos (PMO) pode ser: <strong>De Suporte</strong> (fornece templates e boas práticas), <strong>De Controle</strong> (exige conformidade com padrões e frameworks) ou <strong>Diretivo</strong> (gerencia diretamente os projetos).</p>" },
                { title: "Benefícios", content: "<p>Empresas com alta maturidade têm maiores taxas de sucesso, mais previsibilidade nos resultados, menos caos, melhor alinhamento estratégico e reutilizam o conhecimento (lições aprendidas).</p>" }
            ],
            question: "Qual a relação entre um PMO e o aumento da maturidade de uma organização?",
            answer: "O PMO é o principal motor para o aumento da maturidade. Ele atua como o guardião das boas práticas, implementando metodologias, ferramentas e templates padronizados, forçando a organização a sair do caos para processos mais consistentes."
        },
        {
            id: 18,
            title: "Gestão de Portfólio",
            tip: "A arte de dizer 'não' para projetos bons para fazer os essenciais.",
            description: "É o processo de selecionar e gerenciar o conjunto de projetos para garantir o alinhamento com a estratégia do negócio.",
            topics: ["Alinhamento Estratégico", "Balanceamento", "Diferença de Programa"],
            topicsDetails: [
                { title: "Alinhamento Estratégico", content: "<p>Garante que os recursos (limitados) sejam investidos nos projetos que mais contribuem para os objetivos da empresa. Se o objetivo é 'inovar', projetos de P&D devem ser priorizados.</p>" },
                { title: "Balanceamento", content: "<p>Busca equilibrar o portfólio entre diferentes tipos de projetos. Ex: alto risco/alto retorno vs. baixo risco/baixo retorno; projetos de curto prazo vs. longo prazo; projetos de diferentes áreas de negócio.</p>" },
                { title: "Diferença de Programa", content: "<p>Um <strong>portfólio</strong> é um conjunto de projetos e programas gerenciados para atingir objetivos estratégicos. Um <strong>programa</strong> é um grupo de projetos relacionados gerenciados de forma coordenada para obter benefícios que não seriam possíveis gerenciando-os individualmente.</p>" }
            ],
            question: "Qual a diferença entre gerenciar um projeto e um portfólio?",
            answer: "Gerenciar um projeto é sobre 'fazer o trabalho direito' (entregar no escopo, prazo e custo). Gerenciar um portfólio é sobre 'fazer o trabalho certo' (selecionar os projetos corretos que maximizam o valor para a organização)."
        },
        {
            id: 19,
            title: "Conceitos Ágeis",
            tip: "Entregue um skate, depois uma bike, depois uma moto...",
            description: "Abordagem alternativa focada em ciclos curtos, colaboração e adaptação. Scrum e Kanban são os frameworks mais populares.",
            topics: ["Manifesto Ágil", "Scrum", "Kanban"],
            topicsDetails: [
                { title: "Manifesto Ágil", content: "<p>Baseado em 4 valores: <strong>Indivíduos e interações</strong> mais que processos e ferramentas; <strong>Software em funcionamento</strong> mais que documentação abrangente; <strong>Colaboração com o cliente</strong> mais que negociação de contratos; <strong>Responder a mudanças</strong> mais que seguir um plano.</p>" },
                { title: "Scrum", content: "<p>Framework baseado em ciclos de tempo fixo (Sprints) com papéis (Product Owner, Scrum Master, Dev Team), eventos (Sprint Planning, Daily Scrum, Sprint Review, Retrospective) e artefatos (Product Backlog, Sprint Backlog, Incremento).</p>" },
                { title: "Kanban", content: "<p>Método visual para gerenciar o fluxo de trabalho. Seus princípios são: visualizar o fluxo, limitar o trabalho em progresso (WIP), gerenciar o fluxo e tornar as políticas explícitas. Foca na entrega contínua e na otimização do lead time.</p>" }
            ],
            question: "Qual a principal diferença entre Scrum e Kanban?",
            answer: "A cadência. Scrum é iterativo, baseado em Sprints de tempo fixo. Kanban é um sistema de fluxo contínuo, sem iterações, focado em limitar o trabalho em progresso (WIP) e otimizar o fluxo de entrega."
        },
        {
            id: 20,
            title: "Privacidade Hackeada (Pt.1)",
            tip: "O objetivo era simples e psicopata.",
            description: "A Cambridge Analytica (CA) tinha um 'projeto' com objetivos claros, recursos e entregas específicas para fins antiéticos.",
            topics: ["Objetivo do Projeto", "Recursos e Ferramentas", "Entregas"],
            topicsDetails: [
                { title: "Objetivo do Projeto", content: "<p>Identificar eleitores 'persuadíveis' em eleições-chave (Trump, Brexit) e influenciá-los com desinformação e conteúdo emocional, usando micro-targeting baseado em perfis psicográficos (modelo OCEAN).</p>" },
                { title: "Recursos e Ferramentas", content: "<p>O principal recurso era o banco de dados de ~87 milhões de perfis do Facebook, obtido através de um app de quiz que violava os termos de serviço. As ferramentas eram algoritmos de análise de dados e as plataformas de publicidade do Facebook.</p>" },
                { title: "Entregas", content: "<p>As entregas eram campanhas de publicidade ('dark posts') altamente segmentadas, com mensagens e visuais personalizados para explorar as vulnerabilidades psicológicas (medo, raiva, preconceito) de cada grupo de eleitores.</p>" }
            ],
            question: "Do ponto de vista técnico, por que o 'projeto' da CA pode ser considerado bem definido?",
            answer: "Tecnicamente, era bem definido porque possuía um objetivo específico (influenciar eleições), escopo de produto claro (perfis e campanhas), um cliente definido (campanhas políticas) e utilizava recursos específicos dentro de um prazo determinado."
        },
        {
            id: 21,
            title: "Privacidade Hackeada (Pt.2)",
            tip: "O projeto foi um sucesso, mas a empresa faliu.",
            description: "O sucesso técnico da CA foi ofuscado por suas falhas colossais nas áreas de riscos, escopo, stakeholders e, acima de tudo, ética.",
            topics: ["Falha de Riscos", "Falha de Stakeholders", "Falha de Ética"],
            topicsDetails: [
                { title: "Falha de Riscos", content: "<p>Riscos massivos (legais, de reputação, éticos, financeiros) foram deliberadamente ignorados ou aceitos como 'custo do negócio'. Não houve um plano de resposta para a possibilidade de a coleta de dados ser exposta, resultando na falência da empresa.</p>" },
                { title: "Falha de Stakeholders", content: "<p>Os usuários do Facebook, cujos dados foram a base do projeto, foram explorados como recursos, não tratados como partes interessadas. Suas expectativas de privacidade foram violadas, e eles foram alvo de manipulação sem consentimento.</p>" },
                { title: "Falha de Ética", content: "<p>Este é o ponto central. Mesmo que um projeto atinja escopo, tempo e custo, ele é um fracasso se for antiético. A ética não é uma 'restrição', mas um pilar fundamental. A CA falhou em considerar o impacto de suas ações na sociedade e na democracia.</p>" }
            ],
            question: "Como o caso da CA demonstra que o 'sucesso' não se mede só pela 'Restrição Tripla'?",
            answer: "O caso demonstra que um projeto pode ter sucesso em escopo, tempo e custo, mas ser um fracasso retumbante. Ao violar princípios éticos e de confiança, o impacto negativo destruiu a organização, provando que métricas de sucesso devem incluir ética e impacto nos stakeholders."
        }
    ]
};