# Feedback e overlays

## Feedback

- **Alert:** informação persistente no contexto.
- **Notification:** resultado transitório que não exige decisão.
- **Progress:** duração ou avanço mensurável.
- **Skeleton/Loader:** carregamento; prefira Skeleton quando a estrutura for previsível.
- **Empty state:** explique a ausência e ofereça a próxima ação útil.

## Overlays

Modal interrompe para uma decisão curta; Drawer mantém contexto lateral; Popover oferece conteúdo auxiliar; Tooltip esclarece controles, nunca guarda informação essencial.

## Regras

Ao abrir modal/drawer, mova o foco para o conteúdo; contenha a navegação; permita Escape quando seguro; restaure foco ao gatilho. Evite overlays empilhados. Erros críticos devem permanecer até serem compreendidos ou resolvidos.
