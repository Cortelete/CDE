// Arquivo: data/branding.js
// Contém os dados exclusivamente para o deck de "Registro de Marca".

export const branding = {
    title: "Registro de Marca",
    theme: "amber",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><circle cx="12" cy="12" r="10"/><path d="M12 12h-2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/><path d="M12 12v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4"/></svg>`,
    summary: "Proteja seu ativo mais valioso. Um guia passo a passo para registrar sua marca no INPI.",
    cards: [
        {
            id: 1,
            title: "Marca vs. Patente",
            tip: "Marca protege o nome, patente protege a invenção.",
            description: "São dois tipos diferentes de propriedade intelectual. Marca protege a identidade do seu negócio, enquanto patente protege uma invenção ou processo inovador.",
            topics: ["Marca", "Patente", "Direito Autoral"],
            topicsDetails: [
                { title: "Marca", content: "<p>É um sinal distintivo (nome, logo) que identifica a origem de produtos ou serviços. Ex: o nome 'Coca-Cola'.</p>" },
                { title: "Patente", content: "<p>Protege uma invenção funcional, como uma nova máquina ou um processo químico.</p>" },
                { title: "Direito Autoral", content: "<p>Protege obras criativas, como livros, músicas e softwares. Não precisa de registro para existir, mas o registro fortalece a proteção.</p>" }
            ],
            question: "Se você cria um novo software, o que você deve registrar: a marca, a patente ou o direito autoral?",
            answer: "Todos podem ser aplicáveis. Você registra a **marca** para o nome e logo do software, o **direito autoral** para o código-fonte, e se houver um processo ou algoritmo verdadeiramente novo e inventivo, você pode buscar uma **patente** para ele."
        },
        {
            id: 2,
            title: "Tipos de Marca",
            tip: "Como sua marca se apresenta ao mundo.",
            description: "As marcas podem ser registradas em diferentes formatos, dependendo de como elas são apresentadas.",
            topics: ["Nominativa", "Figurativa", "Mista", "Tridimensional"],
            topicsDetails: [
                { title: "Nominativa", content: "<p>Protege apenas o nome, a palavra em si, sem nenhuma estilização de fonte ou logo. Ex: 'Google'.</p>" },
                { title: "Figurativa", content: "<p>Protege apenas o logo, o desenho, o símbolo, sem nenhuma palavra. Ex: a maçã da Apple.</p>" },
                { title: "Mista", content: "<p>Protege a combinação do nome com o logo. É a forma mais comum e recomendada de registro. Ex: o logo completo da Coca-Cola.</p>" },
                { title: "Tridimensional", content: "<p>Protege a forma plástica de um produto ou embalagem, quando esta forma é única e distintiva. Ex: a garrafa da Coca-Cola.</p>" }
            ],
            question: "Qual o tipo de registro de marca mais forte e abrangente?",
            answer: "O registro da marca **Nominativa** (apenas o nome) é considerado o mais forte, pois protege a palavra em qualquer estilo ou formato. O ideal, no entanto, é registrar tanto a Nominativa quanto a Mista (nome + logo) para uma proteção completa."
        },
        {
            id: 3,
            title: "Princípio da Anterioridade",
            tip: "Quem chega primeiro, bebe água limpa.",
            description: "No Brasil, o direito sobre uma marca é concedido àquele que primeiro deposita o pedido de registro no INPI (Instituto Nacional da Propriedade Industrial).",
            topics: ["Prioridade", "Uso não garante Direito", "Boa-fé"],
            topicsDetails: [
                { title: "Prioridade", content: "<p>A data e a hora do seu pedido de registro (depósito) estabelecem sua prioridade sobre qualquer outra pessoa que tente registrar uma marca igual ou semelhante depois de você.</p>" },
                { title: "Uso não garante Direito", content: "<p>Mesmo que você use uma marca há anos, se não a registrou, alguém pode registrá-la primeiro e impedir legalmente que você continue a usá-la.</p>" },
                { title: "Boa-fé", content: "<p>Existe uma exceção para quem usava a marca de boa-fé há pelo menos 6 meses antes do pedido de registro de um terceiro, mas provar isso pode ser um processo judicial complexo e caro.</p>" }
            ],
            question: "Se eu tenho um @nomedaminhaempresa no Instagram há 5 anos, isso garante meu direito sobre a marca?",
            answer: "Não. O registro em redes sociais, nomes de domínio ou CNPJ não garantem o direito de propriedade sobre a marca. A única forma de garantir esse direito no Brasil é através do registro concedido pelo INPI."
        },
        {
            id: 4,
            title: "Classes de Nice",
            tip: "As 'categorias' da sua marca.",
            description: "A Classificação Internacional de Nice é um sistema que organiza produtos e serviços em 45 classes diferentes. Você deve registrar sua marca na(s) classe(s) correspondente(s) à sua atuação.",
            topics: ["Produtos (1-34)", "Serviços (35-45)", "Princípio da Especialidade"],
            topicsDetails: [
                { title: "Produtos (Classes 1-34)", content: "<p>Categorias para todo tipo de produto, desde químicos (Classe 1) até vestuário (Classe 25).</p>" },
                { title: "Serviços (Classes 35-45)", content: "<p>Categorias para serviços, como publicidade (Classe 35), educação (Classe 41) ou serviços de TI (Classe 42).</p>" },
                { title: "Princípio da Especialidade", content: "<p>Sua marca é protegida apenas dentro da(s) classe(s) em que foi registrada. Duas marcas idênticas podem coexistir legalmente se atuarem em classes totalmente diferentes (ex: um restaurante e uma marca de pneus com o mesmo nome).</p>" }
            ],
            question: "Uma empresa de software (Classe 42) pode impedir que uma padaria (Classe 30) use o mesmo nome?",
            answer: "Em geral, não, devido ao princípio da especialidade. Como os produtos/serviços são muito distintos e não causam confusão no consumidor, ambas as marcas podem coexistir. A exceção é para marcas de 'Alto Renome', que têm proteção em todas as 45 classes."
        },
        {
            id: 5,
            title: "Busca de Viabilidade",
            tip: "Verifique se o caminho está livre antes de seguir.",
            description: "Antes de iniciar o processo de registro, é fundamental realizar uma busca na base de dados do INPI para verificar se já não existem marcas iguais ou semelhantes registradas.",
            topics: ["Base do INPI", "Tipos de Busca", "Análise de Colidência"],
            topicsDetails: [
                { title: "Base do INPI", content: "<p>A busca é gratuita e pode ser feita online no portal do INPI. É o primeiro passo obrigatório.</p>" },
                { title: "Tipos de Busca", content: "<p>Pesquise pelo nome exato, por radicais, por elementos figurativos e em diferentes classes para ter uma visão completa.</p>" },
                { title: "Análise de Colidência", content: "<p>A análise não é só sobre nomes idênticos. Nomes que soam parecidos (semelhança fonética) ou que têm a mesma ideia (semelhança ideológica) também podem ser negados.</p>" }
            ],
            question: "Encontrei uma marca com nome parecido, mas o logo é diferente. Posso registrar a minha?",
            answer: "Provavelmente não. O INPI avalia a semelhança fonética e a possibilidade de causar confusão no consumidor. Se os nomes são parecidos e atuam na mesma classe, o risco de indeferimento é altíssimo, independentemente do logo."
        },
        {
            id: 6,
            title: "O Processo no INPI",
            tip: "Uma jornada burocrática, mas necessária.",
            description: "O registro de uma marca é um processo administrativo que segue um fluxo de etapas bem definido dentro do INPI.",
            topics: ["Cadastro e GRU", "Depósito do Pedido", "Publicação e Oposição"],
            topicsDetails: [
                { title: "Cadastro e GRU", content: "<p>Primeiro, você se cadastra no e-INPI. Depois, emite e paga a Guia de Recolhimento da União (GRU) referente ao depósito do pedido.</p>" },
                { title: "Depósito do Pedido", content: "<p>Com a GRU paga, você preenche o formulário online com os dados da marca, o logo (se houver) e os produtos/serviços, e protocola o pedido.</p>" },
                { title: "Publicação e Oposição", content: "<p>O INPI publica seu pedido na Revista da Propriedade Industrial (RPI). A partir daí, abre-se um prazo de 60 dias para que terceiros que se sintam prejudicados possam apresentar uma oposição ao seu registro.</p>" }
            ],
            question: "O que acontece se alguém apresentar uma oposição ao meu pedido de registro?",
            answer: "Você será notificado e terá um prazo de 60 dias para apresentar sua defesa (manifestação à oposição), argumentando por que sua marca não colide com a do opositor e por que seu registro deve continuar."
        },
        {
            id: 7,
            title: "Exame de Mérito",
            tip: "A hora da verdade: o veredito do INPI.",
            description: "Após o prazo de oposição (com ou sem manifestações), o pedido vai para um examinador do INPI, que fará a análise final.",
            topics: ["Análise do Examinador", "Decisões Possíveis", "Recurso"],
            topicsDetails: [
                { title: "Análise do Examinador", content: "<p>O examinador verifica se o pedido cumpre todos os requisitos da Lei de Propriedade Industrial (LPI), incluindo a distintividade e a não colidência com marcas já existentes.</p>" },
                { title: "Decisões Possíveis", content: "<p><strong>Deferimento</strong> (pedido aceito), <strong>Indeferimento</strong> (pedido negado) ou <strong>Exigência</strong> (pedido de esclarecimentos ou correções).</p>" },
                { title: "Recurso", content: "<p>Em caso de indeferimento, você tem um prazo de 60 dias para apresentar um recurso, que será julgado por uma instância superior dentro do INPI.</p>" }
            ],
            question: "O que é um pedido de registro 'em exigência'?",
            answer: "Significa que o examinador encontrou alguma pendência ou dúvida no seu pedido (ex: a descrição dos produtos está vaga, a procuração está errada) e está te dando um prazo para corrigir ou esclarecer, antes de tomar a decisão final."
        },
        {
            id: 8,
            title: "Concessão e Proteção",
            tip: "Parabéns, a marca é sua! (Por 10 anos).",
            description: "Se o pedido for deferido, você precisa pagar uma taxa final para que a concessão seja efetivada e seu certificado de registro emitido.",
            topics: ["Pagamento da Concessão", "Certificado de Registro", "Validade de 10 Anos"],
            topicsDetails: [
                { title: "Pagamento da Concessão", content: "<p>Após o deferimento, há um prazo para pagar a taxa de concessão do primeiro decênio. Perder este prazo causa o arquivamento definitivo do processo.</p>" },
                { title: "Certificado de Registro", content: "<p>Após o pagamento, o INPI emite o certificado, que é o documento legal que comprova que você é o dono da marca.</p>" },
                { title: "Validade de 10 Anos", content: "<p>O registro de marca no Brasil é válido por 10 anos, contados a partir da data da concessão.</p>" }
            ],
            question: "O que acontece depois que os 10 anos de validade da marca terminam?",
            answer: "A marca pode ser prorrogada por novos períodos de 10 anos, sucessivamente e sem limite, desde que as taxas de prorrogação sejam pagas nos prazos corretos. Se não for prorrogada, a marca expira e se torna disponível para registro por terceiros."
        },
        {
            id: 9,
            title: "Por que Registrar?",
            tip: "É o único jeito de ser legalmente o dono.",
            description: "O registro da marca não é um custo, é um investimento na proteção do seu maior ativo: a identidade do seu negócio.",
            topics: ["Direito de Exclusividade", "Proteção Nacional", "Valorização do Ativo"],
            topicsDetails: [
                { title: "Direito de Exclusividade", content: "<p>Só o registro te dá o direito legal de impedir que terceiros usem uma marca igual ou semelhante à sua no mesmo ramo de atividade.</p>" },
                { title: "Proteção Nacional", content: "<p>O registro no INPI garante proteção em todo o território brasileiro.</p>" },
                { title: "Valorização do Ativo", content: "<p>Uma marca registrada é um ativo intangível da empresa. Ela pode ser vendida, licenciada, franqueada e avaliada, agregando valor ao seu negócio.</p>" }
            ],
            question: "Posso processar alguém por usar minha marca se eu não a registrei no INPI?",
            answer: "Não. Legalmente, você não tem o direito de exclusividade sobre a marca se não a registrou. Você pode até tentar provar concorrência desleal, mas é um processo muito mais difícil, caro e incerto. O registro é a prova definitiva de propriedade."
        },
        {
            id: 10,
            title: "Uso do Símbolo ®",
            tip: "Só use o R de Registrado se você realmente registrou.",
            description: "O símbolo ® indica que a marca é registrada e tem proteção legal. Seu uso indevido pode trazer problemas.",
            topics: ["Uso Correto", "Uso Indevido", "TM (Trademark)"],
            topicsDetails: [
                { title: "Uso Correto", content: "<p>Você só pode legalmente usar o símbolo ® ao lado do seu logo ou nome após o INPI ter concedido o registro e emitido o certificado.</p>" },
                { title: "Uso Indevido", content: "<p>Usar o ® sem ter o registro é considerado publicidade enganosa e pode levar a sanções legais e perda de credibilidade.</p>" },
                { title: "TM (Trademark)", content: "<p>O símbolo ™ é usado em países anglo-saxões para indicar que uma palavra ou logo está sendo usada como uma marca comercial, mesmo que ainda não tenha sido registrada. No Brasil, ele não tem valor legal, mas é frequentemente usado como um 'aviso' de intenção.</p>" }
            ],
            question: "Posso usar o símbolo ® enquanto meu processo está em análise no INPI?",
            answer: "Não. Você só pode usar o símbolo após a decisão final de deferimento e o pagamento das taxas de concessão. Antes disso, a marca é apenas uma 'expectativa de direito'."
        }
    ]
};