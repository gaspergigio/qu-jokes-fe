export const jokesKeys = {
  all: ['jokes'] as const,
  page: (page: number) => [...jokesKeys.all, page] as const,
  findRandom: () => [...jokesKeys.all, 'random'] as const,
  findOne: (id: string) => [...jokesKeys.all, id] as const,
  pageByType: (page: number, type: string) => [...jokesKeys.all, page, type] as const,
  findRandomByType: (type: string) => [...jokesKeys.all, 'random', type] as const,
}
