import { useEffect, useState, useCallback } from 'react'

type DebouncedFunction = (...args: any) => void

/**
 * Creates a debounced function that delays the execution of the given function until after a specified delay.
 *
 * @param {DebouncedFunction} func - The function to be debounced.
 * @param {number} delay - The delay in milliseconds.
 * @return {(...args: any) => void} The debounced function.
 */
export const useDebouncedFunction = (func: DebouncedFunction, delay: number): ((...args: any) => void) => {
  const [timer, setTimer] = useState<number | null>(null)

  const debouncedFunction = useCallback(
    (...args: any) => {
      if (timer !== null) {
        clearTimeout(timer)
      }
      const newTimer = setTimeout(() => {
        func(...args)
      }, delay) as any
      setTimer(newTimer)
    },
    [func, delay, timer]
  )

  useEffect(() => {
    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [timer])

  return debouncedFunction
}
