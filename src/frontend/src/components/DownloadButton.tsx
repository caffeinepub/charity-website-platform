import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

function generateHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Saidi Shema Foundation — Charity Profile</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #fff; line-height: 1.6; }
    a { color: #2d7a4f; }
    .container { max-width: 900px; margin: 0 auto; padding: 0 24px; }

    /* Header */
    header { background: linear-gradient(135deg, #1a4731 0%, #2d7a4f 100%); color: #fff; padding: 48px 24px; text-align: center; }
    header .bismillah { font-size: 22px; margin-bottom: 12px; letter-spacing: 1px; }
    header h1 { font-size: 42px; font-weight: 800; margin-bottom: 8px; }
    header .tagline { font-size: 16px; opacity: 0.85; font-style: italic; margin-bottom: 16px; }
    header .badge { display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 6px 16px; font-size: 13px; }

    /* Stats */
    .stats { display: flex; justify-content: center; gap: 48px; background: #f0faf4; padding: 32px 24px; border-bottom: 2px solid #d4edda; flex-wrap: wrap; }
    .stat { text-align: center; }
    .stat .value { font-size: 32px; font-weight: 800; color: #2d7a4f; }
    .stat .label { font-size: 13px; color: #666; margin-top: 4px; }

    /* Sections */
    section { padding: 48px 24px; }
    section:nth-child(even) { background: #f9fafb; }
    .section-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #2d7a4f; margin-bottom: 8px; }
    h2 { font-size: 28px; font-weight: 800; margin-bottom: 20px; color: #1a1a1a; }
    h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #1a1a1a; }
    p { color: #444; margin-bottom: 12px; font-size: 15px; }
    em { font-style: italic; color: #2d7a4f; }

    /* Cards */
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin-top: 24px; }
    .card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .card h4 { font-size: 16px; font-weight: 700; margin-bottom: 8px; color: #1a1a1a; }
    .card p { font-size: 14px; margin: 0; }
    .card .badge-tag { display: inline-block; background: #e6f4ec; color: #2d7a4f; border-radius: 12px; padding: 3px 10px; font-size: 12px; font-weight: 600; margin-bottom: 10px; }
    .card .metric { background: #f0faf4; border-radius: 8px; padding: 10px 14px; margin: 10px 0; font-size: 13px; font-weight: 600; color: #2d7a4f; }
    .card .quote { font-size: 13px; font-style: italic; color: #666; border-left: 3px solid #2d7a4f; padding-left: 12px; margin-top: 10px; }

    /* Two column */
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 16px; }
    @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } .stats { gap: 24px; } header h1 { font-size: 28px; } }
    .highlight-box { border-left: 4px solid #2d7a4f; padding: 16px 20px; background: #f0faf4; border-radius: 0 8px 8px 0; margin-bottom: 16px; }
    .highlight-box h4 { color: #2d7a4f; font-size: 15px; font-weight: 700; margin-bottom: 6px; }
    .highlight-box p { margin: 0; font-size: 14px; }

    /* Team */
    .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-top: 24px; }
    .team-card { text-align: center; padding: 20px 12px; border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; }
    .avatar { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #1a4731, #2d7a4f); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; margin: 0 auto 12px; }
    .team-card h4 { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
    .team-card .role { font-size: 12px; color: #2d7a4f; font-weight: 600; margin-bottom: 8px; }
    .team-card p { font-size: 12px; color: #666; margin: 0; }

    /* Donation tiers */
    .tiers { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-top: 16px; }
    .tier { border: 2px solid #d4edda; border-radius: 10px; padding: 16px; text-align: center; background: #fff; }
    .tier .amount { font-size: 22px; font-weight: 800; color: #1a4731; margin-bottom: 4px; }
    .tier .impact { font-size: 12px; color: #666; }

    /* Contact */
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 24px; }
    @media (max-width: 600px) { .contact-grid { grid-template-columns: 1fr; } }
    .contact-item { display: flex; gap: 12px; margin-bottom: 16px; }
    .contact-item .icon { width: 36px; height: 36px; background: #e6f4ec; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
    .contact-item .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 2px; }
    .contact-item .value { font-size: 14px; font-weight: 600; color: #1a1a1a; }

    /* Footer */
    footer { background: #1a1a1a; color: #fff; text-align: center; padding: 32px 24px; }
    footer p { color: rgba(255,255,255,0.6); font-size: 13px; margin: 0; }
    footer .hadith { font-style: italic; font-size: 14px; color: rgba(255,255,255,0.8); margin-bottom: 12px; }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header>
    <div class="bismillah">&#x62C;&#x633;&#x645; &#x627;&#x644;&#x644;&#x647; &#x627;&#x644;&#x631;&#x62D;&#x645;&#x646; &#x627;&#x644;&#x631;&#x62D;&#x64A;&#x645;</div>
    <h1>Saidi Shema Foundation</h1>
    <p class="tagline">&#x201C;The best of people are those who are most beneficial to others.&#x201D; &#x2014; Prophet Muhammad (PBUH)</p>
    <span class="badge">Registered Charity No. SSF-2009-UK</span>
  </header>

  <!-- STATS -->
  <div class="stats">
    <div class="stat"><div class="value">15,000+</div><div class="label">Lives Impacted</div></div>
    <div class="stat"><div class="value">4</div><div class="label">Active Projects</div></div>
    <div class="stat"><div class="value">14+</div><div class="label">Years of Service</div></div>
    <div class="stat"><div class="value">30+</div><div class="label">Partner Organisations</div></div>
  </div>

  <!-- ABOUT -->
  <section>
    <div class="container">
      <div class="section-label">Our Story</div>
      <h2>About Saidi Shema Foundation</h2>
      <div class="two-col">
        <div>
          <h3>Founding Story</h3>
          <p>Bismillah. Saidi Shema Foundation was established in 2011 by Sheikh Saidi Shema, inspired by the Quranic command: <em>&#x201C;And whoever saves one life, it is as if he has saved all of mankind&#x201D;</em> (Quran 5:32).</p>
          <p>What began as a local Sadaqah food distribution effort in East Africa has grown into a registered UK charity delivering sustainable programmes across four continents. Alhamdulillah, we have served more than 15,000 individuals and partnered with 30+ local organisations.</p>
        </div>
        <div>
          <div class="highlight-box">
            <h4>Our Vision</h4>
            <p>A world where every person has access to food, clean water, education, and a life of dignity &#x2014; as commanded by Allah (SWT).</p>
          </div>
          <div class="highlight-box" style="border-color:#e8a020; background:#fffbf0;">
            <h4>Our Mission</h4>
            <p>To mobilise Zakat, Sadaqah, and community action to deliver targeted, measurable relief and development programmes that create lasting, self-sustaining change.</p>
          </div>
        </div>
      </div>

      <h3 style="margin-top:32px;">Our Core Values</h3>
      <div class="cards">
        <div class="card"><h4>Amanah (Trust)</h4><p>Every donation is a sacred trust. We operate with full transparency &#x2014; every pound is accounted for and reported publicly.</p></div>
        <div class="card"><h4>Rahma (Compassion)</h4><p>Guided by the Islamic principle of mercy, we treat every person we serve with dignity, kindness, and respect.</p></div>
        <div class="card"><h4>Islah (Reform &amp; Impact)</h4><p>We measure success by real, lasting change &#x2014; building self-sufficient communities, not dependency.</p></div>
      </div>

      <h3 style="margin-top:40px;">Our Leadership</h3>
      <div class="team-grid">
        <div class="team-card"><div class="avatar">SS</div><h4>Sheikh Saidi Shema</h4><div class="role">Founder &amp; Executive Director</div><p>20+ years humanitarian work across East Africa and the Middle East.</p></div>
        <div class="team-card"><div class="avatar">MO</div><h4>Ustadha Maryam Osei</h4><div class="role">Head of Programmes</div><p>Former UNICEF project manager specialising in education and community resilience.</p></div>
        <div class="team-card"><div class="avatar">YA</div><h4>Br. Yusuf Adeyemi</h4><div class="role">Director of Partnerships</div><p>Decade of Islamic finance and corporate social responsibility experience.</p></div>
        <div class="team-card"><div class="avatar">KN</div><h4>Sr. Khadijah Nair</h4><div class="role">Finance &amp; Compliance Lead</div><p>Chartered accountant ensuring Zakat-compliant financial governance.</p></div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section>
    <div class="container">
      <div class="section-label">Our Work</div>
      <h2>Active Projects &amp; Programmes</h2>
      <div class="cards">
        <div class="card"><span class="badge-tag">Food Security</span><h4>Sadaqah Food Aid</h4><p>Daily halal meals to families in crisis during Ramadan and year-round. Partnering with local mosques and food networks.</p><div class="metric">&#x1F37D;&#xFE0F; 1,200 halal meals served weekly</div><div class="quote">&#x201C;Before Saidi Shema Foundation arrived, my children went to bed hungry. Now they eat every day, Alhamdulillah.&#x201D; &#x2014; Fatima, Dar es Salaam</div></div>
        <div class="card"><span class="badge-tag">Environment</span><h4>Reforestation Drive</h4><p>Restoring degraded land through native tree planting, inspired by: <em>&#x201C;If the Day of Judgement comes and one of you has a seedling, plant it.&#x201D;</em></p><div class="metric">&#x1F333; 28,000 trees planted to date</div><div class="quote">&#x201C;The land is coming back to life. My family can farm again, Alhamdulillah.&#x201D; &#x2014; Ibrahim, Kenya</div></div>
        <div class="card"><span class="badge-tag">Education</span><h4>Islamic Education Access</h4><p>Building madrasah classrooms, training teachers, and providing learning materials. Prioritising girls&#x27; education and Quranic literacy.</p><div class="metric">&#x1F4DA; 640 children enrolled this year</div><div class="quote">&#x201C;My daughter is the first in our family to read Quran and attend school.&#x201D; &#x2014; Abdul Rahman, Uganda</div></div>
        <div class="card"><span class="badge-tag">Clean Water</span><h4>Waqf Well Project</h4><p>Installing Sadaqah Jariyah wells &#x2014; a continuing charity. Donors may dedicate wells in memory of loved ones.</p><div class="metric">&#x1F4A7; 3,400 people with clean water access</div><div class="quote">&#x201C;We walked hours for water. Now it is here &#x2014; a blessed gift of Sadaqah Jariyah.&#x201D; &#x2014; Amina, Mali</div></div>
      </div>
    </div>
  </section>

  <!-- GET INVOLVED -->
  <section>
    <div class="container">
      <div class="section-label">Take Action</div>
      <h2>Get Involved</h2>

      <h3>Donation Tiers</h3>
      <p style="margin-bottom:8px;"><strong>One-Time Sadaqah</strong></p>
      <div class="tiers">
        <div class="tier"><div class="amount">&#xA3;10</div><div class="impact">Feeds a family for one week</div></div>
        <div class="tier"><div class="amount">&#xA3;25</div><div class="impact">Plants 10 trees (Sadaqah Jariyah)</div></div>
        <div class="tier"><div class="amount">&#xA3;50</div><div class="impact">School supplies for 5 children</div></div>
        <div class="tier"><div class="amount">&#xA3;100</div><div class="impact">Clean water access for a month</div></div>
      </div>

      <p style="margin:20px 0 8px;"><strong>Zakat / Waqf</strong></p>
      <div class="tiers">
        <div class="tier"><div class="amount">&#xA3;500</div><div class="impact">Sponsor a classroom for one term</div></div>
        <div class="tier"><div class="amount">&#xA3;1,000</div><div class="impact">Fund a Waqf well installation</div></div>
        <div class="tier"><div class="amount">&#xA3;2,500</div><div class="impact">Sponsor a reforestation plot</div></div>
        <div class="tier"><div class="amount">&#xA3;5,000+</div><div class="impact">Bespoke Waqf partnership</div></div>
      </div>

      <h3 style="margin-top:40px;">Volunteer Opportunities</h3>
      <div class="cards">
        <div class="card"><h4>Community Outreach Coordinator</h4><p>Organise local fundraising, Ramadan campaigns, and Eid drives. Flexible hours, remote-friendly.</p></div>
        <div class="card"><h4>Field Programme Volunteer</h4><p>Join teams on the ground for 2&#x2013;12 week placements supporting food aid, education, or water projects.</p></div>
        <div class="card"><h4>Skills-Based Volunteer</h4><p>Offer professional expertise &#x2014; legal, medical, communications, IT &#x2014; to support operations remotely or on-site.</p></div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section>
    <div class="container">
      <div class="section-label">Reach Out</div>
      <h2>Contact Us</h2>
      <div class="contact-grid">
        <div>
          <div class="contact-item"><div class="icon">&#x2709;&#xFE0F;</div><div><div class="label">Email</div><div class="value">info@saidishemafoundation.org</div></div></div>
          <div class="contact-item"><div class="icon">&#x1F4DE;</div><div><div class="label">Phone</div><div class="value">+256771173835</div></div></div>
          <div class="contact-item"><div class="icon">&#x1F4CD;</div><div><div class="label">Address</div><div class="value">12 Mercy Lane, London, EC1A 1BB, UK</div></div></div>
        </div>
        <div>
          <div class="highlight-box">
            <h4>Legal &amp; Compliance</h4>
            <p>Charity Reg. No. SSF-2009-UK<br/>Regulated by the Charity Commission for England and Wales.<br/>Zakat-eligible receipts provided upon request.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p class="hadith">&#x201C;The believer&#x27;s shade on the Day of Resurrection will be his charity.&#x201D; &#x2014; Hadith (Tirmidhi)</p>
    <p>&copy; ${new Date().getFullYear()} Saidi Shema Foundation. All rights reserved. Charity No. SSF-2009-UK.</p>
  </footer>

</body>
</html>`;
}

export default function DownloadButton() {
  const handleDownload = () => {
    const html = generateHTML();
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "saidi-shema-foundation-profile.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleDownload}
        data-ocid="download.html.primary_button"
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full shadow-hero px-6 py-3 flex items-center gap-2 transition-all duration-200 hover:scale-105"
      >
        <Download className="w-5 h-5" />
        Download Profile
      </Button>
    </div>
  );
}
