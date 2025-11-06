import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TermsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Terms and Conditions Section */}
      <section className="py-24 bg-gradient-to-r from-purple-700 to-pink-700" data-aos="fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="">
                Terms and Conditions 
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Welcome to SceneZone, a mobile application designed to help users explore, create, and manage events. These Terms and Conditions ("Terms") govern your use of the SceneZone mobile application and services (referred to collectively as the "App" or "Platform"). By downloading or using SceneZone, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "1. Acceptance of Terms",
                content: [
                  {
                    items: [
                      "By creating an account or using the SceneZone app, you confirm that you:",
                      "Are at least 18 years of age (or the age of digital consent in your country)",
                      "Have read, understood, and agree to comply with these Terms",
                      "If you do not agree, you must not use this App.",
                    ],
                  },
                ],
              },
              {
                title: "2. User Roles & Responsibilities",
                content: [
                  {
                    items: [
                      "SceneZone caters to the following users:",
                      "Event Managers/Organizers: Can create, edit, and manage events.",
                      "Hosts/Artists: Can be listed, booked, and promoted through the platform.",
                      "General Users: Can explore, book, and attend events.",
                      "Each user is responsible for the accuracy of the information they provide and for the activities carried out under their account.",
                    ],
                  },
                ],
              },
              {
                title: "3. Account Registration & Security",
                content: [
                  {
                    items: [
                      "You must provide accurate and complete information during account creation.",
                      "You are responsible for maintaining the confidentiality of your login credentials.",
                      "SceneZone is not liable for any unauthorized access due to user negligence.",
                    ],
                  },
                ],
              },
              {
                title: "4. Event Creation and Booking",
                content: [
                  {
                    items: [
                      "Event organizers must ensure the accuracy of event details, including location, time, and pricing.",
                      "SceneZone is not responsible for event cancellations, changes, or refunds unless otherwise stated.",
                      "Bookings made through the App are subject to the organizer’s terms.",
                    ],
                  },
                ],
              },
              {
                title: "5. Content Guidelines",
                content: [
                  {
                    items: [
                      "Users may upload content (event descriptions, images, artist portfolios, etc.). You agree not to post:",
                      "False, misleading, or harmful content",
                      "Inappropriate, abusive, or illegal material",
                      "Content that infringes on the rights of others (e.g., copyright)",
                      "We reserve the right to remove content or suspend accounts that violate these guidelines.",
                    ],
                  },
                ],
              },
              {
                title: "6. Fees and Payments",
                content: [
                  {
                    items: [
                      "Some events or features on SceneZone may require payment.",
                      "Payment gateways used are third-party services and SceneZone is not responsible for payment failures or disputes.",
                      "Any fees for premium services will be disclosed clearly within the App.",
                    ],
                  },
                ],
              },
              {
                title: "7. Intellectual Property",
                content: [
                  {
                    items: [
                      'All trademarks, logos, and content in the app belong to SceneZone or its licensors.',
                      "You may not copy, modify, distribute, or reverse-engineer any part of the App without permission.",
                    ],
                  },
                ],
              },
              {
                title: "8. Termination",
                content: [
                  {
                    items: [
                      "SceneZone reserves the right to:",
                      "Suspend or terminate your access for violation of these Terms",
                      "Remove any content deemed inappropriate or harmful",
                      "You may delete your account at any time by contacting us.",
                    ],
                  },
                ],
              },
              {
                title: "9. Limitation of Liability",
                content: [
                  {
                    items: [
                      'SceneZone is provided "as-is" and we do not guarantee:',
                      "The availability, accuracy, or reliability of the App at all times",
                      "That the App will be error-free or uninterrupted",
                      "We are not liable for:",
                      "Any direct or indirect loss or damage resulting from your use of the App",
                      "Any disputes between users, event organizers, or third parties",
                    ],
                  },
                ],
              },
              {
                title: "10. Privacy",
                content: [
                  {
                    items: [
                      "Your privacy is important to us. Please refer to our Privacy Policy for details on how we collect and use your personal information.",
                    ],
                  },
                ],
              },
              {
                title: "11. Changes to Terms",
                content: [
                  {
                    items: [
                      "We may revise these Terms at any time. We will notify you of significant updates via in-app alerts or emails. Continued use of the App constitutes acceptance of the updated Terms.",
                    ],
                  },
                ],
              },
              {
                title: "12. Contact Us",
                content: [
                  {
                    items: [
                      "If you have any questions about these Terms, please contact us:",
                      "SceneZone Support Team",
                      "📧 Email: thescenezoneofficial@gmail.com",
                    ],
                  },
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="rounded-xl p-8 bg-black border border-purple-500/30 hover:shadow-lg hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex} className="mb-4">
                    <ul className="space-y-2">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start" data-aos="fade-up" data-aos-delay={`${itemIndex * 100}`}>
                          <span className="text-green-400 mr-2">✔</span>
                          <p className="text-gray-300 text-sm">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;