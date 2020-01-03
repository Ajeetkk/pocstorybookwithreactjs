import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-grid-system";
import { fromEvent, Observable, of } from 'rxjs';
import { throttleTime, scan, map } from 'rxjs/operators';
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
  componentDidMount(){
    fromEvent(document, 'click').pipe(
      throttleTime(1000),
      scan(count => count + 1, 0)
    )
    .subscribe(count => console.log(`Clicked ${count} times`));
    // .subscribe(count => alert(`Clicked ${count} times`));

    fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map(event => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe(count => console.log(count));
  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
   
  console.log('just before subscribe');
  observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });
  console.log('just after subscribe');

  map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

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
