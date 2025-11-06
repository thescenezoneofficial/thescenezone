import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Music, User, X } from "lucide-react";

const RoleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-black rounded-3xl p-8 w-[90%] max-w-sm relative shadow-xl border border-purple-800">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 bg-white rounded-full p-1"
        >
          <X className="w-4 h-4 text-purple-600" />
        </button>

        {/* Options */}
        <div className="space-y-4">
          <button
            onClick={() => handleNavigate("/host")}
            className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-4 rounded-full text-lg font-semibold hover:opacity-90"
          >
            <Calendar className="w-5 h-5" />
            <span>Continue as a Host</span>
          </button>

          <button
            onClick={() => handleNavigate("/artist")}
            className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-4 rounded-full text-lg font-semibold hover:opacity-90"
          >
            <Music className="w-5 h-5" />
            <span>Continue as a Artist</span>
          </button>
          <button
            onClick={() => handleNavigate("/user")}
            className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-4 rounded-full text-lg font-semibold hover:opacity-90"
          >
            <User className="w-5 h-5" />
            <span>Discover Events</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
