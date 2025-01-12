'use client';

import { useState } from 'react';

// Main component for the home page
export default function Home() {

  const [subjects, setSubjects] = useState('');
  const [predicates, setPredicates] = useState('');
   // State to handle any error messages
   const [error, setError] = useState<string | null>(null);
  
  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form behavior (page reload)

    try {
      // Send a POST request to the backend API
      const response = await fetch('/api/generator');

      // Check if the response status is not OK (e.g., 400 or 500)
      if (!response.ok) {
        // Extract the error message from the response
        const errorData = await response.json();
        setError(errorData.error || 'Something went wrong'); // Set the error message
      } else {
        // Parse the JSON response and set the result state
        const data = await response.json();
        setSubjects(data.subject);
        setPredicates(data.predicate);
        setError(null); // Clear any previous error
        console.log(subjects , predicates)
      }
    } catch (error) {
      // Handle any network or unexpected errors
      setError(error + 'Failed to connect to the server');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600 text-white px-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        ✨ Next.js Phrase Generator Challenge ✨
      </h1>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 text-gray-800 max-w-md w-full"
      >
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-3 transition"
        >
          Generate Phrase
        </button>
      </form>

      {/* Error Section */}
      {error && (
        <p className="bg-red-500 text-white font-semibold rounded-lg py-2 px-4 mt-4 max-w-md w-full text-center">
          {error}
        </p>
      )}

      {/* Result Section */}
      {subjects && (
        <div className="bg-white rounded-lg shadow-lg p-8 mt-6 text-gray-800 max-w-md w-full">
          <h3 className="text-2xl font-semibold mb-4 text-center">Result</h3>
          <p className="text-lg">
            <span className="font-bold">Phrase:</span> {subjects + " " + predicates}
          </p>
        </div>
      )}
    </div>
  );
}
