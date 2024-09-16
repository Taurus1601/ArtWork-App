// import React,{useEffect} from 'react';

// interface Data {
//     title: string;
//     place_of_origin: string;
//     artist_display: string;
//     inscriptions: string;
//     date_start: number;
//     date_end: number;
//   }

//   interface ReponseStruct {
//     pagination: {
//       current_page: number;
//       next_url: string;
//     };
//     data: Data[];
//   }

// function Api({page}: {page: number} ) {
//     const [apidata, setData] = React.useState<Data[]>([]);

//   async function fetchApi(): Promise<ReponseStruct>{

//     try {
//       const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
//       const apidata = await response.json();
//       return apidata as ReponseStruct;
//     }
//      catch (e) 
//      {
//       console.log(e);
//       return {} as ReponseStruct;
//     }
//      finally {
//     }
//   }

//   useEffect(() => {
//     fetchApi().then((data) => {
//         setData(data.data);
//     }).catch((e) => {
//         console.log(e);
//     });
//   }, []);
//   return (
//       <div>{apidata.map((ele , idx) => {
//           return( <div key={idx}>{ele.artist_display}</div>);
//       })}</div>
//     )
// }

// export default Api


interface Data {
    id: number;
    title: string;
    place_of_origin: string;
    artist_display: string;
    inscriptions: string;
    date_start: number;
    date_end: number;
  }

  interface ReponseStruct {
    pagination: {
      current_page: number;
      next_url: string;
      total_pages:number;
    };
    data: Data[];
  }

    async function fetchApi(page:number): Promise<ReponseStruct>{

    try {
      const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
      const apidata = await response.json();
      return apidata as ReponseStruct;
    }
     catch (e) 
     {
      console.log(e);
      return {} as ReponseStruct;
    }
     finally {
    }
  }

  export default fetchApi;