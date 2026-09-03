# Acessibilidade

O padrão mínimo é WCAG 2.2 nível AA.

## Critérios de aceite

- contraste de texto e componentes validado;
- foco visível e ordem de foco coerente;
- toda função utilizável por teclado;
- HTML semântico e nomes acessíveis;
- erros identificados, descritos e associados;
- zoom de 200% sem perda funcional;
- reflow em 320 CSS px quando aplicável;
- redução de movimento respeitada;
- alvos de interação adequados;
- estados não dependem apenas de cor.

## Testes

Automação (lint, axe e contraste) complementa teste manual com teclado, leitores de tela representativos, zoom e temas light/dark. Cada componente registra limitações conhecidas e evidência antes de alcançar status Stable.
