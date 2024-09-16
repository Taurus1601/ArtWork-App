import  { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import fetchApi from "./api";
import { Paginator } from 'primereact/paginator';
import RowSelection from './overlay';

interface Data {
  id: number;
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string;
  date_start: number;
  date_end: number;
}

function Component() {
  const [details, setDetails] = useState<Data[]>([]);

  const [selectedDetails, setSelectedDetails] = useState<Data[]>([]);
  const [rowClick, setRowClick] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [first, setFirst] = useState<number>(0);
const [selectedrows , setSelectedRows] = useState<number[]>([]);




  useEffect(() => {
    fetchApi(page).then((data) => {setDetails(data.data)
        setTotalRecords(data.pagination.total_pages);
  setRowClick(true);
  setSelectedRows([])

        
    });
  }, [page]);
  const onPageChange = (event: any) => {
    setFirst(event.first);
    if (event.rows) {
        setPage(event.first / event.rows + 1);
    }
    // setPage(page+1); // PrimeReact paginator is zero-based, so we add 1
  };

function rowsToBeSelected(rows: number) {
    console.log(rows);
   
    setSelectedDetails(details.slice(0, rows)); 

    if (rows > 12) {
        let remaining = rows - 12;
        const pagesToFetch = Math.ceil(remaining / 12);
        console.log(pagesToFetch , remaining);

        for (let i = page; i <=pagesToFetch; i++) {
            fetchApi(page + i).then((data) => {
                
                setSelectedDetails((prev) => {
                    return [...prev, ...data.data.slice(0, remaining)]; 
                });
                
            });}
     }   }
 
  return (
    
    <div className="p-10">
        <div className="card relative p-2 border-indigo-300 border-2 rounded-xl bg-white">
                  <div className="absolute z-50 top-8 left-[10%] scale-[200%]">
                      <RowSelection  rowsToBeSelected={rowsToBeSelected} />
                  </div>
          <DataTable
            value={details}
            selectionMode={rowClick ? null : "multiple"}
            selection={selectedDetails!}
            style={{borderRadius:20}}
            onSelectionChange={
                (e: any) => {setSelectedDetails(e.value)
                    console.log(e.value);
                   console.log(selectedrows);
            }}
            tableStyle={{ minWidth: "50rem" }}
            className="rounded-sm"
          >
            <Column selectionMode="multiple" headerStyle={{ width: "6rem" }}
            />
            <Column field="title" header="Title" style={{ width: "20%" }} />
            <Column
              field="place_of_origin"
              header="Origin"
              style={{ width: "20%" }}
            />
            <Column
              field="artist_display"
              header="Artist Display"
              style={{ width: "20%" }}
            />
            <Column
              field="inscriptions"
              header="Inscription"
              style={{ width: "20%" }}
            />
            <Column
              field="date_start"
              header="Date Start"
              style={{ width: "20%" }}
            />
            <Column field="date_end" header="Date End" style={{ width: "20%" }} />
          </DataTable>
          <Paginator first={first}
          rows={12} totalRecords={totalRecords} rowsPerPageOptions={[4,8,12]} onPageChange={onPageChange} />
        </div>
    </div>
  );
}
export default Component;


