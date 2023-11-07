export const Amount = ({amountGeneralList,AmountInListToRead}) =>{

    return (
        <div data-testid='class-container-h4' className='book-available'>
            <h3>libros disponibles:</h3>
            <h4>{amountGeneralList}</h4>
            <h3>libros en lista lectura:</h3>
            <h4>{AmountInListToRead}</h4>
        </div>
    )

}