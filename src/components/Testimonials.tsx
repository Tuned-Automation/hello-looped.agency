'use client'

import { useState } from 'react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "Marketing Director",
      content: "Looped transformed our social media presence completely. Within 3 months, our engagement increased by 300% and we saw a significant boost in brand awareness. Their strategic approach is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Fashion Forward",
      role: "Brand Manager",
      content: "Working with Looped has been a game-changer for our fashion brand. They understand our aesthetic perfectly and have helped us build a loyal community of 50K+ followers who actually convert to customers.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Local Eats",
      role: "Restaurant Owner",
      content: "As a small business owner, I was skeptical about social media marketing. Looped not only proved me wrong but also helped increase our foot traffic by 40% through their targeted campaigns.",
      rating: 5
    },
    {
      name: "David Park",
      company: "FitLife Gym",
      role: "CEO",
      content: "The team at Looped doesn&apos;sjust create content; they create experiences. Our gym&apos;ssocial media now tells compelling stories that motivate and inspire our community every single day.",
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;sjust take our word for it. Here&apos;swhat our clients have to say about working with Looped.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 