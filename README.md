# Design System Figmaless

Design system **code-first e AI-ready** para criar produtos digitais sem depender de arquivos Figma. A base técnica é React + Mantine; os gráficos usam `@mantine/charts`. Código, tokens, componentes, Storybook e documentação formam uma única fonte de verdade.

> Este repositório deve ser fornecido como contexto para qualquer IA responsável por planejar, criar, revisar ou alterar telas.

## Como usar este manual

### Para pessoas

1. Leia os [princípios](docs/getting-started/principles.md).
2. Defina a identidade em [o que pode ser editado](docs/customization/what-can-be-edited.md).
3. Consulte [cores](docs/foundations/color.md), [tipografia](docs/foundations/typography.md) e demais fundamentos.
4. Escolha componentes pelo catálogo abaixo e abra a documentação da categoria.
5. Valide acessibilidade, responsividade e estados antes de entregar.

### Para IA

Leia obrigatoriamente, nesta ordem:

1. [Manual para criação de telas por IA](docs/ai/creating-screens.md)
2. [O que pode ser editado](docs/customization/what-can-be-edited.md)
3. [Fundamentos](docs/foundations/)
4. [Catálogo e suporte](docs/components/catalog.md)
5. A página da categoria dos componentes usados
6. [Padrões de produto](docs/patterns/product-patterns.md)
7. [Acessibilidade](docs/accessibility/README.md)

A IA deve reutilizar componentes e tokens existentes. Não deve inventar cores, medidas, sombras, raios, variantes ou componentes quando houver uma solução documentada.

## Instalação

```bash
npm install figmaless-ui @mantine/core @mantine/hooks @mantine/charts recharts
```

```tsx
import { MantineProvider } from '@mantine/core';
import { figmalessTheme, Button, Badge } from 'figmaless-ui';
import '@mantine/core/styles.css';

export function App() {
  return (
    <MantineProvider theme={figmalessTheme}>
      {/* aplicação */}
    </MantineProvider>
  );
}
```

## De onde importar

| Necessidade | Pacote |
|---|---|
| Tema e componentes Figmaless | `figmaless-ui` |
| Componentes Mantine | `@mantine/core` |
| Hooks utilitários | `@mantine/hooks` |
| Gráficos | `@mantine/charts` |
| Motor dos gráficos | `recharts` — dependência exigida pelo Mantine Charts |

Não tente importar componentes nativos do Mantine por `figmaless-ui`. A biblioteca Figmaless adiciona componentes e contratos próprios sem republicar toda a API do Mantine.

## Catálogo de componentes

| Categoria | Componentes aprovados | Documentação |
|---|---|---|
| Ações | Button, ActionIcon, CloseButton, CopyButton, FileButton | [Ações](docs/components/actions.md) |
| Entradas | TextInput, PasswordInput, Textarea, NumberInput, Select, MultiSelect, Autocomplete, TagsInput, PinInput, ColorInput, FileInput | [Entradas](docs/components/inputs.md) |
| Seleção | Checkbox, Radio, Switch, SegmentedControl, Chip, Slider, RangeSlider, Rating | [Entradas e seleção](docs/components/inputs.md) |
| Formulários | Fieldset, InputWrapper, validação, ajuda e agrupamento | [Formulários](docs/components/forms.md) |
| Layout | AppShell, Container, Grid, SimpleGrid, Flex, Group, Stack, Center, Space, AspectRatio, Box, Paper, Card, Divider, ScrollArea | [Layout](docs/components/layout.md) |
| Navegação | Anchor, Breadcrumbs, NavLink, Tabs, Pagination, Stepper, Burger, Menu | [Navegação](docs/components/navigation.md) |
| Exibição de dados | Text, Title, Badge, Avatar, Indicator, Kbd, Code, List, Table, Timeline, ThemeIcon | [Exibição de dados](docs/components/data-display.md) |
| Feedback | Alert, Notification, Loader, LoadingOverlay, Progress, RingProgress, Skeleton | [Feedback](docs/components/feedback.md) |
| Overlays | Modal, Drawer, Popover, Tooltip, HoverCard, Overlay, FocusTrap | [Overlays](docs/components/overlays.md) |
| Datas | DatePickerInput, DateInput, DateTimePicker, MonthPickerInput, YearPickerInput, TimeInput | [Datas e especializados](docs/components/dates-and-specialized.md) |
| Utilidades | Accordion, Carousel, Collapse, Spoiler, Transition, Portal, VisuallyHidden | [Catálogo](docs/components/catalog.md) |
| Dados e gráficos | AreaChart, BarChart, BubbleChart, CompositeChart, DonutChart, FunnelChart, Heatmap, LineChart, PieChart, RadarChart, RadialBarChart, ScatterChart, Sparkline | [Mantine Charts](docs/data-visualization/mantine-charts.md) |

