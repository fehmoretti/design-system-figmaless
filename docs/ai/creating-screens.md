# Manual para IA criar telas

Este documento é um **contrato operacional**. Deve ser incluído no contexto de qualquer agente de IA que crie, implemente ou revise interfaces com o Design System Figmaless.

## Papel da IA

Transformar requisitos de negócio em uma interface React acessível, responsiva e consistente, usando Mantine e os padrões Figmaless. A IA decide a composição da tela, mas não cria uma linguagem visual paralela.

## Stack e imports obrigatórios

Instale:

```bash
npm install figmaless-ui @mantine/core @mantine/hooks @mantine/charts recharts
```

Use `figmaless-ui` para tema e componentes próprios; `@mantine/core` para componentes fundamentais; `@mantine/hooks` para hooks; e `@mantine/charts` para gráficos. Recharts é o motor subjacente e não deve ser a primeira escolha de import. A IA nunca deve inventar um export de `figmaless-ui`: deve conferir a API pública do pacote.

## Contexto mínimo exigido

Antes de gerar código, identifique:

- objetivo da tela e principal tarefa do usuário;
- perfil e permissões do usuário;
- dados disponíveis, origem e possíveis ausências;
- dispositivos e largura mínima suportados;
- estados de loading, vazio, erro, sucesso e permissão;
- ação principal, ações secundárias e ação destrutiva;
- tokens ou tema da marca já configurados.

Se uma informação de negócio crítica estiver ausente, faça uma pergunta. Se apenas um detalhe visual estiver ausente, use o padrão deste manual e registre a suposição.

## Ordem obrigatória de trabalho

1. Resuma o objetivo da tela em uma frase.
2. Liste tarefas, conteúdo, dados e estados.
3. Escolha um padrão de página existente.
4. Monte a estrutura com AppShell, Container, Grid, Stack e Group.
5. Selecione componentes Stable; use Beta somente com justificativa.
6. Aplique tokens semânticos, nunca valores visuais arbitrários.
7. Projete desktop e mobile simultaneamente.
8. Inclua acessibilidade, mensagens e validação.
9. Revise com o checklist final.
10. Entregue código e um resumo das decisões e suposições.

## Arquitetura recomendada de tela

- **AppShell:** navegação global e regiões fixas.
- **Container:** limita leitura e alinha o conteúdo.
- **Cabeçalho da página:** Breadcrumbs quando necessário, Title, descrição e uma ação principal.
- **Filtros:** controles essenciais visíveis; filtros avançados em Drawer no mobile.
- **Conteúdo:** Stack para fluxo vertical, Grid/SimpleGrid para painéis, Table para comparação detalhada.
- **Feedback:** Alert/Notification para mensagens, Skeleton/Loader para carregamento.
- **Ações destrutivas:** confirmação explícita em Modal.

Evite uma coleção de cards iguais sem hierarquia. Card deve agrupar uma unidade real de conteúdo ou ação, não servir como moldura automática para todo elemento.

## Regras de seleção de componentes

- Use **Button** para ação com texto; **ActionIcon** apenas quando o ícone for inequívoco e possuir nome acessível.
- Use **Select** para lista conhecida e curta; **Autocomplete** para sugestão sem restringir o valor; **MultiSelect** para múltiplos valores.
- Use **Checkbox** para seleção independente; **Radio** para uma opção obrigatória; **Switch** para efeito imediato.
- Use **Tabs** para alternar visões irmãs, não para substituir navegação profunda.
- Use **Modal** para decisão curta e bloqueante; **Drawer** para contexto auxiliar, filtros ou edição no mobile.
- Use **Table** quando o usuário precisa comparar valores; cards quando precisa examinar itens individualmente.
- Use **Badge** para estado ou categoria curta; não como botão.
- Use **Tooltip** apenas como complemento, nunca para informação indispensável.

## Regras para dashboards e gráficos

Escolha o gráfico pela pergunta:

| Pergunta | Componente preferido |
|---|---|
| Como evolui no tempo? | LineChart ou AreaChart |
| Como categorias se comparam? | BarChart |
| Qual a composição? | DonutChart ou PieChart, com poucas categorias |
| Como duas métricas se relacionam? | ScatterChart ou BubbleChart |
| Como valores variam numa matriz? | Heatmap |
| Qual o desempenho compacto? | Sparkline |
| Preciso combinar escalas/séries? | CompositeChart |
| Como etapas diminuem? | FunnelChart |

