import React, { useState } from 'react';

interface NewDeckAvaliativoProps {
  onSubmit: (
             title: string, 
       description: string, 
         directory: string, 
          isPublic: boolean,
      isDuplicable: boolean,
     allowFeedback: boolean
       ) => void;
}

export const NewDeckAvaliativoForm: React.FC<NewDeckAvaliativoProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [directory, setDirectory] = useState('');
  const [isPublic, setPublic] = useState(false);
  const [isDuplicable, setDuplicable] = useState(false);
  const [allowFeedback, setAllowFeedback] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, description, directory,isPublic,isDuplicable,allowFeedback);
  };
  
  return (    
    <form onSubmit={handleSubmit}>
      <div className="newDeck-container">
        <div className="newDeck-section">
          <h2 className="newDeck-title">Novo Deck Avaliativo</h2>
        </div>
        <div >
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>   
        <div >
          <label htmlFor="description">Descrição</label>
          <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div >
          <label htmlFor="directory">Diretório</label>
          <input
            type="file"
            id="directory"
            value={directory}
            onChange={(e) => setDirectory(e.target.value)}
          />
        </div>
        <div >
          <label htmlFor="isPublic">Deck público</label>
          <input
            type="checkbox"
            id="isPublic"
            checked={isPublic}
            onChange={(e) => setPublic(e.target.checked)}
          />
        </div>   
        <div >
          <label htmlFor="isDuplicable">Permite duplicação</label>
          <input
            type="checkbox"
            id="isDuplicable"
            checked={isDuplicable}
            onChange={(e) => setDuplicable(e.target.checked)}
          />
        </div> 
        <div >
          <label htmlFor="allowFeedback">Gerar feedback para participantes</label>
          <input
            type="checkbox"
            id="allowFeedback"
            checked={allowFeedback}
            onChange={(e) => setAllowFeedback(e.target.checked)}
          />
        </div>         
      </div>  
      <button type="submit">Criar</button>
    </form>
  );
};