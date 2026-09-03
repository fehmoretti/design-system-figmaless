# Tipografia

## Família padrão

**Inter** é a fonte padrão. Use fallback de sistema para carregamento resiliente.

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
```

Não substitua a fonte em componentes isolados. Uma fonte de marca só pode ser definida no tema e precisa cobrir caracteres, pesos e idiomas do produto.

## Pesos

| Peso | Uso |
|---|---|
| 400 Regular | corpo, descrição e dados |
| 500 Medium | labels e controles |
| 600 Semibold | títulos e ênfase |
| 700 Bold | números ou mensagens de alta ênfase, com moderação |

Light 300 não deve ser usado em textos pequenos ou essenciais.

## Escala recomendada

| Papel | Tamanho / linha | Peso | Uso |
|---|---|---|---|
| Display | 48 / 56 px | 600 | comunicação editorial, não telas densas |
| H1 | 36 / 44 px | 600 | título único da página |
| H2 | 30 / 38 px | 600 | seção principal |
| H3 | 24 / 32 px | 600 | subseção ou painel |
| H4 | 20 / 28 px | 600 | grupo local |
| Body lg | 18 / 28 px | 400 | introdução |
| Body md | 16 / 24 px | 400 | corpo padrão |
| Body sm | 14 / 20 px | 400 | apoio e tabelas |
| Label | 14 / 20 px | 500 | controles e metadados |
| Caption | 12 / 16 px | 400 | conteúdo auxiliar não crítico |
| Code | 14 / 20 px | 400 | código e valores técnicos |

## Regras

- use no máximo três níveis evidentes por região;
- uma página possui apenas um H1;
- preserve a ordem H1 → H2 → H3;
- labels permanecem visíveis após o preenchimento;
- não use somente tamanho, peso ou caixa alta para comunicar estado;
- limite texto longo a aproximadamente 65–75 caracteres por linha;
- alinhe números tabulares quando comparação vertical for importante;
- evite caixa alta em frases e letter-spacing decorativo;
- truncamento deve oferecer acesso ao conteúdo completo.

## Responsividade

Display e H1 podem reduzir um nível em telas pequenas. Corpo e labels não devem ficar menores para “caber”; reorganize o layout. Texto essencial não deve usar Caption.

## Uso por IA

A IA seleciona papéis semânticos, não tamanhos avulsos. Deve usar `Title order`, `Text size` ou tokens tipográficos. Se a interface parecer densa, deve ajustar composição e espaçamento antes de reduzir fonte.
