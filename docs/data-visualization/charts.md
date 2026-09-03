# Gráficos e dashboards

## Biblioteca

A biblioteca de gráficos deve integrar React, aceitar tokens de tema, oferecer SVG/Canvas conforme volume e permitir alternativas acessíveis. A decisão final deve ser registrada em ADR.

## Escolha

| Pergunta | Gráfico recomendado |
|---|---|
| Evolução no tempo | Linha ou área |
| Comparação entre categorias | Barras |
| Parte de um todo | Barras empilhadas; pizza apenas com poucas partes |
| Distribuição | Histograma ou box plot |
| Relação entre medidas | Dispersão |
| Valor principal | KPI com contexto e variação |

## Regras

- títulos descrevem a pergunta ou conclusão;
- eixos incluem unidade;
- zero deve ser preservado em barras;
- tooltips complementam, não substituem rótulos essenciais;
- cores semânticas ficam reservadas a status;
- dashboards limitam paleta categórica e repetem associações.

## Acessibilidade

Forneça resumo textual e tabela de dados quando a leitura do gráfico for necessária. Não diferencie séries somente por cor; use forma, traço ou rótulo. Navegação e tooltip por teclado são desejáveis.
