import { JokeSortOptions } from '@/data/types'

/**
 * Sorts an array of elements based on the given sorting options.
 *
 * @param {T[]} list - The array to be sorted.
 * @param {JokeSortOptions} sortingBy - The sorting options, including the field to sort by and the direction.
 * @return {T[]} The sorted array.
 */
export function sortArray<T>(list: T[], sortingBy: JokeSortOptions): T[] {
  const { field, direction } = sortingBy
  list.sort((a: any, b: any) => {
    if (a[field] < b[field]) {
      return direction === 'asc' ? -1 : 1
    }
    if (a[field] > b[field]) {
      return direction === 'asc' ? 1 : -1
    }
    return 0
  })
  return list
}

/**
 * Updates the URL without reloading the page.
 *
 * @param {string} url - The URL to update to.
 * @return {void} No return value.
 */
export function updateUrlWithoutReload(url: string) {
  window.history.pushState({}, '', url)
}
