const SearchResults = ({data}) => {
  
  if(!data || data.length) return null;
  
  const resultList =  (( ) =>{
    
    return data && (
    <>
    <li >
      <span>{data.cep}</span>
    </li>
    <li >
      <span>{data.logradouro}</span>
    </li>
    <li >
      <span>{data.complemento || "Não tem complemento"}</span>
    </li>
    <li >
      <span>{data.bairro}</span>
    </li>
    <li >
      <span>{data.localidade}</span>
    </li>
    <li >
      <span>{data.uf}</span>
    </li>
    </>
    )
  });


  return (
    <div className="search-results">
      <ul>
        {resultList()}
      </ul>
    </div>
  );
};

export default SearchResults;