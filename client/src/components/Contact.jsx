import React from 'react';
import {Container, Row, Col, Table, Image} from 'react-bootstrap';
import {BiPhoneCall} from 'react-icons/bi';
import {ImMobile} from 'react-icons/im';
import {MdEmail} from 'react-icons/md';

const Contact = () => {
  return (
    <>
        <Container className='mt-5'>
            <Row>
                <Col md={6}>
                    <h1>Online Pizza Shop</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                    <Table striped bordered hover className='text-center'>
                        <thead>
                            <tr>
                                <th className='bg-warning text-center' colSpan={3}>---- Contact Details ----</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><BiPhoneCall /></td>
                                <td>Phone</td>
                                <td>0123-456789</td>
                            </tr>

                            <tr>
                                <td><ImMobile /></td>
                                <td>Call</td>
                                <td>1234567890</td>
                            </tr>

                            <tr>
                                <td><MdEmail /></td>
                                <td>Email</td>
                                <td>help@pizzashop.com</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

                <Col md={6}>
                    <Image src='images/farmhouse.jpg' style={{height: '100%', width: '100%'}}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact