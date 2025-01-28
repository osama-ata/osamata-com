import React from 'react';
import glossaryData from '@site/src/data/glossary.json';

const Glossary = () => {
  return (
    <div>
      {Object.keys(glossaryData).map((section) => (
        <div key={section}>
          <h2>{section.toUpperCase()}</h2>
          <ul>
            {Object.entries(glossaryData[section]).map(([term, link]) => (
              <li key={term}>
                <a href={link}>{term}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Glossary;
