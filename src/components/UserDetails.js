import React from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-grid-system";
export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      addValue: 0
    };
  }
  one(e) {
    // console.log(e.target.value);
    this.setState({ a: Number(e.target.value) });
  }
  two(e) {
    // console.log(e.target.value);
    this.setState({ b: Number(e.target.value) });
  }
  add() {
    console.log("add value");
  }
  blurHandler() {
    console.log(this.state.addValue);
    let c = this.state.a + this.state.b;
    this.setState({ addValue: c });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={1}></Col>
            <Col sm={8}>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Addition</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={e => {
                      this.one(e);
                    }}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    onChange={e => {
                      this.two(e);
                    }}
                    onBlur={this.blurHandler.bind(this)}
                  />
                  {/* <Form.control type="button" onClick={()=>{
                                    let c = this.state.a + this.state.b;
                                    this.setState({addValue:c})
                                    }}/> */}
                
                </Form.Group>
                {/* <button onClick={this.blurHandler}>Add</button> */}
                  
                    {/* <button onClick={() => console.log("clicked")}>Console</button> */}
                <br />
                <Form.Label>OutPut</Form.Label>
                <br />
                <Form.Label>{this.state.addValue}</Form.Label>
                
              </Form>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
