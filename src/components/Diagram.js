import React from 'react';
import Mermaid from '@theme/Mermaid';



// In lieu of src/utils/jsonToMermaid.js   
const jsonToMermaid = (json) => {
    const { edges } = json;
    const graphDefinition = ['graph TD'];
    edges.forEach(edge => {
      graphDefinition.push(`${edge.from}-->${edge.to}`);
    });
    return graphDefinition.join('\n');
  };


  
const Diagram = ({data}) => {
    const mermaidSyntax = jsonToMermaid(data);

    return (
        <div>
            <Mermaid value={mermaidSyntax} />
        </div>
    );
};

export default Diagram;

