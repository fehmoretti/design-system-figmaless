# Datas e componentes especializados

## Datas e horários

Use `@mantine/dates` com locale pt-BR.

- **DateInput:** digitação com validação.
- **DatePickerInput:** escolha de uma data em calendário.
- **DateTimePicker:** data e horário no mesmo fluxo.
- **MonthPickerInput/YearPickerInput:** competência ou período agregado.
- **TimeInput/TimePicker:** horário.
- **Calendar:** visualização quando o calendário é o conteúdo principal.

Sempre deixe formato e fuso claros. Datas armazenadas e exibidas devem ter regra explícita. Não desabilite datas sem explicar quando necessário.

## Autenticação

PasswordInput usa autocomplete apropriado. Código temporário aceita colagem e não expõe valor em logs. Mensagens de autenticação evitam revelar existência de contas quando houver risco.

## Busca

TextInput com ícone de busca não muda a semântica sozinho. Informe quando a busca acontece, ofereça limpar e preserve o termo em resultados vazios.

## Rich text e código

RichTextEditor só deve entrar quando formatação for requisito real. CodeHighlight apresenta código não editável; editores completos precisam de decisão arquitetural própria.

## Carousel

Use apenas quando a sequência horizontal for compreensível e controlável. Nunca avance automaticamente conteúdo essencial.

## Spotlight

Busca global de navegação e comandos. Diferencie claramente abrir destino e executar ação.
