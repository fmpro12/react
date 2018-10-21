const initialState = [
    {
      "userId": 1,
      "id": 1,
      "test": "this is test",
      "name": "Bar Refaeli",
      "img": "https://pbs.twimg.com/profile_images/709438982518661120/sKqOQ41P_bigger.jpg",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "name": "Christiano Ronaldo",
      "img": "https://pbs.twimg.com/profile_images/960787280431648768/lSc6wqfD_bigger.jpg",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "name": "Louis Vuitton",
      "img": "https://pbs.twimg.com/profile_images/744912732714041344/BqEpC2Dx_bigger.jpg",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
  ]
  
  export default function followers (state = initialState, action){
    switch(action.type) {
      case'addFollowers': 
        return {...state, posts: action.payload }
      default:
        return state;
    }
  }
  
  
