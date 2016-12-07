System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
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
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map