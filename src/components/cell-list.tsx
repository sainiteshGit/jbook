import { useTypedUseSelector } from "../hooks/use-typed-selector";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";
import { Fragment } from "react";
import './cell-list.css';

const CellList: React.FC=()=>{
    const cells=useTypedUseSelector(({ cells:{order,data}})=>
         order.map((id)=>data[id])
    );
    const rendereCells = cells.map(cell=> (
        <Fragment key={cell.id}>

            <AddCell forceVisible={false} nextCellId={cell.id}/>

        <CellListItem  cell={cell}/>
        </Fragment>
        

    ));
    return <div>
        <div className="cell-list">
            <AddCell forceVisible={cells.length===0} nextCellId={null}/>
            {rendereCells}
        </div>
    </div>
};
export default CellList;