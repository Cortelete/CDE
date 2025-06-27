// Arquivo: data/prog.js
// Contém os dados exclusivamente para o deck de "Tópicos em Programação".

export const prog = {
    title: "Tópicos em Programação",
    theme: "yellow",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
    summary: "Desvende os conceitos universais que formam a base de todo bom software, de algoritmos a APIs.",
    cards: [
        {
            id: 1,
            title: "Algoritmo",
            tip: "A receita de bolo para resolver um problema.",
            description: "Um algoritmo é uma sequência finita de passos bem definidos e lógicos, projetados para resolver um problema específico ou executar uma tarefa.",
            topics: ["Passo a Passo", "Finito", "Independente de Linguagem"],
            topicsDetails: [
                { title: "Sequência de Passos", content: "<p>Cada instrução em um algoritmo deve ser clara e sem ambiguidade. A ordem dos passos é crucial para o resultado correto.</p>" },
                { title: "Finito", content: "<p>Um algoritmo deve sempre terminar após um número finito de passos. Um loop infinito, por exemplo, viola essa regra.</p>" },
                { title: "Independente de Linguagem", content: "<p>Um algoritmo é uma ideia, um conceito lógico. Ele pode ser implementado em qualquer linguagem de programação (Python, Java, C++, etc.).</p>" }
            ],
            question: "Por que um algoritmo precisa ser 'finito'?",
            answer: "Porque ele foi criado para resolver um problema. Se ele não termina, ele nunca entrega a solução e consome recursos indefinidamente, tornando-se inútil."
        },
        {
            id: 2,
            title: "Estruturas de Dados",
            tip: "As prateleiras e gavetas para organizar sua informação.",
            description: "São formas específicas de organizar, armazenar e gerenciar dados em um computador para que possam ser usados de forma eficiente.",
            topics: ["Arrays", "Listas Ligadas", "Pilhas e Filas"],
            topicsDetails: [
                { title: "Arrays", content: "<p>Uma coleção de elementos do mesmo tipo, armazenados em locais de memória contíguos. Ótimos para acesso rápido pelo índice, mas de tamanho fixo.</p>" },
                { title: "Listas Ligadas (Linked Lists)", content: "<p>Uma coleção de nós onde cada nó contém o dado e um ponteiro para o próximo nó. Flexíveis em tamanho, mas mais lentas para acesso aleatório.</p>" },
                { title: "Pilhas (Stacks) e Filas (Queues)", content: "<p><strong>Pilha (LIFO - Last-In, First-Out):</strong> Pense numa pilha de pratos. O último a entrar é o primeiro a sair. <strong>Fila (FIFO - First-In, First-Out):</strong> Pense numa fila de banco. O primeiro a chegar é o primeiro a ser atendido.</p>" }
            ],
            question: "Quando você usaria uma Pilha (Stack) em vez de uma Fila (Queue)? Dê um exemplo.",
            answer: "Você usaria uma Pilha quando a ordem de processamento precisa ser inversa à de chegada. Um exemplo clássico é o botão 'Desfazer' (Undo) em um editor de texto, que desfaz a última ação realizada."
        },
        {
            id: 3,
            title: "Complexidade (Big O)",
            tip: "Como seu código se comporta quando a fofoca se espalha.",
            description: "A Notação Big O descreve a performance ou complexidade de um algoritmo. Ela mede como o tempo de execução ou o uso de memória cresce à medida que o tamanho da entrada aumenta.",
            topics: ["O(1)", "O(n)", "O(n²)"],
            topicsDetails: [
                { title: "O(1) - Constante", content: "<p>Performance excelente. O tempo de execução não muda, não importa o tamanho da entrada. Ex: acessar um elemento de um array pelo índice.</p>" },
                { title: "O(n) - Linear", content: "<p>Performance boa. O tempo de execução cresce na mesma proporção que a entrada. Ex: percorrer todos os elementos de uma lista.</p>" },
                { title: "O(n²) - Quadrática", content: "<p>Performance ruim. O tempo de execução cresce exponencialmente com a entrada. Geralmente envolve loops aninhados. Fica muito lento para entradas grandes.</p>" }
            ],
            question: "Um algoritmo com complexidade O(n²) é uma boa escolha para processar uma base de dados com milhões de registros? Por quê?",
            answer: "Não, é uma péssima escolha. A complexidade O(n²) significa que o tempo de execução cresce ao quadrado do número de registros. Para milhões de registros, o tempo de execução se tornaria proibitivamente longo."
        },
        {
            id: 4,
            title: "Controle de Versão (Git)",
            tip: "A máquina do tempo do seu código.",
            description: "Um sistema que registra as mudanças em arquivos ao longo do tempo, permitindo que você reverta para versões específicas, compare alterações e colabore com outros.",
            topics: ["Repositório", "Commit", "Branch"],
            topicsDetails: [
                { title: "Repositório (Repo)", content: "<p>É a 'pasta' do seu projeto que está sendo monitorada pelo Git. Contém todos os arquivos e o histórico de todas as alterações.</p>" },
                { title: "Commit", content: "<p>É um 'snapshot' ou um ponto de salvamento no seu histórico. Cada commit tem uma mensagem descrevendo o que foi alterado.</p>" },
                { title: "Branch", content: "<p>É uma linha de desenvolvimento independente. Permite que você trabalhe em uma nova funcionalidade ('feature branch') sem bagunçar a linha principal ('main' ou 'master').</p>" }
            ],
            question: "Para que servem os 'branches' no Git?",
            answer: "Branches servem para permitir o desenvolvimento paralelo de funcionalidades. Você pode criar um branch para trabalhar em uma nova feature ou corrigir um bug sem afetar a versão estável do código (que geralmente fica no branch 'main')."
        },
        {
            id: 5,
            title: "APIs",
            tip: "O garçom que conecta você com a cozinha.",
            description: "Uma API (Interface de Programação de Aplicações) é um conjunto de regras e definições que permite que diferentes aplicações de software se comuniquem umas com as outras.",
            topics: ["Contrato", "Cliente e Servidor", "Exemplo: REST"],
            topicsDetails: [
                { title: "O Contrato", content: "<p>A API atua como um contrato, especificando os 'pedidos' que uma aplicação pode fazer, como fazer e os 'pratos' que ela pode esperar de volta. Ela define os endpoints (URLs), métodos (GET, POST, etc.) e formatos de dados (JSON).</p>" },
                { title: "Cliente e Servidor", content: "<p>A aplicação que faz o pedido é o <strong>cliente</strong>. A aplicação que tem os dados e a lógica e responde ao pedido é o <strong>servidor</strong>. A API é a ponte entre eles.</p>" },
                { title: "Exemplo Prático", content: "<p>Quando você usa um app de previsão do tempo, ele não tem os dados do clima. Ele faz uma chamada a uma API de um serviço de meteorologia (o servidor), pedindo os dados para sua cidade, e exibe a resposta para você.</p>" }
            ],
            question: "Usando a analogia do restaurante, explique o papel da API.",
            answer: "No restaurante, você (o cliente) não vai até a cozinha (o servidor) para pegar sua comida. Você usa o menu (a documentação da API) para ver as opções e faz seu pedido para o garçom (a API). O garçom leva seu pedido à cozinha e traz o prato pronto de volta para você. A API faz essa intermediação no mundo do software."
        },
        {
            id: 6,
            title: "Síncrono vs. Assíncrono",
            tip: "A fila do banco vs. o pager do restaurante.",
            description: "Descreve como as tarefas são executadas em um programa, especialmente aquelas que levam tempo, como chamadas de rede ou leitura de arquivos.",
            topics: ["Síncrono (Blocking)", "Assíncrono (Non-blocking)", "Quando Usar"],
            topicsDetails: [
                { title: "Síncrono (Blocking)", content: "<p>As tarefas são executadas uma após a outra. O programa espera a tarefa atual terminar antes de começar a próxima. Como uma fila única: bloqueia todo o resto.</p>" },
                { title: "Assíncrono (Non-blocking)", content: "<p>O programa inicia uma tarefa demorada e, em vez de esperar, continua a executar outras tarefas. Quando a tarefa demorada termina, o programa é notificado. Como receber um pager em um restaurante: você pode esperar em qualquer lugar e é avisado quando sua mesa está pronta.</p>" },
                { title: "Quando Usar", content: "<p>Assíncrono é essencial para aplicações que precisam permanecer responsivas, como interfaces de usuário (para não travar a tela) e servidores web (para atender a múltiplos clientes simultaneamente).</p>" }
            ],
            question: "Por que a programação assíncrona é crucial para a interface de um aplicativo de celular?",
            answer: "Porque se uma operação demorada (como baixar uma imagem da internet) fosse síncrona, ela 'travaria' toda a interface do usuário até terminar. Com a programação assíncrona, o download acontece em segundo plano, e o usuário pode continuar interagindo com o aplicativo normalmente."
        },
        {
            id: 7,
            title: "Paradigmas de Programação",
            tip: "As diferentes filosofias de como escrever código.",
            description: "Um paradigma de programação é um estilo ou uma 'maneira de pensar' sobre como estruturar e escrever programas de computador.",
            topics: ["Orientado a Objetos (POO)", "Funcional", "Procedural"],
            topicsDetails: [
                { title: "Orientado a Objetos (POO)", content: "<p>Organiza o código em torno de 'objetos', que encapsulam dados (atributos) e comportamentos (métodos). Ex: Java, C++, Python.</p>" },
                { title: "Programação Funcional", content: "<p>Trata a computação como a avaliação de funções matemáticas e evita estados e dados mutáveis. Foco em 'o que' fazer, não 'como'. Ex: Haskell, Lisp, e recursos em Python, JavaScript.</p>" },
                { title: "Programação Procedural", content: "<p>Baseia-se no conceito de chamar procedimentos ou funções. É uma série de passos sequenciais para executar uma tarefa. Ex: C, Pascal.</p>" }
            ],
            question: "Qual a principal característica que diferencia a Programação Orientada a Objetos da Procedural?",
            answer: "A principal diferença é a forma de organizar o código. A Procedural organiza o código em uma sequência de procedimentos (funções) que manipulam dados. A Orientada a Objetos agrupa dados e os procedimentos que os manipulam dentro de 'objetos', promovendo o encapsulamento."
        },
        {
            id: 8,
            title: "Clean Code",
            tip: "Escreva código que seus colegas (e você do futuro) entendam.",
            description: "É um conjunto de princípios e práticas para escrever código que seja fácil de ler, entender e manter por outros desenvolvedores.",
            topics: ["Nomes Significativos", "Funções Pequenas", "Comentários"],
            topicsDetails: [
                { title: "Nomes Significativos", content: "<p>Variáveis, funções e classes devem ter nomes que revelem sua intenção. Em vez de `x`, use `diasDesdeUltimoAcesso`.</p>" },
                { title: "Funções Pequenas e Focadas", content: "<p>Uma função deve fazer uma única coisa, e fazê-la bem. Funções longas e que fazem várias coisas são difíceis de entender, testar e reutilizar.</p>" },
                { title: "Comentários: O Porquê, não O Quê", content: "<p>Um bom código deve ser autoexplicativo. Use comentários não para explicar 'o que' o código faz, mas 'por que' ele faz algo de uma maneira específica e não óbvia.</p>" }
            ],
            question: "Por que a prática de dar nomes significativos a variáveis e funções é tão importante no Clean Code?",
            answer: "Porque o código é lido muito mais vezes do que é escrito. Nomes significativos tornam o código mais legível e autoexplicativo, reduzindo drasticamente o tempo necessário para que outro desenvolvedor (ou você mesmo no futuro) entenda o que ele faz."
        },
        {
            id: 9,
            title: "Debugging",
            tip: "A arte de ser o detetive do seu próprio crime.",
            description: "É o processo metódico de encontrar e corrigir defeitos (bugs) em um programa de computador.",
            topics: ["Reproduzir o Bug", "Isolar o Problema", "Ferramentas"],
            topicsDetails: [
                { title: "Reproduzir o Bug", content: "<p>O primeiro passo é ser capaz de reproduzir o erro de forma consistente. Se você não consegue fazê-lo acontecer de novo, é quase impossível de corrigir.</p>" },
                { title: "Isolar o Problema", content: "<p>Restrinja a área do código onde o bug pode estar. Use 'print statements' (a forma mais simples), ou um debugger para inspecionar o estado do programa em pontos específicos.</p>" },
                { title: "Debugger", content: "<p>Uma ferramenta que permite executar o código linha por linha, inspecionar o valor das variáveis em tempo real e entender o fluxo de execução. É a ferramenta mais poderosa para o debugging.</p>" }
            ],
            question: "O que são 'breakpoints' e como eles ajudam no processo de debugging?",
            answer: "Um breakpoint é um ponto de parada intencional que você coloca no seu código usando um debugger. Quando a execução do programa atinge um breakpoint, ela pausa, permitindo que o desenvolvedor inspecione o estado do programa (valores de variáveis, pilha de chamadas, etc.) naquele exato momento, ajudando a isolar a causa do bug."
        },
        {
            id: 10,
            title: "Variáveis e Constantes",
            tip: "Caixas para guardar suas coisas. Algumas podem ser trocadas, outras não.",
            description: "Variáveis e constantes são nomes simbólicos usados para armazenar dados que podem ser usados e manipulados por um programa.",
            topics: ["Variável", "Constante", "Tipagem"],
            topicsDetails: [
                { title: "Variável", content: "<p>É um contêiner cujo valor pode mudar durante a execução do programa. Ex: `let idade = 30; idade = 31;`</p>" },
                { title: "Constante", content: "<p>É um contêiner cujo valor é definido uma vez e não pode ser alterado. Usada para valores que devem permanecer fixos, como a constante matemática PI. Ex: `const PI = 3.14;`</p>" },
                { title: "Tipagem", content: "<p>Refere-se a como uma linguagem de programação lida com os tipos de dados (número, texto, etc.). Pode ser <strong>Estática</strong> (tipos verificados em compilação, como em Java) ou <strong>Dinâmica</strong> (verificados em execução, como em Python).</p>" }
            ],
            question: "Qual a vantagem de usar uma constante em vez de uma variável para um valor que não deveria mudar?",
            answer: "Usar uma constante torna o código mais seguro e legível. Garante que o valor não seja alterado acidentalmente em outra parte do programa (segurança) e sinaliza para outros desenvolvedores que aquele valor é fixo e importante (legibilidade)."
        }
    ]
};
