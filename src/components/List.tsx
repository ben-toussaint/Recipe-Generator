interface ListProps {
  newIngredientsData: string[];
}
function List(props: ListProps) {
  return (
    <>
      <div className="m-auto">
        <h2 className="font-bold text-2xl">Ingredients on hand:</h2>
        {props.newIngredientsData.map((elt) => {
          return (
            <ol>
              <li key={elt}>{elt}</li>
            </ol>
          );
        })}
      </div>
    </>
  );
}

export default List;
