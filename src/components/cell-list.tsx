import { useTypedUseSelector } from "../hooks/use-typed-selector";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";
import { Fragment } from "react";

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
        {rendereCells}
        <div className={cells.length===0?'force-visible':''}>
            <AddCell forceVisible={cells.length===0} nextCellId={null}/>
        </div>
    </div>
};
export default CellList;