import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'stencil-docusaurus-lib',
  taskQueue: 'async',
  sourceMap: true,
  extras: {
    experimentalImportInjection: true
  }
}
