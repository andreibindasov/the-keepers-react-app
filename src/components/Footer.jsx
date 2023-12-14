import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const currYear = new Date().getFullYear()
        return (
            <footer>
                Copyright &copy; {currYear}
            </footer>
      
    )
  }
}
