'use client'

import { useState } from 'react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly will I see results from social media marketing?",
      answer: "While every business is different, most of our clients start seeing increased engagement within the first 2-4 weeks. Significant growth in followers and brand awareness typically occurs within 2-3 months of consistent, strategic posting and community engagement."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "We work with businesses across all industries including technology, fashion, food & beverage, fitness, healthcare, and more. Our team adapts strategies to fit your specific industry requirements and target audience behavior patterns."
    },
    {
      question: "What social media platforms do you manage?",
      answer: "We manage all major social media platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest, and YouTube. We'll recommend the best platforms for your business based on your target audience and industry."
    },
    {
      question: "How do you measure success and ROI?",
      answer: "We track comprehensive metrics including engagement rates, follower growth, website traffic from social media, lead generation, and conversion rates. You'll receive detailed monthly reports showing your progress and ROI."
    },
    {
      question: "Can I see the content before it's posted?",
      answer: "Absolutely! We provide content calendars and approval processes. You can review and approve all content before it goes live, or you can trust our team with pre-approved brand guidelines for faster posting."
    },
    {
      question: "What's included in community management?",
      answer: "Community management includes responding to comments and DMs, engaging with your audience, monitoring brand mentions, managing customer service inquiries, and fostering positive community discussions around your brand."
    },
    {
      question: "Do you provide social media advertising services?",
      answer: "Yes! Our Professional and Enterprise plans include paid social media advertising. We create, manage, and optimize ad campaigns across platforms to maximize your reach and conversions while staying within your budget."
    },
    {
      question: "What if I want to cancel my subscription?",
      answer: "We offer flexible month-to-month contracts with no long-term commitments. You can cancel anytime with 30 days' notice. We're confident in our results and don't believe in locking clients into contracts they don't want."
    }
  ]

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about our social media marketing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  )
} 