# Sincronização com zeroheight

## Objetivo

Publicar os arquivos Markdown deste repositório no styleguide **Design System Figmaless**, mantendo GitHub como fonte editorial.

## Estrutura recomendada no zeroheight

1. Introdução
2. Fundamentos
3. Design Tokens
4. Componentes
5. Padrões
6. Visualização de dados
7. Acessibilidade
8. Governança

## Configuração

1. No zeroheight, abra o styleguide.
2. Acesse **Settings → Integrations** (o nome pode variar conforme o plano).
3. Adicione a integração GitHub e autorize o repositório `fehmoretti/design-system-figmaless`.
4. Selecione a branch `main`.
5. Mapeie páginas para os arquivos dentro de `docs/`.
6. Defina sincronização manual durante a implantação inicial.
7. Após validar títulos, links, tabelas e blocos de código, habilite o fluxo automático disponível no plano.

## Mapeamento sugerido

| Seção zeroheight | Origem |
|---|---|
| Introdução | `docs/getting-started/` |
| Fundamentos | `docs/foundations/` |
| Design Tokens | `docs/tokens/` |
| Componentes | `docs/components/` |
| Padrões | `docs/patterns/` |
| Visualização de dados | `docs/data-visualization/` |
| Acessibilidade | `docs/accessibility/` |
| Governança | `docs/governance/` |

## Operação

Edite no GitHub por branch e pull request. Após revisão, faça merge em `main` e execute a sincronização no zeroheight. Não edite conteúdo sincronizado diretamente no zeroheight, pois a próxima importação pode substituí-lo.

## Checklist

- títulos H1 únicos;
- links relativos válidos;
- imagens com texto alternativo;
- tabelas legíveis;
- exemplos sem segredos;
- nenhuma decisão proposta apresentada como estável;
- preview no zeroheight revisado em desktop e mobile.
