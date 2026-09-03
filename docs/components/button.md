# Button

Executa uma ação imediata ou avança um fluxo.

## Variantes semânticas

Brand, Accent, Tertiary, Success, Error, Warning, Info e Default. Cada tipo pode oferecer apresentação com ou sem borda quando o contraste e a hierarquia permitirem. Variantes visuais Mantine como filled, light, outline, subtle e transparent devem ser mapeadas para intenções, não escolhidas apenas por estética.

## Tamanhos

XS, SM, MD, LG e XL. A altura efetiva deve respeitar o contexto e a área mínima de interação.

## Estados

Default, hover, active, focus-visible, disabled e loading. Em loading, preserve a largura, impeça múltiplos envios e mantenha nome acessível.

## Conteúdo

Use verbo direto: “Salvar alterações”. Evite “Clique aqui”. Apenas uma ação primária por região. Ações destrutivas devem explicitar o objeto e, quando irreversíveis, pedir confirmação.

## Acessibilidade

Use `button` para ação e link para navegação. Foco deve permanecer visível. Botão somente com ícone precisa de `aria-label`.
