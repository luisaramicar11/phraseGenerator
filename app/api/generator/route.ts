import { NextResponse } from 'next/server';

// Define a GET request handler
export async function GET() {
  
  // Define subjects
  const subjectsArray = ["The dog", "The turtle", "My friend", "Sebastian"];

  // Define predicates 
  const predicatesArray = ["runs fast", "is very wise", "loves coding", "sings poorly"];

  // Calculate the subject
  const subject = subjectsArray[Math.floor(Math.random()*subjectsArray.length)];

  // Calculate the predicate
  const predicate = predicatesArray[Math.floor(Math.random()*predicatesArray.length)];
  console.log(subject, predicate)
  // Return the results in JSON format
  return NextResponse.json({
    subject, // The subject of the sentence
    predicate,   // The predicate of the sentence
  });
}
