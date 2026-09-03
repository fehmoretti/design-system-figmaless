# Arquitetura de tokens

## Camadas

```
primitive.color.violet.600
        ↓
semantic.color.action.primary.background
        ↓
component.button.primary.background
```

Use a camada de componente somente quando a intenção semântica não representar o contrato.

## Nomenclatura

Formato: `categoria.propriedade.intenção.estado`.

Exemplos:

- `color.text.primary`
- `color.border.error`
- `color.action.primary.background.hover`
- `spacing.control.inline`
- `radius.surface.card`

## Formato

JSON é o formato portável. Tokens devem preservar tipo, descrição e referência:

```json
{
  "color": {
    "text": {
      "primary": {
        "$type": "color",
        "$value": "{color.neutral.900}",
        "$description": "Texto de maior ênfase"
      }
    }
  }
}
```

## Validação

O pipeline deve rejeitar referência quebrada, ciclo, tipo incompatível, nome fora do padrão e contraste obrigatório abaixo do mínimo.
