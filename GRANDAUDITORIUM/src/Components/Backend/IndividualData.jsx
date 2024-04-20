import React from 'react'

export const IndividualData = ({individualData,index}) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{individualData.name}</th>
            <th>{individualData.phone}</th>
            <th>{individualData.email}</th>
            <th>{individualData.message}</th>
        </tr>
    )
}
export default IndividualData;