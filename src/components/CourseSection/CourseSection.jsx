import "./CourseSection.css";

const CourseSection = () => {
  const courses = [
    {
      title: "IIT-JEE Preparation",
      description:
        "Comprehensive coaching for IIT-JEE with in-depth concept coverage, problem-solving, and exam strategies. Perfect for students aiming to crack JEE Mains and Advanced.",
      img: "assets/images/course/iitjee.jpg",
    },
    {
      title: "NEET Preparation",
      description:
        "Focused NEET coaching covering Physics syllabus extensively. Our program ensures students excel in understanding and applying concepts essential for NEET.",
      img: "assets/images/course/neet.jpg",
    },
    {
      title: "Class 11 & 12 Physics",
      description:
        "Specialized Physics classes for Class 11 and 12, aligned with school curriculum. Ideal for students looking to strengthen their fundamentals and excel academically.",
      img: "assets/images/course/class11_12.jpg",
    },
  ];

  return (
    <div className="courses" id="courses">
      <section className="course-section container">
        <div className="course-section-head">
          <h2 className="course-section-title">our courses</h2>
          <p className="course-section-description">
            Choose from our specialized courses designed to help you achieve
            your academic goals.
          </p>
        </div>
        <div className="courses-container">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img
                src={course.img}
                alt={course.title}
                className="course-image"
              />
              <div className="course-overlay">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseSection;
