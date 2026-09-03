# Cores

## Modelo

A paleta possui três camadas:

1. **Primitiva:** escalas numéricas, sem significado de interface.
2. **Semântica:** intenções como `text.primary`, `surface.brand` e `border.error`.
3. **Componente:** aliases específicos apenas quando o componente não puder usar um token semântico.

## Famílias

- **Brand:** identidade e ações principais.
- **Accent:** destaques e dados auxiliares.
- **Neutral:** texto, superfícies e bordas.
- **Success, warning, error e info:** estados do sistema.

## Regras

- componentes devem consumir tokens semânticos;
- texto normal deve atingir contraste mínimo de 4,5:1;
- texto grande e elementos gráficos essenciais: mínimo de 3:1;
- foco, erro e seleção não podem depender apenas de cor;
- cores de gráficos precisam continuar distinguíveis em condições comuns de daltonismo.

## Paleta inicial

A paleta definitiva permanece configurável. Referências exploratórias existentes usam roxos de marca; valores só se tornam estáveis após aprovação e validação WCAG.
