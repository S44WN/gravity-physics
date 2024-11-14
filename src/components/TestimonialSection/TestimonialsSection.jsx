import { useEffect } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Amit Kumar",
    college: "IIT Bombay",
    testimonial:
      "Gravity Physics is simply the best for NEET and JEE prep! Er. Sanjay Kumar's guidance helped me excel in concepts and problem-solving. His teaching methods are unique and effective, making complex topics easy to understand. The personalized attention and support provided by the institute are unparalleled. I highly recommend Gravity Physics to any student serious about excelling in Physics and achieving their academic goals.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Neha Singh",
    college: "AIIMS Delhi",
    testimonial:
      "Er. Sanjay Kumar’s unique teaching methods made Physics easy and fun. His dedication to each student is inspiring, and he always goes the extra mile to ensure we understand the concepts thoroughly. The interactive sessions and practical examples he uses are incredibly helpful. Gravity Physics is a must for aspiring medical students who want to master Physics and excel in their exams.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Rohit Raj",
    college: "IIT Kharagpur",
    testimonial:
      "Joining Gravity Physics was the best decision I made for my JEE prep. Er. Sanjay Kumar’s coaching covers every concept with clarity and depth. The regular tests and feedback sessions helped me identify my weaknesses and improve steadily. The supportive environment and excellent study materials provided by Gravity Physics make it an outstanding institute for IIT-JEE preparation.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Priya Das",
    college: "AIIMS Patna",
    testimonial:
      "Gravity Physics made NEET preparation smooth and efficient. Er. Sanjay's teaching style is thorough, and he always motivates us to achieve more. The structured curriculum and regular practice sessions helped me build a strong foundation in Physics. I highly recommend this coaching to anyone looking to excel in NEET and secure a seat in a prestigious medical college.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Vivek Sharma",
    college: "IIT Kanpur",
    testimonial:
      "Gravity Physics changed my perspective on Physics! Er. Sanjay Kumar simplifies complex topics and encourages a deep understanding. The problem-solving techniques and strategies he teaches are invaluable. The institute's focus on fundamentals and consistent practice helped me achieve excellent results in my exams. A great place for IIT-JEE coaching in Patna.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Sakshi Gupta",
    college: "AIIMS Bhopal",
    testimonial:
      "Thanks to Gravity Physics, my NEET scores were exceptional! Er. Sanjay Kumar’s coaching made all the difference. His methods help you master even the toughest concepts easily. The supportive and motivating environment at Gravity Physics kept me focused and driven throughout my preparation. I highly recommend this institute to all NEET aspirants.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Karan Verma",
    college: "IIT Madras",
    testimonial:
      "Er. Sanjay Kumar is a mentor every IIT aspirant needs. Gravity Physics focuses on fundamentals and practice, making it the best coaching for serious JEE aspirants in Patna. The comprehensive study materials and regular assessments helped me stay on track and improve consistently. I am grateful for the guidance and support I received at Gravity Physics.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Anjali Roy",
    college: "AIIMS Raipur",
    testimonial:
      "Gravity Physics is exceptional! Er. Sanjay Kumar's coaching for NEET Physics is thorough, and he’s always willing to help. The interactive classes and practical approach to teaching made learning enjoyable and effective. I improved greatly with his guidance and was able to achieve my dream of getting into AIIMS. Highly recommended!",
  },
  {
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Abhishek Singh",
    college: "IIT Delhi",
    testimonial:
      "Gravity Physics builds a strong foundation for IIT-JEE Physics. Er. Sanjay Kumar’s classes are engaging, and he explains concepts in a way that’s easy to understand. The regular practice sessions and doubt-clearing classes were extremely helpful. A fantastic experience that played a crucial role in my success. I highly recommend Gravity Physics to all IIT aspirants.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Megha Tiwari",
    college: "AIIMS Nagpur",
    testimonial:
      "The best place for NEET Physics coaching! Er. Sanjay Kumar’s detailed explanations and dedication made learning easy and effective. The regular tests and personalized feedback helped me improve steadily. Gravity Physics is truly outstanding, and I am grateful for the support and guidance I received. Highly recommended for anyone serious about NEET preparation.",
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    // Animate the entire section
  }, []);

  return (
    <div id="page4">
      <div className="swiper mySwiper container">
        <div className="testimonials-head">
          <h1 className="testimonials">testimonials</h1>
          <p>
            Hear what our students have to say about their experience with
            Gravity Physics.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={(swiper) => {
            const activeSlide = swiper.slides[swiper.activeIndex];
            if (activeSlide) {
              gsap.from(activeSlide, {
                opacity: 0,
                scale: 0.9,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className="slide-img">
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>
                <div className="slide-head">
                  <h2>{testimonial.name}</h2>
                  <h5>{testimonial.college}</h5>
                </div>
                <p>{testimonial.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;
