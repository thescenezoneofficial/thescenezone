import React, { useState, FormEvent } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const DeleteAccount = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    if (numericValue.length <= 10) {
      setMobileNumber(numericValue);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setIsError(false);

    if (!mobileNumber || !password || !role) {
      setMessage("All fields are required.");
      setIsError(true);
      setIsLoading(false);
      return;
    }

    if (mobileNumber.length !== 10) {
      setMessage("Mobile number must be exactly 10 digits.");
      setIsError(true);
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/delete-account`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobileNumber: `+91${mobileNumber}`,
            role,
            password,
          }),
        }
      );

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();

        if (!response.ok || data.success === false) {
          setMessage(data.message || "An unknown error occurred.");
          setIsError(true);
        } else {
          setMessage(data.message || "Account deleted successfully.");
          setIsError(false);
          setMobileNumber("");
          setPassword("");
          setRole("user");
          setIsConfirmed(false);
        }
      } else {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        setMessage(
          `Server error: ${response.status} ${response.statusText}. Please check the API endpoint.`
        );
        setIsError(true);
      }
    } catch (error) {
      console.error("Frontend deletion error:", error);
      setMessage("Could not connect to the server. Please try again later.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center p-4">
      <main className="w-full max-w-md">
        <div className="bg-gray-900/50 border border-purple-500/20 rounded-lg p-8 shadow-lg">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-white mb-2">
              Delete Your Account
            </h2>
            <p className="text-red-400 mb-6 text-sm">
              Warning: This action is permanent and cannot be undone.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-purple-300 mb-2"
              >
                Mobile Number
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 rounded-sm text-gray-400 bg-slate-900 px-1" >+91</div>
                <Input
                  type="text"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  placeholder="98765 43210"
                  maxLength={10}
                  className="w-full pl-14 py-3 bg-gray-800 border border-purple-500/30 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-purple-300 mb-2"
              >
                Account Type
              </label>
              <Select
                value={role}
                onValueChange={(value) => setRole(value)}
                disabled={isLoading}
              >
                <SelectTrigger className="w-full p-3 h-auto bg-gray-800 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-purple-500/30">
                  <SelectItem value="user" className="focus:bg-purple-700">
                    User
                  </SelectItem>
                  <SelectItem value="artist" className="focus:bg-purple-700">
                    Artist
                  </SelectItem>
                  <SelectItem value="host" className="focus:bg-purple-700">
                    Host
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-purple-300 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password to confirm"
                  className="w-full pl-10 pr-10 py-3 bg-gray-800 border border-purple-500/30 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="confirm"
                checked={isConfirmed}
                onCheckedChange={(checked) => setIsConfirmed(checked as boolean)}
                className="data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 focus:ring-red-500 bg-slate-200"
                disabled={isLoading}
              />
              <Label
                htmlFor="confirm"
                className="text-sm font-medium text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I understand this action is permanent and cannot be undone.
              </Label>
            </div>

            <div>
              <Button
                type="submit"
                variant="destructive"
                className="w-full font-bold py-3 px-4 h-auto rounded-md text-white bg-red-600 hover:bg-red-700 disabled:opacity-50"
                disabled={isLoading || !isConfirmed}
              >
                {isLoading ? "Deleting..." : "Delete My Account Permanently"}
              </Button>
            </div>

            {message && (
              <div
                className={`text-center text-sm ${
                  isError ? "text-red-400" : "text-green-400"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default DeleteAccount;