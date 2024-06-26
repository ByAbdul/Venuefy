import React from 'react'
import './IndividualData'

export const Data = ({data}) => {
    return data.map((individualData,index)=>(
        <IndividualData individualData={individualData} key={index+1}
            index={index+1}
        />
    ))
}
export default Data;