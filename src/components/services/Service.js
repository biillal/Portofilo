import React from 'react'
import './service.css'
import { Col, Container, Row } from 'react-bootstrap'
const servic = [
  {
    icon: <i class="ri-code-s-slash-line"></i>,
    title: "web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem"
  },
  {
    icon: <i class="ri-code-s-slash-line"></i>,
    title: "web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem"
  },
  {
    icon: <i class="ri-code-s-slash-line"></i>,
    title: "web Developper",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem"
  },
  {
    icon: <i class="ri-code-s-slash-line"></i>,
    title: "web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem"
  },
]
export default function Service() {
  return (
    <div id="services" style={{marginTop:"50px"}}>
      <Container>
        <div className='title-services'>
          <h2>Servicess</h2>
          <span className='border-services'>
            <span className='sub-border-ser'></span>
          </span>
        </div>
        <Row style={{marginTop:"30px"}}>

          {
            servic.map((item, index) => {
              return (
                <Col lg="4" md="6" sm="12" style={{marginTop:'25px'}}>
                  <div className='card-services'>
                    <div className='icon-services' key={index}>
                      {item.icon}
                    </div>

                    <h2 className='title-servicess'>{item.title}</h2>
                    <span className='desc-serv'>{item.desc}.
                    </span>
                  </div>
                </Col>
              )
            })
          }

        </Row>
      </Container>
    </div>
  )
}
