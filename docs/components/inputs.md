# Entradas e seleção

Todos os campos precisam de label persistente, descrição opcional, erro associado e estado de foco visível. Placeholder é exemplo, nunca rótulo.

## Texto

- **TextInput:** uma linha de texto geral.
- **PasswordInput:** senha com controle de visibilidade e autocomplete correto.
- **Textarea:** conteúdo multilinha; use autosize quando não causar salto de layout.
- **NumberInput:** quantidade ou medida; não use para CPF, telefone, CEP ou códigos.
- **PinInput:** códigos curtos; mantenha alternativa compatível com colagem.
- **TagsInput:** conjunto livre de termos; valide duplicatas e limite.
- **PillsInput:** base visual interna para seleções múltiplas.

## Escolha

- **NativeSelect:** lista simples, curta e com melhor comportamento nativo.
- **Select:** uma opção em lista pesquisável ou customizada.
- **MultiSelect:** várias opções conhecidas.
- **Autocomplete:** sugere sem restringir obrigatoriamente o valor.
- **Combobox:** primitivo da biblioteca para experiências avançadas; não usar diretamente em produto sem wrapper.
- **Checkbox:** escolhas independentes.
- **Radio:** exatamente uma opção de um conjunto visível.
- **Switch:** alteração binária com efeito imediato.
- **SegmentedControl:** alternância curta entre 2–5 visões equivalentes.
- **Chip:** seleção compacta; não confundir com Badge.
- **Rating:** avaliação por escala; exiba o valor e ofereça opção de limpar quando pertinente.

## Valores contínuos

- **Slider:** ajuste aproximado de um valor.
- **RangeSlider:** intervalo mínimo/máximo.
- **ColorInput/ColorPicker:** apenas quando a cor é um dado editável, nunca para escolhas semânticas do design system.

## Arquivos

- **FileInput:** seleção simples.
- **Dropzone:** fluxo dedicado com arrastar/soltar, formatos, tamanho máximo, progresso e erro.
- Não processe upload apenas ao selecionar sem comunicar consequência.

## Estados

Default, hover, focus-visible, filled, read-only, disabled, loading, success e error. Valide no momento útil; não interrompa digitação válida. Preserve o valor quando houver erro de envio.

## Tamanhos

XS 32 px, SM 40 px, MD 48 px e LG 56 px. Use um tamanho coerente por formulário. Em touch, preserve alvo mínimo de 44 px.
