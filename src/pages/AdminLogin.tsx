import React, { useEffect, useRef } from 'react';
import { useSpring, motion, MotionValue } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Type for cursor styles to match React.CSSProperties
interface CursorStyles extends React.CSSProperties {
  width: number | string;
  height: number | string;
  background: string;
  borderRadius: string;
  position: 'absolute';
  pointerEvents: 'none';
  zIndex: number;
}

// Spring configuration for smooth cursor animation
const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

// Styles for the animated cursor
const cursor: CursorStyles = {
  width: 50,
  height: 50,
  background: "radial-gradient(circle, rgba(147, 51, 234, 0.8), rgba(236, 72, 153, 0.4))",
  borderRadius: "50%",
  position: "absolute",
  pointerEvents: "none",
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

const AdminLogin: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(cursorRef);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admin login submitted');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden p-4">
      <motion.div
        ref={cursorRef}
        style={{
          ...cursor,
          x: x as MotionValue<number>, // Explicitly type x as MotionValue<number>
          y: y as MotionValue<number>, // Explicitly type y as MotionValue<number>
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div
        className="relative z-10 max-w-md w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/30 transition-all duration-500"
        data-aos="zoom-in"
      >
        <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Admin Login
          </h1>
          <p className="text-gray-400 text-sm">
            Access the admin dashboard to manage events and users
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div data-aos="fade-up" data-aos-delay="200">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              required
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              required
            />
          </div>

          <div className="text-right" data-aos="fade-up" data-aos-delay="400">
            <a
              href="#"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900/50 text-gray-400">Or</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            Contact support at{' '}
            <a
              href="mailto:support@scenezone.in"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              support@scenezone.in
            </a>{' '}
            for access issues
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;