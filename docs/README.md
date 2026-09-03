# Documentação

Este diretório é a fonte editorial sincronizável com o zeroheight.

## Leitura obrigatória para IA

1. [Manual para criar telas](ai/creating-screens.md)
2. [O que pode ser editado](customization/what-can-be-edited.md)
3. [Cores](foundations/color.md) e [tipografia](foundations/typography.md)
4. [Catálogo e níveis de suporte](components/catalog.md)
5. [Padrões](patterns/product-patterns.md)
6. [Acessibilidade](accessibility/README.md)

## Comece aqui

- [Visão geral](getting-started/overview.md)
- [Princípios](getting-started/principles.md)
- [Instalação](getting-started/installation.md)
- [Arquitetura de tokens](tokens/architecture.md)
- [Componentes](components/README.md)
- [Configuração do zeroheight](zeroheight/setup.md)

## Navegação

- **IA:** [contrato de criação de telas](ai/creating-screens.md)
- **Customização:** [o que pode ser editado](customization/what-can-be-edited.md)
- **Fundamentos:** [cores](foundations/color.md), [tipografia](foundations/typography.md), [espaçamento e layout](foundations/spacing-layout.md), [raios e sombras](foundations/radius-shadow.md), [ícones e movimento](foundations/icons-motion.md)
- **Tokens:** [arquitetura](tokens/architecture.md), [temas](tokens/themes.md)
- **Componentes:** [catálogo](components/catalog.md), [ações](components/actions.md), [entradas](components/inputs.md), [formulários](components/forms.md), [layout](components/layout.md), [navegação](components/navigation.md), [dados](components/data-display.md), [feedback](components/feedback.md), [overlays](components/overlays.md), [datas](components/dates-and-specialized.md)
- **Padrões:** [produto](patterns/product-patterns.md), [dashboards](patterns/dashboards.md)
- **Dados:** [escolha de gráficos](data-visualization/charts.md), [Mantine Charts](data-visualization/mantine-charts.md)
- **Qualidade:** [acessibilidade](accessibility/README.md), [governança](governance/README.md)
- **Publicação:** [zeroheight](zeroheight/setup.md), [Storybook](zeroheight/storybook.md)

## Contrato de cada página de componente

Cada componente Stable ou Beta precisa documentar: objetivo, quando usar, quando evitar, anatomia, propriedades aprovadas, variantes, tamanhos, estados, comportamento responsivo, conteúdo, acessibilidade, exemplos, status, owner e versão.

Enquanto não houver página individual, vale a página da categoria, seguida pela API oficial do Mantine. A documentação oficial não substitui as regras Figmaless.

## Convenções editoriais

Use Markdown padrão, títulos únicos e links relativos. Exemplos precisam compilar ou apontar para o Storybook. Decisões não aprovadas devem ser marcadas como **proposta**. Toda mudança de comportamento precisa atualizar documentação e Storybook na mesma entrega.
