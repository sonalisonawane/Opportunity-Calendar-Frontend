import React from 'react';
import styles from '../../../CSS/Banner.module.css';
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';
import BannerImage from '../../../Assets/banner.gif';

function Banner() {
  return (
    <Jumbotron id="home" className={styles.Jumbotron} fluid>
      <Container className={styles.Container}>
        <Row className={styles.BannerRow}>
          <Col md={6} lg={6} className={styles.leftCol}>
            <h1 className={styles.Heading}>
              Opportunity
              <br></br>
              <span style={{ color: '#008dc8' }}> Calendar </span>
            </h1>
            <div className={styles.Rectangle} />
            <div>
              <Image
                className={styles.BannerImage2}
                src={BannerImage}
                alt="BannerImage"
                fluid
              />
            </div>
            <h2 className={styles.TagLine}>
              Know right opportunities
              <br></br>
              at the right time!
            </h2>
            <a data-testid="explore-btn" href="/viewopportunity/fulltime">
              <button className={styles.Button}>Explore</button>
            </a>
          </Col>
          <Col md={6} lg={6} className={styles.rightCol}>
            <Image
              className={styles.BannerImage}
              src={BannerImage}
              alt="BannerImage"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Banner;
