import Layout from '../src/components/layout';
import { Container, Row, Col } from 'reactstrap';
export const line = ({props}) => {
  return (
    <Layout>
      <Container>
        <Row style={{paddingTop: '20px' }}>
          <Col sm="12">
            <h4>Line Messaging API</h4>
            <hr />

            <p>Please add friend by QR Code.</p>

            <img src="/static/img/line_qrcode.png" alt='' style={{maxWidth: '180px', height: 'auto'}}/>

            <hr />
              <p>This bot design as sample project to echo a sent message return to user.</p>
              <p>I have deploy bot on server 'heroku'</p>
              <p>Source code is publish on: <a href='https://github.com/teeraysi/mini-project-chatbot' target='_blank'>https://github.com/teeraysi/mini-project-chatbot</a></p>
            
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default line;
