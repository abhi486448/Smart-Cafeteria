import React from 'react'
import Nevbar from '../component/Nevbar'
import Tabs from '../component/Tab'
import QueueStatus from '../component/QueueStatus'
import QueueItem from '../component/QueueItem'

const Dashbord = () => {
  return (
    <div>
        <Nevbar />
        <Tabs />
        <QueueStatus />
        
    </div>
  )
}

export default Dashbord