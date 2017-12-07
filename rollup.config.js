import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/index.js',
    name: 'fromform',
    output: {
        file: 'dist/fromform.js',
        format: 'umd'
    },
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/domod/**'
        })
    ]
}