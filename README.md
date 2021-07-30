# :rocket: Apollo 2021

<img src="https://yt3.ggpht.com/ytc/AKedOLTUh5DI9RQkZcNRxzVqXMfyO2jB99F1k49ttgFbrA=s88-c-k-c0x00ffffff-no-rj">

해당 저장소는 NomadCorder의 Nicolas님의 <a href="https://nomadcoders.co/graphql-for-beginners/lectures">GraphQL로 영화 API 만들기</a> 와 <a href="https://nomadcoders.co/react-graphql-for-beginners/lectures">GraphQL로 영화 웹 앱 만들기</a> 강좌를 보고 제작되었음을 미리 밝힙니다.

본 저장소는 강의 특성에 맞게 Client 와 Server 로 구분되어있음

이전 Axios, Fetch가 아닌 GraphQL로 필요한 정보만을 받아와 영화소개 페이지를 만들어보고 싶어서 해당 저장소를 만들게되었음

### :running: GraphQL Yoga

GraphQL 서버를 생성하는 경우 GraphQL Yoga 라이브러리를 사용하면 매우 간편하게 서버를 생성할 수 있으며,

```javascript
import { GraphQLServer } from "graphql-yoga";

export const server = new GraphQLServer({
  // 스키마를 전달해야함
});

server.start(() => console.log("GraphQL Server Running!!"));
```

위의 코드만으로 이미 서버는 생성되었으나 인자의 값으로 스키마를 넘겨주어야함

### :earth_asia: Apollo Client

ApolloClient 에서 백엔드로 가기 전 요청을 추가적으로 넣을 수 있는데 이는 resolvers 에 객체의 형태로 데이터를 전달하면 반영할 수 있음

```javascript
import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    // Type을 Movie로 갖는 쿼리의 isLiked = false 데이터를 삽입함
    Movie: {
      isLiked: () => false,
    },
    // Mutation을 새로 추가
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        // cache데이터로 해당 데이터를 추가함
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked,
          },
        });
      },
    },
  },
});
```

이렇게 추가된 데이터를 요청할 때 프론트엔드 에서 지켜야 할 문법이 있다.

```javascript
const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    // 이와 같이 서버에는 없는 명령의 경우 코드 입력 후 @client 를 달아 client에서 찾을 내용이라고 선언해주어야 함
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;
```

### :sparkles: Main Page

<img src="./gitImages\MainPage.jpg">

### :cat: Detail Page

<img src=".\gitImages\DetailPage.jpg">

### :thumbsup: Like Button

<img src=".\gitImages\LikeButton.jpg">

### :v: If Clicked Like Button

<img src=".\gitImages\Liked Movie.jpg">
