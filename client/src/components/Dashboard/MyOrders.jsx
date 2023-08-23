import React from 'react'
import DashboardOrderList from './DashboardOrderList'

const MyOrders = () => {
  return (
    <>
    <DashboardOrderList title="Scheduled Orders"/>
    <DashboardOrderList title="CompletedOrders"/>
    <DashboardOrderList title="Cancelled Orders"/>
    </>
  )
}

export default MyOrders