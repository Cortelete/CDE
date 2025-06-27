// Arquivo: data/te.js
// Contém os dados para o baralho de "Tópicos em Engenharia", com o campo 'details' reestruturado.

export const te = {
    title: "Tópicos em Engenharia",
    theme: "green",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M2 8h20"/><path d="M6 12h12"/><path d="M10 16h4"/><path d="M4 4v16"/><path d="M20 4v16"/></svg>`,
    summary: "Entenda o fluxo de produção, BPMN, faxina de dados e os principais erros e acertos em modelagem.",
    cards: [
        {
            id: 1,
            title: "Faxina de Dados",
            tip: "Base podre? FAXINA GERAL!",
            description: "É o processo de corrigir ou remover dados incorretos, corrompidos ou duplicados de uma base. A qualidade da análise depende diretamente disso.",
            topics: ["Padronização", "Remover Duplicados", "Tratar Nulos"],
            topicsDetails: [
                { title: "Padronização de Dados", content: "<p>Garantir que os dados sigam um formato consistente (ex: datas, CPFs). Isso evita erros em filtros e cálculos.</p>" },
                { title: "Remoção de Duplicados", content: "<p>Identificar e eliminar registros que aparecem mais de uma vez. Ter um cliente duplicado distorce todas as métricas.</p>" },
                { title: "Tratamento de Nulos", content: "<p>Campos vazios podem quebrar cálculos. Podem ser removidos ou preenchidos com um valor padrão (zero, média, mediana).</p>" }
            ],
            question: "Diante de uma base com duplicidades e nulos, detalhe como você garantiria a qualidade dos dados.",
            answer: "As etapas essenciais são: Padronização de formatação, Remoção de duplicidades, Validação dos dados (se fazem sentido), Tratamento dos dados nulos e Documentação do que foi feito e do que cada campo significa.",
            details: {
                subtitle: "// Etapas Essenciais:",
                points: [
                    "<strong>Padronização de Dados:</strong> Garantir que os dados sigam um formato consistente (ex: datas, CPFs). Isso evita erros em filtros e cálculos.",
                    "<strong>Remoção de Duplicados:</strong> Identificar e eliminar registros que aparecem mais de uma vez. Ter um cliente duplicado distorce todas as métricas.",
                    "<strong>Tratamento de Nulos:</strong> Campos vazios podem quebrar cálculos. Podem ser removidos ou preenchidos com um valor padrão (zero, média, mediana)."
                ]
            }
        },
        {
            id: 2,
            title: "Ciclo de Dados",
            tip: "É a receita do bolo. Não pule etapas ou o bolo sola.",
            description: "Representa a sequência de passos de um projeto de dados, desde a coleta inicial até a implementação e monitoramento.",
            topics: ["Coleta > Limpeza", "Análise > Modelagem", "Visualização"],
            topicsDetails: [
                { title: "Coleta e Limpeza", content: "<p>A <strong>Coleta</strong> é a obtenção dos dados brutos. A <strong>Limpeza</strong> vem em seguida para tratar inconsistências.</p>" },
                { title: "Análise e Modelagem", content: "<p>Na <strong>Análise</strong>, buscamos entender os dados. Na <strong>Modelagem</strong>, aplicamos algoritmos de ML ou estatísticos.</p>" },
                { title: "Visualização", content: "<p>É a etapa de transformar os resultados em gráficos e dashboards para facilitar a comunicação e a tomada de decisão.</p>" }
            ],
            question: "EXPLIQUE como você aplicaria o ciclo da Ciência de Dados.",
            answer: "O ciclo é composto por: Coleta, Limpeza, Análise, Modelagem, Avaliação, Visualização e Monitoramento.",
            details: {
                subtitle: "// Fases do Ciclo:",
                points: [
                    "<strong>Coleta e Limpeza:</strong> A Coleta é a obtenção dos dados brutos. A Limpeza vem em seguida para tratar inconsistências.",
                    "<strong>Análise e Modelagem:</strong> Na Análise, buscamos entender os dados. Na Modelagem, aplicamos algoritmos de ML ou estatísticos.",
                    "<strong>Visualização:</strong> É a etapa de transformar os resultados em gráficos e dashboards para facilitar a comunicação e a tomada de decisão."
                ]
            }
        },
        {
            id: 3,
            title: "Fluxo de Produção",
            tip: "Início, meio, decisão e fim. Simples assim.",
            description: "É a representação visual das etapas sequenciais de um processo, mostrando atividades, pontos de decisão e o caminho do início ao fim.",
            topics: ["Início (Evento)", "Atividades (Tarefas)", "Decisão (Gateway)"],
            topicsDetails: [
                { title: "Início (Evento)", content: "<p>Em BPMN, é o gatilho que dispara o processo, representado por um círculo com borda fina.</p>" },
                { title: "Atividades (Tarefas)", content: "<p>Representam o trabalho a ser feito, são os retângulos no diagrama.</p>" },
                { title: "Decisão (Gateway)", content: "<p>São os losangos que controlam o caminho do fluxo (ex: Gateway Exclusivo 'OU').</p>" }
            ],
            question: "CRIE uma modelagem para o fluxo de produção de canetas.",
            answer: "Início (Pedido recebido) -> Atividades (Separar matéria-prima > Montar corpo > Inserir carga > Inspeção) -> Decisão (Aprovado? Sim: embalar; Não: descarte) -> Encerramento (Produto enviado).",
            details: {
                subtitle: "// Elementos do Fluxo:",
                points: [
                    "<strong>Início (Evento):</strong> Em BPMN, é o gatilho que dispara o processo, representado por um círculo com borda fina.",
                    "<strong>Atividades (Tarefas):</strong> Representam o trabalho a ser feito, são os retângulos no diagrama.",
                    "<strong>Decisão (Gateway):</strong> São os losangos que controlam o caminho do fluxo (ex: Gateway Exclusivo 'OU')."
                ]
            }
        },
        {
            id: 4,
            title: "Boas Práticas BPMN",
            tip: "Siga as regras ou seu diagrama será uma piada.",
            description: "Convenções que garantem que os diagramas de processo sejam claros, consistentes e facilmente compreendidos por todos.",
            topics: ["Nomenclatura Clara", "Pools e Lanes", "Sem Espaguete"],
            topicsDetails: [
                { title: "Nomenclatura Clara", content: "<p>Usar verbos de ação para atividades (Ex: 'Verificar Crédito') para evitar ambiguidade.</p>" },
                { title: "Pools e Lanes", content: "<p>Pools representam entidades externas ('Cliente'). Lanes dividem um pool para mostrar papéis internos ('Vendas', 'Financeiro').</p>" },
                { title: "Sem Espaguete", content: "<p>Evitar o cruzamento excessivo de setas. Um layout limpo, da esquerda para a direita, torna o diagrama legível.</p>" }
            ],
            question: "CITE e JUSTIFIQUE boas práticas para elaborar um diagrama BPMN.",
            answer: "Utilizar nomenclatura clara; Garantir que todo fluxo tenha início e fim; Não sobrecarregar o diagrama (usar subprocessos); Usar gateways corretamente; Representar papéis com pools e lanes; Evitar cruzamento de setas.",
            details: {
                subtitle: "// Práticas Essenciais:",
                points: [
                    "<strong>Nomenclatura Clara:</strong> Usar verbos de ação para atividades (Ex: 'Verificar Crédito') para evitar ambiguidade.",
                    "<strong>Pools e Lanes:</strong> Pools representam entidades externas ('Cliente'). Lanes dividem um pool para mostrar papéis internos ('Vendas', 'Financeiro').",
                    "<strong>Sem Espaguete:</strong> Evitar o cruzamento excessivo de setas. Um layout limpo, da esquerda para a direita, torna o diagrama legível."
                ]
            }
        },
        {
            id: 5,
            title: "Erros de Modelagem",
            tip: "Saber o que NÃO fazer é crucial.",
            description: "Falhas na construção do diagrama que violam as regras do BPMN, gerando ambiguidades ou fluxos ilógicos.",
            topics: ["Lane sem Nome", "Gateway Errado", "Fluxo Morto"],
            topicsDetails: [
                { title: "Lane sem Nome", content: "<p>Uma Lane sem nome deixa a responsabilidade por suas atividades indefinida. Cada raia deve ser nomeada com o papel ou departamento.</p>" },
                { title: "Gateway Errado", content: "<p>Usar um gateway incorreto (ex: Paralelo 'E' quando a decisão é Exclusiva 'OU') cria uma lógica de processo falha.</p>" },
                { title: "Fluxo Morto", content: "<p>Todo fluxo deve ter um Evento de Fim. Um fluxo que 'morre' no meio do caminho está incompleto e é um erro.</p>" }
            ],
            question: "IDENTIFIQUE dois problemas comuns em diagramas BPMN.",
            answer: "Problemas comuns incluem: Lane sem nome (falta de clareza na responsabilidade); Fim de processo sem nomeação (fluxo incompleto); Gateway usado incorretamente; Atividade com mais de uma saída sem um gateway.",
            details: {
                subtitle: "// Erros Comuns:",
                points: [
                    "<strong>Lane sem Nome:</strong> Uma Lane sem nome deixa a responsabilidade por suas atividades indefinida. Cada raia deve ser nomeada com o papel ou departamento.",
                    "<strong>Gateway Errado:</strong> Usar um gateway incorreto (ex: Paralelo 'E' quando a decisão é Exclusiva 'OU') cria uma lógica de processo falha.",
                    "<strong>Fluxo Morto:</strong> Todo fluxo deve ter um Evento de Fim. Um fluxo que 'morre' no meio do caminho está incompleto e é um erro."
                ]
            }
        },
        {
            id: 6,
            title: "Pense em Robôs",
            tip: "Melhoria de processo hoje = automação.",
            description: "Desenhar e otimizar processos com o objetivo de permitir que tarefas manuais e repetitivas sejam executadas por software (RPA).",
            topics: ["Automatizar Triagem", "Reduzir Erro Humano", "Ganhar Agilidade"],
            topicsDetails: [
                { title: "Automatizar Triagem", content: "<p>Tarefas como ler currículos e aplicar filtros básicos são repetitivas e ideais para automação com RPA ou ATS.</p>" },
                { title: "Reduzir Erro Humano", content: "<p>Máquinas não se cansam. Automatizar tarefas baseadas em regras elimina erros de digitação e inconsistências.</p>" },
                { title: "Ganhar Agilidade", content: "<p>Processos automatizados rodam 24/7, reduzindo drasticamente o tempo de ciclo (lead time) de um processo.</p>" }
            ],
            question: "SUGIRA ajustes para melhorar a eficiência de um processo de recrutamento via automação.",
            answer: "Sugestões: Automatizar etapas manuais, como triagem de currículos, usando softwares de RH. Impacto: redução de tempo e erro humano. Automatizar as análises com critérios padronizados. Impacto: imparcialidade e velocidade.",
            details: {
                subtitle: "// Benefícios da Automação:",
                points: [
                    "<strong>Automatizar Triagem:</strong> Tarefas como ler currículos e aplicar filtros básicos são repetitivas e ideais para automação com RPA ou ATS.",
                    "<strong>Reduzir Erro Humano:</strong> Máquinas não se cansam. Automatizar tarefas baseadas em regras elimina erros de digitação e inconsistências.",
                    "<strong>Ganhar Agilidade:</strong> Processos automatizados rodam 24/7, reduzindo drasticamente o tempo de ciclo (lead time) de um processo."
                ]
            }
        },
        {
            id: 7,
            title: "Leitura de Fluxo",
            tip: "Bater o olho e entender a jornada. Esse é o objetivo.",
            description: "A habilidade de interpretar um diagrama BPMN, compreendendo a sequência de tarefas, responsabilidades e resultados.",
            topics: ["Jornada do Candidato", "Clareza Visual", "Coerência"],
            topicsDetails: [
                { title: "Jornada do Candidato", content: "<p>Seguir as setas desde o evento de início ('CV Recebido') até os possíveis fins ('Contratado' ou 'Rejeitado').</p>" },
                { title: "Clareza Visual", content: "<p>Um bom fluxo é limpo. As lanes devem separar claramente as responsabilidades. As setas não devem se cruzar.</p>" },
                { title: "Coerência", content: "<p>O fluxo deve fazer sentido lógico. Cada atividade leva a um resultado que alimenta a próxima etapa.</p>" }
            ],
            question: "INTERPRETE um fluxo BPMN de recrutamento.",
            answer: "O fluxo mostra a jornada do candidato, desde o envio do currículo até a contratação ou não. A clareza depende de quão bem o diagrama segue as boas práticas.",
            details: {
                subtitle: "// Pontos de Foco na Leitura:",
                points: [
                    "<strong>Jornada do Candidato:</strong> Seguir as setas desde o evento de início ('CV Recebido') até os possíveis fins ('Contratado' ou 'Rejeitado').",
                    "<strong>Clareza Visual:</strong> Um bom fluxo é limpo. As lanes devem separar claramente as responsabilidades. As setas não devem se cruzar.",
                    "<strong>Coerência:</strong> O fluxo deve fazer sentido lógico. Cada atividade leva a um resultado que alimenta a próxima etapa."
                ]
            }
        },
        {
            id: 8,
            title: "Maturidade de Processos",
            tip: "Compare o profissional contra o amador (várzea).",
            description: "Mede o grau de controle e otimização dos processos, variando de caótico (imaturo) a otimizado (maduro).",
            topics: ["Maduro: Documentado", "Imaturo: Informal", "Controle vs. Caos"],
            topicsDetails: [
                { title: "Maduro: Documentado", content: "<p>Os processos são mapeados, documentados e padronizados. Todos sabem como funciona.</p>" },
                { title: "Imaturo: Informal", content: "<p>Os processos 'existem na cabeça das pessoas'. O conhecimento não é compartilhado.</p>" },
                { title: "Controle vs. Caos", content: "<p>Maturidade traz controle (KPIs, otimização). Imaturidade gera caos (imprevisibilidade, erros).</p>" }
            ],
            question: "Explique a diferença entre organizações com processos maduros e imaturos.",
            answer: "Maduros: Processos são documentados, otimizados e monitorados, resultando em alta eficiência. Imaturos: Processos são informais, dependentes de pessoas e suscetíveis a erros.",
            details: {
                subtitle: "// Níveis de Maturidade:",
                points: [
                    "<strong>Maduro: Documentado:</strong> Os processos são mapeados, documentados e padronizados. Todos sabem como funciona.",
                    "<strong>Imaturo: Informal:</strong> Os processos 'existem na cabeça das pessoas'. O conhecimento não é compartilhado.",
                    "<strong>Controle vs. Caos:</strong> Maturidade traz controle (KPIs, otimização). Imaturidade gera caos (imprevisibilidade, erros)."
                ]
            }
        },
        {
            id: 9,
            title: "BPMN para Inovação",
            tip: "Foco total em AUTOMAÇÃO para agilidade real.",
            description: "Usar o BPMN como um plano de ação para automatizar processos, permitindo que a empresa se adapte rapidamente.",
            topics: ["Foco em Automação", "Mapa para Sistemas", "Ajustes Rápidos"],
            topicsDetails: [
                { title: "Foco em Automação", content: "<p>A modelagem deve ser um projeto para o futuro ('TO-BE'), identificando tarefas candidatas para automação.</p>" },
                { title: "Mapa para Sistemas", content: "<p>O diagrama BPMN se torna a especificação funcional para os desenvolvedores.</p>" },
                { title: "Ajustes Rápidos", content: "<p>Quando um processo é automatizado e guiado por BPMN, mudá-lo se torna mais fácil, conferindo agilidade.</p>" }
            ],
            question: "Qual abordagem é mais eficaz para maximizar os benefícios do BPMN em empresas ágeis?",
            answer: "A abordagem mais eficaz é focar a modelagem em Automação. Isso permite que os processos sejam completados e ajustados com as mudanças do negócio de forma ágil.",
            details: {
                subtitle: "// BPMN como Ferramenta Ágil:",
                points: [
                    "<strong>Foco em Automação:</strong> A modelagem deve ser um projeto para o futuro ('TO-BE'), identificando tarefas candidatas para automação.",
                    "<strong>Mapa para Sistemas:</strong> O diagrama BPMN se torna a especificação funcional para os desenvolvedores.",
                    "<strong>Ajustes Rápidos:</strong> Quando um processo é automatizado e guiado por BPMN, mudá-lo se torna mais fácil, conferindo agilidade."
                ]
            }
        },
        {
            id: 10,
            title: "ML com Dado Velho",
            tip: "Entrada de lixo, saída de lixo. Simples assim.",
            description: "É o problema de treinar um modelo de Machine Learning com informações desatualizadas, o que leva a previsões ruins (viés temporal).",
            topics: ["Viés Temporal", "Acurácia Baixa", "Solução: Dados Frescos"],
            topicsDetails: [
                { title: "Viés Temporal", content: "<p>Ocorre quando um modelo é treinado com dados de um período, mas aplicado a outro, e as relações entre as variáveis mudaram.</p>" },
                { title: "Acurácia Baixa", content: "<p>Um modelo pode ter ótima acurácia nos dados de teste (antigos), mas falhar em produção (dados novos).</p>" },
                { title: "Solução: Dados Frescos", content: "<p>A principal mitigação é o retreino periódico do modelo com dados recentes, automatizado via MLOps.</p>" }
            ],
            question: "Um modelo de inadimplência foi treinado com dados de renda desatualizados. QUAL o impacto e a mitigação?",
            answer: "O modelo apresentará viés temporal e menor acurácia. A mitigação é priorizar a aquisição de dados de renda mais recentes, buscando atualizações periódicas ou fontes de dados em tempo real.",
            details: {
                subtitle: "// Conceitos Chave do Viés Temporal:",
                points: [
                    "<strong>Viés Temporal:</strong> Ocorre quando um modelo é treinado com dados de um período, mas aplicado a outro, e as relações entre as variáveis mudaram.",
                    "<strong>Acurácia Baixa:</strong> Um modelo pode ter ótima acurácia nos dados de teste (antigos), mas falhar em produção (dados novos).",
                    "<strong>Solução: Dados Frescos:</strong> A principal mitigação é o retreino periódico do modelo com dados recentes, automatizado via MLOps."
                ]
            }
        }
    ]
};
