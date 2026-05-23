// Architectural pattern: MVC, Dependency Injection, MVP
// MVC ; Model View Controller
// MVP ; Model View Presenter
// DI  ; Dependency Injection
// Design pattern: Middleware, decotar

function reverseSentence(text: string): string {
  const words = text.split(" ");

  const reversedWords = words.map(word =>
    word.split("").reverse().join("")
  );

  return reversedWords.join(" ");
}

console.log(reverseSentence("we like coding!"));