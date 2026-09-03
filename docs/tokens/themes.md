# Temas

## Light e dark

Temas compartilham a mesma API semântica. O consumidor não escolhe outra cor: alterna o contexto e mantém `color.text.primary`, `color.surface.default` etc.

## Marca configurável

Cores de marca, raio padrão, fonte, densidade e sombras podem ser configurados. Overrides devem entrar na camada primitiva ou em aliases previstos; nunca substituir silenciosamente o significado semântico.

## Mantine

Mapeie escalas para `colors`, `primaryColor`, `fontFamily`, `spacing`, `radius`, `shadows`, `breakpoints` e `components`. O tema gerado é artefato; tokens são a origem.

## Exportações previstas

- `Color.json`
- `Radius.json`
- `Spacing.json`
- `Typography.json`
- `Shadow.json`
- `theme.ts`
- `style-guide.md`
