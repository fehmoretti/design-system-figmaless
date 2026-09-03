# Overlays

## Modal

Interrompe para decisão ou tarefa curta. Requer título, foco inicial útil, contenção de foco, Escape quando seguro e restauração do foco ao gatilho.

- não empilhe modais;
- não use para conteúdo longo ou navegação;
- confirmação destrutiva descreve objeto e consequência.

## Drawer

Mantém contexto enquanto exibe conteúdo lateral, filtros ou edição auxiliar. Em mobile pode ocupar a tela; preserve ação de fechar e retorno de foco.

## Popover

Conteúdo contextual interativo ligado a um gatilho. Use para controles breves. Fecha com Escape e clique externo quando seguro.

## Tooltip

Explicação curta, não interativa. Deve aparecer por hover e foco. Nunca contém informação necessária para concluir a tarefa.

## HoverCard

Prévia rica de conteúdo referenciado. Precisa funcionar com teclado; não é adequada para ações essenciais em touch.

## Menu

Lista de ações ou opções curtas. Separe grupos, mantenha ordem previsível e destaque ações destrutivas sem colocá-las próximas de comandos frequentes.

## Dialog

Aviso não modal ou ação persistente. Não deve competir com notificações nem cobrir conteúdo crítico.

## FocusTrap

Primitivo interno para componentes compostos. Uso direto exige teste manual completo de teclado e leitor de tela.
