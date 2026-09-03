# Navegação

## AppShell e NavLink

AppShell define as regiões persistentes. NavLink representa destinos e usa estado ativo para a página atual. Grupos recolhíveis devem manter o item atual visível.

## Tabs

Alternam visões irmãs no mesmo contexto.

- rótulos curtos e substantivos;
- preserve a aba selecionada na URL quando compartilhável;
- não use como etapas de formulário;
- em excesso, reavalie a arquitetura antes de permitir rolagem.

## Breadcrumbs

Mostram localização hierárquica, não histórico. O último item representa a página atual e não precisa ser link.

## Pagination

Divide conjuntos grandes. Exiba total/contexto quando útil e preserve filtros ao trocar de página. Para fluxos contínuos, considere carregamento incremental com posição recuperável.

## Stepper

Mostra progresso em processo sequencial real. Permita voltar sem perder dados; deixe claro quais etapas estão concluídas, atuais ou com erro.

## Anchor

Usado para destinos no conteúdo. Links externos, downloads e abertura em nova aba devem ser comunicados.

## Burger

Alterna navegação responsiva. Precisa de nome acessível que reflita abrir/fechar.

## Tree

Representa hierarquia expansível com navegação por teclado. Use apenas quando a hierarquia for parte essencial da tarefa.

## TableOfContents

Navegação em documentos longos. Destaque a seção atual e use headings sem saltos arbitrários.
