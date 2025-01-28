// src/utils/jsonToMermaid.js   
export const jsonToMermaid = (json) => {
    const { edges } = json;
    const graphDefinition = ['graph TD'];
    edges.forEach(edge => {
      graphDefinition.push(`${edge.from}-->${edge.to}`);
    });
    return graphDefinition.join('\n');
  };
  