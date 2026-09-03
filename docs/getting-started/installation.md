# Instalação e uso

O pacote oficial do Design System é **`figmaless-ui`**.

## Requisitos

- React e React DOM compatíveis com a aplicação;
- Mantine Core e Hooks;
- Mantine Charts e Recharts para visualização de dados.

## Instalação completa

```bash
npm install figmaless-ui @mantine/core @mantine/hooks @mantine/charts recharts
```

Esta é a instalação padrão recomendada para aplicações e deve ser usada por agentes de IA, exemplos e templates do projeto.

## Responsabilidade de cada pacote

| Pacote | Responsabilidade | Exemplos de import |
|---|---|---|
| `figmaless-ui` | tema, tokens e componentes próprios Figmaless | `figmalessTheme`, `Button`, `Badge` |
| `@mantine/core` | componentes fundamentais e provider | `MantineProvider`, `AppShell`, `TextInput`, `Modal` |
| `@mantine/hooks` | hooks de interface e comportamento | `useDisclosure`, `useMediaQuery` |
| `@mantine/charts` | componentes de visualização | `LineChart`, `BarChart`, `DonutChart` |
| `recharts` | motor gráfico usado pelo Mantine Charts | normalmente sem import direto |

## Estilos globais

Importe os estilos no ponto de entrada da aplicação, uma única vez:

```tsx
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
```

Se o pacote `figmaless-ui` publicar um arquivo CSS próprio em uma versão futura, ele deverá ser importado depois dos estilos do Mantine e documentado nas notas da versão. Não invente um caminho CSS que não faça parte da API publicada.

## Provider

```tsx
import { MantineProvider } from '@mantine/core';
import { figmalessTheme } from 'figmaless-ui';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

export function App() {
  return (
    <MantineProvider theme={figmalessTheme}>
      {/* rotas e telas */}
    </MantineProvider>
  );
}
```

O `MantineProvider` deve ficar no nível mais alto útil da aplicação. Não crie providers diferentes por tela apenas para trocar cor, fonte ou raio.

## Uso de componentes Figmaless

```tsx
import { Badge, Button } from 'figmaless-ui';
import { Group, Stack, TextInput, Title } from '@mantine/core';

export function CreateUserForm() {
  return (
    <Stack>
      <Group justify="space-between">
        <Title order={1}>Novo usuário</Title>
        <Badge intent="info">Rascunho</Badge>
      </Group>

      <TextInput
        label="Nome"
        placeholder="Ex.: Ana Silva"
        required
      />

      <Button intent="brand">Criar usuário</Button>
    </Stack>
  );
}
```

Use `figmaless-ui` quando existir um componente próprio documentado. Use `@mantine/core` para os demais componentes aprovados pelo catálogo. Não recrie Button ou Badge com componentes Mantine brutos quando o equivalente Figmaless estiver disponível.

## Uso de gráficos

```tsx
import { BarChart } from '@mantine/charts';

const data = [
  { month: 'Jan', sales: 120 },
  { month: 'Fev', sales: 180 },
  { month: 'Mar', sales: 150 },
];

export function SalesChart() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[{ name: 'sales', label: 'Vendas', color: 'violet.6' }]}
      valueFormatter={(value) =>
        new Intl.NumberFormat('pt-BR').format(value)
      }
      accessibilityLayer
    />
  );
}
```

O Recharts é dependência do Mantine Charts, mas o código de produto deve preferir `@mantine/charts`. Importe diretamente de `recharts` apenas quando um caso aprovado não puder ser atendido pela camada Mantine.

## Customização do tema

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
});

export const appTheme = mergeMantineTheme(figmalessTheme, brandTheme);
```

Valores de paleta são centralizados no tema. Consulte [o que pode ser editado](../customization/what-can-be-edited.md).

## Regras para IA

Ao gerar uma aplicação:

1. use exatamente o comando de instalação completo;
2. importe tema e componentes próprios de `figmaless-ui`;
3. importe componentes fundamentais de `@mantine/core`;
4. importe hooks de `@mantine/hooks`;
5. importe gráficos de `@mantine/charts`;
6. não use Recharts diretamente sem justificativa;
7. não invente exports, subpaths ou arquivos CSS;
8. confira a API pública instalada antes de usar um componente Figmaless;
9. mantenha uma única versão compatível de cada dependência no projeto.

## Diagnóstico rápido

### “Module not found: figmaless-ui”

Confirme o nome, execute a instalação completa e verifique se o registry configurado permite acessar o pacote.

### Estilos não aparecem

Confirme que `@mantine/core/styles.css` e, ao usar gráficos, `@mantine/charts/styles.css` foram importados uma vez no entrypoint.

### Duas versões do Mantine

Inspecione a árvore com:

```bash
npm ls @mantine/core @mantine/hooks @mantine/charts
```

Alinhe as versões; não resolva o problema criando um segundo Provider.

### Export não encontrado em figmaless-ui

Consulte a versão instalada e a API pública. Se o componente for nativo do Mantine, importe-o de `@mantine/core`.

## Regras de consumo

- consuma apenas a API pública dos pacotes;
- não use valores arbitrários quando existir token;
- não sobrescreva estados de foco;
- não duplique componentes Figmaless com wrappers locais;
- registre extensões reutilizáveis pelo processo de governança.
