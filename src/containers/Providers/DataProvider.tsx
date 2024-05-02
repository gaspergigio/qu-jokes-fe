import { JokeFilterArgs, JokeSortOptions } from '@/data/types'
import React, { createContext, useContext, useState } from 'react'
import { useMatch } from 'react-router-dom'
import { updateUrlWithoutReload } from '@/configs'

export type DataContextType = {
  opened: boolean
  currentId: number | undefined
  filter: JokeFilterArgs
  sorting: JokeSortOptions | undefined
  navigateFromRoot: (id?: number) => void
  openModal: (value: boolean, callback?: () => void) => void
  setFilter: React.Dispatch<React.SetStateAction<JokeFilterArgs>>
  setSorting: React.Dispatch<React.SetStateAction<JokeSortOptions | undefined>>
}

const DataContext = createContext<DataContextType | undefined>(undefined)

/**
 * Initializes the DataProvider component.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The children to be rendered.
 * @return {JSX.Element} The DataProvider component.
 */
export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const matchPath = useMatch(`/:id`)
  const [currentId, setCurrentId] = useState<string | undefined>(matchPath?.params?.id ?? undefined)
  const [filter, setFilter] = useState<JokeFilterArgs>({ page: 1 })
  const [sorting, setSorting] = useState<JokeSortOptions | undefined>()
  const [opened, setOpened] = useState(false)

  /**
   * Navigates from the root based on the provided ID.
   *
   * @param {number} id - The ID for navigation.
   * @return {void} No return value.
   */
  const navigateFromRoot = (id?: number) => {
    const path = id ? `/${id}` : '/'
    setCurrentId(id ? id.toString() : undefined)
    updateUrlWithoutReload(path)
  }

  /**
   * Opens a modal and executes a callback function after a delay.
   *
   * @param {boolean} value - The value indicating whether the modal should be opened or closed.
   * @param {() => void} [callback] - An optional callback function to be executed after the modal is opened.
   */
  const openModal = (value: boolean, callback?: () => void) => {
    setTimeout(() => {
      setOpened(value)
      if (callback) callback()
    }, 500)
  }

  const result = { opened, currentId, filter, sorting, openModal, setFilter, setSorting, navigateFromRoot }

  return <DataContext.Provider value={result as DataContextType}>{children}</DataContext.Provider>
}

/**
 * Returns the data context from the AppContext.
 *
 * @return {DataContextType} The data context object.
 */
export const useAppContext = (): DataContextType => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useAppContext has to be used inside DataProvider')
  }
  return context
}
