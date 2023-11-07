import { useEffect, useId,useState} from 'react'
import { useFilters } from '../hook/useFilters.js'
import { useListBook } from '../hook/useListBook.js'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Form from 'react-bootstrap/Form'
import {Amount} from '../component/Amount.jsx'

export const Filters = ({bookNoFiltered}) =>{
    const idGenero = useId()
    const idSeacher = useId()
    const {filters,setFilters} = useFilters()
    const { read } = useListBook()
    const [amountGeneralList, setAmountGeneralList] = useState(null);
    const [AmountInListToRead, setAmountInListToRead] = useState(null);

    useEffect(()=>{

    const notFilteredTemp = bookNoFiltered.filter(item => !read.find(book => book.ISBN === item.book.ISBN));

    const amountGeneralListTemp = (notFilteredTemp.filter(item => filters.genre === 'all' || item.book.genre === filters.genre)).length;
    setAmountGeneralList(amountGeneralListTemp);

    const AmountInListToReadTemp = (read.filter(item => filters.genre === 'all' || item.genre === filters.genre)).length;
    setAmountInListToRead(AmountInListToReadTemp)

    },[filters,read,bookNoFiltered])

    const handleChange = (e) =>{

        setFilters(prevState=>({
            ...prevState,
            genre: e.target.value
        }))
    }
    const handleChangePages = ([pagMin,pagMax]) =>{
        setFilters(prevState=>({
            ...prevState,
            pages: [pagMin,pagMax]
        }))
    }
    const handleChangeSeach = (e) =>{
        setFilters(prevState=>({
            ...prevState,
            title: e.target.value
        }))
    }

    return (
        <>
        <Amount amountGeneralList={amountGeneralList} AmountInListToRead={AmountInListToRead}/>
        <div className='filters-container'>
            
            <Form className='input-seach'>
                
                    <Form.Label htmlFor={idSeacher}></Form.Label>
                    <Form.Control size='lg' id={idSeacher} type="text" onChange={handleChangeSeach}/>
                
            </Form>

            <div className='selector-genre'>
                <label htmlFor={idGenero}></label>
                <Form.Select id={idGenero} onChange={handleChange}>
                <option value='all'>Todas</option>
                <option value='Fantasía'>Fantasía</option>
                <option value='Ciencia ficción'>Ciencia ficción</option>
                <option value='Zombies'>Zombis</option>
                <option value='Terror'>Terror</option>
                </Form.Select>
            </div>
            
            <div className='range'>
                <div className="range-values">
                
                    <span>{filters.pages[0]}</span>
                    <span>{filters.pages[1]}</span>
                </div>

                <Slider range min={0} max={2000} onChange={handleChangePages} value={filters.pages}/>
            </div>
            
            
            
        </div>
        
        </>
    )
}