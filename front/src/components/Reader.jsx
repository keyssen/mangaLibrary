import { useEffect, useState } from "react";
import TableReader from './TableReader';

export default function Reader() {

    const host = "http://localhost:8080";

    const [readerId, setReaderId] = useState(0);

    const [mangaId, setMangaId] = useState(0);

    const [readerName, setReaderName] = useState("");

    const [password, setPassword] = useState("");


    const [data, setData] = useState([]);


    const table = document.getElementById("tbody");

    useEffect(() => {
        getData();
        console.log(2);
      },[]);


    const getData = async function () {
        const response = await fetch(host + "/reader");
        setData(await response.json())
        console.log(data);
        //table.innerHTML = "";
        // data.forEach(Reader => {
        //     let temp = "<select>";
        //     Reader.mangas.forEach(Manga => {
        //         temp += `<option>${Manga.mangaName + " " + Manga.chapterCount}</option>>`
        //     })
        //     temp += "</select>"
        //     table.innerHTML +=
        //         `<tr>
        //                 <th scope="row">${Reader.id}</th>
        //                 <td>${Reader.readerName}</td>
        //                 <td>${Reader.hashedPassword}</td>
        //                 <td>${temp}</td>
        //             </tr>`;
        //     })
        }

    const create = async function (){
        const requestParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };
        const response = await fetch(host + `/reader?readerName=${readerName}&password=${password}`, requestParams);
        getData();
    }

    const remove = async function (){
        console.info('Try to remove item');
        if (readerId !== 0) {
            if (!confirm('Do you really want to remove this item?')) {
                console.info('Canceled');
                return;
            }
        }
        const requestParams = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        };
        const response = await fetch(host + `/reader/` + readerId, requestParams);
        getData();
        return await response.json();
    }

    const removeAll = async function (){
        console.info('Try to remove item');
        if (!confirm('Do you really want to remove this item?')) {
            console.info('Canceled');
            return;
        }
        const requestParams = {
            method: "DELETE",
        };
        await fetch(host + `/reader/`, requestParams);
        getData();
    }

    const update = async function (){
        console.info('Try to update item');
        if (readerId === 0 || readerName == null || password === 0) {
            return;
        }
        const requestParams = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        };
        const response = await fetch(host + `/reader/${readerId}?readerName=${readerName}&password=${password}`, requestParams);
        getData();
        return await response.json();
    }

    const removeManga = async function (){
        console.info('Try to remove item');
        if (!confirm('Do you really want to remove this item?')) {
            console.info('Canceled');
            return;
        }       
        const requestParams = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        };
        console.log(host + `/reader/${readerId}/removeManga?mangaId=${mangaId}`, requestParams);
        const response = await fetch(host + `/reader/${readerId}/removeManga?mangaId=${mangaId}`, requestParams);
        return await response.json();
    }

    const addManga = async function () {
        const requestParams = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        };
        console.log(host + `/reader/${readerId}/addManga?mangaId=${mangaId}`, requestParams);
        const response = await fetch(host + `/reader/${readerId}/addManga?mangaId=${mangaId}`, requestParams);
        return await response.json();
    }
    const createButton = (e) =>{
        e.preventDefault()
        create();
    }

    const removeButton = (e) =>{
        e.preventDefault()
        remove();
        
    }

    const updateButton = (e) =>{
        e.preventDefault()
        update();
    }

    const removeMangaButton = (e) =>{
        e.preventDefault()
        removeManga();
    }

    const addMangaButton = (e) =>{
        e.preventDefault()
        addManga();
    }



    return (
        <main>
        <div className="container" id="root-div">
            <div className="content">
                <h1>Reader</h1>
                <form id="form">
                    <div className="d-flex justify-content-evenly mt-3">
                        <div className="col-sm-2">
                            <label htmlFor="readerId" className="form-label">readerId</label>
                            <input type='number' value = {readerId} onChange={event => setReaderId(event.target.value)} className="form-control"/>
                        </div>
                        <div className="col-sm-2">
                            <label htmlFor="mangaId" className="form-label">mangaId</label>
                            <input type='number' value = {mangaId} onChange={event => setMangaId(event.target.value)} className="form-control"/>
                        </div>
                        <div className="col-sm-2">
                            <label htmlFor="readerName" className="form-label">readerName</label>
                            <input type='text' value = {readerName} onChange={event => setReaderName(event.target.value)} className="form-control"/>
                        </div>
                        <div className="col-sm-2">
                            <label htmlFor="password" className="form-label">password</label>
                            <input type='text' value = {password} onChange={event => setPassword(event.target.value)} className="form-control"/>
                        </div>                           
                    </div>
                    <div className="row m-3">
                        <div className="d-grid col-sm-3 m-3 mx-auto">
                            <button onClick={createButton} className="btn btn-success">Добавить</button>
                        </div>
                        <div className="d-grid col-sm-3 m-3 mx-auto">
                            <button onClick={updateButton} className="btn btn-success">Обновить</button>
                        </div>
                        <div className="d-grid col-sm-3 m-3 mx-auto">
                            <button onClick={removeButton} className="btn btn-success">Удалить</button>
                        </div>
                        <div className="d-grid col-sm-2 m-3 mx-auto">
                            <button onClick={removeMangaButton} className="btn btn-success">Удалить мангу</button>
                        </div>
                        <div className="d-grid col-sm-2 m-3 mx-auto">
                            <button onClick={addMangaButton} className="btn btn-success">Добавить мангу</button>
                        </div>
                    </div>           
                </form>
                <div className="row table-responsive text-white">

                    <table className="table mt-3">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">readerName</th>
                            <th scope="col">Password</th>
                            <th scope="col">Mangs</th>
                        </tr>
                        </thead>
                        <TableReader items = {data}/>
                        {/* <tbody id="tbody">
                        </tbody> */}
                    </table>
                </div>
            </div>
        </div>
        </main>
    );
}