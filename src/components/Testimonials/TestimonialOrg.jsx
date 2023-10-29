import { useState, useRef } from 'react';
import style from './Testimonial.module.css';
const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'john-doe.jpg',
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'Pellentesque eget urna sed ex porta mattis.',
      image: 'jane-smith.jpg',
    },
    {
      id: 3,
      author: 'Alice Johnson',
      text: 'Vestibulum non mauris a turpis egestas.',
      image: 'alice-johnson.jpg',
    },
  ];
const TestimonialOrg = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className={style.container}>
      <div
        className={style['testimonial-carousel']}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {testimonials.map((testimonial, index) => (
          <div
            className={style['testimonial']}
            key={testimonial.id}
            style={{ width: `${containerRef.current.offsetWidth}px` }}
          >
            <img
              className="testimonial-image"
              src={testimonial.image}
              alt={testimonial.author}
            />
            <p className={style['testimonial-text']}>{testimonial.text}</p>
            <p className={style['testimonial-author']}>- {testimonial.author}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={prevTestimonial}>Previous</button>
        <button onClick={nextTestimonial}>Next</button>
      </div>
    </div>
  );
};

export default TestimonialOrg;
