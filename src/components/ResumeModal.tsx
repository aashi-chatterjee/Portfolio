import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin 
} from 'lucide-react';
import { ProfileData } from '../types';

interface ResumeModalProps {
  profile: ProfileData;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ profile, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const generateResumeHTML = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${profile.name} - Resume</title>
  <style>
    @page {
      margin: 15mm 20mm;
      size: A4 portrait;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
      background: #ffffff;
      line-height: 1.5;
      padding: 24px;
      margin: 0 auto;
      max-width: 800px;
    }
    header {
      border-bottom: 2px solid #111827;
      padding-bottom: 14px;
      margin-bottom: 20px;
    }
    h1 {
      margin: 0;
      font-size: 26px;
      font-weight: 800;
      color: #111827;
      letter-spacing: -0.5px;
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      color: #4b5563;
      margin-top: 4px;
      margin-bottom: 8px;
    }
    .contact-info {
      font-size: 12px;
      color: #4b5563;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
    .contact-info a {
      color: #111827;
      text-decoration: none;
    }
    section {
      margin-bottom: 20px;
    }
    h2 {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #1f2937;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 4px;
      margin-top: 0;
      margin-bottom: 10px;
    }
    .exp-item {
      margin-bottom: 14px;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 13px;
    }
    .exp-role {
      font-weight: 700;
      color: #111827;
    }
    .exp-company {
      font-weight: 600;
      color: #374151;
    }
    .exp-period {
      font-size: 11px;
      color: #6b7280;
      font-family: monospace;
    }
    .exp-desc {
      font-size: 12px;
      color: #4b5563;
      margin: 4px 0 6px 0;
    }
    ul {
      margin: 4px 0;
      padding-left: 18px;
      font-size: 12px;
      color: #374151;
    }
    li {
      margin-bottom: 3px;
    }
    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .skill-pill {
      font-size: 11px;
      font-family: monospace;
      background: #f3f4f6;
      border: 1px solid #e5e7eb;
      padding: 3px 8px;
      border-radius: 4px;
      color: #1f2937;
    }
    @media print {
      body {
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>${profile.name}</h1>
    <div class="title">${profile.title}</div>
    <div class="contact-info">
      <span>📍 ${profile.socialLinks.location}</span>
      <span>✉️ ${profile.socialLinks.email}</span>
      <span>🔗 ${profile.socialLinks.linkedin}</span>
      <span>💻 ${profile.socialLinks.github}</span>
    </div>
  </header>

  <section>
    <h2>Professional Summary</h2>
    <p style="font-size: 12px; color: #374151; line-height: 1.6; margin: 0;">${profile.bioSummary}</p>
  </section>

  <section>
    <h2>Professional Experience</h2>
    ${profile.experience
      .map(
        (exp) => `
      <div class="exp-item">
        <div class="exp-header">
          <div><span class="exp-role">${exp.role}</span> &mdash; <span class="exp-company">${exp.company}</span></div>
          <div class="exp-period">${exp.period}</div>
        </div>
        <div class="exp-desc">${exp.description}</div>
        <ul>
          ${exp.achievements.map((ach) => `<li>${ach}</li>`).join('')}
        </ul>
      </div>
    `
      )
      .join('')}
  </section>

  <section>
    <h2>Education</h2>
    ${profile.education
      .map(
        (edu) => `
      <div class="exp-item">
        <div class="exp-header">
          <div><strong>${edu.degree} in ${edu.field}</strong> &mdash; ${edu.institution}</div>
          <div class="exp-period">${edu.period}</div>
        </div>
        ${edu.honors ? `<div style="font-size: 11px; color: #4b5563; margin-top: 2px;">${edu.honors}</div>` : ''}
      </div>
    `
      )
      .join('')}
  </section>

  ${profile.achievements && profile.achievements.length > 0 ? `
  <section>
    <h2>Honors & Key Achievements</h2>
    ${profile.achievements.map((ach) => `
      <div class="exp-item">
        <div class="exp-header">
          <div><strong>${ach.title}</strong>${ach.subtitle ? ` &mdash; <span class="exp-company">${ach.subtitle}</span>` : ''}</div>
          ${ach.year ? `<div class="exp-period">${ach.year}</div>` : ''}
        </div>
        <div class="exp-desc">${ach.description}</div>
      </div>
    `).join('')}
  </section>
  ` : ''}

  <section>
    <h2>Core Skills & Technologies</h2>
    <div class="skills-grid">
      ${profile.skills.map((s) => `<span class="skill-pill">${s.name} (${s.level})</span>`).join('')}
    </div>
  </section>
</body>
</html>`;
  };

  const handlePrint = () => {
    try {
      const htmlContent = generateResumeHTML();
      const printWindow = window.open('', '_blank', 'width=850,height=1000');
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
        }, 300);
      } else {
        window.print();
      }
    } catch {
      window.print();
    }
  };

  const handleDownloadHTML = () => {
    const htmlContent = generateResumeHTML();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.name.replace(/\s+/g, '_')}_Resume.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const handleCopyMarkdown = () => {
    const markdown = `# ${profile.name}
**${profile.title}**
- Location: ${profile.socialLinks.location}
- Email: ${profile.socialLinks.email}
- GitHub: ${profile.socialLinks.github}
- LinkedIn: ${profile.socialLinks.linkedin}

---

## Executive Summary
${profile.bioSummary}

---

## Experience
${profile.experience
  .map(
    (exp) => `### ${exp.role} — ${exp.company}
*${exp.period} | ${exp.location}*
${exp.description}
${exp.achievements.map((a) => `- ${a}`).join('\n')}
`
  )
  .join('\n')}

---

## Education
${profile.education
  .map((edu) => `### ${edu.degree} in ${edu.field}
*${edu.institution} (${edu.period})*
${edu.honors ? `Honors: ${edu.honors}` : ''}
`)
  .join('\n')}

${profile.achievements && profile.achievements.length > 0 ? `---

## Key Achievements & Honors
${profile.achievements.map((a) => `### ${a.title}
${a.subtitle ? `*${a.subtitle}${a.year ? ` | ${a.year}` : ''}*` : (a.year ? `*${a.year}*` : '')}
${a.description}
`).join('\n')}
` : ''}

---

## Core Skills
${profile.skills.map((s) => `- ${s.name} (${s.level})`).join('\n')}
`;

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
              CURRICULUM VITAE
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              {profile.name} • {profile.title.split('&')[0]}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              id="resume-copy-markdown-btn"
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied MD' : 'Copy MD'}</span>
            </button>

            <button
              id="resume-download-html-btn"
              onClick={handleDownloadHTML}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Download standalone HTML resume file"
            >
              {downloadSuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloadSuccess ? 'Downloaded!' : 'Download HTML'}</span>
            </button>

            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="theme-gradient-btn flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer hover:opacity-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Paper */}
        <div id="printable-resume" className="p-6 sm:p-10 overflow-y-auto max-h-[calc(92vh-80px)] bg-slate-950/60 font-sans text-slate-200 space-y-8">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-extrabold text-slate-100 font-heading tracking-tight">
                {profile.name}
              </h1>
              <div className="text-xs font-mono theme-time-badge px-3 py-1 rounded-full border w-fit">
                {profile.availability}
              </div>
            </div>

            <p className="text-base text-amber-400 font-semibold">
              {profile.title}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {profile.socialLinks.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                {profile.socialLinks.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-amber-400" />
                {profile.socialLinks.github}
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-amber-400" />
                {profile.socialLinks.linkedin}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-slate-800/80 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {profile.bioSummary}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-slate-800/80 pb-1">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {profile.experience.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-100">
                      {exp.role} <span className="text-amber-400 font-normal">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-400">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          {profile.achievements && profile.achievements.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-slate-800/80 pb-1">
                Key Achievements & Honors
              </h2>
              <div className="space-y-4">
                {profile.achievements.map((ach) => (
                  <div key={ach.id} className="space-y-1 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-slate-100">
                        {ach.title}
                        {ach.subtitle && <span className="text-amber-400 font-normal ml-1.5">— {ach.subtitle}</span>}
                      </span>
                      {ach.year && <span className="font-mono text-slate-400">{ach.year}</span>}
                    </div>
                    <p className="text-slate-300">{ach.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-slate-800/80 pb-1">
              Education & Background
            </h2>
            {profile.education.map((edu) => (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div>
                  <span className="font-bold text-slate-200">{edu.degree} in {edu.field}</span> —{' '}
                  <span className="text-slate-400">{edu.institution}</span>
                  {edu.honors && <span className="text-amber-400 ml-2">({edu.honors})</span>}
                </div>
                <span className="font-mono text-slate-400">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Key Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-slate-800/80 pb-1">
              Technical Proficiencies & Toolkit
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {profile.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {skill.name} ({skill.level})
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
