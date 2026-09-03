# Ações

Componentes que iniciam comandos ou expõem operações. Use verbos claros, hierarquia previsível e feedback imediato.

## Button

Ação textual principal. Intenções: Brand, Accent, Tertiary, Success, Error, Warning, Info e Default. Variantes: filled, light, outline, subtle e transparent. Tamanhos: xs, sm, md, lg e xl.

- Use para salvar, enviar, confirmar e avançar.
- Não use para navegação; use Anchor.
- Preserve largura em loading e bloqueie envios repetidos.
- Apenas uma ação Brand por região.
- Ações irreversíveis usam Error e confirmação contextual.

## ActionIcon

Ação compacta representada por ícone.

- Exige `aria-label` e Tooltip quando o significado não for universal.
- Use em toolbars e linhas densas.
- Evite em ações críticas sem rótulo textual.
- Área interativa recomendada: pelo menos 44 × 44 px.

## CloseButton

Fecha ou remove uma superfície. Use o componente dedicado para garantir nome acessível e alvo consistente. Não substitua por “X” textual.

## CopyButton

Copia conteúdo para a área de transferência e deve alterar o rótulo para “Copiado” temporariamente. Nunca copie dados ocultos sem intenção explícita.

## UnstyledButton

Primitivo para construir novas ações. Uso restrito à biblioteca: consumidores devem preferir Button ou ActionIcon para não perder estados e acessibilidade.

## Anchor

Navega para outro destino. O texto descreve o destino. Links externos devem indicar mudança de contexto quando relevante.

## Menu

Agrupa ações secundárias relacionadas.

- O gatilho comunica que abre um menu.
- Ordene por frequência e separe ações destrutivas.
- Não use como navegação principal nem esconda a única ação possível.
- Suporte setas, Enter, Escape e retorno de foco.

## Combinações

Em rodapés de modal: ação primária à direita e cancelamento secundário. Em tabelas: ações frequentes visíveis; excedentes no Menu. Não apresente duas ações com igual ênfase.
