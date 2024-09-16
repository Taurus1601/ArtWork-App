// import React, { useEffect, useState } from "react";
// import {
//   DataTable,
//   DataTableSelectionCellChangeEvent,
//   DataTableStateEvent,DataTableValue,DataTableValueArray
// } from "primereact/datatable";
// import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
// import { Column } from "primereact/column";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import "primereact/resources/primereact.min.css";

// interface Data {
//   title: string;
//   place_of_origin: string;
//   artist_display: string;
//   inscriptions: string;
//   date_start: number;
//   date_end: number;
// }

// interface ReponseStruct {
//   pagination: {
//     current_page: number;
//     next_url: string;
//   };
//   data: Data[];
// }

// function App() {
//   const [page, setPage] = React.useState(1);
//   const [apidata, setData] = useState<Data[]>([]);
//   const [loading, setLoading] = React.useState(false);
//   const [selectedProducts, setSelectedProducts] = React.useState<DataTableValueArray>([]);
//   const [rowClick, setRowClick] = React.useState<boolean>(true);


//   const onPageChange = (event: DataTableStateEvent) => {
//     setPage(event.page! + 1);
//   };

//   async function fetchApi(): Promise<ReponseStruct> {
//     setLoading(true);

//     try {
//       const response = await fetch(
//         `https://api.artic.edu/api/v1/artworks?page=${page}`
//       );
//       const apidata = await response.json();
//       // const {pagination ,data, info} = apidata ;

//       return apidata as ReponseStruct;
//     } catch (e) {
//       console.log(e);

//       return {} as ReponseStruct;
//     } finally {
//       setLoading(false);
//     }
//   }
//   // title, place_of_origin, artist_display, inscriptions, date_start, date_end
//   useEffect(() => {
//     fetchApi().then((data) => {
//       console.log(data);
//       setData(data.data);
//     });
//     console.log(apidata);
//   }, [page]);

//   return (
//     <div style={{ padding: 50 }}>
//       <h1>Art Institute of Chicago</h1>
//       {loading ? <h1>Loading...</h1> : <h1>Not Loading</h1>}
//       <button onClick={() => setPage(page + 1)}>Next Page</button>
//       <button onClick={() => setPage(page - 1)}>Previous Page</button>
//       <div className="card">
//         <DataTable
//           value={apidata}
//           selectionMode={rowClick ? null : "multiple"}
//           selection={selectedProducts}
//           scrollable={true}
//           scrollHeight="500px"
//           onSelectionChange={(e: any) => setSelectedProducts(e.value)}
//           dataKey="id"
//           rows={4}
//           rowsPerPageOptions={[4, 8, 12]}
//           paginator
//           onPage={onPageChange}
//           tableStyle={{ minWidth: "100rem" }}>
//           <Column
//             selectionMode="multiple"
//             headerStyle={{ width: "6rem" }}/>
//           <Column field="title" header="Title" style={{ width: "20%" }}/>
//           <Column
//             field="place_of_origin"
//             header="Origin"
//             style={{ width: "20%" }}
//          />
//           <Column
//             field="artist_display"
//             header="Artist Display"
//             style={{ width: "20%" }}
//          />
//           <Column
//             field="inscriptions"
//             header="Inscription"
//             style={{ width: "20%" }}
//          />
//           <Column
//             field="date_start"
//             header="Date Start"
//             style={{ width: "20%" }}
//          />
//           <Column
//             field="date_end"
//             header="Date End"
//             style={{ width: "20%" }}
//         />
//         </DataTable>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react'
import Api from './api'
import fetchApi from './api'
import Component from './component';
import RowSelection from './overlay';

function App() {

  function rowsToBeSelected(rows: number) {
    console.log(rows);
  }

  useEffect(() => { 
    fetchApi(1).then((data) => {
      console.log(data.data);
    });
  }
  , []);
  return (
    <div>
      <Component/>
      {/* <RowSelection  rowsToBeSelected={rowsToBeSelected}/> */}
    </div>
  )
}

export default App