// Fonction pour détecter le type de document basé sur le titre
export const detectDocumentType = (title) => {
  if (!title) return 'الدروس';
  
  const titleLower = title.toLowerCase();
  
  // Détection des types basée sur les mots-clés dans le titre
  if (titleLower.includes('فرض') || titleLower.includes('devoir')) {
    return 'الفروض';
  } else if (titleLower.includes('تمرين') || titleLower.includes('exercice') || titleLower.includes('exercices')) {
    return 'التمارين';
  } else if (titleLower.includes('درس') || titleLower.includes('cours') || titleLower.includes('resume')) {
    return 'الدروس';
  } else if (titleLower.includes('امتحان') || titleLower.includes('examen')) {
    return 'الامتحانات';
  } else {
    // Par défaut, considérer comme "الدروس"
    return 'الدروس';
  }
};

// Fonction pour ajouter le type à un document
export const addTypeToDocument = (document) => {
  return {
    ...document,
    type: detectDocumentType(document.title)
  };
};

// Fonction pour ajouter le type à une liste de documents
export const addTypeToDocuments = (documents) => {
  return documents.map(addTypeToDocument);
};
