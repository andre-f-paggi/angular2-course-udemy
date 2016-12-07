export class TweetService{
    getTweets() : string[] {
        return [
            {
                imageUrl: "http://lorempixel.com/100/100/people?1",
                title: "Tweet #1",
                message: "First !!!",
                username: "@usrMosh123",
                iLiked: false,
                totalLikes: 5,
            },
            {
                imageUrl: "http://lorempixel.com/100/100/people?2",
                title: "Second tweet",
                message: "Wow, nice graphics!",
                username: "@crazyLucina",
                iLiked: true,
                totalLikes: 72,
            },
            {
                imageUrl: "http://lorempixel.com/100/100/people?3",
                title: "Sorry for the long tweet",
                message: "Here's a flying potato",
                username: "@9gagger",
                iLiked: false,
                totalLikes: 6,
            }
        ];
    }
}