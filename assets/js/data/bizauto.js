// Arquivo: data/bizauto.js
// Contém os dados para o deck de "Automação de Negócios", com o campo 'details' reestruturado e completo.

export const bizauto = {
    title: "Automação de Negócios",
    theme: "fuchsia",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M12 8V4H8"/><rect x="4" y="12" width="16" height="8" rx="2"/><path d="M2 12h20"/><path d="M17.5 12V8h-3v4"/><path d="M6.5 12V8h-3v4"/></svg>`,
    summary: "Descubra como usar ferramentas No-Code para automatizar tarefas e escalar seu negócio.",
    cards: [
        {
            id: 1,
            title: "O que é Automação?",
            tip: "Fazer robôs trabalharem por você enquanto você dorme.",
            description: "É o uso da tecnologia para executar tarefas ou processos recorrentes que antes exigiam esforço humano, com o objetivo de aumentar a eficiência e reduzir erros.",
            topics: ["Eficiência", "Redução de Erros", "Escalabilidade"],
            topicsDetails: [
                { title: "Eficiência", content: "<p>Libera tempo humano para tarefas mais estratégicas e criativas, em vez de trabalho repetitivo.</p>" },
                { title: "Redução de Erros", content: "<p>Máquinas não se cansam nem se distraem. A automação elimina o erro humano em tarefas baseadas em regras.</p>" },
                { title: "Escalabilidade", content: "<p>Um processo automatizado pode ser executado centenas de vezes com o mesmo esforço de configurar uma vez.</p>" }
            ],
            question: "Qual o tipo de tarefa ideal para ser automatizada?",
            answer: "Tarefas repetitivas, baseadas em regras claras, que consomem muito tempo e são propensas a erro humano. Por exemplo, copiar e colar dados de um e-mail para uma planilha.",
            details: {
                subtitle: "// Objetivos Principais:",
                points: [
                    "<strong>Eficiência:</strong> Libera tempo humano para tarefas mais estratégicas e criativas, em vez de trabalho repetitivo.",
                    "<strong>Redução de Erros:</strong> Máquinas não se cansam nem se distraem. A automação elimina o erro humano em tarefas baseadas em regras.",
                    "<strong>Escalabilidade:</strong> Um processo automatizado pode ser executado centenas de vezes com o mesmo esforço de configurar uma vez."
                ]
            }
        },
        {
            id: 2,
            title: "No-Code vs. Low-Code",
            tip: "Arrastar e soltar vs. um pouco de código.",
            description: "Duas abordagens para criar aplicações e automações com pouca ou nenhuma programação tradicional.",
            topics: ["No-Code", "Low-Code", "Para Quem?"],
            topicsDetails: [
                { title: "No-Code", content: "<p>Plataformas puramente visuais, baseadas em arrastar e soltar. Permitem que pessoas sem conhecimento técnico criem aplicações e automações. Ex: Bubble, Glide.</p>" },
                { title: "Low-Code", content: "<p>Oferecem componentes visuais, mas permitem que desenvolvedores adicionem código customizado para estender a funcionalidade. Ex: Retool, OutSystems.</p>" },
                { title: "Para Quem?", content: "<p>No-Code é ideal para usuários de negócio e empreendedores. Low-Code é ideal para times de TI que querem acelerar o desenvolvimento.</p>" }
            ],
            question: "Uma pessoa de marketing sem saber programar pode criar um app com No-Code?",
            answer: "Sim, absolutamente. Esse é o principal objetivo das plataformas No-Code: capacitar 'citizen developers', pessoas que entendem do negócio, a construir suas próprias ferramentas sem depender de um time de TI.",
            details: {
                subtitle: "// Diferenças e Públicos:",
                points: [
                    "<strong>No-Code:</strong> Plataformas puramente visuais, baseadas em arrastar e soltar. Permitem que pessoas sem conhecimento técnico criem aplicações e automações. Ex: Bubble, Glide.",
                    "<strong>Low-Code:</strong> Oferecem componentes visuais, mas permitem que desenvolvedores adicionem código customizado para estender a funcionalidade. Ex: Retool, OutSystems.",
                    "<strong>Para Quem?:</strong> No-Code é ideal para usuários de negócio e empreendedores. Low-Code é ideal para times de TI que querem acelerar o desenvolvimento."
                ]
            }
        },
        {
            id: 3,
            title: "Ferramentas de Integração (iPaaS)",
            tip: "A cola que une seus aplicativos.",
            description: "iPaaS (Integration Platform as a Service) são ferramentas que conectam diferentes aplicativos e serviços na nuvem, permitindo que eles troquem dados e trabalhem juntos.",
            topics: ["Zapier", "Make (Integromat)", "Gatilho e Ação"],
            topicsDetails: [
                { title: "Zapier", content: "<p>Uma das mais populares e fáceis de usar. Focada em automações lineares simples: 'Se isso acontecer, faça aquilo'.</p>" },
                { title: "Make (Integromat)", content: "<p>Mais visual e poderosa, permite criar cenários complexos com múltiplos caminhos, loops e lógica avançada.</p>" },
                { title: "Gatilho e Ação (Trigger/Action)", content: "<p>É o conceito fundamental. O <strong>Gatilho</strong> é o evento que inicia a automação (ex: 'Novo e-mail recebido no Gmail'). A <strong>Ação</strong> é o que acontece em seguida (ex: 'Adicionar uma linha em uma planilha do Google Sheets').</p>" }
            ],
            question: "Dê um exemplo de uma automação útil para um vendedor usando Zapier.",
            answer: "Um bom exemplo é: Gatilho: 'Novo lead preenche formulário no site'. Ação 1: 'Adicionar o lead como um novo contato no CRM'. Ação 2: 'Enviar um e-mail de boas-vindas personalizado para o lead'. Ação 3: 'Enviar uma notificação no Slack para o time de vendas'.",
            details: {
                subtitle: "// Principais Plataformas e Conceitos:",
                points: [
                    "<strong>Zapier:</strong> Uma das mais populares e fáceis de usar. Focada em automações lineares simples: 'Se isso acontecer, faça aquilo'.",
                    "<strong>Make (Integromat):</strong> Mais visual e poderosa, permite criar cenários complexos com múltiplos caminhos, loops e lógica avançada.",
                    "<strong>Gatilho e Ação (Trigger/Action):</strong> É o conceito fundamental. O <strong>Gatilho</strong> é o evento que inicia a automação (ex: 'Novo e-mail recebido no Gmail'). A <strong>Ação</strong> é o que acontece em seguida (ex: 'Adicionar uma linha em uma planilha do Google Sheets')."
                ]
            }
        },
        {
            id: 4,
            title: "RPA (Robotic Process Automation)",
            tip: "Um robô que imita cliques e digitação.",
            description: "RPA é uma tecnologia que usa 'robôs' de software para imitar as ações de um ser humano interagindo com sistemas digitais, especialmente sistemas legados.",
            topics: ["Sistemas Legados", "Diferença de iPaaS", "Exemplos"],
            topicsDetails: [
                { title: "Sistemas Legados", content: "<p>RPA é ideal para automatizar tarefas em sistemas antigos que não possuem APIs para integração. O robô simplesmente 'olha' para a tela e clica e digita como uma pessoa faria.</p>" },
                { title: "Diferença de iPaaS", content: "<p>iPaaS conecta sistemas através de suas APIs (a porta da frente). RPA interage com sistemas através de sua interface de usuário (a janela).</p>" },
                { title: "Exemplos", content: "<p>Copiar dados de um PDF para um sistema antigo, preencher formulários em múltiplos sistemas, fazer login em portais para baixar relatórios.</p>" }
            ],
            question: "Por que o RPA é considerado uma solução mais 'frágil' que a integração via API?",
            answer: "Porque o robô de RPA depende da interface gráfica do usuário. Se um botão mudar de lugar ou de cor em uma atualização do sistema, a automação quebra. A integração via API é mais robusta, pois se baseia em um 'contrato' de comunicação mais estável.",
            details: {
                subtitle: "// Características do RPA:",
                points: [
                    "<strong>Sistemas Legados:</strong> RPA é ideal para automatizar tarefas em sistemas antigos que não possuem APIs para integração. O robô simplesmente 'olha' para a tela e clica e digita como uma pessoa faria.",
                    "<strong>Diferença de iPaaS:</strong> iPaaS conecta sistemas através de suas APIs (a porta da frente). RPA interage com sistemas através de sua interface de usuário (a janela).",
                    "<strong>Exemplos:</strong> Copiar dados de um PDF para um sistema antigo, preencher formulários em múltiplos sistemas, fazer login em portais para baixar relatórios."
                ]
            }
        },
        {
            id: 5,
            title: "Web scraping",
            tip: "A 'pesca' de dados públicos na internet.",
            description: "É o processo de extrair dados de websites de forma automatizada. Pode ser usado para monitorar preços, gerar leads ou agregar notícias.",
            topics: ["Como Funciona", "Legalidade e Ética", "Ferramentas"],
            topicsDetails: [
                { title: "Como Funciona", content: "<p>Um 'scraper' (raspador) é um script que navega até uma página web, analisa seu código HTML e extrai as informações desejadas com base em padrões (ex: extrair todos os produtos com a classe 'promoção').</p>" },
                { title: "Legalidade e Ética", content: "<p>É uma área cinzenta. É crucial respeitar os termos de serviço do site e o arquivo `robots.txt`. A extração de dados públicos geralmente é permitida, mas a de dados privados não.</p>" },
                { title: "Ferramentas", content: "<p>Existem ferramentas No-Code como Octoparse e Axiom, ou bibliotecas de programação como BeautifulSoup (Python) e Puppeteer (JavaScript).</p>" }
            ],
            question: "Qual é o objetivo do arquivo `robots.txt` em um site?",
            answer: "O `robots.txt` é um arquivo de texto que instrui os robôs (como os do Google ou scrapers) sobre quais páginas ou seções do site eles têm permissão para acessar e quais devem evitar. É uma diretriz, não uma barreira técnica.",
            details: {
                subtitle: "// Pontos Importantes:",
                points: [
                    "<strong>Como Funciona:</strong> Um 'scraper' (raspador) é um script que navega até uma página web, analisa seu código HTML e extrai as informações desejadas com base em padrões.",
                    "<strong>Legalidade e Ética:</strong> É uma área cinzenta. É crucial respeitar os termos de serviço do site e o arquivo `robots.txt`.",
                    "<strong>Ferramentas:</strong> Existem ferramentas No-Code como Octoparse e Axiom, ou bibliotecas de programação como BeautifulSoup (Python) e Puppeteer (JavaScript)."
                ]
            }
        },
        {
            id: 6,
            title: "APIs e Webhooks",
            tip: "Pedir informação vs. Ser informado.",
            description: "São duas maneiras principais pelas quais os aplicativos se comunicam, mas funcionam de formas opostas.",
            topics: ["API (Polling)", "Webhook (Pushing)", "Analogia"],
            topicsDetails: [
                { title: "API (Polling)", content: "<p>Com uma API, seu aplicativo precisa perguntar ativamente ao outro sistema se há novas informações. É como ligar para a pizzaria a cada 5 minutos para saber se a pizza está pronta.</p>" },
                { title: "Webhook (Pushing)", content: "<p>Com um webhook, o outro sistema avisa o seu aplicativo assim que algo novo acontece. A pizzaria te liga quando a pizza sai do forno. É muito mais eficiente.</p>" },
                { title: "Qual é Melhor?", content: "<p>Webhooks são quase sempre mais eficientes, pois economizam recursos ao evitar chamadas desnecessárias. Use APIs quando o outro serviço não oferece webhooks.</p>" }
            ],
            question: "Em termos de eficiência de recursos, qual é melhor: API polling ou Webhook? Por quê?",
            answer: "Webhook. Porque ele opera em um modelo 'push' (envio de dados quando há um evento), enquanto o API polling opera em um modelo 'pull' (pedidos constantes para verificar se há novos dados), o que consome muito mais recursos do servidor.",
            details: {
                subtitle: "// Comparativo:",
                points: [
                    "<strong>API (Polling):</strong> Seu aplicativo pergunta ativamente se há novas informações. É como ligar para a pizzaria a cada 5 minutos para saber se a pizza está pronta.",
                    "<strong>Webhook (Pushing):</strong> O outro sistema avisa o seu aplicativo assim que algo novo acontece. A pizzaria te liga quando a pizza sai do forno. É muito mais eficiente.",
                    "<strong>Qual é Melhor?:</strong> Webhooks são quase sempre mais eficientes, pois economizam recursos ao evitar chamadas desnecessárias. Use APIs quando o outro serviço não oferece webhooks."
                ]
            }
        },
        {
            id: 7,
            title: "Chatbots e Automação de Atendimento",
            tip: "Seu funcionário que trabalha 24/7 e nunca reclama.",
            description: "Uso de chatbots para automatizar respostas a perguntas frequentes, qualificar leads e guiar clientes, liberando a equipe humana para casos mais complexos.",
            topics: ["Qualificação de Leads", "Suporte 24/7", "Integração com Ferramentas"],
            topicsDetails: [
                { title: "Qualificação de Leads", content: "<p>Um chatbot pode fazer as perguntas iniciais a um visitante do site (Nome? Empresa? Necessidade?) e, com base nas respostas, direcioná-lo para o vendedor certo.</p>" },
                { title: "Suporte 24/7", content: "<p>Responde às perguntas mais comuns dos clientes a qualquer hora do dia, melhorando a satisfação e reduzindo a carga da equipe de suporte.</p>" },
                { title: "Integração", content: "<p>Um bom chatbot se integra com seu CRM, seu sistema de e-mail marketing e outras ferramentas para criar uma experiência unificada.</p>" }
            ],
            question: "Qual o principal benefício de um chatbot para a equipe de suporte humano?",
            answer: "Ele atua como um filtro de primeira linha, resolvendo as dúvidas mais simples e repetitivas. Isso permite que os agentes humanos se concentrem nos problemas mais complexos e de alto valor, onde sua expertise é realmente necessária.",
            details: {
                subtitle: "// Aplicações de Chatbots:",
                points: [
                    "<strong>Qualificação de Leads:</strong> Um chatbot pode fazer as perguntas iniciais a um visitante do site (Nome? Empresa? Necessidade?) e, com base nas respostas, direcioná-lo para o vendedor certo.",
                    "<strong>Suporte 24/7:</strong> Responde às perguntas mais comuns dos clientes a qualquer hora do dia, melhorando a satisfação e reduzindo a carga da equipe de suporte.",
                    "<strong>Integração com Ferramentas:</strong> Um bom chatbot se integra com seu CRM, seu sistema de e-mail marketing e outras ferramentas para criar uma experiência unificada."
                ]
            }
        },
        {
            id: 8,
            title: "Automação de Marketing",
            tip: "Nutrindo leads no piloto automático.",
            description: "Uso de software para automatizar atividades de marketing, como envio de e-mails, postagens em redes sociais e segmentação de clientes.",
            topics: ["Fluxos de Nutrição", "Segmentação", "Lead Scoring"],
            topicsDetails: [
                { title: "Fluxos de Nutrição", content: "<p>Criação de sequências de e-mails automáticos que são enviados a um lead com base em suas ações (ex: baixou um e-book, visitou a página de preços).</p>" },
                { title: "Segmentação", content: "<p>Agrupar contatos em listas com base em seus interesses, comportamento ou demografia para enviar mensagens mais relevantes.</p>" },
                { title: "Lead Scoring", content: "<p>Atribuir pontos a cada lead com base em seu perfil e engajamento. Leads com pontuação alta são enviados automaticamente para a equipe de vendas.</p>" }
            ],
            question: "O que é um fluxo de nutrição de leads?",
            answer: "É uma sequência de comunicações automatizadas (geralmente e-mails) projetada para guiar um potencial cliente através do funil de vendas, fornecendo conteúdo relevante e construindo um relacionamento ao longo do tempo, até que ele esteja pronto para comprar.",
            details: {
                subtitle: "// Ferramentas de Marketing Automation:",
                points: [
                    "<strong>Fluxos de Nutrição:</strong> Criação de sequências de e-mails automáticos que são enviados a um lead com base em suas ações (ex: baixou um e-book, visitou a página de preços).",
                    "<strong>Segmentação:</strong> Agrupar contatos em listas com base em seus interesses, comportamento ou demografia para enviar mensagens mais relevantes.",
                    "<strong>Lead Scoring:</strong> Atribuir pontos a cada lead com base em seu perfil e engajamento. Leads com pontuação alta são enviados automaticamente para a equipe de vendas."
                ]
            }
        },
        {
            id: 9,
            title: "Airtable como Banco de Dados",
            tip: "A planilha com superpoderes.",
            description: "O Airtable combina a simplicidade de uma planilha com a complexidade de um banco de dados, tornando-se um hub central para muitas automações no-code.",
            topics: ["Banco de Dados Relacional", "Views Customizadas", "API Pronta"],
            topicsDetails: [
                { title: "Banco de Dados Relacional", content: "<p>Diferente do Excel, você pode criar links entre tabelas (ex: uma tabela de Clientes e outra de Projetos, com cada projeto linkado a um cliente).</p>" },
                { title: "Views Customizadas", content: "<p>Crie diferentes visualizações (Grid, Calendário, Kanban, Galeria) para os mesmos dados, sem alterar a tabela original.</p>" },
                { title: "API Pronta", content: "<p>Cada base no Airtable gera automaticamente sua própria API, facilitando a integração com ferramentas como Zapier, Make ou com seu próprio código.</p>" }
            ],
            question: "Qual a principal vantagem do Airtable sobre o Google Sheets para gerenciar um projeto?",
            answer: "A capacidade de criar relacionamentos entre tabelas. Enquanto no Sheets você repetiria o nome do cliente em cada tarefa, no Airtable você pode linkar tarefas a um único registro de cliente, mantendo os dados consistentes e organizados.",
            details: {
                subtitle: "// Superpoderes do Airtable:",
                points: [
                    "<strong>Banco de Dados Relacional:</strong> Diferente do Excel, você pode criar links entre tabelas (ex: uma tabela de Clientes e outra de Projetos, com cada projeto linkado a um cliente).",
                    "<strong>Views Customizadas:</strong> Crie diferentes visualizações (Grid, Calendário, Kanban, Galeria) para os mesmos dados, sem alterar a tabela original.",
                    "<strong>API Pronta:</strong> Cada base no Airtable gera automaticamente sua própria API, facilitando a integração com ferramentas como Zapier, Make ou com seu próprio código."
                ]
            }
        },
        {
            id: 10,
            title: "O Futuro é Hiperautomação",
            tip: "Não é mais sobre automatizar tarefas, é sobre automatizar a automação.",
            description: "É a ideia de combinar múltiplas tecnologias (IA, ML, RPA, iPaaS) de forma orquestrada para automatizar processos de negócio de ponta a ponta da forma mais inteligente possível.",
            topics: ["Combinação de Tecnologias", "Process Mining", "Foco em ROI"],
            topicsDetails: [
                { title: "Combinação de Tecnologias", content: "<p>A hiperautomação não se prende a uma única ferramenta, mas usa a melhor tecnologia para cada parte do processo.</p>" },
                { title: "Process Mining", content: "<p>Usa IA para analisar os logs dos sistemas e descobrir automaticamente como os processos realmente funcionam (e onde estão os gargalos), identificando as melhores oportunidades para automação.</p>" },
                { title: "Foco em ROI", content: "<p>A decisão de automatizar é baseada em um cálculo claro de Retorno sobre o Investimento, garantindo que os esforços sejam direcionados para onde geram mais valor.</p>" }
            ],
            question: "Qual a diferença entre Automação e Hiperautomação?",
            answer: "Automação foca em automatizar tarefas específicas e discretas. Hiperautomação é uma abordagem estratégica que visa automatizar processos de negócio inteiros, de ponta a ponta, usando uma combinação orquestrada de múltiplas tecnologias, incluindo IA e ML, para tomar decisões mais inteligentes.",
            details: {
                subtitle: "// Pilares da Hiperautomação:",
                points: [
                    "<strong>Combinação de Tecnologias:</strong> A hiperautomação não se prende a uma única ferramenta, mas usa a melhor tecnologia para cada parte do processo.",
                    "<strong>Process Mining:</strong> Usa IA para analisar os logs dos sistemas e descobrir automaticamente como os processos realmente funcionam (e onde estão os gargalos), identificando as melhores oportunidades para automação.",
                    "<strong>Foco em ROI:</strong> A decisão de automatizar é baseada em um cálculo claro de Retorno sobre o Investimento, garantindo que os esforços sejam direcionados para onde geram mais valor."
                ]
            }
        }
    ]
};
