import { defineStore } from 'pinia'

export const useAssetsStore = defineStore('assets', () => {
  const assetIcons = Object.fromEntries(
    Object.entries(import.meta.glob('~/assets/svg/*.svg', { as: 'raw' })).map(
      ([key, value]) => {
        const filename = key.split('/').pop().split('.').shift()
        return [filename, value]
      }
    )
  )

  const getSvgByName = (name) => assetIcons[name]?.()

  return {
    // Getter
    assetIcons,

    // Actions
    getSvgByName,
  }
})
