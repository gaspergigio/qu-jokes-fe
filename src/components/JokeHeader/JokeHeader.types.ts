import { JokeFilterArgs, JokeSortOptions } from '@/data/types'

export type JokeHeaderPaginationProps = {
  onPageChange: (filter: JokeFilterArgs) => void
  length: number
  page: number
}

export type JokeHeaderButtonsProps = {
  onShowRandom: () => void
  paginationProps: JokeHeaderPaginationProps
}

export type JokeHeaderSortProps = {
  onSortChange: (sort: JokeSortOptions) => void
  sorting?: JokeSortOptions
}
