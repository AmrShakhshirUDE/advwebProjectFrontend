import axios from 'axios'
import React, { Component } from 'react'






export const addpost = post => {
    return axios
        .post("users/post", {
            title: post.title,
            content: post.content,
            file:post.file
        })
        .then(response => {
            
            console.log('posted')
        })
       
}




export const getpost = post => {
    return axios
        .get("users/posts", {
            headers:{'Content-type':'application/json'}
        })
        .then(res => {
            var data=[]
            Object.keys(res.data).forEach(function(key){
                var val = res.data[key]
                data.push([val.title,val.content])
            })
            console.log('get posts')
        })
       
}
