# Storybook

O Storybook é a referência executável dos componentes React do Design System Figmaless.

## Desenvolvimento local

```bash
npm install
npm run storybook
```

## Build

```bash
npm run typecheck
npm run build-storybook
```

## Publicação

O workflow `.github/workflows/storybook-pages.yml` publica o build no GitHub Pages após mudanças de componentes na branch `main`.

URL prevista: `https://fehmoretti.github.io/design-system-figmaless/`

No zeroheight, adicione um bloco **Storybook** à página do componente e use a URL publicada. Selecione a story correspondente, como `components-button--playground`.
