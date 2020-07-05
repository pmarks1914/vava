import React, { Component } from 'react'


export const ProtectedRoute =(
    { component: Component, ...rest}) =>{
    return(
        <Route
        {...rest}
    )
}