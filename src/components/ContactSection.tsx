import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Calendar, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquare, 
  ExternalLink,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { ProfileData } from '../types';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-time Opportunity',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please enter a message of at least 10 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate responsive sending flow
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-heading">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Interested in discussing a project, exploring full-time engineering roles, or consulting? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Profile Links & Connection Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Button */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Direct Email</span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Fast Response (within 24h)
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                  {profile.socialLinks.email}
                </span>
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <p className="text-xs text-emerald-400 font-medium animate-in fade-in">
                  Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Location & Timezone Card */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Location & Timezone</div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm">{profile.socialLinks.location}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Pacific Time (UTC-7) • Open to Global Remote</p>
                </div>
              </div>
            </div>

            {/* Professional Profiles Grid */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Professional Profiles</div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="contact-github-link"
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/50 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400" />
                </a>

                <a
                  id="contact-linkedin-link"
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/50 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                </a>

                {profile.socialLinks.twitter && (
                  <a
                    id="contact-twitter-link"
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/50 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Twitter className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                      <span className="text-xs font-semibold text-slate-300 group-hover:text-white">X / Twitter</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400" />
                  </a>
                )}

                {profile.socialLinks.calendarUrl && (
                  <a
                    id="contact-calendar-link"
                    href={profile.socialLinks.calendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/50 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
                      <span className="text-xs font-semibold text-slate-300 group-hover:text-white">Schedule Call</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-100 font-heading flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-indigo-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill out the form below or email me directly at <span className="text-indigo-300">{profile.socialLinks.email}</span>.
                </p>
              </div>

              {formSubmitted ? (
                <div id="contact-success-message" className="py-12 px-6 text-center bg-slate-950/80 rounded-xl border border-emerald-500/30 space-y-4 animate-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 font-heading">Thank You for Reaching Out!</h4>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                    Your message has been captured. I will review the details and get back to you at <span className="text-indigo-300 font-semibold">{formData.email}</span> promptly.
                  </p>
                  <div className="pt-2">
                    <button
                      id="contact-send-another-btn"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', inquiryType: 'Full-time Opportunity', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        name="name"
                        placeholder="e.g. Jane Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors ${
                          formErrors.name ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                        }`}
                      />
                      {formErrors.name && <p className="text-[11px] text-rose-400">{formErrors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-input-email"
                        type="email"
                        name="email"
                        placeholder="e.g. jane@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors ${
                          formErrors.email ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                        }`}
                      />
                      {formErrors.email && <p className="text-[11px] text-rose-400">{formErrors.email}</p>}
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Topic / Inquiry Type</label>
                    <select
                      id="contact-select-inquiry"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none transition-colors"
                    >
                      <option value="Full-time Opportunity">Full-time Design / Engineering Role</option>
                      <option value="Contract Consulting">Product & UX Design Consulting</option>
                      <option value="Open Source Collaboration">Project / AI Product Collaboration</option>
                      <option value="Speaking / Mentorship">Speaking / Mentorship</option>
                      <option value="General Inquiry">General Hello / Other</option>
                    </select>
                  </div>

                  {/* Message Body */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Message <span className="text-rose-400">*</span>
                      </label>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="contact-textarea-message"
                      name="message"
                      rows={5}
                      placeholder="Hi Aashi, I came across your portfolio and would love to discuss..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors resize-y ${
                        formErrors.message ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                    {formErrors.message && <p className="text-[11px] text-rose-400">{formErrors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="theme-gradient-btn w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold shadow-md transition-all cursor-pointer disabled:opacity-50 hover:opacity-95"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
