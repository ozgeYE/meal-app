export interface Meal {
  id: number,
  categoryIds: number[],
  title: string,
  affordability: string
  complexity: string,
  imageUrl: string,
  ingredients: string[],
  steps: string[],
  duration: number,
  isGlutenFree: boolean,
  isVegan: boolean,
  isVegetarian: boolean,
  isLactoseFree: boolean
}