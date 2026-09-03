# Instalação e uso

> O nome final do pacote npm será definido antes da primeira publicação.

## Dependências previstas

- React
- Mantine Core e Hooks
- biblioteca de ícones compatível com React
- biblioteca de gráficos com suporte a temas e acessibilidade

## Integração esperada

```tsx
import { MantineProvider } from '@mantine/core';
import { figmalessTheme } from '@figmaless/design-system';

export function App() {
  return (
    <MantineProvider theme={figmalessTheme}>
      {/* aplicação */}
    </MantineProvider>
  );
}
```

## Regras de consumo

- importe componentes pela API pública do pacote;
- não use hex, pixels ou sombras arbitrárias quando existir token;
- não sobrescreva estados de foco;
- registre extensões reutilizáveis como proposta no processo de governança.
