"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, BookOpen, Sparkles } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  program: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    program: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      program: "General Inquiry",
      message: "",
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-8 md:p-10 shadow-sm text-center flex flex-col items-center justify-center min-h-[420px]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-5 animate-bounce">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl font-bold text-primary">Inquiry Received!</h3>
        <p className="mt-3 max-w-md text-sm text-gray-600 leading-relaxed">
          Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. Our admissions team has received your message and will reach out to you within 24–48 business hours.
        </p>

        <div className="mt-6 p-4 rounded-xl bg-surface-alt border border-line max-w-md w-full text-left text-xs space-y-1.5 text-gray-700">
          <p><span className="font-semibold text-foreground">Selected Interest:</span> {formData.program}</p>
          <p><span className="font-semibold text-foreground">Email:</span> {formData.email}</p>
          {formData.phone && <p><span className="font-semibold text-foreground">Phone:</span> {formData.phone}</p>}
        </div>

        <button
          onClick={handleReset}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-hover active:scale-[0.98]"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 sm:p-8 md:p-10 shadow-sm">
      {/* Top Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-alt px-3.5 py-1 text-xs font-semibold text-primary mb-3">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Quick Response Promised</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
          Send Us a Message
        </h2>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          Fill out the form below to inquire about admissions, courses, or schedule a campus visit.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <User size={18} />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full rounded-xl border border-line bg-surface-alt/40 pl-10 pr-4 py-3 text-sm text-foreground placeholder-gray-400 transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Contact Field */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Phone size={18} />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                className="w-full rounded-xl border border-line bg-surface-alt/40 pl-10 pr-4 py-3 text-sm text-foreground placeholder-gray-400 transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Mail size={18} />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full rounded-xl border border-line bg-surface-alt/40 pl-10 pr-4 py-3 text-sm text-foreground placeholder-gray-400 transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Program Select Field */}
          <div>
            <label htmlFor="program" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Program of Interest
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <BookOpen size={18} />
              </div>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full rounded-xl border border-line bg-surface-alt/40 pl-10 pr-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Artificial Intelligence & ML">Artificial Intelligence & ML</option>
                <option value="Computer Science & Development">Computer Science & Development</option>
                <option value="Secondary Education (Class IX-X)">Secondary Education (Class IX-X)</option>
                <option value="Higher Secondary (FSc Pre-Eng/ICS)">Higher Secondary (FSc Pre-Eng/ICS)</option>
                <option value="Campus Tour & Counseling">Campus Tour & Counseling</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Your Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute top-3.5 left-0 flex items-center pl-3.5 text-gray-400">
              <MessageSquare size={18} />
            </div>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can assist you..."
              className="w-full rounded-xl border border-line bg-surface-alt/40 pl-10 pr-4 py-3 text-sm text-foreground placeholder-gray-400 transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send size={16} />
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-500 mt-3">
          We respect your privacy. Your information will never be shared.
        </p>
      </form>
    </div>
  );
}
