# Cores

## Princípio

Cores representam intenção. Componentes nunca devem depender diretamente de valores hexadecimais de marca.

## Camadas

1. **Primitiva:** escalas numéricas sem significado, como `brand.0–9` e `gray.0–9`.
2. **Semântica:** intenções como `text.primary`, `surface.brand`, `border.error` e `action.primary`.
3. **Componente:** alias específico somente quando um token semântico não resolve o caso.

## Famílias obrigatórias

- **Brand:** identidade e ação principal.
- **Accent:** destaques opcionais e séries auxiliares.
- **Neutral:** texto, superfícies, divisores e bordas.
- **Success:** conclusão ou condição positiva.
- **Warning:** atenção e risco reversível.
- **Error:** falha, invalidez ou ação destrutiva.
- **Info:** orientação ou estado neutro informativo.
- **Charts:** sequência categórica, positiva/negativa e intensidade.

## Papéis semânticos mínimos

| Grupo | Tokens esperados |
|---|---|
| Texto | primary, secondary, muted, disabled, inverse, link |
| Superfície | canvas, default, subtle, raised, selected, brand |
| Borda | default, strong, focus, disabled, success, warning, error |
| Ação | primary, primary-hover, secondary, danger, disabled |
| Feedback | success, warning, error, info + respectivas superfícies |
| Gráfico | categorical-1…8, positive, negative, neutral, grid, axis |

## Regras

- texto comum: contraste mínimo 4.5:1;
- texto grande e elementos gráficos essenciais: 3:1;
- foco precisa ser visível contra superfícies adjacentes;
- erro, seleção e status não dependem só de cor;
- estados hover, active, focus e disabled devem ser definidos;
- paletas de gráficos devem funcionar para daltonismo comum;
- dark mode mantém significado, não necessariamente o mesmo valor;
- não usar cores de gráfico para status se isso criar ambiguidade.

## Uso por IA

A IA deve pedir ou localizar os tokens do projeto. Se a paleta ainda não existir, deve propor uma escala, identificar que é **proposta** e validar contraste antes de aplicá-la. Não deve espalhar hexadecimais em componentes.

## Paleta vigente

O tema de referência atual usa `violet` do Mantine como `primaryColor`. Essa escolha é configurável e deve ser substituída por uma escala de marca aprovada antes de um produto entrar em produção.

## Exemplo

```tsx
<Button color="brand">Salvar</Button>
<Text c="dimmed">Atualizado há 5 minutos</Text>
<Alert color="red" title="Não foi possível salvar" />
```

Prefira nomes de tema e props semânticas. Valores diretos são reservados à definição central dos tokens.
