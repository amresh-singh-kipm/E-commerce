import React, { Component } from 'react'

 class ErrorBoundary extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }

    static getDrivedStateFromError (error){
       return{
        hasError:true
       }
    }
  render() {
     
          if(this.state.hasError){
            return  <h1>Something went worng</h1>
          }
      
  }
}
export default ErrorBoundary