import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const privacySections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          subtitle: 'A. Personal Data You Provide',
          items: [
            <>When you create an account on SceneZone, we collect the following personal information:</>,
            <><strong>Name:</strong> To identify you in the app.</>,
            <><strong>Email Address:</strong> To communicate with you and manage your account.</>,
            <><strong>Phone Number:</strong> To verify your account via One-Time Password (OTP).</>,
            <><strong>Profile Picture:</strong> To personalize your user profile.</>,
            <><strong>Date of Birth:</strong> For age verification and to ensure compliance with our policies.</>,
          ],
        },
        {
          subtitle: 'B. Event-Related Information',
          items: [
            <><strong>Events:</strong> Information on events you create, book, or attend.</>,
            <><strong>Profiles:</strong> Host or Artist profile descriptions and content.</>,
            <><strong>Feedback:</strong> Reviews and ratings you provide.</>,
          ],
        },
        {
          subtitle: 'C. Data Collected Through Permissions',
          items: [
            <>To make SceneZone functional, we request access to certain features on your device for the specific purposes described:</>,
            <><strong>Internet:</strong> Required to communicate with our servers to fetch data, load content, and enable all online features, including processing transactions.</>,
            <><strong>Camera:</strong> To allow users (hosts, artists) to take a new photo or record a new video for their profile or event content.</>,
            <><strong>Media and Storage:</strong> To allow users to select and upload pre-existing photos or videos from their device’s gallery.</>,
            <><strong>Storage:</strong> To securely save necessary application data on your device, such as your account authentication token or cached data.</>,
            <><strong>Location:</strong> To provide location-based features, such as showing you events near your current location and sorting events by proximity.</>,
          ],
        },
        {
          subtitle: 'D. Usage Data',
          items: [
            <>We may collect information automatically when you access the Service, including:</>,
            <><strong>Log Information:</strong> Your IP address, access times, and server logs.</>,
            <><strong>Device Information:</strong> The type of mobile device you use, your device’s unique ID, your mobile operating system, and mobile network information.</>,
            <><strong>App Usage Information:</strong> How you interact with our Service, such as features you use, pages you view, and crash reports. We use this to monitor for errors and improve stability.</>,
          ],
        },
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          items: [
            <>Facilitating account creation and user management.</>,
            <>Enabling event creation, booking, discovery, and management.</>,
            <>Personalizing the app experience (e.g., recommending nearby events).</>,
            <>Communicating with you about bookings, updates, or support requests.</>,
            <>Processing payments for event tickets or services.</>,
            <>Analyzing usage trends to improve app performance and stability.</>,
            <>Preventing fraudulent or unauthorized activity and ensuring security.</>,
          ],
        },
      ],
    },
    {
      title: '3. Sharing and Third-Party Services',
      content: [
        {
          items: [
            <>We do not sell your personal data. We may share your information only in the following ways:</>,
            <><strong>Event Hosts/Organizers:</strong> When you register or book their events, we share necessary details (like your name) with them.</>,
            <><strong>Legal Authorities:</strong> If required by law or to protect SceneZone’s rights or user safety.</>,
            <><strong>Service Providers:</strong> We use third-party services to facilitate our Service. They have access to your data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</>,
          ],
        },
        {
          subtitle: 'Our Key Service Providers:',
          items: [
            <><strong>Amazon Web Services (AWS):</strong> Our backend and database are hosted on AWS. All data transmitted to our servers is handled securely by AWS.</>,
            <><strong>Firebase:</strong> We use Firebase for handling phone number verification (OTP) and for sending push notifications.</>,
            <><strong>Razorpay:</strong> We use Razorpay to process payments. You provide payment information directly to Razorpay. We do not store your full financial details.</>,
            <><strong>MongoDB Atlas:</strong> Our database is managed by MongoDB Atlas, which encrypts user data at rest.</>,
          ],
        },
      ],
    },
    {
      title: '4. Data Security',
      content: [
        {
          items: [
            <>The security of your data is important to us. We use industry-standard security measures to protect your information:</>,
            <>All data transferred between your device and our servers is encrypted in transit using Secure Socket Layer (SSL) / HTTPS protocol.</>,
            <>Sensitive data stored in our database (hosted on MongoDB Atlas) is encrypted at rest.</>,
            <>While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet or electronic storage is 100% secure.</>,
          ],
        },
      ],
    },
    {
      title: '5. Your Data Rights and Deletion',
      content: [
        {
          items: [
            <>You have the right to access, update, or request the deletion of your personal information at any time.</>,
            <>If you wish to delete your SceneZone account and all associated personal data, you may do so in two ways:</>,
            <><strong>In-App:</strong> Navigate to the "Profile" section within the SceneZone app and select the "Delete Account" option.</>,
            <>
              <strong>Web Request:</strong> You can request account and data deletion by visiting our{" "}
              <Link to="/delete" className="text-pink-400 hover:underline">
                Account Deletion Page
              </Link>
              .
            </>,
            <>Once a deletion request is verified, we will permanently delete your personal data (name, email, phone, etc.) from our systems, except where we are required to retain certain information for legal or regulatory purposes (e.g., financial transaction records).</>,
          ],
        },
      ],
    },
    {
      title: '6. Children’s Privacy',
      content: [
        {
          items: [
            <>Our Service is not intended for or directed at anyone under the age of 18 ("Children").</>,
            <>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data (for example, by misrepresenting their age), please contact us immediately.</>,
            <>If we become aware that we have inadvertently collected Personal Data from a child under 18, we will take steps to delete that information from our servers as quickly as possible.</>,
          ],
        },
      ],
    },
    {
      title: '7. Third-Party Links',
      content: [
        {
          items: [
            <>The App may contain links to third-party services (e.g., ticketing partners or social media). We are not responsible for the privacy practices or content of those services.</>,
          ],
        },
      ],
    },
    {
      title: '8. Changes to This Privacy Policy',
      content: [
        {
          items: [
            <>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new PrivacyPolicy on this page and updating the "Last Updated" date at the top.</>,
            <>You are advised to review this Privacy Policy periodically for any changes. Changes are effective when they are posted on this page.</>,
          ],
        },
      ],
    },
    {
      title: '9. Contact Us',
      content: [
        {
          items: [
            <>If you have any questions about this Privacy Policy, please contact us:</>,
            <><strong>Gigvala Technologies LLP</strong></>,
            <><strong>By email:</strong> admin@thescenezone.com</>,
          ],
        },
      ],
    },
  ];

  const termsSections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        {
          items: [
            <>By creating an account or using the SceneZone app, you confirm that you:</>,
            <>Are at least 18 years of age</>,
            <>Have read, understood, and agree to comply with these Terms</>,
            <>If you do not agree, you must not use this App.</>,
          ],
        },
      ],
    },
    {
      title: '2. User Roles & Responsibilities',
      content: [
        {
          items: [
            <>SceneZone caters to the following users:</>,
            <><strong>Event Managers/Organizers:</strong> Can create, edit, and manage events.</>,
            <><strong>Hosts/Artists:</strong> Can be listed, booked, and promoted.</>,
            <><strong>General Users:</strong> Can explore, book, and attend events.</>,
            <>Each user is responsible for the accuracy of their information and account activities.</>,
          ],
        },
      ],
    },
    {
      title: '3. Account Registration & Security',
      content: [
        {
          items: [
            <>You must provide accurate and complete information.</>,
            <>You are responsible for maintaining the confidentiality of your login credentials.</>,
            <>SceneZone is not liable for any unauthorized access due to user negligence.</>,
          ],
        },
      ],
    },
    {
      title: '4. Event Creation and Booking',
      content: [
        {
          items: [
            <>Event organizers must ensure the accuracy of event details.</>,
            <>SceneZone is not responsible for event cancellations, changes, or refunds unless stated.</>,
            <>Bookings made through the App are subject to the organizer’s terms.</>,
          ],
        },
      ],
    },
    {
      title: '5. Content Guidelines',
      content: [
        {
          items: [
            <>Users may upload content. You agree not to post:</>,
            <>False, misleading, or harmful content</>,
            <>Inappropriate, abusive, or illegal material</>,
            <>Content that infringes on the rights of others (e.g., copyright)</>,
            <>We reserve the right to remove content or suspend accounts that violate these guidelines.</>,
          ],
        },
      ],
    },
    {
      title: '6. Fees and Payments',
      content: [
        {
          items: [
            <>Some events or features may require payment.</>,
            <>Payment gateways are third-party services; SceneZone is not responsible for payment failures or disputes.</>,
            <>Any fees will be disclosed clearly within the App.</>,
          ],
        },
      ],
    },
    {
      title: '7. Intellectual Property',
      content: [
        {
          items: [
            <>All trademarks, logos, and content in the app belong to SceneZone (Gigvala Technologies LLP) or its licensors.</>,
            <>You may not copy, modify, distribute, or reverse-engineer any part of the App without permission.</>,
          ],
        },
      ],
    },
    {
      title: '8. Termination',
      content: [
        {
          items: [
            <>SceneZone reserves the right to suspend or terminate your access for violation of these Terms.</>,
            <>We may remove any content deemed inappropriate or harmful.</>,
            <>You may delete your account at any time (see Privacy Policy for details).</>,
          ],
        },
      ],
    },
    {
      title: '9. Limitation of Liability',
      content: [
        {
          items: [
            <>SceneZone is provided "as-is". We do not guarantee availability, accuracy, or that the App will be error-free.</>,
            <>We are not liable for any direct or indirect loss or damage from your use of the App or disputes between users.</>,
          ],
        },
      ],
    },
    {
      title: '10. Privacy',
      content: [
        {
          items: [
            <>Your privacy is important. Please refer to our <strong>Privacy Policy</strong> (above) for details on how we collect and use your personal information.</>,
          ],
        },
      ],
    },
    {
      title: '11. Changes to Terms',
      content: [
        {
          items: [
            <>We may revise these Terms at any time. We will notify you of significant updates. Continued use of the App constitutes acceptance of the updated Terms.</>,
          ],
        },
      ],
    },
    {
      title: '12. Contact Us',
      content: [
        {
          items: [
            <>If you have any questions about these Terms, please contact us:</>,
            <><strong>SceneZone Support Team (Gigvala Technologies LLP)</strong></>,
            <>📧 <strong>Email:</strong> admin@thescenezone.com</>,
          ],
        },
      ],
    },
  ];

  // --- JSX Rendering ---

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Privacy Policy Section */}
      <section className="py-24 relative bg-cover bg-center" data-aos="fade-in">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              <strong>Gigvala Technologies LLP</strong> ("we," "us," "our") operates the <strong>SceneZone</strong> mobile application (the "Service").
              This page explains our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              <br /><br />
              By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
            <p className="text-white/70 text-sm mt-4">Last Updated: 15th November 2025</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {privacySections.map((section, index) => (
              <div
                key={index}
                className="rounded-xl p-8 bg-black border border-purple-500/30 hover:shadow-lg hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={`${(index % 2) * 100 + 100}`}
              >
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex} className="mb-4">
                    {subsection.subtitle && (
                      <h3 className="text-lg font-semibold text-white mb-3">{subsection.subtitle}</h3>
                    )}
                    <ul className="space-y-2">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start" data-aos="fade-up" data-aos-delay={`${itemIndex * 50}`}>
                          <span className="text-green-400 mr-2 mt-1">✔</span>
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

      {/* Terms and Conditions Section */}
      <section className="py-24 bg-gradient-to-r from-purple-800 to-pink-800" data-aos="fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Terms and Conditions
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Welcome to SceneZone. These Terms and Conditions ("Terms") govern your use of the SceneZone mobile application and services. By downloading or using SceneZone, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {termsSections.map((section, index) => (
              <div
                key={index}
                className="rounded-xl p-8 bg-black border border-purple-500/30 hover:shadow-lg hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={`${(index % 2) * 100 + 100}`}
              >
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex} className="mb-4">
                    <ul className="space-y-2">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start" data-aos="fade-up" data-aos-delay={`${itemIndex * 50}`}>
                          <span className="text-green-400 mr-2 mt-1">✔</span>
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
      
      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-white/60 text-sm">
          <p>© 2025 Gigvala Technologies LLP. All rights reserved.</p>
          <p className="mt-2">For questions, contact us at admin@thescenezone.com</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;