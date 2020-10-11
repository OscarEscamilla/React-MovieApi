
import React, {useState} from 'react';
import Card from '../components/card/Card';



const ListMovies = () => {

    const [data, setData] = useState([])
    const [error, seterror] = useState('')
    const [searchTerm, setTerm] = useState('')

    const handleGetData = async () => {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d3e128f&s=joker`);
        if(response.ok){
            const res = await response.json()
            setData(res.Search)
        }
    }


    handleGetData();

    

    const handlerSearchOnChange = async (e) => {
        console.log(e.target.value);
        setTerm(e.target.value);
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()
        if(!searchTerm){
            seterror('Enter a valid text, please!')
        }else{
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d3e128f&s=${searchTerm}`);
            if(response.ok){
                const res = await response.json()
                console.log(res);
                setData(res.Search)
            }
        }

    }

    // render
    return (
        <>
            <div clasName="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        <form className="form-inline" onSubmit= {e => handlerSubmit(e)}>
                            <input
                                id="input-search"
                                type="text" 
                                placeholder="Search" 
                                className="form-control"
                                onChange={handlerSearchOnChange}
                                autoFocus>
                            </input>
                        </form>
                        <p className="text-white">{ error ? error : ''}</p>
                    </div>
                </div>
            <div className="row">
                {
                    data.map((movie, i) => (
                    <Card props={movie} key={i} />
                    ))
                }
            </div>
        </>

    )

}


export default ListMovies;