// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';
import { getDocumentsFromStorage, saveDocumentsToStorage } from '../utils/storage';

export const handlers = [
  // GET request handler for fetching documents
  http.get('/api/documents', () => {
    const documents = getDocumentsFromStorage();
    return new HttpResponse(
      JSON.stringify(documents),
      { status: 200 }
    );
  }),

  // POST request handler for saving documents
  http.post('/api/documents', async ({ request }) => {
    // Assuming you're sending documents as JSON in the request body
    const data = await request.json(); // Await the JSON data
    const documents: Document[] = data as Document[]; // Type assertion
    saveDocumentsToStorage(documents);
    return new HttpResponse(
      'Data saved successfully',
      { status: 201 }
    );
  }),
];
