import { LineChart } from '@mui/x-charts'
import React from 'react'

const LineC = () => {
  return (
    <div>
      <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10, 11, 12,] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5,8, 8.5],
      area: true,
    },
  ]}
  width={450}
  height={300}
/>
    </div>
  )
}

export default LineC
