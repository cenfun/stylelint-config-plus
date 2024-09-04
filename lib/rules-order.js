export default {
    'order/order': [
        'at-rules',
        'custom-properties',
        'dollar-variables',
        'declarations',
        {
            'type': 'rule',
            'selector': '^&--'
        },
        {
            'type': 'rule',
            'selector': '^&:(before|after)'
        },
        {
            'type': 'rule',
            'selector': '^&::(before|after)'
        },
        {
            'type': 'rule',
            'selector': '^&:(first-child|last-child|nth-child|last-of-type|first-of-type|nth-of-type)'
        },
        {
            'type': 'rule',
            'selector': '&:hover'
        },
        {
            'type': 'rule',
            'selector': '&:focus'
        },
        {
            'type': 'rule',
            'selector': '&:active'
        },
        {
            'type': 'rule',
            'selector': '&:disabled'
        },
        'rules'
    ],
    'order/properties-order': [
        [
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'scss',
                'properties': [
                    'composes',
                    '@import',
                    '@extend',
                    '@mixin',
                    '@at-root'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'topLevel',
                'properties': [
                    'all'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'elementProperties',
                'properties': [
                    'grid-area',
                    'grid-row',
                    'grid-column',
                    'grid-column-start',
                    'grid-column-end',
                    'grid-row-start',
                    'grid-row-end'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'elementProperties',
                'properties': [
                    'position',
                    'inset',
                    'inset-block',
                    'inset-block-start',
                    'inset-block-end',
                    'inset-inline',
                    'inset-inline-start',
                    'inset-inline-end',
                    'top',
                    'left',
                    'bottom',
                    'right',
                    'content',
                    'z-index'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'elementProperties',
                'properties': [
                    'order'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'box',
                'properties': [
                    'display',
                    'flex',
                    'flex-basis',
                    'flex-direction',
                    'flex-flow',
                    'flex-grow',
                    'flex-shrink',
                    'flex-wrap',
                    'grid',
                    'grid-auto-rows',
                    'grid-auto-columns',
                    'grid-auto-flow',
                    'grid-template',
                    'grid-template-areas',
                    'grid-template-rows',
                    'grid-template-columns',
                    'grid-gap',
                    'grid-row-gap',
                    'grid-column-gap',
                    'gap',
                    'row-gap',
                    'column-gap',
                    'place-content',
                    'place-items',
                    'place-self',
                    'justify-content',
                    'justify-items',
                    'justify-self',
                    'align-content',
                    'align-items',
                    'align-self',
                    'float',
                    'clear'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'box',
                'properties': [
                    'inline-size',
                    'block-size',
                    'min-inline-size',
                    'max-inline-size',
                    'min-block-size',
                    'max-block-size',
                    'width',
                    'height',
                    'min-width',
                    'max-width',
                    'min-height',
                    'max-height',
                    'margin',
                    'margin-block',
                    'margin-block-start',
                    'margin-block-end',
                    'margin-inline',
                    'margin-inline-start',
                    'margin-inline-end',
                    'margin-top',
                    'margin-right',
                    'margin-bottom',
                    'margin-left',
                    'padding',
                    'padding-block',
                    'padding-block-start',
                    'padding-block-end',
                    'padding-inline',
                    'padding-inline-start',
                    'padding-inline-end',
                    'padding-top',
                    'padding-right',
                    'padding-bottom',
                    'padding-left',
                    'box-sizing'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'typography',
                'properties': [
                    'color',
                    'font',
                    'font-weight',
                    'font-size',
                    'font-family',
                    'font-style',
                    'font-variant',
                    'font-size-adjust',
                    'font-stretch',
                    'font-effect',
                    'font-emphasize',
                    'font-emphasize-position',
                    'font-emphasize-style',
                    'font-smooth',
                    'line-height',
                    'direction',
                    'letter-spacing',
                    'white-space',
                    'text-align',
                    'text-align-last',
                    'text-transform',
                    'text-decoration',
                    'text-emphasis',
                    'text-emphasis-color',
                    'text-emphasis-style',
                    'text-emphasis-position',
                    'text-indent',
                    'text-justify',
                    'text-outline',
                    'text-wrap',
                    'text-overflow',
                    'text-overflow-ellipsis',
                    'text-overflow-mode',
                    'text-orientation',
                    'text-shadow',
                    'vertical-align',
                    'word-wrap',
                    'word-break',
                    'word-spacing',
                    'overflow-wrap',
                    'tab-size',
                    'hyphens',
                    'unicode-bidi',
                    'columns',
                    'column-count',
                    'column-fill',
                    'column-gap',
                    'column-rule',
                    'column-rule-color',
                    'column-rule-style',
                    'column-rule-width',
                    'column-span',
                    'column-width',
                    'page-break-after',
                    'page-break-before',
                    'page-break-inside',
                    'src'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'border',
                'properties': [
                    'border',
                    'border-color',
                    'border-style',
                    'border-width',
                    'border-top',
                    'border-top-color',
                    'border-top-width',
                    'border-top-style',
                    'border-right',
                    'border-right-color',
                    'border-right-width',
                    'border-right-style',
                    'border-bottom',
                    'border-bottom-color',
                    'border-bottom-width',
                    'border-bottom-style',
                    'border-left',
                    'border-left-color',
                    'border-left-width',
                    'border-left-style',
                    'border-radius',
                    'border-top-left-radius',
                    'border-top-right-radius',
                    'border-bottom-right-radius',
                    'border-bottom-left-radius',
                    'border-image',
                    'border-image-source',
                    'border-image-slice',
                    'border-image-width',
                    'border-image-outset',
                    'border-image-repeat',
                    'border-collapse',
                    'border-spacing'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'visuals',
                'properties': [
                    'background',
                    'background-color',
                    'background-image',
                    'background-repeat',
                    'background-position',
                    'background-position-x',
                    'background-position-y',
                    'background-size',
                    'background-clip',
                    'background-origin',
                    'background-attachment',
                    'background-blend-mode'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'visuals',
                'properties': [
                    'list-style',
                    'list-style-position',
                    'list-style-type',
                    'list-style-image'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'visuals',
                'properties': [
                    'table-layout',
                    'empty-cells',
                    'caption-side'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'visuals',
                'properties': [
                    'outline',
                    'outline-width',
                    'outline-style',
                    'outline-color',
                    'outline-offset'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'visuals',
                'properties': [
                    'box-shadow',
                    'box-decoration-break'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'visuals',
                'properties': [
                    'visibility',
                    'cursor',
                    'isolation',
                    'backdrop-filter',
                    'mix-blend-mode'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'style',
                'properties': [
                    'fill',
                    'fill-rule',
                    'clip-rule',
                    'stroke',
                    'opacity',
                    'filter',
                    'transform',
                    'transform-origin',
                    'transform-style',
                    'backface-visibility',
                    'perspective',
                    'perspective-origin'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'clip',
                'properties': [
                    'object-fit',
                    'object-position',
                    'overflow',
                    'overflow-x',
                    'overflow-y'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'misc',
                'properties': [
                    'appearance',
                    'clip',
                    'clip-path',
                    'counter-reset',
                    'counter-increment',
                    'resize',
                    'user-select',
                    'nav-index',
                    'nav-up',
                    'nav-right',
                    'nav-down',
                    'nav-left',
                    'pointer-events',
                    'quotes',
                    'touch-action',
                    'will-change',
                    'zoom'
                ]
            },
            {
                'emptyLineBefore': 'never',
                'noEmptyLineBetween': true,
                'groupName': 'animations',
                'properties': [
                    'transition',
                    'transition-property',
                    'transition-delay',
                    'transition-timing-function',
                    'transition-duration',
                    'animation',
                    'animation-name',
                    'animation-duration',
                    'animation-play-state',
                    'animation-timing-function',
                    'animation-delay',
                    'animation-iteration-count',
                    'animation-direction',
                    'animation-fill-mode'
                ]
            }
        ]
    ]
};
