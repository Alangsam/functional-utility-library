// Your functions go here!
//Implement the filter Method on a Prototype

var s = [23, 65, 98, 5];

function myFilter(Array) {
   // Only change code below this line
   var newArray = [];
   Array.forEach(function (x) {
      if (x % 2 === 1) {
         newArray.push(x);
      }
   });
   // Only change code above this line
   return newArray;
}

// let input1 = input2.myFilter(function (item) {
//    return item % 2 === 1;
// });

//Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
   // Only change code below this line
   var newArr = anim.slice(beginSlice, endSlice);
   return newArr;

   // Only change code above this line
}
// var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// sliceArray(inputAnim, 1, 3);

//  Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
   // Only change code below this line
   return cities.slice(0, 3);

   // Only change code above this line
}
// var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// nonMutatingSplice(inputCities);

//Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
   // Only change code below this line
   return original.concat(attach);

   // Only change code above this line
}
// var first = [1, 2, 3];
// var second = [4, 5];
// nonMutatingConcat(first, second);

//Add Elements to the End of an Array Using concat Instead of push

function nonMutatingPush(original, newItem) {
   // Only change code below this line
   return original.concat(newItem);

   // Only change code above this line
}
// var first = [1, 2, 3];
// var second = [4, 5];
// nonMutatingPush(first, second);

//Use the reduce Method to Analyze Data
// The global variable
const watchList = [
   {
      Title: "Inception",
      Year: "2010",
      Rated: "PG-13",
      Released: "16 Jul 2010",
      Runtime: "148 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      Plot:
         "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      Language: "English, Japanese, French",
      Country: "USA, UK",
      Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "1,446,708",
      imdbID: "tt1375666",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Plot:
         "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "910,366",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "The Dark Knight",
      Year: "2008",
      Rated: "PG-13",
      Released: "18 Jul 2008",
      Runtime: "152 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer:
         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      Plot:
         "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      Language: "English, Mandarin",
      Country: "USA, UK",
      Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Metascore: "82",
      imdbRating: "9.0",
      imdbVotes: "1,652,832",
      imdbID: "tt0468569",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Batman Begins",
      Year: "2005",
      Rated: "PG-13",
      Released: "15 Jun 2005",
      Runtime: "140 min",
      Genre: "Action, Adventure",
      Director: "Christopher Nolan",
      Writer:
         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      Plot:
         "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      Language: "English, Urdu, Mandarin",
      Country: "USA, UK",
      Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      Metascore: "70",
      imdbRating: "8.3",
      imdbVotes: "972,584",
      imdbID: "tt0372784",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot:
         "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "876,575",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
   },
];

function getRating(string) {
   const watchList = [
      {
         Title: "Inception",
         Year: "2010",
         Rated: "PG-13",
         Released: "16 Jul 2010",
         Runtime: "148 min",
         Genre: "Action, Adventure, Crime",
         Director: "Christopher Nolan",
         Writer: "Christopher Nolan",
         Actors:
            "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
         Plot:
            "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
         Language: "English, Japanese, French",
         Country: "USA, UK",
         Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
         Poster:
            "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
         Metascore: "74",
         imdbRating: "8.8",
         imdbVotes: "1,446,708",
         imdbID: "tt1375666",
         Type: "movie",
         Response: "True",
      },
      {
         Title: "Interstellar",
         Year: "2014",
         Rated: "PG-13",
         Released: "07 Nov 2014",
         Runtime: "169 min",
         Genre: "Adventure, Drama, Sci-Fi",
         Director: "Christopher Nolan",
         Writer: "Jonathan Nolan, Christopher Nolan",
         Actors:
            "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
         Plot:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
         Language: "English",
         Country: "USA, UK",
         Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
         Poster:
            "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
         Metascore: "74",
         imdbRating: "8.6",
         imdbVotes: "910,366",
         imdbID: "tt0816692",
         Type: "movie",
         Response: "True",
      },
      {
         Title: "The Dark Knight",
         Year: "2008",
         Rated: "PG-13",
         Released: "18 Jul 2008",
         Runtime: "152 min",
         Genre: "Action, Adventure, Crime",
         Director: "Christopher Nolan",
         Writer:
            "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
         Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
         Plot:
            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
         Language: "English, Mandarin",
         Country: "USA, UK",
         Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
         Poster:
            "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
         Metascore: "82",
         imdbRating: "9.0",
         imdbVotes: "1,652,832",
         imdbID: "tt0468569",
         Type: "movie",
         Response: "True",
      },
      {
         Title: "Batman Begins",
         Year: "2005",
         Rated: "PG-13",
         Released: "15 Jun 2005",
         Runtime: "140 min",
         Genre: "Action, Adventure",
         Director: "Christopher Nolan",
         Writer:
            "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
         Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
         Plot:
            "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
         Language: "English, Urdu, Mandarin",
         Country: "USA, UK",
         Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
         Poster:
            "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
         Metascore: "70",
         imdbRating: "8.3",
         imdbVotes: "972,584",
         imdbID: "tt0372784",
         Type: "movie",
         Response: "True",
      },
      {
         Title: "Avatar",
         Year: "2009",
         Rated: "PG-13",
         Released: "18 Dec 2009",
         Runtime: "162 min",
         Genre: "Action, Adventure, Fantasy",
         Director: "James Cameron",
         Writer: "James Cameron",
         Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
         Plot:
            "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
         Language: "English, Spanish",
         Country: "USA, UK",
         Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
         Poster:
            "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
         Metascore: "83",
         imdbRating: "7.9",
         imdbVotes: "876,575",
         imdbID: "tt0499549",
         Type: "movie",
         Response: "True",
      },
   ];
   // Only change code below this line
   var averageRating = watchList.filter((stuff) => stuff.Director == string);
   var numRating = averageRating.map((num) => Number(num.imdbRating));
   var theAverage =
      numRating.reduce((one, two) => one + two) / numRating.length;
   return theAverage;
}
// Christopher Nolan
//Use Higher-Order Functions map, filter,
//or reduce to Solve a Complex Problem

function squaring(arr) {
   var onlyPositive = arr.filter((num) => num > 0 && Number.isInteger(num));
   var onlysquared = onlyPositive.map((nums) => nums * nums);
   return onlysquared;
}

//Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
   // Only change code below this line
   return arr.sort(function (a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
   });

   // Only change code above this line
}

//Split a String into an Array Using the split Method

function splitify(str) {
   // Only change code below this line
   var newGuy = str.split("");
   return newGuy;
   // Only change code above this line
}

//Combine an Array into a String Using the join Method

function sentensify(str) {
   // Only change code below this line
   return str.split("").join(" ");

   // Only change code above this line
}

//Apply Functional Programming to Convert Strings to URL Slugs

function urlSlug(title) {
   return title.toLowerCase().trim().split(/\s+/).join("-");
}

//Use the every Method to Check that Every Element in an Array Meets a Criteria

function checkPositive(arr) {
   // Only change code below this line
   return arr.every((currentValue) => currentValue > 0);

   // Only change code above this line
}

//  Use the some Method to Check that AANNYY Elements in an Array Meet a Criteria

function checkSomePositive(arr) {
   // Only change code below this line

   return arr.some((oneVal) => oneVal > 0);

   // Only change code above this line
}
