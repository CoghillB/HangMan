const sentance = "Computer sciense is the study of computation, algorithms, and how computers process information. " +
    "It encompasses a wide range of topics, from the theoretical foundations of programming languages and algorithms to " +
    "practical applications in software engineering and artificial intelligence. One key area in computer sciense" +
    " is data structures, which are used to store and organize data efficiently, allowing for faster processing and " +
    "retrieval. Another vital aspect is algorithms, which are sets of instructions that enable computers to solve " +
    "complex problems quickly and effectively. In recent years, advancements in machine learning and artificial " +
    "intelligence have revolutionized the field, allowing computers to learn from data and make predictions or decisions" +
    " without explicit programming. Computer sciense also plays a critical role in cybersecurity, helping protect " +
    "sensitive information from unauthorized access. As technology continues to evolve, the demand for skilled computer " +
    "scientists grows, with applications in almost every industry. From healthcare to finance, entertainment, and beyond, " +
    "computer sciense is essential in driving innovation, solving global challenges, and shaping the future of human " +
    "progress. It’s a field that requires logical thinking, problem solving skills, and a deep understanding of how " +
    "technology can be leveraged to make the world more connected and efficient."

//Put the paragraph in an array
const words = sentance.split(' ');

// 1. count number of words in the paragraph
const wordCount = words.length;
console.log(wordCount);

//2. Update the story to remove the word "and" from the paragraph
const removeAnd = words.filter(word => word !== 'and');

//3. Find the word "sciense" to "science"
const replaceSciense = words.map(word => word.replace('sciense', 'science'));

//4. Find the index of the word 'healthcare'
const indexOfHealthcare = words.indexOf('healthcare');
console.log(indexOfHealthcare);

//5. Check if every word has less than 10 characters
const checkLength = words.every(word => word.length < 10);

if(checkLength) {
    console.log('Every word has less than 10 characters');
}else {
    console.log('Every word does not have less than 10 characters');
}

//6. Check if any word has exactly 14 characters
const checkLength14 = words.some(word => word.length === 14);
if(checkLength14){
    console.log('There is a word with exactly 14 characters');
}else{
    console.log('No word has more then 14 characters');
}

//7. Change any instance of 'information' to 'info' and output final paragraph
const replaceInfo = words.map(word => word.replace('information', 'info'));
console.log(replaceInfo.join(' '));


