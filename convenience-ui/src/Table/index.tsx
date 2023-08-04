import React, { useMemo, FC, memo, } from 'react';
import  css from'./Tabs.module.less'
import {TableProps, TableStyle, NativeTableProps } from './interface';

const Table: FC<TableProps & NativeTableProps> = memo((props) => {
    console.log(props);
    console.log(css);
    
    const { type,  children, show,cell } = props;
    // console.log(columns);
    const TableStyle = useMemo(() => {
        if (!type && type !== 'warning' && type !== 'success' && type !== 'danger' && type !== 'primary') {
            return 'tabs';
        }
        return type as any;
    }, [type]);
    

    return (        
            <table className={[ show ? css.table : css.tables ,cell? css.tab: css.table].join(' ')}>
                <thead >
                    <tr>
                        {
                            props.columns.map((item: any,) => {
                                return (
                                    <th >{item} </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                {
                    props.items.map((item: any) => {
                        return (
                            <tbody key={item.name}>
                                <tr className={ css.title}>
                                    <td>{item.date} </td>
                                    <td> {item.name} </td>
                                    <td>{item.address} </td>
                                </tr>
                            </tbody>
                        )
                    })

                }
            </table>
       
    );
});

export default Table;
