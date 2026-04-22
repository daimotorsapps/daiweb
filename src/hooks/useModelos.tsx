import { create } from 'zustand'

type Store = {
  model: string,
  setModel: (model: string) => void,
}

export const useModelos = create<Store>()((set) => ({
  model: 'hatchback',
    setModel: (model: string) => set({ model }),
}))
    