Todo gráfico deve ter título, propósito, período, unidade, legenda quando necessária, tooltip legível e resumo textual ou tabela acessível. Não use 3D, arco-íris, eixos truncados enganosos ou mais séries do que o usuário consegue comparar.

## Conteúdo e microcopy

- Escreva em português do Brasil, salvo requisito contrário.
- Use frase normal, não Title Case em todos os rótulos.
- Botões começam com verbo: “Salvar alterações”, “Criar usuário”.
- Erros dizem o que ocorreu e como corrigir.
- Labels não devem desaparecer quando o usuário digita.
- Placeholders são exemplos, não substitutos de labels.
- Evite “Clique aqui”, jargão, texto ornamental e explicações geradas sem base nos requisitos.
- Preserve termos do domínio fornecidos pelo usuário.

## Responsividade

- Comece pela prioridade de conteúdo, não por redução proporcional.
- Em telas pequenas, empilhe grupos, preserve a ação principal e mova ações secundárias para Menu quando necessário.
- Tabelas podem usar ScrollArea horizontal; não esconda colunas críticas sem alternativa.
- Filtros extensos migram para Drawer.
- Alvos de toque devem ter pelo menos 44 × 44 px quando possível.
- Não fixe alturas de conteúdo variável.
- Teste, no mínimo, 360 px, 768 px e 1280 px.

## Acessibilidade obrigatória

- Use HTML semântico antes de ARIA.
- Mantenha ordem de foco coerente e foco visível.
- Associe labels, descrições e erros aos campos.
- Use `aria-label` em ações somente com ícone.
- Restaure o foco ao fechar overlays.
- Respeite `prefers-reduced-motion`.
- Não dependa somente de cor, posição ou ícone.
- Atenda WCAG 2.2 AA e contraste documentado.

## Proibições

A IA não deve:

- inserir hex, rgb, px, sombras ou raios arbitrários no componente;
- criar wrapper que apenas renomeia uma prop do Mantine;
- alterar tokens globais para resolver uma exceção local;
- misturar bibliotecas de componentes ou ícones sem aprovação;
- criar novas variantes sem documentar objetivo e estados;
- usar gradientes, glassmorphism, excesso de sombras ou cards por padrão;
- omitir estados assíncronos;
- simular dados reais sem marcar claramente como exemplo;
- usar componente Beta silenciosamente;
- desabilitar foco, zoom, teclado ou contraste para preservar estética.

## Formato de resposta recomendado para uma IA

```md
### Objetivo
[uma frase]

### Decisões
- padrão de página:
- componentes:
- responsividade:
- estados:
- acessibilidade:

### Suposições
- ...

### Implementação
[código]

### Verificação
- [ ] tokens
- [ ] estados
- [ ] mobile
- [ ] teclado
- [ ] contraste
```

## Prompt-base reutilizável

```text
Crie ou revise esta tela usando o Design System Figmaless.

Leia README.md e docs/ai/creating-screens.md antes de decidir a solução.
Use React, figmaless-ui, Mantine e os componentes/tokens já existentes.
Instale figmaless-ui @mantine/core @mantine/hooks @mantine/charts recharts.
Importe cada recurso do pacote responsável e não invente exports.
Não invente valores visuais. Preserve os termos do domínio.
Projete desktop e mobile e inclua loading, vazio, erro, sucesso e permissão quando aplicáveis.
Atenda WCAG 2.2 AA.
Explique objetivo, componentes escolhidos, responsividade, estados, acessibilidade e suposições.
Se precisar de um componente ou token novo, não o crie silenciosamente: proponha a mudança separadamente.

Requisitos da tela:
[cole aqui]
```

## Checklist final

- [ ] A tarefa principal é evidente em poucos segundos.
- [ ] Há apenas uma ação principal por região.
- [ ] Todos os elementos visuais usam tokens.
- [ ] Componentes pertencem ao catálogo aprovado.
- [ ] Estados relevantes foram implementados.
- [ ] Conteúdo se adapta a 360, 768 e 1280 px.
- [ ] Teclado, foco, labels e mensagens funcionam.
- [ ] Contraste atende WCAG 2.2 AA.
- [ ] Gráficos são interpretáveis sem depender apenas de cor.
- [ ] Decisões novas foram documentadas.