### Níveis de suporte

- **Stable:** liberado para produção e com padrão Figmaless definido.
- **Beta:** permitido com caso de uso validado e revisão.
- **Primitivo interno:** usado para construir componentes; não deve aparecer livremente no produto.
- **Fora do escopo:** exige proposta e aprovação antes do uso.

A API completa continua sendo a do Mantine. Este manual define **como usar Mantine dentro do Figmaless**, quais escolhas são permitidas e como manter coerência.

## Regras visuais essenciais

- Fonte padrão: **Inter**, com fallback de sistema.
- Corpo padrão: 16 px, peso 400, line-height 1.5.
- Hierarquia: no máximo três níveis evidentes por região.
- Cor de marca: escala configurável; componentes consomem tokens semânticos.
- Contraste: WCAG 2.2 AA, mínimo 4.5:1 para texto comum.
- Espaçamento: escala 8, 12, 16, 24 e 32 px.
- Raios: 4, 8, 12, 16 e 24 px; padrão 12 px.
- Inputs: xs 32 px, sm 40 px, md 48 px e lg 56 px.
- Uma ação principal por região; ações destrutivas nunca usam o mesmo tratamento da ação principal.
- Toda tela deve prever loading, vazio, erro, sucesso e ausência de permissão quando aplicável.

## O que pode ser editado

Pode ser configurado por marca, usando tokens: paletas, família tipográfica, densidade, raios, sombras, escala de espaçamento, ícones, motion e cores de gráficos. Não pode ser alterado localmente: significado semântico, requisitos de acessibilidade, estados obrigatórios, anatomia de componentes Stable e regras de comportamento. Veja o [contrato completo de customização](docs/customization/what-can-be-edited.md).

## Fontes de verdade

1. Tokens e tema Mantine no pacote.
2. Componentes React.
3. Storybook para comportamento e exemplos executáveis.
4. Markdown deste repositório para regras editoriais.
5. zeroheight como portal de consulta e publicação.

Em conflito, comportamento implementado e testado prevalece sobre exemplo editorial; o conflito deve ser corrigido na documentação na mesma mudança.

## Qualidade mínima

Antes de considerar uma tela pronta:

- usa somente tokens e componentes aprovados;
- possui hierarquia e ação principal claras;
- funciona em desktop e mobile;
- contém estados relevantes;
- navega por teclado e mostra foco;
- não comunica estado apenas por cor;
- textos e números usam formato e idioma do produto;
- gráficos têm título, unidade, período e alternativa textual;
- não há valores visuais arbitrários.

## Documentação completa

Acesse o [índice da documentação](docs/README.md), o [Storybook](https://fehmoretti.github.io/design-system-figmaless/) e o [guia de sincronização com zeroheight](docs/zeroheight/setup.md).

## Status e governança

Componentes não documentados individualmente seguem a página de sua categoria e a API do Mantine até receberem especificação própria. Mudanças de tokens ou contratos públicos seguem SemVer e o processo de [governança](docs/governance/README.md).

## Licença

A definir antes da publicação pública do pacote npm.
