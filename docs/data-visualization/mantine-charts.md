# Mantine Charts

Biblioteca oficial: `@mantine/charts`, integrada aos tokens Figmaless e baseada em Recharts. `accessibilityLayer` permanece habilitado por padrão.

## Escolha do gráfico

| Componente | Use para | Evite quando |
|---|---|---|
| LineChart | tendência temporal | categorias sem ordem |
| AreaChart | tendência com volume ou composição | valores exatos entre muitas séries |
| BarChart | comparar categorias | séries temporais muito densas |
| CompositeChart | combinar linha, barra e área com relação clara | escalas incompatíveis sem explicação |
| PieChart | composição simples com poucas partes | comparação precisa |
| DonutChart | composição com KPI central | muitas categorias |
| ScatterChart | relação entre duas medidas | uma dimensão categórica simples |
| BubbleChart | relação com terceira medida no tamanho | público não treinado ou muitos pontos |
| RadarChart | perfis em poucos eixos comparáveis | ranking ou valores absolutos |
| RadialBarChart | progresso/categorias radiais compactas | comparação precisa |
| FunnelChart | queda entre etapas ordenadas | fluxos que não representam conversão |
| Sparkline | tendência mínima junto a KPI | análise detalhada |
| Heatmap | intensidade em duas dimensões | valores isolados sem padrão |
| BarsList | ranking compacto | séries temporais |
| BulletChart | valor contra meta e faixas | composição |
| Treemap | hierarquia e proporção | comparação exata |
| SunburstChart | hierarquia radial | hierarquia profunda |
| SankeyChart | fluxo entre etapas/categorias | poucas relações simples |
| CandlestickChart | OHLC financeiro | métricas comuns de negócio |

Componentes experimentais ou recém-adicionados — Gauge, Waffle e Matrix — precisam de revisão de versão, acessibilidade e necessidade antes de entrar como Stable.

## Regras de construção

- título responde à pergunta da visualização;
- subtítulo informa período, filtro e fonte;
- eixos exibem unidade e escala;
- barras começam em zero;
- até seis séries categóricas por gráfico;
- cores de Success, Warning e Error ficam reservadas a status;
- tooltip complementa, não guarda o único valor;
- legenda mantém a associação de cores em todo dashboard;
- forneça tabela ou resumo textual quando os dados forem necessários à decisão.

## Estados

Loading preserva dimensão. Vazio explica ausência de dados. Erro oferece nova tentativa. Dados parciais ou defasados exibem data da atualização.

## Acessibilidade

Não diferencie séries apenas por cor: combine rótulo, forma ou traço. Mantenha `accessibilityLayer` habilitado, contraste mínimo de 3:1 em elementos essenciais e alternativa tabular para leitura detalhada.
