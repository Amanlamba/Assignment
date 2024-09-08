export const LOCAL_STORAGE_KEY = 'documents';

export const getDocumentsFromStorage = (): Document[] => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [];
};

export const saveDocumentsToStorage = (newDocuments: Document[]): void => {
    // Retrieve existing documents from local storage
    const existingDocuments = getDocumentsFromStorage();
    
    // Merge new documents with existing ones
    const updatedDocuments = [...existingDocuments, ...newDocuments];
    
    // Save the updated list back to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedDocuments));
  };
  
