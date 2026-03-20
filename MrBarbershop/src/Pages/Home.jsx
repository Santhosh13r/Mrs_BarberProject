import React, { useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import HeroImg from "../Images/LandingImg.jpg";
import AboutImg from "../Images/img4.jpg";
import ServiceImg1 from "../Images/Img1mrs.jpg";
import ServiceImg2 from "../Images/Img2mrs.jpg";
import ServiceImg3 from "../Images/Img3mrs.jpg";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const services = [
    {
      title: "Classic Hair Cut",
      text: "Clean and stylish haircuts designed to match your face shape and personality.",
      image: ServiceImg1,
    },
    {
      title: "Beard Trim & Styling",
      text: "Sharp beard lines and trendy beard shaping for a neat gentleman look.",
      image: ServiceImg2,
    },
    {
      title: "Hair Wash & Spa",
      text: "Refreshing hair wash and nourishing spa treatment for healthy hair and scalp.",
      image: ServiceImg3,
    },
  ];

  const packages = [
    {
      title: "Basic Grooming",
      price: "₹299",
      items: ["Hair Cut", "Basic Beard Trim", "Hair Wash"],
    },
    {
      title: "Premium Styling",
      price: "₹599",
      items: ["Hair Cut", "Beard Styling", "Hair Spa", "Face Cleanup"],
    },
    {
      title: "Luxury Makeover",
      price: "₹999",
      items: ["Premium Hair Cut", "Advanced Beard Design", "Facial", "Head Massage"],
    },
  ];

  const testimonials = [
    {
      name: "Arun",
      review:
        "Best barber shop experience I had. The haircut was perfect and the staff were very friendly.",
    },
    {
      name: "Vijay",
      review:
        "Very clean shop, modern style, and excellent beard trimming service. Highly recommended.",
    },
    {
      name: "Rahul",
      review:
        "I loved the premium grooming package. The haircut and facial were both excellent.",
    },
  ];

  return (
    <>
      <Navbar expand="lg" className="custom-navbar sticky-top">
        <Container>
          <Navbar.Brand href="#home" className="brand-logo">
            MisterBarber
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     {/* Hero */}
      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} data-aos="fade-right">
              <span className="top-badge">Premium Men’s Grooming Salon</span>
              <h1 className="hero-title">
                Look Sharp, Feel Confident, <br /> Stay Stylish
              </h1>
              <p className="hero-text">
                Welcome to MisterBarber, your one-stop destination for modern
                haircuts, beard styling, hair spa, facial care, and premium
                grooming experiences. We blend classic barber traditions with
                modern styling techniques to create the perfect look for every man.
              </p>
              <div className="hero-buttons">
                <Button variant="warning" className="me-3 px-4 py-2">
                  Book Now
                </Button>
                <Button variant="outline-light" className="px-4 py-2">
                  Explore Services
                </Button>
              </div>
            </Col>

            <Col lg={6} className="text-center mt-4 mt-lg-0" data-aos="fade-left">
              <img src={HeroImg} alt="Barber Hero" className="hero-image img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="about-section section-gap">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="zoom-in">
              <img src={AboutImg} alt="About MisterBarber" className="about-image img-fluid" />
            </Col>
            <Col lg={6} data-aos="fade-up">
              <h2 className="section-title">About MisterBarber</h2>
              <p className="section-text">
                MisterBarber is more than just a barber shop. It is a place
                where style, confidence, and grooming come together. Our barbers
                are trained to deliver precision haircuts, trendy beard styling,
                scalp treatments, and skin care services in a comfortable and
                hygienic environment.
              </p>
              <p className="section-text">
                Whether you need a quick trim, a stylish makeover, or a complete
                grooming session, we are committed to providing top-quality
                service with premium care and attention.
              </p>
              <Button variant="warning">Read More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="why-section section-gap">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              We provide high-quality grooming services with comfort and professionalism
            </p>
          </div>

          <Row>
            <Col md={4} data-aos="fade-up">
              <Card className="feature-card text-center">
                <Card.Body>
                  <div className="feature-icon">✂️</div>
                  <h4>Expert Barbers</h4>
                  <p>
                    Our skilled professionals understand modern trends and classic
                    haircut styles for all age groups.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <Card className="feature-card text-center">
                <Card.Body>
                  <div className="feature-icon">🧼</div>
                  <h4>Clean & Hygienic</h4>
                  <p>
                    We maintain a fresh, safe, and clean environment with quality
                    tools and premium products.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <Card className="feature-card text-center">
                <Card.Body>
                  <div className="feature-icon">⭐</div>
                  <h4>Customer Satisfaction</h4>
                  <p>
                    Every service is designed to make you feel confident, stylish,
                    and completely satisfied.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats */}
      <section className="stats-section section-gap">
        <Container>
          <Row className="text-center">
            <Col md={3} col={6} data-aos="zoom-in">
              <h2>10+</h2>
              <p>Years Experience</p>
            </Col>
            <Col md={3} col={6} data-aos="zoom-in" data-aos-delay="100">
              <h2>5000+</h2>
              <p>Happy Clients</p>
            </Col>
            <Col md={3} col={6} data-aos="zoom-in" data-aos-delay="200">
              <h2>15+</h2>
              <p>Professional Services</p>
            </Col>
            <Col md={3} col={6} data-aos="zoom-in" data-aos-delay="300">
              <h2>4.9★</h2>
              <p>Customer Rating</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="services-section section-gap">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Premium grooming services tailored for every gentleman
            </p>
          </div>

          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index} data-aos="flip-left">
                <Card className="service-card h-100">
                  <Card.Img variant="top" src={service.image} className="service-img" />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.text}</Card.Text>
                    <Button variant="warning" size="sm">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Work Process */}
      <section className="process-section section-gap">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Our Working Process</h2>
          </div>
          <Row>
            <Col md={3} data-aos="fade-up">
              <div className="process-box">
                <span>01</span>
                <h5>Book Appointment</h5>
                <p>Select your preferred service and schedule your visit easily.</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="100">
              <div className="process-box">
                <span>02</span>
                <h5>Consultation</h5>
                <p>Discuss your hairstyle or beard style with our expert barber.</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="200">
              <div className="process-box">
                <span>03</span>
                <h5>Grooming Service</h5>
                <p>Enjoy professional grooming with top-quality products.</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="300">
              <div className="process-box">
                <span>04</span>
                <h5>Final Styling</h5>
                <p>Get the perfect finishing touch and step out with confidence.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Packages */}
      <section id="packages" className="packages-section section-gap">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Grooming Packages</h2>
            <p className="section-subtitle">
              Affordable and premium packages for every style
            </p>
          </div>
          <Row>
            {packages.map((pack, index) => (
              <Col lg={4} md={6} className="mb-4" key={index} data-aos="zoom-in">
                <Card className="package-card text-center h-100">
                  <Card.Body>
                    <h3>{pack.title}</h3>
                    <h2 className="price">{pack.price}</h2>
                    <ul className="package-list">
                      {pack.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <Button variant="warning">Choose Plan</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonial-section section-gap">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <Row>
            {testimonials.map((item, index) => (
              <Col lg={4} md={6} className="mb-4" key={index} data-aos="fade-up">
                <Card className="testimonial-card h-100">
                  <Card.Body>
                    <p>"{item.review}"</p>
                    <h5>- {item.name}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section section-gap">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="zoom-in">
              <h2>Ready for a Fresh New Look?</h2>
              <p>
                Visit MisterBarber today and enjoy premium grooming services
                from experienced professionals.
              </p>
              <Button variant="warning" size="lg">
                Book Your Appointment
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section section-gap">
        <Container>
          <Row>
            <Col md={6} data-aos="fade-right">
              <h2 className="section-title">Contact Us</h2>
              <p className="section-text">
                We are here to help you get the best look. Reach out to us for
                bookings, service details, or general inquiries.
              </p>
              <p>📍 Salem, Tamil Nadu</p>
              <p>📞 +91 98765 43210</p>
              <p>📧 info@misterbarber.com</p>
            </Col>
            <Col md={6} data-aos="fade-left">
              <div className="contact-box">
                <h4>Opening Hours</h4>
                <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                <Button variant="warning">Get Direction</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer-section text-center">
        <Container>
          <p className="mb-0">© 2026 MisterBarber. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default App;