export interface IDescription {
  description: string,
  language: {
    name: string,
    url: string,
  }
}

export interface ICharacteristicts {
  id: number,
  descriptions: IDescription[]
}