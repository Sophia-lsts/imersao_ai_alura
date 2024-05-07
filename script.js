const conteudo = document.getElementById('conteudo');
const botoes = document.querySelectorAll('.buttons button');

const textos = {
    educacao: `
        <h2>Uso para Educação</h2>
        <ul>
            <li>Análise da escrita e pontuação de erros de maneira imediata.</li>
            <li>Acessibilidade: Descrição de imagens; leitura de escrita digital (exemplo: navegador edge lê tudo o que aparece em um site)</li>
            <li>Pandemia e plataformas digitais, dados sobre análise de frequência e tempo de permanência podem indicar o nível de interesse do aluno.</li>
            <li>Outro exemplo seria tempo de resolução de atividades e provas, para conclusão de nível de dificuldade, separado até mesmo por questões.</li>
        </ul>
    `,
    saude: `
        <h2>Usos para Saúde</h2>
        <ul>
            <li>Ajuda a maior precisão de diagnósticos.</li>
            <li>Gestão de prioridades em filas de espera para atendimentos.</li>
            <li>Catalogar as doenças que são mais previsíveis e quais são mais aleatórias.</li>
            <li>Humano + Máquina para um melhor desempenho na área da saúde</li>
        </ul>
    `,
    racial: `
        <h2>Questão Racial</h2>
        <p>O caso de Eric Loomis: O artigo analisa o caso de Eric Loomis, que foi condenado a seis anos de prisão com base em parte em uma pontuação de risco gerada por um algoritmo chamado COMPAS. O algoritmo avaliou Loomis como tendo um alto risco de reincidência.</p>
        <p>Falta de transparência: Um dos principais problemas com o uso de algoritmos como o COMPAS é a falta de transparência. Os réus não têm acesso às informações sobre como a pontuação de risco é calculada, o que levanta questões sobre a justiça e a possibilidade de viés.</p>
        <p>Viés algorítmico: O artigo argumenta que os algoritmos são treinados em dados históricos que podem refletir e perpetuar vieses existentes no sistema judicial. Isso significa que indivíduos de certos grupos demográficos podem ser desproporcionalmente afetados por pontuações de risco imprecisas.</p>
        <p>Impossibilidade de neutralidade: O artigo conclui que a ideia de um algoritmo judicial “justo” é fundamentalmente falha. Algoritmos são criados por humanos e refletem os valores e preconceitos daqueles que os desenvolvem.</p>
        <p>Conclusão: O artigo levanta questões importantes sobre o uso de algoritmos no sistema judicial. Embora a tecnologia possa oferecer algumas vantagens, é crucial reconhecer as limitações e potenciais vieses dos algoritmos para evitar a perpetuação de injustiças.</p>
    `,
    seguranca: `
        <h2>Questão da Segurança Pública</h2>
        <p>Objetivo: O estudo visa demonstrar como o aprendizado de máquina pode ser usado para analisar dados de viaturas policiais e identificar padrões que indiquem possíveis problemas mecânicos futuros.</p>
        <p>Metodologia: Os autores utilizam algoritmos de aprendizado de máquina para analisar dados históricos de manutenção de viaturas policiais. Esses dados podem incluir informações como quilometragem, tipo de veículo, histórico de reparos e outros fatores relevantes.</p>
        <p>Benefícios: A implementação desse sistema pode trazer diversos benefícios para a segurança pública, como:</p>
        <ul>
            <li>Prevenção de falhas mecânicas: A capacidade de prever problemas mecânicos permite a realização de manutenções preventivas, evitando falhas que podem colocar policiais em risco e prejudicar operações.</li>
            <li>Otimização de recursos: A alocação eficiente de recursos para manutenção, com base em dados e previsões, pode gerar economia de custos e aumentar a disponibilidade das viaturas.</li>
            <li>Aumento da segurança: Viaturas em boas condições mecânicas contribuem para a segurança dos policiais e da população.</li>
        </ul>
        <p>Conclusão: O artigo demonstra o potencial do aprendizado de máquina para melhorar a eficiência e a segurança na área de segurança pública. A capacidade de prever e prevenir problemas mecânicos em viaturas policiais é um exemplo prático de como a tecnologia pode ser aplicada para otimizar recursos e garantir a segurança da população</p>
    `
};

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const id = botao.id;
        conteudo.innerHTML = textos[id];
    });
});