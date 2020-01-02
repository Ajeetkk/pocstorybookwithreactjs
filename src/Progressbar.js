import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-grid-system";
class Progressbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "35"
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <Container fluid>
          <br />
          <Row>
            <Col sm={8}>
              <ProgressBar variant="success" now={this.state.value} />
            </Col>
            <Col sm={4}>
              <input
                type="text"
                onChange={e => {
                  this.handleChange(e);
                }}
              ></input>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    );
  }
}
export default Progressbar;
