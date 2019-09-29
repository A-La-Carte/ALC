export interface RecipeType {
  id: number,
  name: string,
  restaurant_id: number,
  description: string,
  main_image: string,
  yt_video_id: string,
  ingredients: Array<string>,
  instructions: Array<string>,
}

export interface RestaurantType {
  id: number,
  name: string,
}