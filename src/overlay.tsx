import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function RowSelection({rowsToBeSelected}:{rowsToBeSelected:(rows:number)=>void}) {
    const [selectedRows, setSelectedRows] = React.useState<number>(0);
    function handleClick(e: any) {
        rowsToBeSelected(selectedRows);
        console.log(selectedRows);
        op.current?.hide();
    }
    const op = useRef<OverlayPanel>(null);

    return (
        <div className=" inline-block    ">
            <Button type="button" label="&#8964;" onClick={(e) => op.current?.toggle(e)} />
            <OverlayPanel ref={op} >
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="username">Rows</label>
                    <InputText type='number' id="username" aria-describedby="username-help"
                    onChange={(e) => setSelectedRows(e.target.valueAsNumber)}
                    className='border-blue-300 border-2 p-1' />
                    <Button type="button" label="Select"
                    onClick={handleClick}
                    className='bg-indigo-500 p-1 w-20 text-white'/>
                </div>
            </OverlayPanel>
        </div>
    );
}
