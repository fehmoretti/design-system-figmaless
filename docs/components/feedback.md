# Feedback e estados

## Alert

Mensagem persistente no contexto. Use título objetivo, explique impacto e apresente ação quando existir. Intenções Info, Success, Warning e Error.

## Notification

Resultado transitório que não exige decisão. Sucesso breve pode desaparecer; erro acionável deve permanecer ou estar disponível no contexto.

## Loader e Skeleton

Loader comunica atividade sem estrutura conhecida. Skeleton preserva a forma esperada e reduz layout shift. Não use skeleton para ações instantâneas.

## Progress e RingProgress

Progress comunica avanço linear conhecido ou indeterminado. RingProgress serve a métricas compactas; inclua valor textual e contexto.

## SemiCircleProgress

Variação compacta para progresso/KPI; não use como velocímetro decorativo.

## LoadingOverlay

Bloqueia uma região durante operação. Mantenha nome acessível, evite bloquear a página inteira e explique operações longas.

## Empty state

Diferencie: primeira utilização, base realmente vazia, nenhum resultado de filtro, falta de permissão e falha. Ofereça somente a próxima ação pertinente.

## Mensagens

- Sucesso: “Alterações salvas.”
- Erro: “Não foi possível salvar. Revise os campos destacados.”
- Aviso: consequência antes da ação.
- Informação: contexto sem urgência.

Não use apenas cor ou ícone. Mensagens devem ser compreensíveis fora do toast.
