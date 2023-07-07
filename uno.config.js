import { defineConfig, presetAttributify, presetUno, transformerVariantGroup } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
    rules: [
        [/^max-h-(\d+)px$/, ([_, num]) => ({ 'max-height': `${num}px` })],
        [/^min-h-(\d+)px$/, ([_, num]) => ({ 'min-height': `${num}px` })],
        [/^max-w-(\d+)px$/, ([_, num]) => ({ 'max-width': `${num}px` })],
        [/^min-w-(\d+)px$/, ([_, num]) => ({ 'min-width': `${num}px` })],
        [/^font-display$/, () => ({ 'font-family': '"SFProDisplay", sans-serif' })],
    ],
    theme: {
        textShadow: {
            title: '0 0 17px #fff',
        },
        boxShadow: {
            button: '0 0 0 3px rgba(#3E3E3E, .3)',
            input: 'inset 0px 4px 4px #0000000A',
            'button-red': '0px 15px 37px rgba(228, 66, 64, 0.64)',
            'button-blue': '0px 15px 37px #5773D6',
        },
        colors: {
            body: '#111113',
            red: '#E44240',
            blue: '#5773D6',
            gray: '#9e9e9e',
        },
        width: {
            fit: 'fit-content',
            full: '100%'
        },
        height: {
            fit: 'fit-content'
        },
        size: {
            oneEm: '1em'
        },
    },
    shortcuts: {
        'container-mob': 'max-w-311px relative mx-auto sm:max-w-520px',
    },
    presets: [
        presetAttributify(),
        presetUno(),
        presetWind()
    ],
    transformers: [
        transformerVariantGroup(),
        transformerDirectives()
    ],
})
