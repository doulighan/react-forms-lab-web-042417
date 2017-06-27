import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  handleChange(e) {

    this.setState({
      text: e.target.value
    })
  }

  isValid() {
    var rows = this.state.text.split("\n")
    if (rows.length < 3) return false 
    var row1 = rows[0].split(" ").filter(w => w !== "")
    var row2 = rows[1].split(" ").filter(w => w !== "")
    var row3 = rows[2].split(" ").filter(w => w !== "")
    console.log(row3)
    return (row1.length === 5 && row2.length === 3 && row3.length === 5) ? true : false
  }

  render() {
    if (!this.isValid()) {
      return (
        <div>
          <div>
            <textarea value={this.state.text} 
              onChange={this.handleChange.bind(this)} 
              rows="3" cols="60" />
          </div>
          <div 
            id="poem-validation-error" 
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <textarea value={this.state.text} 
            onChange={this.handleChange.bind(this)} 
            rows="3" cols="60" />
        </div>
      )
    }
  }
}

export default PoemWriter