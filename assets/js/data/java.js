// Arquivo: data/java.js
// Contém os dados exclusivamente para o deck de "Princípios de Java".

export const java = {
    title: "Princípios de Java",
    theme: "orange",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M10 21h7a2 2 0 0 0 2-2V9.5a2.5 2.5 0 0 0-2.5-2.5h-1a2.5 2.5 0 0 1-2.5-2.5V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z"/><path d="M10 7H5"/><path d="M10 11H5"/><path d="M10 15H5"/></svg>`,
    summary: "Construa a base para se tornar um mestre em uma das linguagens mais poderosas do mundo.",
    cards: [
        {
            id: 1,
            title: "JVM, JRE e JDK",
            tip: "A Santíssima Trindade do Java.",
            description: "Entender a diferença entre JDK, JRE e JVM é o primeiro passo para dominar o ecossistema Java.",
            topics: ["JVM", "JRE", "JDK"],
            topicsDetails: [
                { title: "JVM (Java Virtual Machine)", content: "<p>É o 'motor'. Um programa abstrato que executa o bytecode Java. É a JVM que torna Java multiplataforma ('escreva uma vez, rode em qualquer lugar').</p>" },
                { title: "JRE (Java Runtime Environment)", content: "<p>É o 'kit de execução'. Contém a JVM e as bibliotecas Java. Você precisa do JRE para **rodar** aplicações Java, mas não para desenvolvê-las.</p>" },
                { title: "JDK (Java Development Kit)", content: "<p>É o 'kit de desenvolvimento'. Contém o JRE, o compilador (javac) e outras ferramentas. Essencial para **desenvolver** aplicações Java.</p>" }
            ],
            question: "Um usuário final precisa do JDK para rodar uma aplicação Java em seu computador? Por quê?",
            answer: "Não. Ele precisa apenas do JRE (Java Runtime Environment), que contém a JVM e as bibliotecas necessárias para executar a aplicação. O JDK é necessário apenas para os desenvolvedores."
        },
        {
            id: 2,
            title: "Pilares da POO",
            tip: "Os 4 superpoderes de um objeto.",
            description: "A Programação Orientada a Objetos (POO) em Java se sustenta em quatro conceitos fundamentais: Encapsulamento, Herança, Polimorfismo e Abstração.",
            topics: ["Encapsulamento", "Herança", "Polimorfismo", "Abstração"],
            topicsDetails: [
                { title: "Encapsulamento", content: "<p>É 'esconder' os dados (atributos) de um objeto, expondo apenas métodos para interagir com eles. Usa-se modificadores de acesso como `private` para proteger os dados.</p>" },
                { title: "Herança", content: "<p>Permite que uma classe (filha) herde atributos e métodos de outra classe (mãe). Promove a reutilização de código. Palavra-chave: `extends`.</p>" },
                { title: "Polimorfismo", content: "<p>Significa 'muitas formas'. Permite que um objeto seja referenciado de múltiplas maneiras, geralmente através da herança, e que métodos com o mesmo nome se comportem de forma diferente.</p>" },
                { title: "Abstração", content: "<p>É focar nos aspectos essenciais de um objeto, ignorando os detalhes irrelevantes. Classes abstratas e interfaces são os mecanismos para aplicar a abstração em Java.</p>" }
            ],
            question: "O que é Encapsulamento e qual sua principal vantagem?",
            answer: "Encapsulamento é a prática de proteger os atributos de um objeto, permitindo o acesso a eles apenas através de métodos públicos (getters e setters). Sua principal vantagem é a segurança e o controle sobre os dados do objeto."
        },
        {
            id: 3,
            title: "Classes e Objetos",
            tip: "A planta da casa e a casa construída.",
            description: "Classes são os moldes ou plantas; Objetos são as instâncias concretas criadas a partir desses moldes.",
            topics: ["Classe", "Objeto", "Instanciação"],
            topicsDetails: [
                { title: "Classe", content: "<p>Define a estrutura e o comportamento de um tipo de objeto. Contém atributos (variáveis) e métodos (funções).</p>" },
                { title: "Objeto", content: "<p>É uma instância de uma classe. Cada objeto tem seu próprio estado (valores dos atributos), mas compartilha o comportamento (métodos) da classe.</p>" },
                { title: "Instanciação", content: "<p>É o processo de criar um objeto a partir de uma classe usando a palavra-chave `new`. Ex: `Carro meuCarro = new Carro();`</p>" }
            ],
            question: "Usando a analogia da planta da casa, explique a diferença entre Classe e Objeto.",
            answer: "A **Classe** é como a planta de uma casa: ela define todas as especificações (número de quartos, banheiros, etc.), mas não é uma casa de verdade. O **Objeto** é a casa construída a partir daquela planta. Podemos construir várias casas (objetos) a partir da mesma planta (classe)."
        },
        {
            id: 4,
            title: "Tipos Primitivos",
            tip: "Os blocos de Lego básicos da programação.",
            description: "São os 8 tipos de dados fundamentais em Java, que não são objetos e armazenam valores simples diretamente.",
            topics: ["Inteiros", "Ponto Flutuante", "Caractere", "Booleano"],
            topicsDetails: [
                { title: "Tipos Inteiros", content: "<p>`byte`, `short`, `int`, `long`. Usados para armazenar números inteiros de diferentes tamanhos.</p>" },
                { title: "Tipos de Ponto Flutuante", content: "<p>`float`, `double`. Usados para números com casas decimais.</p>" },
                { title: "Tipo Caractere", content: "<p>`char`. Usado para armazenar um único caractere Unicode.</p>" },
                { title: "Tipo Booleano", content: "<p>`boolean`. Armazena apenas dois valores possíveis: `true` ou `false`.</p>" }
            ],
            question: "Qual a diferença entre `int` e `Integer` em Java?",
            answer: "`int` é um tipo primitivo, que armazena o valor diretamente e é mais performático. `Integer` é uma classe 'wrapper', um objeto que 'embrulha' um valor `int`, oferecendo métodos úteis e a capacidade de ser nulo (`null`)."
        },
        {
            id: 5,
            title: "Métodos",
            tip: "As ações que seus objetos podem fazer.",
            description: "Métodos definem o comportamento de um objeto. São blocos de código que realizam uma tarefa específica e podem ser chamados quando necessário.",
            topics: ["Assinatura", "Parâmetros", "Retorno"],
            topicsDetails: [
                { title: "Assinatura do Método", content: "<p>É o que identifica unicamente um método. Consiste no nome do método e na lista de tipos de seus parâmetros. Ex: `calcularImposto(double salario)`.</p>" },
                { title: "Parâmetros", content: "<p>São as informações que um método recebe para poder executar sua tarefa.</p>" },
                { title: "Tipo de Retorno", content: "<p>É o tipo de dado que o método 'devolve' após sua execução. Se não devolve nada, o tipo de retorno é `void`.</p>" }
            ],
            question: "O que significa um método com tipo de retorno `void`?",
            answer: "Significa que o método executa uma ação, mas não retorna nenhum valor para quem o chamou. Ele simplesmente 'faz alguma coisa' e encerra."
        },
        {
            id: 6,
            title: "Construtores",
            tip: "O ritual de nascimento de um objeto.",
            description: "Um construtor é um método especial usado para inicializar um objeto recém-criado. Ele é chamado automaticamente quando se usa a palavra-chave `new`.",
            topics: ["Mesmo Nome da Classe", "Sem Retorno", "Construtor Padrão"],
            topicsDetails: [
                { title: "Mesmo Nome da Classe", content: "<p>Um construtor deve ter exatamente o mesmo nome da classe onde está definido.</p>" },
                { title: "Sem Tipo de Retorno", content: "<p>Construtores não têm tipo de retorno, nem mesmo `void`.</p>" },
                { title: "Construtor Padrão", content: "<p>Se você não definir nenhum construtor em sua classe, o Java fornece um automaticamente (o construtor padrão, sem parâmetros).</p>" }
            ],
            question: "Qual o principal objetivo de um construtor?",
            answer: "O principal objetivo é inicializar o estado de um novo objeto, ou seja, atribuir valores iniciais aos seus atributos no momento da criação."
        },
        {
            id: 7,
            title: "Modificadores de Acesso",
            tip: "Quem pode e não pode tocar nas suas coisas.",
            description: "Controlam a visibilidade de classes, atributos e métodos, definindo de onde eles podem ser acessados.",
            topics: ["public", "private", "protected", "default"],
            topicsDetails: [
                { title: "public", content: "<p>Acessível de qualquer lugar. É o menos restritivo.</p>" },
                { title: "private", content: "<p>Acessível apenas de dentro da própria classe. É o mais restritivo e ideal para encapsulamento.</p>" },
                { title: "protected", content: "<p>Acessível dentro do mesmo pacote e por subclasses (mesmo em pacotes diferentes).</p>" },
                { title: "default (ou package-private)", content: "<p>Acessível apenas por classes no mesmo pacote. É o que se aplica quando nenhum modificador é especificado.</p>" }
            ],
            question: "Qual modificador de acesso é o mais indicado para os atributos de uma classe, seguindo o princípio do encapsulamento?",
            answer: "O modificador `private`, pois ele garante que os atributos só possam ser acessados e modificados através dos métodos da própria classe (getters e setters)."
        },
        {
            id: 8,
            title: "Arrays vs Collections",
            tip: "O armário fixo vs. a mochila expansível.",
            description: "Ambos armazenam grupos de objetos, mas possuem diferenças cruciais em tamanho, flexibilidade e recursos.",
            topics: ["Array", "Collections", "Vantagens/Desvantagens"],
            topicsDetails: [
                { title: "Array", content: "<p>Tem tamanho fixo, definido na criação. Pode armazenar tipos primitivos e objetos. É mais rápido para acesso direto pelo índice.</p>" },
                { title: "Collections Framework", content: "<p>Interfaces como `List`, `Set` e `Map`. São dinâmicas (tamanho pode mudar), armazenam apenas objetos e oferecem muitos métodos utilitários (ordenar, buscar, etc.).</p>" },
                { title: "Qual Usar?", content: "<p>Use Arrays para um número fixo e conhecido de elementos onde a performance é crítica. Use Collections para quase todo o resto, pela flexibilidade e conveniência.</p>" }
            ],
            question: "Cite a principal vantagem de uma `List` (Collection) sobre um `Array`.",
            answer: "A principal vantagem é o tamanho dinâmico. Uma `List` pode crescer e encolher conforme elementos são adicionados ou removidos, enquanto um `Array` tem seu tamanho fixado no momento da criação."
        },
        {
            id: 9,
            title: "Tratamento de Exceções",
            tip: "Seu plano B quando tudo dá errado.",
            description: "É o mecanismo para lidar com erros em tempo de execução de forma controlada, evitando que o programa quebre abruptamente.",
            topics: ["try", "catch", "finally"],
            topicsDetails: [
                { title: "Bloco `try`", content: "<p>Envolve o código que pode potencialmente lançar uma exceção.</p>" },
                { title: "Bloco `catch`", content: "<p>Captura e trata a exceção. É executado apenas se uma exceção do tipo especificado ocorrer no bloco `try`.</p>" },
                { title: "Bloco `finally`", content: "<p>É executado sempre, ocorrendo uma exceção ou não. Ideal para liberar recursos, como fechar arquivos ou conexões de banco de dados.</p>" }
            ],
            question: "Para que serve o bloco `finally` em um tratamento de exceções?",
            answer: "O bloco `finally` serve para garantir que um determinado trecho de código seja executado, independentemente de uma exceção ter sido lançada ou não. É crucial para liberar recursos e evitar 'vazamentos'."
        },
        {
            id: 10,
            title: "Static vs. Final",
            tip: "Static é da turma, final é para sempre.",
            description: "Duas palavras-chave importantes que alteram o comportamento de variáveis, métodos e classes.",
            topics: ["static", "final", "Combinação"],
            topicsDetails: [
                { title: "static", content: "<p>Indica que o membro pertence à classe, e não a uma instância (objeto) específica. Todos os objetos da classe compartilham o mesmo membro `static`.</p>" },
                { title: "final", content: "<p>Para variáveis, torna-as constantes (só podem ser atribuídas uma vez). Para métodos, impede que sejam sobrescritos. Para classes, impede que sejam herdadas.</p>" },
                { title: "Constantes em Java", content: "<p>A combinação `public static final` é usada para criar constantes globais. Ex: `public static final double PI = 3.14159;`</p>" }
            ],
            question: "O que significa declarar um método como `static`?",
            answer: "Significa que o método pertence à classe e pode ser chamado diretamente através do nome da classe, sem a necessidade de criar um objeto dela. Ex: `Math.sqrt(25)`."
        }
    ]
};
