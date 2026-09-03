# Layout e superfícies

## Estrutura

- **AppShell:** estrutura principal com header, navbar, aside e conteúdo. Um por aplicação.
- **Container:** limita largura e centraliza conteúdo.
- **Grid/SimpleGrid:** composição responsiva em colunas.
- **Flex:** controle explícito de flexbox.
- **Group:** itens em linha com espaçamento.
- **Stack:** itens em coluna com espaçamento.
- **Center:** centralização nos dois eixos.
- **Space:** exceção pontual; prefira gap do container.
- **AspectRatio:** mídia com proporção previsível.

## Superfícies

- **Paper:** superfície base com borda, raio ou elevação.
- **Card:** agrupamento autônomo com conteúdo e possíveis ações.
- **Fieldset:** conjunto semântico de campos com legenda.
- **Divider:** separação visual; não substitui espaço e hierarquia.
- **BackgroundImage:** conteúdo sobre imagem somente com contraste garantido.
- **Overlay:** camada visual interna para contraste ou bloqueio; não use isoladamente para diálogo.

## Rolagem e dimensão

- **ScrollArea:** área interna quando a rolagem faz parte do componente.
- **Affix:** ação fixa contextual; preserve conteúdo e safe areas.
- **Box:** primitivo polimórfico restrito à implementação.
- **Collapse:** revela conteúdo sem mudar de página.
- **Spoiler:** encurta texto longo não essencial.

## Regras responsivas

Projete mobile-first. Quebre a composição quando o conteúdo perder legibilidade, não apenas em dispositivos pré-definidos. Nunca esconda ações críticas. Em páginas de dashboard, preserve prioridade: KPI → tendência → detalhamento → ações.
