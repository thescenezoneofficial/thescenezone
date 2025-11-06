import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Music, Users, Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import whatsapp from "@/assets/icons/whatsapp.png";
import instagram from "@/assets/icons/instagram.png";
import { useSpring, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Spring configuration for smooth cursor animation
const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

// Styles for the animated cursor
const cursor = {
  width: 50,
  height: 50,
  background: "radial-gradient(circle, rgba(147, 51, 234, 0.8), rgba(236, 72, 153, 0.4))",
  borderRadius: "50%",
  position: "absolute" as const,
  pointerEvents: "none" as const,
  zIndex: 9999,
};

// Reusable hook to follow mouse pointer
const useFollowPointer = (ref: React.RefObject<HTMLDivElement>) => {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      x.set(clientX - element.offsetWidth / 2);
      y.set(clientY - element.offsetHeight / 2 + window.scrollY);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, x, y]);

  return { x, y };
};

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    userType: '',
    subject: '',
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const cursorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(cursorRef);

  const supportOptions = [
    {
      icon: Calendar,
      title: "Host Support",
      description: "Need help managing events, sending invites, or managing your bookings?",
      features: [
        "Event creation assistance",
        "Artist hiring guidance", 
        "Pricing consultations"
      ],
      buttonText: "Contact Host Support",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Music,
      title: "Artist Support", 
      description: "Questions about joining, bookmarking, editing dates, or profile optimization?",
      features: [
        "Profile setup help",
        "Event protection tips",
        "Payment inquiries"
      ],
      buttonText: "Contact Artist Support",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Users,
      title: "User Support",
      description: "Need help with booking events, refunds, or event information?",
      features: [
        "Ticket booking help",
        "Refund processing",
        "Event recommendations"
      ],
      buttonText: "Contact User Support", 
      color: "from-pink-600 to-red-600"
    }
  ];

  const faqs = [
    {
      question: "How Do I Create An Event As A Host?",
      answer: "Sign Up As A Host, Complete Your Profile, And Use Our Event With Details, Pricing, And Artist Requirements."
    },
    {
      question: "What Steps Should I Follow To Host An Event?",
      answer: "To Become A Host Register On Our Platform, Fill Out Your Profile, Add Review The Event Details, Pricing, And Artist Requirements For Artists."
    },
    {
      question: "What Are The Steps To Create An Event As A Host?",
      answer: "First, Sign Up As A Host, Complete Your Profile, And Then Set Up Your Event With All The Necessary Details, Pricing, And Artist Requirements."
    },
    {
      question: "How Can I Set Up An Event As A Host?",
      answer: "Begin By Signing Up As A Host, Providing Your Profile, And Then Use Our Platform To Define Your Event, Including Details, Pricing, And Any Artist Needs."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div ref={cursorRef} style={{ ...cursor, x, y }} />
      {/* Get In Touch Section */}
      <section className="py-20 px-6" data-aos="fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether You're A Host, Artist, Or Event-Goer, We're Here To Help You
              Create Amazing Experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
                data-aos="zoom-in"
                data-aos-delay={`${index * 200}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {option.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-gray-300">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full bg-gradient-to-r ${option.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 mt-6`}>
                    {option.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gray-900/50" data-aos="fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Send Us A Message
            </h2>
            <p className="text-gray-400 text-lg">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in" data-aos="fade-up" data-aos-delay="200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">I am a</label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="host">Host</option>
                  <option value="artist">Artist</option>
                  <option value="user">User</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Select a subject"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter Your Full Name"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your inquiry in detail..."
                rows={6}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20" data-aos="fade-in">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-12">
            <p className="text-purple-400 text-sm font-medium tracking-wide uppercase mb-4">
              DON'T JUST SUBSCRIBE
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Book An Event Now, Thrive
              <br />
              On The Zest Of Life
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Ms Jonita Jones", phone: "+91146537038" },
              { name: "Ms Jonita Jones", phone: "+91130904315" },
              { name: "Ms Bell Lizard", phone: "+91824078458" },
            ].map((contact, index) => (
              <div key={index} className="flex flex-col items-center space-y-2" data-aos="zoom-in" data-aos-delay={`${index * 200}`}>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">{contact.name}</p>
                  <a href={`tel:${contact.phone}`} className="font-bold hover:text-purple-400 transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-6" data-aos="fade-up" data-aos-delay="400">
            <a
              href="https://wa.me/+91146537038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img src={whatsapp} alt="WhatsApp" />
              </div>
              <span className="text-sm">WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/scenezone.in?igsh=MTFteDY2c2s2a3d2Mw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r to-purple-500 rounded-full flex items-center justify-center">
                <img src={instagram} alt="Instagram" />
              </div>
              <span className="text-sm">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6" data-aos="fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Quick Answers To Common Questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 animate-fade-in" data-aos="fade-in" data-aos-delay="100">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;