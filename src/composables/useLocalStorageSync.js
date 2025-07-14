import { watch } from 'vue'

export function useLocalStorageSync(sourceGetter, key) {
  watch(
    sourceGetter,
    (val) => {
      localStorage.setItem(key, JSON.stringify(val))
    },
    { deep: true }
  )
}
