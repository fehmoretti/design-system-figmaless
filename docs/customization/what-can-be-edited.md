# O que pode ser editado

O Figmaless permite adaptar identidade e densidade sem quebrar o comportamento comum entre produtos.

## Regra central

Customize por **tokens e tema**, nunca por correções dispersas no JSX ou CSS. O componente consome uma intenção semântica; o tema decide seu valor visual.

## Pode ser configurado por projeto

| Área | Pode editar | Onde | Condição |
|---|---|---|---|
| Marca | escala primária e secundária | tokens primitivos + tema | validar light/dark e contraste |
| Tipografia | família, pesos disponíveis e escala | tokens tipográficos | preservar papéis semânticos |
| Espaçamento | escala e densidade | tokens de spacing | manter ritmo e alvos de toque |
| Raios | escala e raio padrão | tokens de radius | aplicar globalmente |
| Sombras | níveis de elevação | tokens de shadow | não comunicar estado só por sombra |
| Ícones | biblioteca aprovada, tamanho e stroke | configuração de ícones | manter significado consistente |
| Movimento | duração e easing | tokens de motion | respeitar reduced motion |
| Gráficos | paleta categórica e sequencial | tokens de charts | acessível e distinguível |
| Tema | light, dark ou ambos | MantineProvider | equivalência semântica |
| Densidade | confortável ou compacta | tema/variantes aprovadas | compacta somente em interfaces densas |

## Não pode ser alterado localmente

- significado de tokens semânticos;
- requisitos WCAG e foco visível;
- estados obrigatórios;
- ordem de foco e comportamento de teclado;
- anatomia de componente Stable;
- altura de input fora da escala xs 32, sm 40, md 48 e lg 56 px;
- significado das variantes de ação e feedback;
- padrões de confirmação destrutiva;
- nomes públicos ou contrato de props sem SemVer.

## Exige proposta de evolução

- novo componente ou variante;
- novo token semântico;
- nova dependência visual;
- mudança de anatomia ou comportamento;
- exceção que aparece em mais de um produto;
- alteração incompatível no pacote.

A proposta deve trazer problema, casos reais, alternativa com componentes atuais, API sugerida, estados, responsividade, acessibilidade e impacto de migração.

## Estratégia de customização

```tsx
import { createTheme, mergeMantineTheme } from '@mantine/core';
import { figmalessTheme } from 'figmaless-ui';

const brandTheme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: [
      '#F4F7FF', '#E7EDFF', '#CBD8FF', '#A9BEFF', '#829EFF',
      '#607DFA', '#4964E8', '#3B50C4', '#33459D', '#2D3C7E',
    ],
  },
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  defaultRadius: 'md',
});

export const appTheme = mergeMantineTheme(figmalessTheme, brandTheme);
```

Os valores acima são exemplo. Paletas de produção devem possuir origem, nome, contraste validado e documentação.

## Quando uma exceção local é aceitável

Somente quando:

1. representa conteúdo ou restrição exclusiva, não uma preferência estética;
2. não altera acessibilidade nem contrato do componente;
3. usa tokens existentes;
4. está documentada próxima ao código;
5. não se repetirá em outros fluxos.

Se repetir, transforme em padrão ou proponha evolução.

## Checklist de alteração

- [ ] A mudança resolve um problema descrito.
- [ ] O token correto foi usado.
- [ ] Light e dark foram avaliados.
- [ ] Contraste e foco foram testados.
- [ ] Estados e responsividade permanecem íntegros.
- [ ] Storybook e documentação foram atualizados.
- [ ] Impacto de SemVer foi classificado.
