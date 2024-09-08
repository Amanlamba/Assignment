import React, { useEffect, useState } from 'react';
import Card from './components/Card';

interface Document {
  type: string;
  title: string;
  position: number;
}

const Page = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<number | null>(null);

  // Fetch data from the mock API
  const fetchDocuments = async () => {
    const response = await fetch('/api/documents');
    const data = await response.json();
    setDocuments(data);
  };

  // Save data to the mock API
  const saveDocuments = async () => {
    setIsSaving(true);
    await fetch('/api/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ documents }),
    });
    setIsSaving(false);
    setLastSaved(Date.now());
  };

  useEffect(() => {
    fetchDocuments();
    // const interval = setInterval(() => {
    //   fetchDocuments();
    // }, 5000);

  }, []);

  // // Auto-save every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     saveDocuments();
  //   }, 5000);

  //   return () => clearInterval(interval); // Cleanup
  // }, [documents]);

  const getThumbnail = (type: string) => {
    switch (type) {
      case 'bank-draft':
        return 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/08/21113811/Untitled-design-2024-08-21T112708.804-1600x900.jpg';
      case 'bill-of-lading':
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBS85fXAq3g0vV5KC2cc27RK-MpOLnYxyt0XOK2ieqn6_-OrIMhmuLR1qZiLeCKSJlDWs&usqp=CAU';
      case 'invoice':
        return 'https://www.comingsoon.net/wp-content/uploads/sites/3/2024/07/Untitled-design-2024-07-10T103117.885.jpg?w=1024';
      case 'bank-draft-2':
        return 'https://preview.redd.it/tvn-love-next-door-character-poster-jung-hae-in-jung-so-min-v0-6e56q7o3hmfd1.jpg?width=1080&crop=smart&auto=webp&s=0498a3203e48d2441e810944ad16fa2d0e8c69c8';
      case 'bill-of-lading-2':
        return 'https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2024/08/21/Love20Next20Door20281129_0.jpg?VersionId=1jnTXAPX5azPuzDDdotTO9DbGO3LWbql&itok=X3AboTdh';
      default:
        return '/images/default.png';
    }
  };

  return (
    <div className="page-container">
      <div className="card-container">
        {documents.map((doc) => (
          <Card
            key={doc.position}
            title={doc.title}
            thumbnail={getThumbnail(doc.type)}
          />
        ))}
      </div>

      {isSaving && <div>Saving data...</div>}

      {lastSaved && (
        <div>Last saved: {Math.round((Date.now() - lastSaved) / 1000)} seconds ago</div>
      )}
    </div>
  );
};

export default Page;
