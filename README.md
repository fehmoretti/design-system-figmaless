# Design System Figmaless

Design system **code-first** para criação de produtos digitais sem dependência de arquivos de design, com componentes React baseados em [Mantine](https://mantine.dev/) e documentação Markdown sincronizável com o zeroheight.

## Objetivos

- manter código, tokens e documentação na mesma fonte de verdade;
- permitir configuração de cores, tipografia, espaçamento, raios e sombras;
- garantir acessibilidade WCAG 2.2 AA;
- padronizar componentes de produto e visualizações de dados;
- publicar documentação no zeroheight a partir deste repositório.

## Documentação

Comece pelo [índice da documentação](docs/README.md).

## Estrutura

- `docs/getting-started/`: visão, princípios e instalação;
- `docs/foundations/`: fundamentos visuais e de interação;
- `docs/tokens/`: arquitetura, nomenclatura e temas;
- `docs/components/`: especificação de componentes;
- `docs/patterns/`: padrões recorrentes de produto;
- `docs/data-visualization/`: gráficos e dashboards;
- `docs/accessibility/`: requisitos de acessibilidade;
- `docs/governance/`: contribuição, versionamento e releases;
- `docs/zeroheight/`: configuração e sincronização.

## Fonte de verdade

1. Tokens versionados no pacote.
2. Tema Mantine gerado a partir dos tokens.
3. Componentes React implementados com tokens semânticos.
4. Documentação Markdown deste repositório.
5. zeroheight como camada de publicação e descoberta.

## Status

Documentação inicial. As decisões ainda não aprovadas são marcadas como **propostas** e devem passar pelo processo de governança antes de se tornarem estáveis.

## Licença

A definir antes da publicação do pacote npm.
