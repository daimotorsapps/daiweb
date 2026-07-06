import { create } from 'zustand'
import { type Tab } from '../sections/ModelSection/modelsData'

type Store = {
  model: Tab,
  modelIndex: number,
  setModel: (model: Tab, modelIndex?: number) => void,
}

export const useModelos = create<Store>()((set) => ({
  model: 'hatchback',
  modelIndex: 0,
  setModel: (model: Tab, modelIndex: number = 0) => set({ model, modelIndex }),
}))
